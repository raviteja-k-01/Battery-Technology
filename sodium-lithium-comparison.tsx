import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const ComparisonCharts = () => {
  // Cost comparison data (relative cost)
  const costData = [
    { name: 'Lithium-Ionen', cost: 100, fill: '#8884d8' },
    { name: 'Natrium-Ionen', cost: 60, fill: '#82ca9d' },
  ];

  // Resource availability data
  const resourceData = [
    { name: 'Lithium (ppm in Erdkruste)', value: 20 },
    { name: 'Natrium (ppm in Erdkruste)', value: 23000 },
  ];

  // Performance radar chart data
  const performanceData = [
    { subject: 'Energiedichte', 'Lithium-Ionen': 180, 'Natrium-Ionen': 175 },
    { subject: 'Kosten', 'Lithium-Ionen': 40, 'Natrium-Ionen': 80 },
    { subject: 'Ressourcenverfügbarkeit', 'Lithium-Ionen': 30, 'Natrium-Ionen': 90 },
    { subject: 'Sicherheit', 'Lithium-Ionen': 60, 'Natrium-Ionen': 80 },
    { subject: 'Kälteresistenz', 'Lithium-Ionen': 50, 'Natrium-Ionen': 85 },
  ];

  // Temperature resistance data
  const tempData = [
    { name: 'Min. Betriebstemperatur', 'Lithium-Ionen': -20, 'Natrium-Ionen': -40 },
    { name: 'Max. Betriebstemperatur', 'Lithium-Ionen': 60, 'Natrium-Ionen': 80 },
  ];

  // Environmental impact data
  const environmentalData = [
    { name: 'Wasserverbrauch bei Gewinnung', 'Lithium-Ionen': 90, 'Natrium-Ionen': 15 },
    { name: 'CO2-Fußabdruck (Produktion)', 'Lithium-Ionen': 80, 'Natrium-Ionen': 40 },
    { name: 'Recyclingpotential', 'Lithium-Ionen': 60, 'Natrium-Ionen': 75 },
  ];

  // COLORS for pie chart
  const COLORS = ['#8884d8', '#82ca9d'];

  return (
    <div className="flex flex-col gap-10 p-4 bg-white">
      <h1 className="text-2xl font-bold text-center mb-6">Natrium-Ionen vs. Lithium-Ionen Batterien: Ein wissenschaftlicher Vergleich</h1>
      
      {/* Intro text */}
      <div className="bg-blue-50 p-4 rounded-lg shadow">
        <p className="text-lg">
          Der chinesische Batteriehersteller CATL hat die Massenproduktion von Natrium-Ionen-Akkus ab Dezember 2025 angekündigt. Diese Technologie könnte eine kostengünstigere Alternative zu herkömmlichen Lithium-Ionen-Batterien darstellen. Schauen wir uns die Vor- und Nachteile im Detail an.
        </p>
      </div>

      {/* Radar Chart - Overall Performance */}
      <div className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2 text-center">Leistungsvergleich: Natrium vs. Lithium</h2>
        <p className="mb-4 text-center text-gray-600">Ein höherer Wert bedeutet bessere Performance in der jeweiligen Kategorie</p>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius={150} data={performanceData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar name="Lithium-Ionen" dataKey="Lithium-Ionen" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Radar name="Natrium-Ionen" dataKey="Natrium-Ionen" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              <Legend />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Wissenschaftlicher Kontext:</h3>
          <p>Natrium-Ionen-Batterien erreichen inzwischen mit 175 Wh/kg eine ähnliche Energiedichte wie LFP-Batterien auf Lithium-Basis. Sie bieten jedoch Vorteile bei Temperaturtoleranz, Kosten und Ressourcenverfügbarkeit. Die geringere Reaktivität von Natrium erhöht zudem die Sicherheit der Akkus.</p>
        </div>
      </div>

      {/* Resource Availability Chart */}
      <div className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2 text-center">Ressourcenverfügbarkeit in der Erdkruste</h2>
        <p className="mb-4 text-center text-gray-600">Natrium ist ca. 1.000-mal häufiger als Lithium</p>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={resourceData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip formatter={(value) => `${value} ppm`} />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" name="Häufigkeit (ppm)" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Wissenschaftlicher Kontext:</h3>
          <p>Natrium ist ein Hauptbestandteil von Kochsalz (NaCl) und kommt in der Erdkruste mit etwa 23.000 ppm vor, während Lithium mit nur ca. 20 ppm extrem selten ist. Diese Häufigkeit wirkt sich direkt auf die Nachhaltigkeit und die Kosten der Batterieproduktion aus.</p>
        </div>
      </div>

      {/* Cost Comparison Chart */}
      <div className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2 text-center">Relative Kostenvergleich</h2>
        <p className="mb-4 text-center text-gray-600">Natrium-Ionen-Batterien können bis zu 40% günstiger sein</p>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={costData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Relative Kosten (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend />
              <Bar dataKey="cost" name="Relative Kosten" fill={(data) => data.fill} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Wissenschaftlicher Kontext:</h3>
          <p>Die günstigeren Rohstoffkosten und einfachere Gewinnung von Natrium im Vergleich zu Lithium führen zu erheblichen Kosteneinsparungen. Nach Expertenschätzungen könnten diese Einsparungen bei Massenproduktion bis zu 40% betragen, was Elektrofahrzeuge deutlich erschwinglicher machen würde.</p>
        </div>
      </div>

      {/* Temperature Resistance Chart */}
      <div className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2 text-center">Temperaturtoleranz</h2>
        <p className="mb-4 text-center text-gray-600">Natrium-Ionen-Akkus funktionieren auch bei extremer Kälte bis -40°C</p>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={tempData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Temperatur (°C)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="Lithium-Ionen" fill="#8884d8" />
              <Bar dataKey="Natrium-Ionen" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Wissenschaftlicher Kontext:</h3>
          <p>Laut CATL können die neuen Natrium-Ionen-Akkus bis zu Temperaturen von -40°C funktionieren. Die bessere Kältetoleranz ergibt sich aus der unterschiedlichen Ionenmobilität und Elektrodenchemie, wodurch Natrium-Ionen auch bei niedrigen Temperaturen besser zwischen den Elektroden wandern können.</p>
        </div>
      </div>

      {/* Environmental Impact Chart */}
      <div className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2 text-center">Umweltauswirkungen</h2>
        <p className="mb-4 text-center text-gray-600">Niedrigere Werte bedeuten geringere Umweltbelastung</p>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={environmentalData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Relative Belastung (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="Lithium-Ionen" fill="#8884d8" />
              <Bar dataKey="Natrium-Ionen" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Wissenschaftlicher Kontext:</h3>
          <p>Der Lithiumabbau verbraucht große Mengen Wasser (bis zu 2 Millionen Liter pro Tonne Lithium), besonders in wasserarmen Regionen Südamerikas. Natrium kann aus Meerwasser oder Salzvorkommen gewonnen werden und verursacht deutlich weniger Umweltschäden. Zudem ist der Energieaufwand bei der Gewinnung und Verarbeitung von Natrium geringer.</p>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Fazit: Die Zukunft der Batterie-Technologie</h2>
        <p>Natrium-Ionen-Akkus bieten eine vielversprechende Alternative zu Lithium-Ionen-Batterien, besonders für kostengünstigere Elektrofahrzeuge. Mit CATLs Ankündigung der Massenproduktion ab Dezember 2025 könnte diese Technologie bald breite Anwendung finden.</p>
        <p className="mt-2">Während die Energiedichte mit 175 Wh/kg leicht unter den besten Lithium-Akkus liegt, überwiegen die Vorteile bei Kosten, Ressourcenverfügbarkeit, Sicherheit und Temperaturtoleranz. Laut CATL-Gründer Robin Zeng könnten Natrium-Ionen-Batterien künftig bis zur Hälfte der LFP-Batterien ersetzen.</p>
      </div>
    </div>
  );
};

export default ComparisonCharts;