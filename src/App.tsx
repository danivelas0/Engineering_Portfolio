import React, { useState, useEffect } from 'react';
import { PenTool, Wrench, Cpu, ArrowRight, Github, Linkedin, Mail, FileText, Settings, Compass, Ruler, Hexagon, Globe, Cog, Cylinder, Filter, ChevronLeft, ChevronRight, DraftingCompass, Mouse, Scale, Share2, Activity, ShieldCheck, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { BrandPitch } from './components/BrandPitch';
import { ProjectsPage } from './components/ProjectsPage';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
const refineryImg = "/refinery.jpg";

// Portfolio images updated to /images/
const proj4_img1 = "/images/project_1/site_overview_1.jpg";
const proj4_img2 = "/images/project_1/site_overview_2.jpg";
const proj4_img3 = "/images/project_1/site_overview_3.jpg";
const proj4_img4 = "/images/project_1/site_overview_4.jpg";
const proj4_img5 = "/images/project_1/3d_model_1.png";
const proj4_img6 = "/images/project_1/3d_model_2.png";
const proj4_img7 = "/images/project_1/sp_1.png";
const proj4_img8 = "/images/project_1/sp_2.png";
const proj4_img9 = "/images/project_1/sp_3.png";
const proj4_img10 = "/images/project_1/sp_4.png";
const proj4_img11 = "/images/project_1/sp_5.png";
const proj4_img12 = "/images/project_1/sp_6.png";
const proj4_img13 = "/images/project_1/modeling_of_heavy_fuel_oil_piping_in_autopipe.png";
const proj4_img14 = "/images/project_1/summary_of_maximum_stress_results_in_the_piping_system.png";
const proj4_img15 = "/images/project_1/maximum_stress.png";
const proj4_img16 = "/images/project_1/summary_of_maximum_displacements.png";
const proj4_img17 = "/images/project_1/maximum_load_for_hydrostatic_test.png";

const proj5_img1 = "/images/project_2/failure_history.png";
const proj5_img2 = "/images/project_2/dampening_support.png";
const proj5_img3 = "/images/project_2/sp_1.png";
const proj5_img4 = "/images/project_2/sp_2.png";
const proj5_img5 = "/images/project_2/sp_3.png";
const proj5_img6 = "/images/project_2/dwg_4.png";
const proj5_img7 = "/images/project_2/dwg_5.png";
const proj5_img8 = "/images/project_2/3d_model_1.png";
const proj5_img9 = "/images/project_2/new_piping_supports_and_loops_in_green.png";
const proj5_img10 = "/images/project_2/new_piping_supports_in_green.png";
const proj5_img11 = "/images/project_2/dwg_1.png";
const proj5_img12 = "/images/project_2/dwg_2.png";
const proj5_img13 = "/images/project_2/dwg_3.png";
const proj5_img14 = "/images/project_2/dwg_6.png";
const proj5_img15 = "/images/project_2/piping_3d_model_8_p_0301_uxe21_h2_h_and_8_p_0309_uxe21_h2_h.png";
const proj5_img16 = "/images/project_2/pipe_model_12_p_0302_ldx30_h2_h.png";
const proj5_img17 = "/images/project_2/maximum_stress_applied_to_lines_8_p_0301_uxe21_h2_h_and_8_p_0309_uxe21_h2_h.png";
const proj5_img18 = "/images/project_2/maximum_stress_on_line_12_p_0302_ldx30_h2_h.png";
const proj5_img19 = "/images/project_2/maximum_displacement_on_lines_8_p_0301_uxe21_h2_h_and_8_p_0309_uxe21_h2_h.png";
const proj5_img20 = "/images/project_2/maximum_displacement_on_line_12_p_0302_ldx30_h2_h.png";

const proj6_img1 = "/images/project_3/piping_system_3d_model_in_autopipe.png";
const proj6_img2 = "/images/project_3/maximum_sustain_stress_location_at_node_b06.png";
const proj6_img3 = "/images/project_3/maximum_stress_for_thermal_expansion_at_node_b05.png";
const proj6_img4 = "/images/project_3/maximum_thermal_stress_location_for_vapor_cleaning_160c_at_node_b13.png";
const proj6_img5 = "/images/project_3/sp_1.png";
const proj6_img6 = "/images/project_3/supports_location_at_4_bypass_line.png";

const proj7_img1 = "/images/project_4/image.png";
const proj7_img2 = "/images/project_4/image_2.png";
const proj7_img3 = "/images/project_4/image_3.png";
const proj7_img4 = "/images/project_4/image_4.png";
const proj7_img5 = "/images/project_4/image_5.png";
const proj7_img6 = "/images/project_4/image_6.png";
const proj7_img7 = "/images/project_4/image_7.png";
const proj7_img8 = "/images/project_4/image_8.png";
const proj7_img9 = "/images/project_4/image_9.png";
const proj7_img10 = "/images/project_4/image_10.png";

const proj8_img1 = "/images/large_scale_vertical_diesel_storage_tanks/diesel_storage_tanks_location.png";
const proj8_img2 = "/images/large_scale_vertical_diesel_storage_tanks/design_parameters.png";
const proj8_img3 = "/images/large_scale_vertical_diesel_storage_tanks/diesel_storage_tank_predimensioning.png";
const proj8_img4 = "/images/large_scale_vertical_diesel_storage_tanks/shell_summary_of_results.png";
const proj8_img5 = "/images/large_scale_vertical_diesel_storage_tanks/roof_summary_of_results.png";
const proj8_img6 = "/images/large_scale_vertical_diesel_storage_tanks/structure_summary_of_results.png";
const proj8_img7 = "/images/large_scale_vertical_diesel_storage_tanks/bottom_summary_of_results.png";
const proj8_img8 = "/images/large_scale_vertical_diesel_storage_tanks/anchor_chair_design.png";

const proj9_img1 = "/images/gasoline_storage_tank_battery/gasoline_90_storage_tanks_location.png";
const proj9_img2 = "/images/gasoline_storage_tank_battery/gasoline_95_storage_tanks_location.png";
const proj9_img3 = "/images/gasoline_storage_tank_battery/gasoline_90_storage_tank_predimensioning.png";
const proj9_img4 = "/images/gasoline_storage_tank_battery/gasoline_95_storage_tank_predimensioning.png";
const proj9_img5 = "/images/gasoline_storage_tank_battery/design_parameters_storage_tanks_t_004_005_006_007.png";
const proj9_img6 = "/images/gasoline_storage_tank_battery/design_parameters_storage_tanks_t_008.png";

const JellyfishLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={`fill-current ${className}`} aria-hidden="true">
    <path d="M20 50 C 20 15, 80 15, 80 50 Z" />
    <rect x="44" y="55" width="12" height="42" rx="3" /> 
    <rect x="32" y="55" width="6" height="32" rx="3" />
    <rect x="62" y="55" width="6" height="32" rx="3" />
    <rect x="20" y="55" width="6" height="22" rx="3" />
    <rect x="74" y="55" width="6" height="22" rx="3" />
  </svg>
);

const ParallaxIcon = ({ children, factor = 20, className = "", style = {} }: { children: React.ReactNode, factor?: number, className?: string, style?: React.CSSProperties }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const x = useTransform(smoothX, [-500, 500], [-factor, factor]);
  const y = useTransform(smoothY, [-500, 500], [-factor, factor]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = clientX - window.innerWidth / 2;
      const yPos = clientY - window.innerHeight / 2;
      mouseX.set(xPos);
      mouseY.set(yPos);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div style={{ ...style, x, y }} className={className}>
      {children}
    </motion.div>
  );
};

const translations = {
  en: {
    nav: { home: "Home", about: "About", work: "Projects", contact: "Contact" },
    hero: {
      title1: "High-Stakes",
      title2: "Engineering",
      title3: "Schedule-Saving",
      title4: "Results.",
      desc: "Specialized piping & Storage tank solutions. Reduce rework costs and schedule delays.",
      btnWork: "View Projects",
      btnContact: "Get in Touch",
      readMore: "Read More"
    },
    about: {
      title: "HOW CAN I HELP?",
      readMore: "READ MORE",
      service1Title: "PIPING STRESS ANALYSIS",
      service1Desc: "Static and Dynamic flexibility analysis (ASME B31.3) to secure structural integrity and reduce critical rework.",
      service2Title: "API 650 TANK DESIGN",
      service2Desc: "Certified specialization using AMETANK for compliant dimensioning, calculations, and technical memoirs.",
      service3Title: "BROWNFIELD MODELING",
      service3Desc: "Advanced 3D modeling and laser scanning (Recap/Navisworks) for zero-clash site-to-BIM execution."
    },
    work: {
      title1: "Projects",
      title2: "",
      filterAll: "All",
      viewAll: "VIEW ALL PROJECTS",
      confidentialityNoticeTitle: "Confidentiality Notice:",
      confidentialityNoticeText: "This contains proprietary engineering intelligence and intellectual property. Access is strictly limited to authorized personnel for the purposes of professional portfolio evaluation.",
      proj4: {
        tag1: "Flexibility Analysis", tag2: "AutoPIPE",
        title: "Flexibility Analysis of a Heavy Gasoline Line",
        desc: "I successfully engineered the removal of a compromised expansion joint and its replacement with a rigid spool, utilizing strategic structural modifications to maintain system integrity.",
        longDesc: [
          { title: "Executive Summary", content: "• Industrial Sector: Oil & Gas (Refining)\n• Key Achievement: I successfully engineered the removal of a compromised expansion joint and its replacement with a rigid spool, utilizing strategic structural modifications to maintain system integrity." },
          { title: "Technical Overview", content: "I conducted the analysis utilizing Bentley AutoPIPE Connect Edition (v. 12.08.04.009), ensuring full compatibility with modern ASME B31.3 compliance requirements. I specifically selected the software version for its robust handling of non-linear support gaps and friction, which were critical for accurately modeling the new rigid spool implementation and the suite of 9 structural interventions." },
          { title: "Technical Specifications", content: "• Material: ASTM A106 Gr. B (Carbon Steel)\n• Design Pressure: 225.02 psi (15.82 kg/cm²)\n• Operating Temp: 302°F (150°C)\n• Compliance Standard: ASME B31.3 (Process Piping)\n• Software: Bentley AutoPIPE Connect Edition (v. 12.08.04.009)\n• Line Details: 4\" NPS - Schedule 40" },
          { title: "Problem Statement & Constraints", content: "A critical Heavy Gasoline line featured a damaged expansion joint requiring urgent replacement. My goal was to eliminate the flexible element entirely and replace it with a rigid spool. This introduced the risk of transmitting massive thermal expansion loads to existing headers and equipment nozzles that were originally designed for a flexible system.\n\n• Loss of Compensation: Removing the expansion joint meant the piping had to absorb all 150°C thermal growth through its own geometry.\n• Nozzle Loads: Existing equipment connections had strict allowable force/moment limits that could not be exceeded." },
          { title: "Stress Analysis & Implementation", content: "1. Load Cases Simulated:\n• Gravity (G)\n• Thermal (T1, T2)\n• Pressure (P1, P2)\n• Occasional (Seismic/Wind)\n\n2. Analysis Results:\n• Max Sustained Stress Ratio: 21% of allowable 298.7 kg/cm²\n• Max Displacement Stress Ratio: 58% of allowable 1213.3 kg/cm² — well within safety margins.\n• Max Occasional Stress Ratio: 42% of allowable 783.6 kg/cm²\n• Flange Integrity Ratio: 80.3% (Max ratio under combined Seismic/Thermal loads at the primary manifold).\n• Critical Displacement: 20.71 mm during seismic events." },
          { title: "Structural Solutions", content: "New Support Configuration: I designed and implemented a suite of 9 structural interventions:\n• SM-05: New Guide + Line Stop to anchor thermal growth.\n• SM-01, SM-04, SM-07, SM-08: New specialized guides.\n• SM-09: Modification of existing guides to accommodate new thermal profiles." },
          { title: "Project Deliverables", content: "• Analytical Reports: Flexibility Analysis Case Study (Heavy Gasoline).\n• Calculation Sets: Stress summaries, restraint load reports, and displacement tables.\n• Three-Dimensional Modeling: Plant 3D Digital Twin.\n• Technical Documentation: Support design specifications and bill of materials for the A65 Line Stop." }
        ]
      },
      proj5: {
        tag1: "Vibration Mitigation", tag2: "Dynamic Stability",
        title: "Dynamic Stability & Vibration Mitigation (Furnace Charge Lines)",
        desc: "I resolved chronic axial vibration issues in two-phase flow furnace charge lines by replacing failed hydraulic damping units with a redesigned hybrid support system and a large-diameter expansion loop.",
        longDesc: [
          { title: "Executive Summary", content: "• Industrial Sector: Oil & Gas (Refining - Crude Distillation Unit)\n• Key Achievement: I resolved chronic axial vibration issues in two-phase flow furnace charge lines by replacing failed hydraulic damping units with a redesigned hybrid support system and a large-diameter expansion loop." },
          { title: "Technical Specifications", content: "• Material: ASTM A106 Gr. B (Carbon Steel)\n• Design Pressure: 300 psi (21.09 kg/cm²)\n• Operating Temperature: Design: 300°F (149°C)\n• Compliance Standard: ASME B31.3 (Process Piping)\n• Software Implementation: Bentley AutoPIPE Connect Edition (v. 12.08.04.009)\n• Line Details: 8\" Two-Phase Flow Lines / 12\" Charge Line" },
          { title: "Problem Statement & Constraints", content: "The charge lines for the refinery's primary furnace experienced severe axial vibrations that intensified with higher throughput. The original protection system—hydraulic damping units—had suffered years of degradation, including fluid depletion and mechanical seizing, leaving the piping vulnerable to fatigue failure from the erratic forces of two-phase flow.\n\n• Two-Phase Flow Dynamics: The mix of liquid and vapor created non-linear dynamic loads that the existing supports could no longer dampen.\n• Thermal Expansion vs. Rigidity: My solution needed to be stiff enough to stop vibrations but flexible enough to handle the 300°F thermal growth without overstressing the furnace nozzles." },
          { title: "Stress Analysis & Implementation", content: "1. Load Cases Simulated\n• Gravity (GR)\n• Thermal Range (Ambient to 300°F)\n• Internal Pressure (P1)\n• Dynamic Occasional Loads (Seismic & Vibration-induced)\n\n2. Analysis Results\n• Max Sustained Stress Ratio: 26% of allowable 270.9 kg/cm² vs 1025.3 kg/cm²\n• Max Expansion Stress Ratio: 70% of allowable 1430 kg/cm² vs 2036.2 kg/cm²\n• Max Occasional Stress Ratio: 26% of allowable 504 kg/cm² vs 1969.0 kg/cm²\n• Stability Result: I successfully shifted the system's natural frequency to avoid resonance with the two-phase flow excitation frequencies." },
          { title: "Structural Solutions", content: "• Hybrid Support System: I replaced problematic hydraulic dampers with a combination of rigid restraints and high-damping mechanical struts.\n• Expansion Loop: I integrated a new large-diameter expansion loop to provide the necessary flexibility for the 12\" charge line while maintaining the structural stiffness required for vibration control.\n• Support SM-06: Specific implementation of a new heavy-duty restraint to anchor the axial momentum of the fluid." },
          { title: "Project Deliverables", content: "• Analytical Reports: Comprehensive Pipe Stress Analysis including wind, seismic, and hydrostatic load cases.\n• Three-Dimensional Modeling: Updated 3D layout for the new expansion loop and optimized support coordinates.\n• Technical Documentation: New Isometric drawings and fabrication details for the reinforced steel support configurations.\n• Project Administration: Technical justification for the abandonment of hydraulic damping in favor of passive rigid/loop solutions." }
        ]
      },
      proj6: {
        tag1: "Seismic Control", tag2: "Flange Integrity",
        title: "4\" Bypass Interconnection (Component Feed to Gasoline Storage)",
        desc: "I provided engineering validation for the installation of a new 4\" bypass line connecting an intermediate component tank to finished product headers, ensuring seismic displacement control and flange integrity.",
        longDesc: [
          { title: "Executive Summary", content: "• Industrial Sector: Oil & Gas (Refining - Downstream)\n• Key Achievement: I provided engineering validation for the installation of a new 4\" bypass line connecting an intermediate component tank to finished product headers. The analysis ensured seismic displacement control and verified flange integrity under high-pressure scenarios according to international codes." },
          { title: "Technical Specifications", content: "• Service: Gasoline (720kg/m³)\n• Material: Carbon Steel (ASTM A53 Gr. B), Sch.40\n• Design Pressure: 9 Kg/cm²\n• Design Temp: 46 °C\n• Compliance Standard: ASME B31.3 (Process Piping)\n• Software Implementation: Bentley AutoPIPE Advanced (v. 23.00.00.230)\n• Line Details: 4\" NPS Bypass Interconnection" },
          { title: "Problem Statement & Constraints", content: "My objective was to validate the flexibility of a new 4\" bypass line between an Intermediate Gasoline Component Tank (Feed) and the existing headers of four Large-Scale Finished Gasoline Storage Tanks. The primary engineering concern was to prevent the new piping configuration from overloading the existing headers and ensuring that all bolted connections remained leak-proof during thermal fluctuations and seismic events.\n\n• Seismic Control: High occasional displacements in the Z-direction necessitated advanced anchoring strategies to protect the header connection.\n• Flange Integrity: Stringent \"Equivalent Pressure\" criteria were applied to prevent fugitive emissions at connections between new and existing infrastructure." },
          { title: "Stress Analysis & Implementation", content: "1. Load Cases Simulated\n• Gravity (GR)\n• Thermal Expansion (T1, T2, T3)\n• Internal Pressure (P1, P2)\n• Occasional Loads (Static Seismic E1-E4)\n\n2. Analysis Results\n• Max Sustained Stress Ratio: 21% of allowable 298.7 kg/cm²\n• Max Displacement Stress Ratio: 58% of allowable 1213.3 kg/cm² — well within safety margins.\n• Max Occasional Stress Ratio: 42% of allowable 783.6 kg/cm²\n• Flange Integrity Ratio: 80.3% (Max ratio under combined Seismic/Thermal loads at the primary manifold).\n• Critical Displacement: 20.71 mm (Horizontal Z-axis) during seismic events." },
          { title: "Structural Solutions", content: "• Seismic Anchor (Line Stop): I implemented a Line Stop on the existing 6\" header to control ±Z displacements, protecting the bypass interconnection from excessive movement.\n• Support Optimization: I designed a series of 9 new supports (guides and vertical stops) to direct thermal expansion away from the tank nozzles." },
          { title: "Project Deliverables", content: "• Analytical Reports: Complete Piping Flexibility Report.\n• Verification Appendices: Comprehensive summaries for Restraint Loads, Displacements, and Flange Equivalent Pressure.\n• Support Details: Detailed design and bill of materials for supports." }
        ]
      },
      proj7: {
        tag1: "BIM", tag2: "Laser Scanning",
        title: "Detailed Mechanical Design and 3D Modeling for PSV 36SVP15B Installation",
        desc: "I implemented a BIM workflow integrated with Laser Scanning data to execute a zero-clash piping reroute for a Pressure Relief Valve, incorporating specialized heat tracing.",
        longDesc: [
          { title: "Executive Summary", content: "• Industrial Sector: Oil & Gas / Process Engineering\n• Primary Technical Achievement: I implemented a BIM (Building Information Modeling) workflow integrated with Laser Scanning (Point Cloud) data to execute a zero-clash piping reroute for a Pressure Relief Valve 36SVP15B, incorporating specialized heat tracing for high-viscosity fluid management." },
          { title: "Technical Parameters and Specifications", content: "• Service Medium: Heavy Fuel Oil\n• Equipment Protected: Discharge of Pumps 36P15A/B\n• Valve Orifice Design: API Std 526 - Orifice \"D\" (0.110 in²)\n• Inlet / Outlet Size: NPS 3/4\" x NPS 1\"\n• Design Pressure (System): 440 PSIG\n• Thermal Protection: Heat Tracing System (Required for viscosity control)\n• Methodology: BIM Lifecycle / Scan-to-BIM\n• Technological Implementation: Point Cloud Processing / AutoCAD Plant 3D / Navisworks" },
          { title: "Problem Statement and Technical Constraints", content: "The project aimed to upgrade the relief system for the 36P15A/B pump station. The primary technical challenges included:\n\n• High Fluid Viscosity: Fuel Oil presents significant flow resistance at ambient temperatures. Without thermal maintenance, the discharge line to the drain/suction header risks solidification or \"plugging,\" rendering the safety system ineffective.\n• Spatial Congestion: The existing pump bay lacked current as-built documentation, with multiple overlapping piping systems and structural frames.\n• Field Reconstruction Risks: Traditional manual measurement techniques were deemed insufficient due to the complexity of the area, posing a high risk of \"on-site\" modifications." },
          { title: "Engineering Implementation and Strategic Solution", content: "I pivoted the engineering strategy to a Digital Twin approach, prioritizing accuracy and constructability:\n\n1. Point Cloud Acquisition and Processing:\n• I utilized high-definition laser scanners to capture the \"As-Is\" condition of the plant.\n• The resulting Point Cloud provided a sub-millimeter accurate digital representation of all existing obstacles.\n\n2. BIM-Driven 3D Modeling and Heat Tracing Integration:\n• Scan-to-BIM Workflow: The point cloud was imported directly into the design environment as a reference layer.\n• Viscosity Management (Tracing): The discharge routing was specifically designed to accommodate heat tracing and insulation. The 3D model accounted for the additional space required by the tracing elements and cladding to ensure no interferences with existing equipment during relief events.\n• Optimized Routing: The line was routed back to the suction header using the point cloud as a hard constraint, ensuring the most efficient path and maintaining required process slopes for viscous fluid drainage.\n\n3. Intelligent Support Placement and Detailing:\n• I selected support locations based on the actual availability of structural steel identified in the scan.\n• Advanced Detailing: High-fidelity installation isometrics included specific callouts for tracing installation, guaranteeing that prefabricated spools and thermal components would fit perfectly on the first attempt." },
          { title: "Deliverables and Technical Outputs", content: "• Point Cloud Data Set: High-density laser scan of the pump area for future facility management.\n• BIM-Coordinated 3D Model: Integrated Plant 3D model including the new PSV station, discharge headers, and heat tracing envelope.\n• Pre-fabrication Isometrics: Detail drawings with exact cut lengths, tracing requirements, and support coordinates." }
        ]
      },
      proj8: {
        tag1: "API 650", tag2: "Storage Tanks",
        title: "Large-Scale Vertical Diesel Storage Tanks",
        desc: "I delivered detailed engineering and structural validation for three 20,000m³ vertical storage tanks. I successfully resolved seismic stability challenges by designing a robust anchoring system and validating the frangible joint.",
        longDesc: [
          { title: "Executive Summary", content: "• Industrial Sector: Oil & Gas (Midstream - Liquid Hydrocarbon Terminal)\n• Key Achievement: I delivered detailed engineering and structural validation for three 20,000 m³ vertical storage tanks. I successfully resolved seismic stability challenges by designing a robust anchoring system (28 bolts per tank) and validating the frangible roof-to-shell joint per API 650." },
          { title: "Technical Specifications", content: "• Material (Shell/Bottom): ASTM A36 / A283 Gr. C\n• Design Standard: API 650 (13th Edition, 2021)\n• Nominal Capacity: 20,000 m³ (125,796 bbl) per tank\n• Dimensions: Ø38.0 m × 19.51 m Height\n• Stored Fluid: Diesel (Specific Gravity: 0.85)\n• Design Internal Pressure: 0.5 kPa\n• Design Temperature: 60°C (140°F)\n• Software Implementation: AMETank (TechnoSoft)" },
          { title: "Problem Statement & Constraints", content: "I spearheaded the design of three large-diameter tanks in a high-seismic coastal area. The primary engineering concern was ensuring the structural stability of the shell and bottom under a maximum liquid level of 18.20m while subject to significant seismic overturning moments.\n\nTechnical Constraints:\n• Seismic Stability: Initial analysis showed the tanks were not self-stable under overturning seismic loads, requiring mechanical anchoring to the foundation.\n• Safety & Overpressure: The design required a \"fragile joint\" (frangible joint) at the roof-to-shell connection to prioritize pressure release through the roof rather than the shell-to-bottom joint in case of emergency overpressure." },
          { title: "Stress Analysis & Implementation", content: "1. Load Cases Simulated\n• Hydrostatic (Dead Load + Fluid)\n• Internal & External Pressure (Vacuum)\n• Wind Loads (100 km/h Design Velocity)\n• Seismic Loads (Spectral Analysis)\n\n2. Analysis Results\n• Seismic Stability: Overturning moment exceeded the resisting moment of the fluid weight alone.\n• Anchor Requirements: I verified the need for 28 anchor bolts per tank to secure the structure to its foundation.\n• Structural Integrity: Shell thickness validated using the 'One-Foot Method' to ensure compliance with API 650 stress limits.\n• Freeboard: Established at 1.3m to account for fluid sloshing during seismic events.\n\n3. Structural Solutions\n• Mechanical Anchoring: I designed 28 anchor bolts per tank (2 1/4\" diameter, ASTM F1554-55) with hot-dip galvanization to resist the coastal environment.\n• Anchor Chairs: Optimized anchor chair height and thickness to distribute the uplift force into the shell plates without localized buckling.\n• Frangible joint: I validated the joint configuration as a \"frangible joint\" per API 650." },
          { title: "Project Deliverables", content: "• Calculation Memory: Detailed structural reports.\n• AMETank Reports: Full 118-page simulation output including shell thickness, seismic, and wind calculations.\n• GA Drawings: Nozzle schedule and appurtenance layout per API 650.\n• Visual Gallery & Supplementary Data: Included AMETank generated shell thickness profiles, wind moment summaries, and the 28-point anchor bolt layout plan." }
        ]
      },
      proj9: {
        tag1: "API 650", tag2: "Venting Systems",
        title: "Gasoline Storage Tank Battery",
        desc: "I provided detailed engineering and stability validation for five vertical storage tanks. I implemented specialized peripheral and central venting to safely manage overpressure in non-frangible geometries.",
        longDesc: [
          { title: "Executive Summary", content: "• Industrial Sector: Oil & Gas (Midstream - Storage & Distribution)\n• Status: Approved for Construction\n• Key Achievement: I completely validated the engineering and stability for five (5) vertical storage tanks for high-octane gasoline. I managed the critical design constraint where a frangible joint was not feasible, implementing a specialized peripheral and central venting system to ensure atmospheric safety." },
          { title: "Technical Specifications", content: "• Material (Shell/Bottom): ASTM A36 / A283 Gr. C\n• Design Standard: API 650 (13th Edition, 2021)\n• Nominal Capacity: Intermediate Storage (~1,600 m³ / 10,000 bbl per tank)\n• Dimensions: Ø13.76 m × 10.81 m Height\n• Stored Fluid: Gasoline (90/95 RON)\n• Design Internal Pressure: 0.5 kPa (MAWP: 1.32 kPa)\n• Software Implementation: AMETank (TechnoSoft)" },
          { title: "Problem Statement & Constraints", content: "I designed a battery of five gasoline tanks in a seismic coastal zone. Unlike the larger diesel tanks at the same terminal, the geometry of these 13.76m diameter tanks did not allow for a \"frangible joint\" (emergency pressure release through the roof-to-shell connection) according to API 650 5.10.2.6 criteria.\n\nTechnical Constraints:\n• Safety & Overpressure: Without a frangible joint, the tank was at higher risk of shell-to-bottom failure during an emergency overpressure event.\n• Seismic Stability: The coastal location required mechanical anchoring to prevent sliding and overturning during a design-basis earthquake." },
          { title: "Stress Analysis & Implementation", content: "1. Load Cases Simulated\n• Hydrostatic & Fluid Weight\n• Internal Pressure & Vacuum (MAWP/MAWV)\n• Wind Loads (100 km/h)\n• Seismic Spectral Analysis\n\n2. Analysis Results\n• Seismic Anchoring: I determined that the tanks required 16 anchor bolts to maintain stability under lateral seismic forces.\n• Overpressure Management: I calculated emergency venting requirements to compensate for the lack of a frangible joint.\n• Fluid Dynamics: I set the maximum fluid level at 9.649m with a 1.15m freeboard for sloshing control.\n\n3. Structural Solutions\n• Anchoring System: I designed 16 anchor bolts per tank (1 3/8\" diameter, ASTM A36 with hot-dip galvanization for corrosion resistance).\n• Redundant Venting: I implemented a combination of peripheral and central vents to ensure that the internal pressure never exceeds the shell's structural limit, since the roof is not designed to \"blow off\" (Non-Frangible).\n• Shell Optimization: I validated plate thicknesses to ensure the structure could handle the specific gravity of 95 RON gasoline while anchored." },
          { title: "Project Deliverables", content: "• Calculation Memory: Detailed structural report.\n• AMETank Reports: 108-page and 91-page simulation outputs for Gasoline 90 and 95 variants.\n• Venting Calculations: Integration of emergency flow requirements for non-frangible storage." }
        ]
      },
      share: "Share Project",
      viewDetails: "View Details",
      searchPlaceholder: "Search projects..."
    },
    contact: {
      title1: "GET IN TOUCH",
      title2: "NOW.",
      desc: "Specialized engineering services for EPCs and asset owners. Let's unblock your project's critical path.",
      email: "Email Me",
      linkedin: "LinkedIn",
      footer: "Daniel Velasquez. All systems nominal."
    },
    aboutPage: {
      hero: "Hi - I'm Daniel. I help industrial leaders solve complex problems in ",
      heroHighlight: "Mechanical Engineering",
      vision: "With 10+ years of experience, I specialize in industrial piping systems, 3D modeling, and Storage tank design, bridging the gap between site reality and code compliance.",
      historyTitle: "Refined over a decade of high-stakes environments.",
      history1: "Established in ",
      history1Year: "2015",
      history1Text: " as a mechanical project engineering expert, delivering solutions from conceptual stages to detail execution. Since then, I’ve navigated the complexities of the industrial cycle across two countries, mastering the nuances of ",
      history1Highlight: "Brownfield retrofitting",
      history2: "As an established lead engineer in ",
      history2Company: "Industrial Fluid Handling",
      history2Text: ", I have delivered over 50 turnkey liquid handling systems, optimizing fabrication precision through advanced 3D layouts. Today, I lead complex 3D modeling and piping stress analysis for updates at major facilities such as ",
      history2Facility: "Heavy Industry Infrastructure",
      history3: "I leverage tools like ",
      history3Tools: "AutoCAD Plant 3D, Navisworks, Autodesk Recap, AUTOPIPE, and AMETANK",
      history3Text: " to ensure a zero-clash integration, reducing construction rework and accelerating project critical paths. Whether it's managing massive point clouds, performing flexibility analysis, or designing complex mechanical systems, my goal is always the same: schedule-saving results without compromising safety.",
      pillarsTitle: "Technical Pillars",
      leverTitle: "Technological Leverage",
      leverDesc: "Using AI to enhance my daily workflows and building custom tools using Vibecoding to automate calculations and repetitive tasks.",
      leverTag: "3x Faster Execution",
      skillsTitle: "Core Skills & software",
      softwareTitle: "Software Proficiencies",
      standardsTitle: "Skills & Standards",
      beyondTitle: "Beyond the Blueprints",
      beyondDesc: "When I'm not solving complex engineering problems, I'm creating content, sharing knowledge and expertise, or exploring the intersection of heavy industry and digital transformation.",
      scenarios: {
        stress: {
          title: "Advanced Stress Analysis",
          subtitle: "ASME B31.3 & B31J: VERIFIED",
          desc: "Static and Dynamic Stress Analysis utilizing site-proven professional criterion to eliminate construction rework and ensure structural integrity."
        },
        tanks: {
          title: "Storage Tank Design",
          subtitle: "API 650 & AMETANK Specialist",
          desc: "Certified specialist in API 650 design using AMETANK for dimensioning, calculations, and comprehensive technical memories."
        },
        retrofit: {
          title: "Brownfield Retrofit",
          subtitle: "Laser Scanning & Recap Mastery",
          desc: "Management of large-scale point clouds via Autodesk Recap and Navisworks for zero-clash integration in complex saturated environments."
        }
      }
    }
  },
  es: {
    nav: { home: "Inicio", about: "Sobre Mí", work: "Proyectos", contact: "Contacto" },
    hero: {
      title1: "Ingeniería de",
      title2: "Alto Impacto",
      title3: "Resultados que",
      title4: "Ahorran Tiempo.",
      desc: "Soluciones especializadas en tuberías y tanques de almacenamiento. Reduzca costos de retrabajo y retrasos en el cronograma.",
      btnWork: "Ver Proyectos",
      btnContact: "Contactar",
      readMore: "Leer Más"
    },
    about: {
      title: "¿CÓMO PUEDO AYUDAR?",
      readMore: "LEER MÁS",
      service1Title: "ANÁLISIS DE ESFUERZOS EN TUBERÍAS",
      service1Desc: "Análisis de flexibilidad estático y dinámico (ASME B31.3) para asegurar la integridad estructural y reducir retrabajos críticos.",
      service2Title: "DISEÑO DE TANQUES API 650",
      service2Desc: "Especialización certificada utilizando AMETANK para dimensionamiento, cálculos y memorias técnicas conforme a norma.",
      service3Title: "MODELADO BROWNFIELD",
      service3Desc: "Modelado 3D avanzado y escaneo láser (Recap/Navisworks) para una ejecución de sitio a BIM sin interferencias."
    },
    work: {
      title1: "Proyectos",
      title2: "",
      filterAll: "Todos",
      viewAll: "VER TODOS LOS PROYECTOS",
      confidentialityNoticeTitle: "Aviso de Confidencialidad:",
      confidentialityNoticeText: "Esto contiene inteligencia de ingeniería propietaria y propiedad intelectual. El acceso está estrictamente limitado a personal autorizado con fines de evaluación profesional del portafolio.",
      proj4: {
        tag1: "Análisis de Flexibilidad", tag2: "AutoPIPE",
        title: "Análisis de Flexibilidad de una Línea de Gasolina Pesada",
        desc: "Realicé la ingeniería para la eliminación de una junta de expansión comprometida y su reemplazo por un carrete rígido, utilizando modificaciones estructurales estratégicas.",
        longDesc: [
          { title: "Resumen Ejecutivo", content: "• Sector Industrial: Petróleo y Gas (Refinación)\n• Logro Clave: Realicé la ingeniería para la eliminación de una junta de expansión comprometida y su reemplazo por un carrete rígido, manteniendo la integridad del sistema." },
          { title: "Descripción Técnica", content: "Realicé el análisis utilizando Bentley AutoPIPE Connect Edition (v. 12.08.04.009), asegurando compatibilidad total con los requisitos de ASME B31.3. La versión del software se seleccionó específicamente por su robusto manejo de holguras de soporte no lineales y fricción." },
          { title: "Especificaciones Técnicas", content: "• Material: ASTM A106 Gr. B\n• Presión de Diseño: 225.02 psi\n• Temp de Operación: 302°F (150°C)\n• Norma de Cumplimiento: ASME B31.3\n• Software: Bentley AutoPIPE Connect Edition" },
          { title: "Definición del Problema", content: "Una línea crítica de Gasolina Pesada tenía una junta de expansión dañada. El objetivo era eliminarla y reemplazarla con un carrete rígido, lo que introducía el riesgo de transmitir cargas térmicas masivas a los equipos existentes." },
          { title: "Análisis de Esfuerzos e Implementación", content: "1. Casos de Carga Simulados:\n• Gravedad, Térmica, Presión, Ocasional (Sismo/Viento).\n2. Resultados:\n• Ratio de Esfuerzo Máximo: 58% de lo permitido (dentro de márgenes de seguridad).\n• Integridad de Bridas: 80.3%.\n• Desplazamiento Crítico: 20.71 mm durante eventos sísmicos." },
          { title: "Soluciones Estructurales", content: "Nueva configuración de soportes: Diseñó e implementó un conjunto de 9 intervenciones estructurales incluyendo guías especializadas y paradas de línea (Line Stops)." },
          { title: "Entregables", content: "• Reportes analíticos, memorias de cálculo, gemelo digital 3D y documentación técnica de soportes." }
        ]
      },
      proj5: {
        tag1: "Mitigación de Vibraciones", tag2: "Estabilidad Dinámica",
        title: "Estabilidad Dinámica y Mitigación de Vibraciones (Líneas de Carga de Horno)",
        desc: "Resolví problemas crónicos de vibración axial en líneas de carga de horno con flujo bifásico mediante el rediseño del sistema de soporte y bucles de expansión.",
        longDesc: [
          { title: "Resumen Ejecutivo", content: "• Sector Industrial: Petróleo y Gas (Refinación - Unidad de Destilación de Crudo)\n• Logro Clave: Resolví vibraciones axiales crónicas mediante el reemplazo de amortiguadores fallidos por un sistema híbrido." },
          { title: "Especificaciones Técnicas", content: "• Material: ASTM A106 Gr. B\n• Presión de Diseño: 300 psi\n• Temperatura de Operación: 300°F (149°C)\n• Software: Bentley AutoPIPE Connect Edition" },
          { title: "Planteamiento del Problema", content: "Las líneas de carga experimentaban vibraciones severas que se intensificaban con el flujo. El sistema original de amortiguación hidráulica se había degradado tras años de uso." },
          { title: "Análisis e Implementación", content: "1. Simulación de cargas dinámicas y térmicas.\n2. Resultados: Logré desplazar la frecuencia natural del sistema para evitar resonancia." },
          { title: "Soluciones Estructurales", content: "Sistema de soporte híbrido y nuevo bucle de expansión de gran diámetro para ganar flexibilidad sin perder rigidez estructural." },
          { title: "Entregables", content: "Reportes de análisis, modelado 3D actualizado y planos isométricos de fabricación." }
        ]
      },
      proj6: {
        tag1: "Control Sísmico", tag2: "Integridad de Bridas",
        title: "Interconexión Bypass de 4\" (Alimentación a Almacenamiento)",
        desc: "Llevé a cabo la validación de ingeniería para la instalación de un nuevo bypass de 4\", asegurando control de desplazamientos sísmicos e integridad de bridas.",
        longDesc: [
          { title: "Resumen Ejecutivo", content: "• Sector Industrial: Refinación\n• Logro Clave: Llevé a cabo la validación de ingeniería para bypass de 4\", verificando integridad de bridas bajo escenarios de alta presión según códigos internacionales." },
          { title: "Especificaciones Técnicas", content: "• Servicio: Gasolina\n• Presión de Diseño: 9 Kg/cm²\n• Temperatura de Diseño: 46 °C\n• Software: Bentley AutoPIPE Advanced" },
          { title: "Definición del Problema", content: "Mi objetivo fue validar la flexibilidad entre el tanque de alimentación y los cabezales existentes. La preocupación principal era no sobrecargar la infraestructura actual." },
          { title: "Análisis e Implementación", content: "Análisis de sismo estático y térmico. Ratio de integridad de bridas: 80.3%." },
          { title: "Soluciones Estructurales", content: "Implementación de anclajes sísmicos y parada de línea para controlar desplazamientos en el eje Z." },
          { title: "Entregables", content: "Reporte de flexibilidad completo, resúmenes de cargas en restricciones y detalles de soportes." }
        ]
      },
      proj7: {
        tag1: "BIM", tag2: "Escaneo Láser",
        title: "Diseño Mecánico Detallado y Modelado 3D para PSV 36SVP15B",
        desc: "Implementé un flujo de trabajo BIM integrado con nubes de puntos para un ruteo de tubería libre de interferencias para una válvula de alivio.",
        longDesc: [
          { title: "Resumen Ejecutivo", content: "• Sector Industrial: Petróleo y Gas\n• Logro Clave: Implementé el flujo Scan-to-BIM para ruteo de PSV con trazado de calor (heat tracing) para gestión de alta viscosidad." },
          { title: "Parámetros Técnicos", content: "• Servicio: Fuel Oil Pesado\n• Válvula: API Std 526 Orificio \"D\"\n• Presión de Diseño: 440 PSIG\n• Metodología: Ciclo de vida BIM / Scan-to-BIM" },
          { title: "Definición del Problema", content: "Debido a la alta viscosidad, implementé trazado de calor. El área estaba muy congestionada y no existía documentación confiable de obra construida." },
          { title: "Implementación Estratégica", content: "Utilicé escaneo láser de alta definición para capturar la condición 'As-Is'. El modelo 3D consideró el espacio adicional para trazado térmico y aislamiento." },
          { title: "Entregables", content: "Nube de puntos, modelo 3D coordinado y planos isométricos de pre-fabricación con longitudes de corte exactas." }
        ]
      },
      proj8: {
        tag1: "API 650", tag2: "Tanques de Almacenamiento",
        title: "Tanques de Almacenamiento Verticales de Diésel a Gran Escala",
        desc: "Desarrollé la ingeniería de detalle y validación estructural para tres tanques de almacenamiento vertical de 20,000m³. Resolví con éxito los desafíos de estabilidad sísmica al diseñar un robusto sistema de anclaje y validando la unión frangible.",
        longDesc: [
          { title: "Resumen Ejecutivo", content: "• Sector Industrial: Petróleo y Gas (Midstream - Terminal de Hidrocarburos Líquidos)\n• Logro Clave: Desarrollé la ingeniería de detalle y validación estructural para tres tanques de almacenamiento vertical de 20,000 m³. Resolví con éxito los desafíos de estabilidad sísmica analizando y diseñando un robusto sistema de anclaje (28 pernos por tanque) y validando la unión frangible techo-envolvente según API 650." },
          { title: "Especificaciones Técnicas", content: "• Material (Cuerpo/Fondo): ASTM A36 / A283 Gr. C\n• Estándar de Diseño: API 650 (13ª Edición, 2021)\n• Capacidad Nominal: 20,000 m³ (125,796 bbl) por tanque\n• Dimensiones: Ø38.0 m × 19.51 m Altura\n• Fluido Almacenado: Diésel (Gravedad Específica: 0.85)\n• Presión Interna de Diseño: 0.5 kPa\n• Temperatura de Diseño: 60°C (140°F)\n• Software Utilizado: AMETank (TechnoSoft)" },
          { title: "Planteamiento del Problema y Restricciones", content: "El proyecto implicó el diseño de tres tanques de gran diámetro en una zona costera de alta sismicidad. La principal preocupación de ingeniería fue asegurar la estabilidad estructural de la envolvente y el fondo bajo un nivel de líquido máximo de 18.20m mientras estaba sujeto a importantes momentos de vuelco sísmico.\n\nRestricciones Técnicas:\n• Estabilidad Sísmica: El análisis inicial mostró que los tanques no eran autoestables bajo las cargas sísmicas de vuelco, lo que requirió anclaje mecánico a la cimentación.\n• Seguridad y Sobrepresión: El diseño requirió una \"unión frangible\" en la conexión techo-envolvente para priorizar la liberación de presión a través del techo en lugar de la unión base-envolvente en caso de emergencia por sobrepresión." },
          { title: "Análisis de Esfuerzos e Implementación", content: "1. Casos de Carga Simulados\n• Hidrostático (Peso Muerto + Fluido)\n• Presión Interna y Externa (Vacío)\n• Cargas de Viento (Velocidad de Diseño de 100 km/h)\n• Cargas Sísmicas (Análisis Espectral)\n\n2. Resultados del Análisis\n• Estabilidad Sísmica: El momento de vuelco excedió el momento estabilizador del peso del fluido por sí solo.\n• Requisitos de Anclaje: Se verificó la necesidad de 28 pernos de anclaje por tanque para asegurar la estructura a su cimentación.\n• Integridad Estructural: Espesor de la envolvente validado usando el 'Método de 1 pie' para garantizar el cumplimiento con los límites de esfuerzo de API 650.\n• Borde Libre: Establecido en 1.3m para tener en cuenta el oleaje del fluido durante eventos sísmicos.\n\n3. Soluciones Estructurales\n• Anclaje Mecánico: Se diseñaron 28 pernos de anclaje por tanque (2 1/4\" de diámetro, ASTM F1554-55) con galvanizado en caliente para resistir el ambiente costero.\n• Sillas de Anclaje: Se optimizó la altura y el espesor de la silla de anclaje para distribuir la fuerza de levantamiento en las placas del cuerpo sin pandeo localizado.\n• Unión Frangible: Se validó la configuración de la unión como una \"unión frangible\" según API 650." },
          { title: "Entregables del Proyecto", content: "• Memoria de Cálculo: Informes estructurales detallados.\n• Reportes AMETank: Informe completo de simulación de 118 páginas que incluye cálculos de espesor del cuerpo, cálculos sísmicos y de viento.\n• Dibujos GA: Lista de boquillas y diseño de accesorios según API 650.\n• Galería Visual y Datos Suplementarios: Se incluyeron perfiles de espesor generados por AMETank, resúmenes de momento de viento y plano del arreglo de 28 pernos de anclaje." }
        ]
      },
      proj9: {
        tag1: "API 650", tag2: "Sistemas de Venteo",
        title: "Batería de Tanques de Almacenamiento de Gasolina",
        desc: "Realicé la ingeniería de detalle y validación de estabilidad para cinco tanques verticales. Implementé un sistema de venteo central y periférico especializado para gestionar la sobrepresión en geometrías no frangibles.",
        longDesc: [
          { title: "Resumen Ejecutivo", content: "• Sector Industrial: Petróleo y Gas (Midstream - Almacenamiento y Distribución)\n• Estado: Aprobado para Construcción\n• Logro Clave: Realicé la validación de ingeniería y estabilidad para cinco (5) tanques de almacenamiento vertical para gasolina de alto octanaje. Manejé la restricción crítica de diseño donde una unión frangible no era factible, implementando un sistema de venteo periférico y central especializado para garantizar la seguridad atmosférica." },
          { title: "Especificaciones Técnicas", content: "• Material (Envolvente/Fondo): ASTM A36 / A283 Gr. C\n• Estándar de Diseño: API 650 (13ª Edición, 2021)\n• Capacidad Nominal: Almacenamiento Intermedio (Aprox. 1,600 m³ / 10,000 bbl por tanque)\n• Dimensiones: Ø13.76 m × 10.81 m Altura\n• Fluido Almacenado: Gasolina (90/95 RON)\n• Presión Interna de Diseño: 0.5 kPa (MAWP: 1.32 kPa)\n• Software Utilizado: AMETank (TechnoSoft)" },
          { title: "Planteamiento del Problema y Restricciones", content: "Diseñé una batería de cinco tanques de gasolina en una zona costera sísmica. A diferencia de los tanques de diésel más grandes en la misma terminal, la geometría de estos tanques de 13.76m de diámetro no permitía una \"unión frangible\" (liberación de presión de emergencia a través de la conexión techo a envolvente) según los criterios de API 650 5.10.2.6.\n\nRestricciones Técnicas:\n• Seguridad y Sobrepresión: Sin una unión frangible, el tanque corría un mayor riesgo de falla en la unión base-envolvente durante un evento de sobrepresión de emergencia.\n• Estabilidad Sísmica: La ubicación costera requería anclaje mecánico para evitar el deslizamiento y el vuelco durante un terremoto de diseño." },
          { title: "Análisis de Esfuerzos e Implementación", content: "1. Casos de Carga Simulados\n• Hidrostático y Peso del Fluido\n• Presión Interna y Vacío (MAWP/MAWV)\n• Cargas de Viento (100 km/h)\n• Análisis Espectral Sísmico\n\n2. Resultados del Análisis\n• Anclaje Sísmico: Determiné que los tanques requerían 16 pernos de anclaje para mantener la estabilidad bajo fuerzas sísmicas laterales.\n• Gestión de Sobrepresión: Calculé los requisitos de venteo de emergencia para compensar la falta de una unión frangible.\n• Dinámica de Fluidos: Nivel máximo de fluido establecido en 9.649m con un borde libre de 1.15m para el control del oleaje.\n\n3. Soluciones Estructurales\n• Sistema de Anclaje: Diseñé 16 pernos de anclaje por tanque (1 3/8\" de diámetro, ASTM A36 con galvanizado en caliente para resistencia a la corrosión).\n• Venteo Redundante: Implementé una combinación de venteos periféricos y centrales para asegurar que la presión interna nunca exceda el límite estructural de la envolvente, ya que el techo no está diseñado para \"volar\" (No Frangible).\n• Optimización de Envolvente: Validé los espesores de placa para asegurar que la estructura pudiera soportar la gravedad específica de la gasolina de 95 RON estando anclada." },
          { title: "Entregables del Proyecto", content: "• Memoria de Cálculo: Informe estructural detallado.\n• Reportes AMETank: Salidas de simulación de 108 páginas y 91 páginas para las variantes de gasolina 90 y 95.\n• Cálculos de Venteo: Integración de requerimientos de flujo de emergencia para almacenamiento no frangible." }
        ]
      },
      share: "Compartir Proyecto",
      viewDetails: "Ver Detalles",
      searchPlaceholder: "Buscar proyectos..."
    },
    contact: {
      title1: "PONTE EN",
      title2: "CONTACTO.",
      desc: "Servicios de ingeniería especializada para EPCs y dueños de activos. Desbloqueemos la ruta crítica de su proyecto.",
      email: "Escríbeme",
      linkedin: "LinkedIn",
      footer: "Daniel Velasquez. Sistemas nominales."
    },
    aboutPage: {
      hero: "Hola - Soy Daniel. Ayudo a Líderes industriales a resolver problemas complejos de ",
      heroHighlight: "Ingeniería Mecánica",
      vision: "Con más de 10 años de experiencia, me especializo en sistemas de tuberías industriales, modelado 3D y diseño de tanques de almacenamiento, cerrando la brecha entre la realidad del sitio y el cumplimiento del código.",
      historyTitle: "Perfeccionado a lo largo de una década en entornos de alto impacto.",
      history1: "Consolidado desde ",
      history1Year: "2015",
      history1Text: " como experto en ingeniería de proyectos mecánicos, entregando soluciones desde etapas conceptuales hasta ejecución de detalle. Desde entonces, he navegado las complejidades del ciclo industrial en dos países, dominando los matices del ",
      history1Highlight: "reacondicionamiento (Brownfield retrofitting)",
      history2: "Como líder establecido en ",
      history2Company: "Manejo de Fluidos Industriales",
      history2Text: ", he entregado más de 50 sistemas de manejo de líquidos llave en mano, optimizando la precisión de fabricación a través de layouts 3D avanzados. Hoy, lidero complejos modelados 3D y análisis de esfuerzos en tuberías para actualizaciones en instalaciones de alta complejidad como ",
      history2Facility: "Infraestructura de Industria Pesada",
      history3: "Utilizo herramientas como ",
      history3Tools: "AutoCAD Plant 3D, Navisworks, Autodesk Recap, AUTOPIPE y AMETANK",
      history3Text: " para asegurar una integración sin interferencias, reduciendo el retrabajo de construcción y acelerando las rutas críticas del proyecto. Ya sea gestionando nubes de puntos masivas, realizando análisis de flexibilidad o diseñando sistemas mecánicos complejos, mi objetivo es siempre el mismo: resultados que ahorren tiempo sin comprometer la seguridad.",
      pillarsTitle: "Pilares Técnicos",
      leverTitle: "Apalancamiento Tecnológico",
      leverDesc: "Uso de IA para mejorar mis flujos de trabajo diarios y construcción de herramientas personalizadas mediante Vibecoding para automatizar cálculos y tareas repetitivas.",
      leverTag: "Ejecución 3 veces más rápida",
      skillsTitle: "Habilidades Principales y Software",
      softwareTitle: "Competencias de Software",
      standardsTitle: "Habilidades y Normas",
      beyondTitle: "Más allá de los Planos",
      beyondDesc: "Cuando no estoy resolviendo problemas complejos de ingeniería, creo contenido, comparto conocimientos y experiencia, o exploro la intersección de la industria pesada y la transformación digital.",
      scenarios: {
        stress: {
          title: "Análisis de Esfuerzos Avanzado",
          subtitle: "ASME B31.3 & B31J: VERIFICADO",
          desc: "Análisis de Esfuerzos Estático y Dinámico utilizando criterios profesionales probados en campo para eliminar el retrabajo de construcción y asegurar la integridad estructural."
        },
        tanks: {
          title: "Diseño de Tanques de Almacenamiento",
          subtitle: "Especialista en API 650 y AMETANK",
          desc: "Especialista certificado en diseño API 650 utilizando AMETANK para dimensionamiento, cálculos y memorias técnicas integrales."
        },
        retrofit: {
          title: "Reacondicionamiento Brownfield",
          subtitle: "Maestría en Escaneo Láser y Recap",
          desc: "Gestión de nubes de puntos a gran escala a través de Autodesk Recap y Navisworks para una integración sin interferencias en entornos complejos saturados."
        }
      }
    }
  }
};

const projects = [
  {
    id: 4,
    dateAdded: '2022-01-01',
    tags: ['Flexibility Analysis', 'AutoPIPE'],
    icon: Cylinder,
    images: [
      { src: proj4_img1, caption: "Site Overview 1" },
      { src: proj4_img2, caption: "Site Overview 2" },
      { src: proj4_img3, caption: "Site Overview 3" },
      { src: proj4_img4, caption: "Site Overview 4" },
      { src: proj4_img5, caption: "3D Model 1" },
      { src: proj4_img6, caption: "3D Model 2" },
      { src: proj4_img7, caption: "Support Plan 1" },
      { src: proj4_img8, caption: "Support Plan 2" },
      { src: proj4_img9, caption: "Support Plan 3" },
      { src: proj4_img10, caption: "Support Plan 4" },
      { src: proj4_img11, caption: "Support Plan 5" },
      { src: proj4_img12, caption: "Support Plan 6" },
      { src: proj4_img13, caption: "Modeling of heavy fuel oil piping in AutoPIPE" },
      { src: proj4_img14, caption: "Summary of maximum stress results" },
      { src: proj4_img15, caption: "Maximum stress" },
      { src: proj4_img16, caption: "Summary of Maximum Displacements" },
      { src: proj4_img17, caption: "Maximum load for Hydrostatic test" }
    ],
    translationKey: 'proj4'
  },
  {
    id: 5,
    dateAdded: '2022-06-01',
    tags: ['Vibration Mitigation', 'Dynamic Stability'],
    icon: Activity,
    images: [
      { src: proj5_img1, caption: "Failure History" },
      { src: proj5_img2, caption: "Dampening Support" },
      { src: proj5_img3, caption: "SP_1" },
      { src: proj5_img4, caption: "SP_2" },
      { src: proj5_img5, caption: "SP_3" },
      { src: proj5_img6, caption: "DWG_4" },
      { src: proj5_img7, caption: "DWG_5" },
      { src: proj5_img8, caption: "3D_mODEL_1" },
      { src: proj5_img9, caption: "New Piping Supports and loops in Green." },
      { src: proj5_img10, caption: "New Piping Supports in Green." },
      { src: proj5_img11, caption: "DWG_1" },
      { src: proj5_img12, caption: "DWG_2" },
      { src: proj5_img13, caption: "DWG_3" },
      { src: proj5_img14, caption: "DWG_6" },
      { src: proj5_img15, caption: "Piping 3D Model 8“-P-0301-UXE21-H2-H and 8”-P-0309-UXE21-H2-H." },
      { src: proj5_img16, caption: "Pipe Model 12”-P-0302-LDX30-H2-H." },
      { src: proj5_img17, caption: "Maximum stress applied to lines 8“-P-0301-UXE21-H2-H and 8”-P-0309-UXE21-H2-H.", hotspots: [{ x: 45, y: 32, title: "Stress Peak A", description: "Maximum displacement ratio (58%) identified at this transition node." }, { x: 68, y: 54, title: "Anchor Point", description: "Critical support node where axial momentum is resisted." }] },
      { src: proj5_img18, caption: "Maximum stress on line 12”-P-0302-LDX30-H2-H.", hotspots: [{ x: 32, y: 45, title: "Expansion Joint", description: "Frangible connection point validated for ±12mm movement." }] },
      { src: proj5_img19, caption: "Maximum displacement on lines 8“-P-0301-UXE21-H2-H and 8”-P-0309-UXE21-H2-H." },
      { src: proj5_img20, caption: "Maximum displacement on line 12”-P-0302-LDX30-H2-H." }
    ],
    translationKey: 'proj5'
  },
  {
    id: 6,
    dateAdded: '2023-01-01',
    tags: ['Seismic Control', 'Flange Integrity'],
    icon: ShieldCheck,
    images: [
      { src: proj6_img1, caption: "Piping System 3D model in AUTOPIPE", hotspots: [{ x: 50, y: 40, title: "Header Connection", description: "Primary bypass interconnection point with existing gasoline headers." }] },
      { src: proj6_img2, caption: "Maximum sustain stress Location at Node B06.", hotspots: [{ x: 55, y: 28, title: "Node B06", description: "Point of highest mechanical stress under gravity loads." }] },
      { src: proj6_img3, caption: "Maximum Stress for Thermal Expansion at Node B05." },
      { src: proj6_img4, caption: "Maximum Thermal Stress Location for vapor cleaning @160°C at Node B13." },
      { src: proj6_img5, caption: "SP_1" },
      { src: proj6_img6, caption: "Supports location at 4” Bypass Line." }
    ],
    translationKey: 'proj6'
  },
  {
    id: 7,
    dateAdded: '2023-06-01',
    tags: ['BIM', 'Laser Scanning'],
    icon: DraftingCompass,
    images: [
      { src: proj7_img1, caption: "Point Cloud Data Set" },
      { src: proj7_img2, caption: "Digital Scan Rendering" },
      { src: proj7_img3, caption: "BIM-Coordinated 3D Model" },
      { src: proj7_img4, caption: "Isometrics" },
      { src: proj7_img5, caption: "Pre-fabrication Isometrics" },
      { src: proj7_img6, caption: "Detailed Support Drawings 1" },
      { src: proj7_img7, caption: "Detailed Support Drawings 2" },
      { src: proj7_img8, caption: "Detailed Support Drawings 3" },
      { src: proj7_img9, caption: "Detailed Support Drawings 4" },
      { src: proj7_img10, caption: "Detailed Support Drawings 5" }
    ],
    translationKey: 'proj7'
  },
  {
    id: 8,
    dateAdded: '2023-11-01',
    tags: ['Storage Tanks', 'API 650', 'Seismic Validation'],
    icon: Cylinder,
    images: [
      { src: proj8_img1, caption: "Diesel Storage Tanks Location" },
      { src: proj8_img2, caption: "Design Parameters" },
      { src: proj8_img3, caption: "Tank Predimensioning", hotspots: [{ x: 50, y: 70, title: "Frangible Joint", description: "Validated roof-to-shell connection designed to fail before shell-to-bottom joint." }] },
      { src: proj8_img4, caption: "Shell - Summary of Results", hotspots: [{ x: 40, y: 55, title: "1-Foot Method", description: "Shell thickness calculation point according to API 650 stress limits." }] },
      { src: proj8_img5, caption: "Roof - Summary of Results" },
      { src: proj8_img6, caption: "Structure - Summary of Results" },
      { src: proj8_img7, caption: "Bottom - Summary of Results" },
      { src: proj8_img8, caption: "Anchor Chair Design", hotspots: [{ x: 48, y: 35, title: "Anchor Bolt", description: "2 1/4\" Diameter ASTM F1554-55 bolt resisting seismic uplift." }, { x: 52, y: 65, title: "Base Plate", description: "Optimized thickness to distribute overturning moments into the foundation." }] }
    ],
    translationKey: 'proj8'
  },
  {
    id: 9,
    dateAdded: '2024-02-01',
    tags: ['Storage Tanks', 'API 650', 'Venting Systems'],
    icon: Cylinder,
    images: [
      { src: proj9_img1, caption: "Gasoline 90 Storage Tanks Location" },
      { src: proj9_img2, caption: "Gasoline 95 Storage Tanks Location" },
      { src: proj9_img3, caption: "Gasoline 90 Tank Predimensioning" },
      { src: proj9_img4, caption: "Gasoline 95 Tank Predimensioning" },
      { src: proj9_img5, caption: "Design Parameters - Tanks T-004,005,006,007" },
      { src: proj9_img6, caption: "Design Parameters - Tank T-008" }
    ],
    translationKey: 'proj9'
  }
];

const filterTags = ['Flexibility Analysis', 'AutoPIPE', 'Vibration Mitigation', 'Dynamic Stability', 'Seismic Control', 'Flange Integrity', 'Storage Tanks', 'API 650', 'Venting Systems'];

export default function App() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [view, setView] = useState<'home' | 'about' | 'projects'>('home');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const t = translations[lang];

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'es' : 'en');
  };

  const handleLinkedInClick = (e: React.MouseEvent) => {
    const profileId = "danielvelas";
    const webUrl = `https://www.linkedin.com/in/${profileId}/`;
    const appUrl = `linkedin://in/${profileId}`;
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      e.preventDefault();
      // Attempt to open the app
      window.location.href = appUrl;
      
      // Fallback to web if the page is still visible after a delay
      // This avoids the 'popup blocked' error because we redirect in the same tab
      setTimeout(() => {
        if (!document.hidden) {
          window.location.href = webUrl;
        }
      }, 2000);
    }
    // On desktop, the default link behavior (href + target="_blank") takes over
  };

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(activeFilter));

  const handleNavClick = (e: React.MouseEvent, section: string) => {
    setIsMenuOpen(false);
    if (section === 'about') {
      e.preventDefault();
      setView('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section === 'work' || section === 'projects') {
      e.preventDefault();
      setView('projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (view !== 'home') {
        setView('home');
        // Small delay to allow home to render before scrolling
        setTimeout(() => {
          const el = document.getElementById(section);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        e.preventDefault();
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-grid selection:bg-accent selection:text-white font-sans text-ink">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      {/* Navigation */}
      <nav aria-label="Main navigation" className="fixed top-0 w-full bg-paper/90 backdrop-blur-sm border-b-2 border-ink z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-mono text-sm font-bold uppercase tracking-wider">
          <div 
            className="flex items-center gap-3 text-ink cursor-pointer group"
            onClick={() => {
              setView('home');
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <JellyfishLogo className="w-10 h-10 sm:w-[50px] sm:h-[50px] group-hover:scale-110 transition-transform" />
            <span className="text-lg sm:text-[25px] font-mono font-black uppercase tracking-tighter">Daniel Velasquez</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={toggleLang}
              className="mr-2 px-2 py-1 brutal-border border-ink bg-paper text-[10px] font-mono hover:bg-accent transition-colors"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                setView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-accent transition-colors ${view === 'home' ? 'text-accent underline underline-offset-4' : ''}`}
            >
              {t.nav.home}
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className={`hover:text-accent transition-colors ${view === 'about' ? 'text-accent underline underline-offset-4' : ''}`}
            >
              {t.nav.about}
            </a>
            <a 
              href="#work" 
              onClick={(e) => handleNavClick(e, 'work')}
              className={`hover:text-accent transition-colors ${view === 'projects' ? 'text-accent underline underline-offset-4' : ''}`}
            >
              {t.nav.work}
            </a>
            <a 
              href="https://www.linkedin.com/in/danielvelas/" 
              onClick={handleLinkedInClick}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-ink hover:text-accent transition-colors flex items-center"
              aria-label="Visit my LinkedIn profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:services@velasquezdaniel.me" 
              className="text-ink hover:text-accent transition-colors flex items-center"
              aria-label="Send an email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-ink hover:text-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden bg-paper border-t-2 border-ink overflow-hidden brutal-shadow-sm origin-top"
            >
              <motion.div 
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
                  closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } }
                }}
                className="flex flex-col p-8 gap-8 font-mono font-bold uppercase tracking-[0.15em] text-lg"
              >
                {[
                  { label: t.nav.home, href: '#home', active: view === 'home', onClick: (e: React.MouseEvent) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    setView('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }},
                  { label: t.nav.about, href: '#about', active: view === 'about', onClick: (e: React.MouseEvent) => handleNavClick(e, 'about') },
                  { label: t.nav.work, href: '#work', active: view === 'projects', onClick: (e: React.MouseEvent) => handleNavClick(e, 'work') },
                ].map((item) => (
                  <motion.a 
                    key={item.label}
                    href={item.href}
                    onClick={item.onClick}
                    variants={{
                      open: { opacity: 1, y: 0, transition: { type: "spring", damping: 15, stiffness: 100 } },
                      closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
                    }}
                    className={`hover:text-accent transition-colors flex items-center justify-between group ${item.active ? 'text-accent' : 'text-ink'}`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={20} className={`opacity-0 group-hover:opacity-100 transition-opacity ${item.active ? 'opacity-100' : ''}`} />
                  </motion.a>
                ))}

                <motion.div 
                  variants={{
                    open: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } },
                    closed: { opacity: 0, y: 10, transition: { duration: 0.2 } }
                  }}
                  className="flex gap-6 pt-6 border-t border-ink/10"
                >
                  <button 
                    onClick={() => {
                      toggleLang();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center gap-3 text-ink hover:text-accent transition-colors pr-6 border-r border-ink/10"
                  >
                    <Globe size={24} />
                    <span className="text-sm tracking-widest">{lang === 'en' ? 'Español' : 'English'}</span>
                  </button>
                  <a 
                    href="https://www.linkedin.com/in/danielvelas/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-ink hover:text-accent transition-colors"
                    onClick={(e) => {
                      handleLinkedInClick(e);
                      setIsMenuOpen(false);
                    }}
                  >
                    <Linkedin size={24} />
                    <span className="text-sm tracking-widest">{t.contact.linkedin}</span>
                  </a>
                  <a 
                    href="mailto:services@velasquezdaniel.me" 
                    className="flex items-center gap-3 text-ink hover:text-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Mail size={24} />
                    <span className="text-sm tracking-widest">{t.contact.email}</span>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.main 
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            id="main-content" 
            className="pt-24 pb-20 px-6 max-w-7xl mx-auto"
          >
            {/* Hero Section */}
            <section className="py-20 md:py-32 relative group" aria-labelledby="hero-heading">
              {/* Subtle Background Sketches */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 text-grey" aria-hidden="true">
                <ParallaxIcon factor={15} className="absolute top-0 right-[5%] opacity-20 rotate-12">
                  <Settings strokeWidth={0.5} className="w-32 h-32 md:w-56 md:h-56 lg:w-[320px] lg:h-[320px] animate-spin-slow animate-breathe" style={{ animationDelay: '0ms' }} />
                </ParallaxIcon>
                <ParallaxIcon factor={25} className="absolute bottom-10 right-[20%] opacity-20 -rotate-12">
                  <Compass strokeWidth={0.5} className="w-24 h-24 md:w-40 md:h-40 lg:w-[240px] lg:h-[240px] animate-sway-slow animate-breathe" style={{ animationDelay: '400ms' }} />
                </ParallaxIcon>
                <ParallaxIcon factor={10} className="absolute top-32 left-[-5%] opacity-20 rotate-45">
                  <Hexagon strokeWidth={0.5} className="w-28 h-28 md:w-48 md:h-48 lg:w-[280px] lg:h-[280px] animate-pulse-soft animate-breathe" style={{ animationDelay: '800ms' }} />
                </ParallaxIcon>
                <ParallaxIcon factor={30} className="absolute bottom-0 left-[10%] opacity-20 -rotate-15">
                  <Ruler strokeWidth={0.5} className="w-20 h-20 md:w-36 md:h-36 lg:w-[200px] lg:h-[200px] animate-sway-slow animate-breathe" style={{ animationDelay: '1200ms' }} />
                </ParallaxIcon>
                <ParallaxIcon factor={20} className="absolute top-1/2 left-[60%] opacity-20 rotate-90">
                  <Cpu strokeWidth={0.5} className="w-24 h-24 md:w-44 md:h-44 lg:w-[250px] lg:h-[250px] animate-pulse-soft" style={{ animationDelay: '1600ms' }} />
                </ParallaxIcon>
                
                {/* Smaller sketchnote icons: pumps, valves, gears, wrenches */}
                <ParallaxIcon factor={40} className="absolute top-[15%] left-[20%] opacity-30 rotate-12">
                  <Cylinder strokeWidth={1} className="w-8 h-8 md:w-12 md:h-12 lg:w-[64px] lg:h-[64px] animate-float-sketch" style={{ animationDelay: '200ms' }} />
                </ParallaxIcon>
                <ParallaxIcon factor={35} className="absolute bottom-[25%] right-[15%] opacity-30 -rotate-45">
                  <Filter strokeWidth={1} className="w-6 h-6 md:w-10 md:h-10 lg:w-[56px] lg:h-[56px] animate-float-sketch" style={{ animationDelay: '600ms' }} />
                </ParallaxIcon>
                <ParallaxIcon factor={45} className="absolute top-[40%] right-[25%] opacity-30 rotate-90">
                  <Cog strokeWidth={1} className="w-8 h-8 md:w-14 md:h-14 lg:w-[72px] lg:h-[72px] animate-spin-slow" style={{ animationDelay: '1000ms' }} />
                </ParallaxIcon>
                <ParallaxIcon factor={50} className="absolute bottom-[15%] left-[30%] opacity-30 -rotate-12">
                  <Wrench strokeWidth={1} className="w-6 h-6 md:w-10 md:h-10 lg:w-[48px] lg:h-[48px] animate-float-sketch" style={{ animationDelay: '1400ms' }} />
                </ParallaxIcon>

                {/* New icons: Calipers (Scale), Drafting Compass, CAD Mouse */}
                <ParallaxIcon factor={15} className="absolute top-[10%] left-[45%] opacity-25 rotate-45">
                  <Scale strokeWidth={0.5} className="w-20 h-20 md:w-32 md:h-32 lg:w-[180px] lg:h-[180px] animate-sway-slow" style={{ animationDelay: '1800ms' }} />
                </ParallaxIcon>
                <ParallaxIcon factor={22} className="absolute bottom-[40%] left-[5%] opacity-20 -rotate-12">
                  <DraftingCompass strokeWidth={0.5} className="w-24 h-24 md:w-36 md:h-36 lg:w-[220px] lg:h-[220px] animate-sway-slow" style={{ animationDelay: '2000ms' }} />
                </ParallaxIcon>
                <ParallaxIcon factor={28} className="absolute top-[60%] right-[10%] opacity-25 rotate-12">
                  <Mouse strokeWidth={0.5} className="w-16 h-16 md:w-24 md:h-24 lg:w-[140px] lg:h-[140px] animate-pulse-soft" style={{ animationDelay: '2200ms' }} />
                </ParallaxIcon>
                
                {/* Technical annotations / crosshairs */}
                <div className="absolute top-[20%] right-[30%] opacity-40 font-mono text-xs text-cyan">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-[1px] bg-cyan"></div>
                    <span>DIA: 450mm</span>
                  </div>
                  <div className="w-[1px] h-4 bg-cyan ml-2"></div>
                </div>
                
                <div className="absolute bottom-[30%] left-[25%] opacity-40 font-mono text-xs text-cyan">
                  <div className="w-[1px] h-4 bg-cyan mb-1 ml-2"></div>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-[1px] bg-cyan"></div>
                    <span>ELEV: +12.5m</span>
                  </div>
                </div>
              </div>

              <div className="max-w-4xl mx-auto text-center relative z-10">
                <h1 id="hero-heading" className="text-4xl md:text-7xl lg:text-8xl font-mono font-bold leading-[0.9] tracking-tighter mb-8 uppercase text-ink">
                  <button 
                    onClick={() => setView('projects')}
                    className="hover:text-accent transition-colors text-center focus:outline-none"
                  >
                    {t.hero.title1}
                  </button> <br />
                  <span className="sketch-underline-cyan">{t.hero.title2}</span> <br />
                  {t.hero.title3} <br />
                  {t.hero.title4}
                </h1>
                <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed mb-8 border-l-4 border-accent pl-6 py-2 text-slate text-center">
                  {t.hero.desc}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="#work" onClick={(e) => handleNavClick(e, 'work')} className="bg-ink text-paper px-8 py-4 font-mono font-bold uppercase tracking-wider brutal-border brutal-shadow flex items-center gap-2">
                    {t.hero.btnWork} <ArrowRight size={20} aria-hidden="true" />
                  </a>
                  <a href="mailto:services@velasquezdaniel.me" className="bg-paper text-ink px-8 py-4 font-mono font-bold uppercase tracking-wider brutal-border brutal-shadow flex items-center gap-2">
                    {t.hero.btnContact}
                  </a>
                </div>
              </div>
            </section>

            {/* The Services Section */}
            <section id="about" className="py-20 border-t-2 border-ink relative overflow-hidden" aria-labelledby="about-heading">
              <h2 id="about-heading" className="sr-only">How Can I Help?</h2>
              
              <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-[0.03]">
                <h2 className="text-[15vw] font-mono font-bold leading-none uppercase text-ink text-center">
                  High-Stakes <br /> Engineering. <br /> Schedule-Saving <br /> Results.
                </h2>
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <h2 
                    onClick={() => setView('about')}
                    className="font-mono text-[60px] leading-[60px] font-bold uppercase tracking-tighter text-ink flex items-center gap-4 w-[650px] cursor-pointer hover:text-accent transition-colors"
                  >
                    {t.about.title}
                  </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <motion.div 
                    whileHover={{ y: -8, x: -4 }}
                    className="p-8 border-2 border-ink bg-paper brutal-shadow transition-colors group cursor-default"
                  >
                    <h3 className="text-xl font-mono font-bold uppercase mb-4 text-ink group-hover:text-accent transition-colors">
                      {t.about.service1Title}
                    </h3>
                    <p className="font-mono text-sm text-slate leading-relaxed">
                      {t.about.service1Desc}
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ y: -8, x: -4 }}
                    className="p-8 border-2 border-ink bg-paper brutal-shadow transition-colors group cursor-default"
                  >
                    <h3 className="text-xl font-mono font-bold uppercase mb-4 text-ink group-hover:text-accent transition-colors">
                      {t.about.service2Title}
                    </h3>
                    <p className="font-mono text-sm text-slate leading-relaxed">
                      {t.about.service2Desc}
                    </p>
                  </motion.div>

                  <motion.div 
                    whileHover={{ y: -8, x: -4 }}
                    className="p-8 border-2 border-ink bg-paper brutal-shadow transition-colors group cursor-default"
                  >
                    <h3 className="text-xl font-mono font-bold uppercase mb-4 text-ink group-hover:text-accent transition-colors">
                      {t.about.service3Title}
                    </h3>
                    <p className="font-mono text-sm text-slate leading-relaxed">
                      {t.about.service3Desc}
                    </p>
                  </motion.div>
                </div>

                <div className="mt-16 flex justify-center">
                  <button 
                    onClick={() => {
                      setView('about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="font-mono text-xl font-bold uppercase flex items-center gap-2 text-accent transition-all group hover:gap-4"
                  >
                    {t.about.readMore} <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </section>

            {/* Selected Work */}
            <section id="work" className="py-20 border-t-2 border-ink" aria-labelledby="work-heading">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                <h2 
                  id="work-heading" 
                  onClick={() => {
                    setView('projects');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-4xl md:text-6xl font-mono font-bold uppercase tracking-tighter text-ink cursor-pointer hover:text-accent transition-colors"
                >
                  {t.work.title1} <br /> <span className="text-accent">{t.work.title2}</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredProjects.slice(0, 3).map((project, index) => (
                    <ProjectCard 
                      key={project.id} 
                      project={project} 
                      t={t} 
                      onClick={() => setSelectedProject(project)}
                      className={index === 2 ? "hidden lg:flex" : "flex"}
                    />
                  ))}
                </AnimatePresence>
              </div>

              <div className="mt-16 flex justify-center">
                <button 
                  onClick={() => {
                    setView('projects');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="font-mono text-xl font-bold uppercase flex items-center gap-2 text-accent transition-all group hover:gap-4"
                >
                  {t.work.viewAll} <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Project Modal */}
              <AnimatePresence>
                {selectedProject && (
                  <ProjectModal 
                    project={selectedProject} 
                    t={t} 
                    onClose={() => setSelectedProject(null)} 
                  />
                )}
              </AnimatePresence>
            </section>


            {/* Contact / Footer */}
            <section id="contact" className="py-20 border-t-2 border-ink" aria-labelledby="contact-heading">
              <div className="bg-ink text-paper p-8 md:p-16 brutal-border brutal-shadow relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute -right-20 -bottom-20 opacity-10 pointer-events-none" aria-hidden="true">
                  <JellyfishLogo className="w-[400px] h-[400px]" />
                </div>
                
                <div className="relative z-10 max-w-2xl">
                  <h2 id="contact-heading" className="text-4xl md:text-6xl font-mono font-bold uppercase mb-6 text-paper">
                    {t.contact.title1} <span className="text-accent">{t.contact.title2}</span>
                  </h2>
                  <p className="font-mono mb-10 opacity-80">
                    {t.contact.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <a href="mailto:services@velasquezdaniel.me" aria-label="Send an email" className="bg-accent text-ink px-6 py-3 font-mono font-bold uppercase tracking-wider brutal-border hover:bg-paper transition-colors flex items-center gap-2">
                      <Mail size={18} aria-hidden="true" /> {t.contact.email}
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/danielvelas/" 
                      onClick={handleLinkedInClick}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Visit my LinkedIn profile" 
                      className="bg-transparent text-paper px-6 py-3 font-mono font-bold uppercase tracking-wider border-2 border-paper hover:bg-paper hover:text-ink transition-colors flex items-center gap-2"
                    >
                      <Linkedin size={18} aria-hidden="true" /> {t.contact.linkedin}
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </motion.main>
        ) : view === 'about' ? (
          <BrandPitch t={t.aboutPage} onBack={() => setView('home')} />
        ) : (
          <ProjectsPage projects={projects} t={t} onBack={() => setView('home')} />
        )}
      </AnimatePresence>

      <footer className="border-t-2 border-ink bg-paper py-6 text-center font-mono text-xs uppercase tracking-widest text-slate">
        <p>&copy; {new Date().getFullYear()} {t.contact.footer}</p>
      </footer>
    </div>
  );
}
