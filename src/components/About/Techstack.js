import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiReact, DiJavascript1, DiCss3, DiPhp, DiMongodb, DiFirebase } from "react-icons/di";
import { SiTailwindcss, SiPrisma, SiNextdotjs, SiPusher, SiLaravel, SiPostgresql, SiUnity, SiCsharp, SiHtml5, SiKalilinux } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Tailwind CSS">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Prisma">
        <SiPrisma />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Pusher">
        <SiPusher />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Next.js">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PHP">
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Laravel">
        <SiLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="SQL">
        <FaDatabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Firebase">
        <DiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Unity">
        <SiUnity />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="C#">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="HTML5">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Kali Linux">
        <SiKalilinux />
      </Col>
    </Row>
  );
}

export default Techstack;