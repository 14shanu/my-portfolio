import React from "react";

export default function HtmlNotes() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum repellat
        aliquam aut asperiores illum maiores,<strong>This is Strong</strong>.
        Perspiciatis obcaecati similique facere, tempore aliquid repudiandae
        assumenda, <em>This is emphasized</em> fugit accusamus.
      </p>

      <h1>HTML NOTES</h1>
      <a href="./CssNotes.html">Css Notes</a>
      <p>
        <strong>This is Strong, use strong tag </strong>
        <br />
        <br />
        <em>This is emphasized, use em tag </em>
        <br />
        <br />
        <a href="https://www.google.com/"> Link </a> that opens in same tab
        <br />
        <br />
        To open{" "}
        <a href="https://www.google.com/" target="_blank">
          Link{" "}
        </a>{" "}
        in new tab add target="_blank"
        <br />
        <br />
        use br for line break
        <img
          src="singhal.jpg"
          alt="Image is not present so this text is shown"
        />
      </p>
      <ul>
        <li>Unordered List</li>
        <li>Unordered List</li>
        <li>Unordered List</li>
      </ul>
      <ol>
        <li>Ordered List</li>
        <li>Ordered List</li>
        <li>Ordered List</li>
      </ol>
      <ul>
        <li>Div is an block element</li>
        <li>
          Semantic Elements helps in SEO refrence{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Glossary/Semantics">
            Click Here
          </a>{" "}
        </li>
      </ul>
    </div>
  );
}
