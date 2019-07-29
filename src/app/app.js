import React from "react";

import Header from "./components/Header";
import Card from "./components/Card";
import CardDetail from "./components/Card/detail";
import Tag from "./components/Tag";
import Blurb from "./components/Card/blurb";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Card classes="sm" id="developer">
          <CardDetail title="Developer">
            <section id="tags">
              <Tag name="#React" />
              <Tag name="#Express" />
              <Tag name="#MongoDB" />
            </section>
            <Blurb>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh
              nulla, fermentum et nunc quis, molestie imperdiet leo. Etiam nec
              viverra nunc. Fusce hendrerit urna sed nisi pharetra, et facilisis
              est elementum. Quisque consectetur efficitur nisi, nec vehicula
              felis vestibulum et. Mauris elementum eleifend felis et pharetra.
              Mauris tempor laoreet quam, id facilisis eros lacinia eu. Nam
              sodales velit sagittis sodales tincidunt. Vivamus consequat
              posuere viverra.
            </Blurb>
          </CardDetail>
        </Card>
        <Card classes="md" id="community">
          <CardDetail title="Community Member">
            <section id="tags">
              <Tag name="#JavaScript" />
              <Tag name="#BendJS" />
            </section>
            <Blurb>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh
              nulla, fermentum et nunc quis, molestie imperdiet leo. Etiam nec
              viverra nunc. Fusce hendrerit urna sed nisi pharetra, et facilisis
              est elementum. Quisque consectetur efficitur nisi, nec vehicula
              felis vestibulum et. Mauris elementum eleifend felis et pharetra.
              Mauris tempor laoreet quam, id facilisis eros lacinia eu. Nam
              sodales velit sagittis sodales tincidunt. Vivamus consequat
              posuere viverra.
            </Blurb>
          </CardDetail>
        </Card>
        <Card classes="lg" id="family">
          <CardDetail title="Family Man">
            <section id="tags">
              <Tag name="#Husband" />
              <Tag name="#Father" />
              <Tag name="#DogOwner" />
            </section>
            <Blurb>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh
              nulla, fermentum et nunc quis, molestie imperdiet leo. Etiam nec
              viverra nunc. Fusce hendrerit urna sed nisi pharetra, et facilisis
              est elementum. Quisque consectetur efficitur nisi, nec vehicula
              felis vestibulum et. Mauris elementum eleifend felis et pharetra.
              Mauris tempor laoreet quam, id facilisis eros lacinia eu. Nam
              sodales velit sagittis sodales tincidunt. Vivamus consequat
              posuere viverra.
            </Blurb>
          </CardDetail>
        </Card>
      </main>
    </>
  );
}
