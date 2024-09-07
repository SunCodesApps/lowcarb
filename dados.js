const dados = [
  {
    titulo: "Energia Solar Fotovoltaica",
    descricao: "Conversão direta da luz solar em eletricidade através de painéis solares. Uma das fontes de energia renovável mais utilizadas e com custos em constante queda.",
    link: "https://www.absolar.org.br/", // Associação Brasileira de Energia Solar Fotovoltaica
    tags: "energia renovável, solar, fotovoltaica, sustentabilidade, eletricidade"
  },
  {
    titulo: "Energia Eólica",
    descricao: "Geração de energia elétrica através da força do vento. Uma fonte limpa e renovável, ideal para regiões com ventos constantes.",
    link: "https://www.abeeolica.org.br/", // Associação Brasileira de Energia Eólica
    tags: "energia renovável, eólica, vento, eletricidade, sustentabilidade"
  },
  {
    titulo: "Energia Geotérmica",
    descricao: "Aproveitamento do calor interno da Terra para gerar eletricidade ou aquecimento. Uma fonte de energia renovável e baseada em um recurso praticamente inesgotável.",
    link: "https://www.abgeotermica.org.br/", // Associação Brasileira de Energia Geotérmica
    tags: "energia renovável, geotérmica, calor, eletricidade, aquecimento, inesgotável"
  },
  {
    titulo: "Energia das Marés",
    descricao: "Conversão da energia das marés em eletricidade. Uma fonte de energia renovável com grande potencial em regiões com grandes amplitudes de maré.",
    link: "https://www.iea.org/topics/ocean-energy", // International Energy Agency
    tags: "energia renovável, marés, eletricidade, sustentabilidade, oceano"
  },
  {
    titulo: "Eficiência Energética em Edifícios",
    descricao: "Conjunto de medidas que visam reduzir o consumo de energia em edifícios, como isolamento térmico, sistemas de iluminação eficientes e uso de materiais sustentáveis.",
    link: "https://www.ige.org.br/", // Instituto de Eficiência Energética
    tags: "eficiência energética, edifícios, sustentabilidade, isolamento térmico, iluminação eficiente"
  },
  {
    titulo: "Veículos Elétricos",
    descricao: "Veículos movidos por energia elétrica, utilizando baterias ou células a combustível. Reduzem significativamente as emissões de gases poluentes.",
    link: "https://www.abave.com.br/", // Associação Brasileira de Veículos Elétricos
    tags: "veículos elétricos, energia elétrica, baterias, células a combustível, emissões, poluição"
  },
  {
    titulo: "Biocombustíveis de Segunda Geração",
    descricao: "Produção de biocombustíveis a partir de biomassa não alimentícia, como resíduos agrícolas e florestais, reduzindo a pressão sobre a produção de alimentos.",
    link: "https://www.anp.gov.br/", // Agência Nacional do Petróleo, Gás Natural e Biocombustíveis
    tags: "biocombustíveis, biomassa, resíduos agrícolas, florestais, sustentabilidade, alimentos"
  },
  {
    titulo: "Captura Direta de Ar (CDA)",
    descricao: "Remoção do dióxido de carbono diretamente da atmosfera. Uma tecnologia promissora para combater as mudanças climáticas.",
    link: "https://www.embrapa.br/busca-de-noticias/-/asset_publisher/C2820420-7CDF-4EFB-8B57-E2F6975E337A/content/captura-de-carbono-e-tecnologias-para-armazenamento-as-tendencias-em-engenharia-e-sustentabilidade",
    tags: "captura de carbono, mudanças climáticas, sustentabilidade, tecnologia, dióxido de carbono"
  },
  {
    titulo: "Armazenamento de Energia por Baterias",
    descricao: "Tecnologia que permite armazenar energia gerada por fontes renováveis, como solar e eólica, em baterias para uso posterior, aumentando a flexibilidade e estabilidade da rede.",
    link: "https://www.batteryenergy.org.br/", // Associação de Armazenamento de Energia
    tags: "armazenamento de energia, baterias, fontes renováveis, rede elétrica, flexibilidade"
  },
  {
    titulo: "Hidrogênio Verde",
    descricao: "Produção de hidrogênio a partir de fontes renováveis de energia, como a eletrólise da água usando energia solar ou eólica, uma solução promissora para descarbonizar setores industriais.",
    link: "https://www.hydrogengreen.org.br/", // Associação Brasileira de Hidrogênio Verde
    tags: "hidrogênio verde, eletrólise, fontes renováveis, descarbonização, indústria"
  },
  {
    titulo: "Turbinas Oceânicas",
    descricao: "Aproveitamento das correntes oceânicas para geração de energia elétrica, utilizando turbinas submersas em áreas com correntes fortes e constantes.",
    link: "https://www.oceanenergy.org.br/", // Associação Brasileira de Energia Oceânica
    tags: "energia renovável, correntes oceânicas, turbinas, eletricidade, sustentabilidade"
  },
  {
    titulo: "Energia de Biomassa",
    descricao: "Produção de eletricidade a partir da queima de biomassa, como madeira, resíduos agrícolas e outros materiais orgânicos, uma alternativa renovável e sustentável.",
    link: "https://www.biomassa.org.br/", // Associação Brasileira de Biomassa
    tags: "energia renovável, biomassa, resíduos agrícolas, eletricidade, sustentabilidade"
  },
  {
    titulo: "Geração Distribuída",
    descricao: "Sistema em que a geração de energia ocorre perto do local de consumo, como em telhados solares, permitindo maior eficiência e redução de perdas na transmissão.",
    link: "https://www.abgd.org.br/", // Associação Brasileira de Geração Distribuída
    tags: "geração distribuída, energia solar, eficiência, perdas, transmissão"
  },
  {
    titulo: "Micro Redes",
    descricao: "Pequenas redes elétricas locais que podem operar conectadas à rede principal ou de forma independente, garantindo resiliência e flexibilidade no fornecimento de energia.",
    link: "https://www.microgrids.org.br/", // Associação Brasileira de Micro Redes
    tags: "micro redes, resiliência, flexibilidade, eletricidade, independência"
  },
  {
    titulo: "Energia de Ondas",
    descricao: "Conversão da energia do movimento das ondas do mar em eletricidade, uma fonte renovável que possui grande potencial em regiões costeiras.",
    link: "https://www.waveenergy.org.br/", // Associação Brasileira de Energia de Ondas
    tags: "energia renovável, ondas, eletricidade, sustentabilidade, regiões costeiras"
  },
  {
    titulo: "Energia Solar Termoelétrica",
    descricao: "Utiliza espelhos para concentrar a luz solar em um receptor, gerando calor que é utilizado para produzir eletricidade. É uma solução eficiente em regiões ensolaradas.",
    link: "https://www.solarthermalworld.org/", // Rede Internacional de Energia Solar Termoelétrica
    tags: "energia renovável, solar, termoelétrica, eletricidade, calor"
},
{
    titulo: "Biorremediação",
    descricao: "Uso de microrganismos para remover poluentes do solo e da água, promovendo a recuperação ambiental de áreas degradadas.",
    link: "https://www.bioremediation.org.br/", // Associação Brasileira de Biorremediação
    tags: "biorremediação, microrganismos, poluentes, solo, água, sustentabilidade"
},
{
    titulo: "Painéis Solares Orgânicos",
    descricao: "Painéis solares fabricados com materiais orgânicos que são leves, flexíveis e de baixo custo, uma tecnologia promissora para o futuro da energia solar.",
    link: "https://www.organicphotovoltaics.org/", // Associação de Fotovoltaicos Orgânicos
    tags: "energia renovável, solar, painéis orgânicos, eletricidade, sustentabilidade"
},
{
    titulo: "Baterias de Estado Sólido",
    descricao: "Nova geração de baterias com eletrólito sólido, proporcionando maior densidade de energia, segurança e longevidade, ideal para veículos elétricos e eletrônicos.",
    link: "https://www.solidstatebatteries.org.br/", // Associação Brasileira de Baterias de Estado Sólido
    tags: "armazenamento de energia, baterias, eletrólito sólido, veículos elétricos, segurança"
},
{
    titulo: "Energia Térmica dos Oceanos (ETO)",
    descricao: "Aproveitamento da diferença de temperatura entre a superfície e as profundezas dos oceanos para gerar eletricidade, uma fonte limpa e contínua.",
    link: "https://www.oceanthermalenergy.org/", // Associação Internacional de Energia Térmica Oceânica
    tags: "energia renovável, oceanos, energia térmica, eletricidade, sustentabilidade"
}
];
