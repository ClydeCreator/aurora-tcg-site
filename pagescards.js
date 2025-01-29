const cardsData = [
    { id: 1, name: "Nova Guardian", description: "Un puissant guerrier de l'Alliance." },
    { id: 2, name: "Shadow Reaper", description: "Un assassin furtif de la Rébellion." }
  ];
  
  export default function CardsPage() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Toutes les cartes</h2>
        <ul>
          {cardsData.map((card) => (
            <li key={card.id}>
              <h3>{card.name}</h3>
              <p>{card.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  