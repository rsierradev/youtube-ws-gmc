import React from "react";

export default function Comments() {
  const comments = [
    {
      id: 1,
      user: "rodrigo",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas facilis sunt suscipit minus ullam cupiditate minima, sapiente natus officiis aliquid illum iusto dolore voluptatibus modi, quia dolorum eligendi autem.",
    },
    {
      id: 2,
      user: "abdulla123",
      comment:
        "Obcaecati voluptas facilis sunt suscipit minus ullam cupiditate minima, sapiente natus officiis aliquid illum iusto dolore voluptatibus modi, quia dolorum eligendi autem.",
    },
    {
      id: 3,
      user: "ahmed_c#",
      comment:
        "Illum iusto dolore voluptatibus modi, quia dolorum eligendi autem.",
    },
    {
      id: 4,
      user: "jasmis_2030",
      comment:
        "Velit perspiciatis autem molestiae, officiis quod, fugiat recusandae maiores! Iusto, porro voluptas?",
    },
  ];

  return (
    <div className="col-md-8">
      {comments.map((element) => (
        <div>
          <h6>{element.user}</h6>
          <p>{element.comment}</p>
        </div>
      ))}
    </div>
  );
}
