const cards = ["02", "03", "04", "05", "06", "07"];

export function HeroCards() {
  return (
    <div className="hero-cards" role="img" aria-label="Six layered Prompts for Humans cards resting at different angles on a flat surface">
      <div className="hero-card-surface" aria-hidden="true">
        {cards.map((card) => (
          <img
            key={card}
            className={`hero-card hero-card-${card}`}
            src={`/assets/Index_cards-${card}.svg`}
            alt=""
            width={170}
            height={170}
            fetchPriority="high"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}