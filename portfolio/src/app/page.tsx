"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  ExternalLink,
  Calendar,
  Award,
  Code,
  Globe,
  Trophy,
  Star,
  GraduationCap,
  Briefcase,
  FileText,
  Target,
  Users,
  Languages,
  Eye,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Zap,
  Heart,
  Coffee,
  Rocket,
  Brain,
  Database,
  Cpu,
  BarChart3,
  PieChart,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [isLoading, setIsLoading] = useState(true)
  const [typedText, setTypedText] = useState("")
  const [currentSkillCategory, setCurrentSkillCategory] = useState("all")

  const fullText = "Computer Science Student | Python Developer | Data Science Enthusiast"

  const skills = [
    { name: "Python", level: 90, category: "Programming", icon: Code },
    { name: "TensorFlow", level: 85, category: "AI/ML", icon: Brain },
    { name: "Data Analysis", level: 88, category: "Data Science", icon: BarChart3 },
    { name: "SQL", level: 82, category: "Database", icon: Database },
    { name: "HTML/CSS", level: 80, category: "Web", icon: Globe },
    { name: "Power BI", level: 75, category: "Analytics", icon: PieChart },
    { name: "DSA", level: 85, category: "Programming", icon: Cpu },
    { name: "DBMS", level: 80, category: "Database", icon: Database },
  ]

  const experiences = [
    {
      title: "Training (Citizen Data Science)",
      company: "Infosys Springboard - Pragati",
      period: "Nov 2024 – ongoing",
      type: "Training",
      description: "Path to Future program focusing on data science fundamentals",
      skills: ["Data Science", "Python", "Analytics"],
      certificateLink: "https://drive.google.com/file/d/example1",
    },
    {
      title: "Data Analyst",
      company: "Accenture North America",
      period: "Oct 2024 – Feb 2025",
      type: "Internship",
      description: "Data analysis and business intelligence projects",
      skills: ["Data Analysis", "Power BI", "SQL"],
      certificateLink: "https://drive.google.com/file/d/example2",
    },
    {
      title: "Software Developer",
      company: "Walmart USA",
      period: "Sept 2024 – Oct 2024",
      type: "Internship",
      description: "Developed heap data structure, UML diagrams, and ERD designs",
      skills: ["Python", "Data Structures", "System Design"],
      certificateLink: "https://drive.google.com/file/d/example3",
    },
    {
      title: "Python Developer Intern",
      company: "Tech Octanet",
      period: "June 2024 – Aug 2024",
      type: "Internship",
      description: "Worked with NumPy, Matplotlib, Pandas, PyTorch",
      skills: ["Python", "NumPy", "Pandas", "PyTorch"],
      certificateLink: "https://drive.google.com/file/d/example4",
    },
    {
      title: "AI Intern",
      company: "CognoRise InfoTech",
      period: "June 2024 – July 2024",
      type: "Internship",
      description: "Concepts of TensorFlow and AI development",
      skills: ["TensorFlow", "AI/ML", "Python"],
      certificateLink: "https://drive.google.com/file/d/example5",
    },
    {
      title: "Python Programmer Intern",
      company: "CodSoft",
      period: "June 2024 – July 2024",
      type: "Internship",
      description: "Python programming and software development",
      skills: ["Python", "Programming", "Software Development"],
      certificateLink: "https://drive.google.com/file/d/example6",
    },
    {
      title: "Web Developer Intern",
      company: "Prodigy InfoTech",
      period: "June 2024 – July 2024",
      type: "Internship",
      description: "Developing structured layouts, designing websites, integrating responsiveness",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      certificateLink: "https://drive.google.com/file/d/example7",
    },
  ]

  const projects = [
    {
      title: "AI Games Collection",
      tech: "Python, Pygame, TensorFlow",
      description:
        "Developed multiple AI-powered games including Rock Paper Scissors, Ping Pong AI, and Tic Tac Toe AI",
      link: "https://github.com/neha/ai-games",
      status: "Completed",
      complexity: "Advanced",
      features: ["AI Algorithms", "Game Logic", "User Interface"],
    },
    {
      title: "ATM Machine Program",
      tech: "Python",
      description: "Complete ATM simulation with authentication, balance checking, and transaction management",
      link: "https://github.com/neha/atm-machine",
      status: "Completed",
      complexity: "Intermediate",
      features: ["Authentication", "Transaction Management", "Security"],
    },
    {
      title: "Task Management Scheduler",
      tech: "Python",
      description: "Day scheduling application with task addition, deletion, and update functionalities",
      link: "https://github.com/neha/task-scheduler",
      status: "Completed",
      complexity: "Intermediate",
      features: ["CRUD Operations", "Scheduling", "Data Management"],
    },
    {
      title: "GetIntern Website",
      tech: "HTML, CSS, JavaScript",
      description: "Responsive internship platform with interactive navigation and user engagement features",
      link: "https://github.com/neha/getintern",
      status: "Completed",
      complexity: "Intermediate",
      features: ["Responsive Design", "Interactive UI", "Navigation"],
    },
    {
      title: "Basic Calculator",
      tech: "Python",
      description: "Users can perform basic arithmetic operations like: (+, -, *, /, **) on two chosen numbers",
      link: "https://github.com/neha/calculator",
      status: "Completed",
      complexity: "Beginner",
      features: ["Arithmetic Operations", "User Input", "Error Handling"],
    },
  ]

  const achievements = [
    {
      title: "Winner - GCE Kalahandi Hackathon",
      event: "INSPRANO 2025",
      icon: Trophy,
      certificateLink: "https://drive.google.com/file/d/hackathon-winner-cert",
      description: "First place in college hackathon with innovative solution",
    },
    {
      title: "2nd Place - Internal Smart India Hackathon",
      event: "SIH 2024",
      icon: Award,
      certificateLink: "https://drive.google.com/file/d/sih-2024-cert",
      description: "Runner-up in national level hackathon competition",
    },
    {
      title: "AIR 51 - Unified Cyber Olympiad",
      event: "UCO 2020",
      icon: Star,
      certificateLink: "https://drive.google.com/file/d/uco-2020-cert",
      description: "All India Rank 51 in cybersecurity olympiad",
    },
  ]

  const certifications = [
    {
      name: "Python for Data Science",
      issuer: "IBM by Cognitive Classes",
      date: "Sept 2024",
      link: "https://drive.google.com/file/d/python-data-science-cert",
      credentialId: "IBM-PDS-2024-001",
    },
    {
      name: "Project Management",
      issuer: "Great Learning",
      date: "Sept 2024",
      link: "https://drive.google.com/file/d/project-management-cert",
      credentialId: "GL-PM-2024-002",
    },
    {
      name: "Basics of Python",
      issuer: "Infosys Springboard",
      date: "Aug 2024",
      link: "https://drive.google.com/file/d/python-basics-cert",
      credentialId: "IS-BP-2024-003",
    },
    {
      name: "OOPs in Python",
      issuer: "Infosys Springboard",
      date: "Aug 2024",
      link: "https://drive.google.com/file/d/oops-python-cert",
      credentialId: "IS-OOP-2024-004",
    },
    {
      name: "Data Science",
      issuer: "Infosys Springboard",
      date: "Aug 2024",
      link: "https://drive.google.com/file/d/data-science-cert",
      credentialId: "IS-DS-2024-005",
    },
  ]

  const stats = [
    { label: "Projects Completed", value: "15+", icon: Rocket },
    { label: "Certifications", value: "5", icon: Award },
    { label: "Hackathons Won", value: "2", icon: Trophy },
    { label: "CGPA", value: "8.6", icon: GraduationCap },
  ]

  // Typing animation effect
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "education", "skills", "experience", "projects", "achievements", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const filteredSkills =
    currentSkillCategory === "all" ? skills : skills.filter((skill) => skill.category === currentSkillCategory)

  const skillCategories = ["all", ...Array.from(new Set(skills.map((skill) => skill.category)))]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#036666] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#036666] font-semibold">Loading Portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-emerald-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#036666] to-emerald-600 bg-clip-text text-transparent">
              Neha Pati
            </div>
            <div className="hidden md:flex space-x-6">
              {["About", "Education", "Skills", "Experience", "Projects", "Achievements", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === item.toLowerCase()
                      ? "bg-[#036666]/10 text-[#036666] font-medium"
                      : "text-gray-600 hover:text-[#036666] hover:bg-gray-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#036666] to-emerald-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl animate-pulse">
              NP
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">Neha Pati</h1>
            <div className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto h-8">
              <span className="border-r-2 border-[#036666] animate-pulse">{typedText}</span>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-4 text-center">
                    <stat.icon className="w-6 h-6 text-[#036666] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-[#036666]">{stat.value}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-600 bg-white/70 px-3 py-2 rounded-full">
                <MapPin className="w-4 h-4" />
                <span>Hyderabad</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 bg-white/70 px-3 py-2 rounded-full">
                <Mail className="w-4 h-4" />
                <span>nehapatigcek@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 bg-white/70 px-3 py-2 rounded-full">
                <Phone className="w-4 h-4" />
                <span>8208504361</span>
              </div>
            </div>
            <div className="flex justify-center gap-4 mb-8">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 bg-transparent hover:bg-[#036666]/10"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 bg-transparent hover:bg-[#036666]/10"
              >
                <Github className="w-4 h-4" />
                GitHub
              </Button>
              <Button className="flex items-center gap-2 bg-gradient-to-r from-[#036666] to-emerald-600 hover:shadow-lg transition-all duration-300">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Objective */}
          <Card className="max-w-4xl mx-auto shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Target className="w-5 h-5 text-[#036666]" />
                <CardTitle className="text-2xl">Objective</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-center leading-relaxed text-lg">
                Pursuing Bachelor&apos;s in Computer Science with experience in Python Programming with Data Science skills,
                seeking a challenging position where I can contribute to developing innovative software solutions and
                grow my expertise.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-white/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6 text-[#036666]" />
              <h2 className="text-3xl font-bold text-gray-900">Education</h2>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-[#036666]">
                      Government College of Engineering Kalahandi
                    </CardTitle>
                    <CardDescription className="text-lg font-medium">
                      BTech - Computer Science and Engineering
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="bg-[#036666]/10 text-[#036666] mb-2">
                      Dec 2022 – ongoing
                    </Badge>
                    <Button variant="outline" size="sm" className="flex items-center gap-1 text-xs bg-transparent">
                      <Eye className="w-3 h-3" />
                      View Certificate
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl font-bold text-green-600">8.6/10 CGPA</div>
                  <Badge className="bg-green-100 text-green-700">3rd Year</Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <TrendingUp className="w-4 h-4" />
                    <span>Excellent Performance</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">
                  <strong>Coursework:</strong> C, Java, Python Programming, OOPs, DSA, Computer Organisation and
                  Architecture, Data Communications, Operating Systems, DBMS, Computer Graphics
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">DAV Public School, Berhampur</CardTitle>
                      <CardDescription>12th CBSE - 2022</CardDescription>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center gap-1 text-xs bg-transparent">
                      <Eye className="w-3 h-3" />
                      View Certificate
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">91.2%</div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Narayana High School, Vishakhapatnam</CardTitle>
                      <CardDescription>10th CBSE - 2020</CardDescription>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center gap-1 text-xs bg-transparent">
                      <Eye className="w-3 h-3" />
                      View Certificate
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">97.8%</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Code className="w-6 h-6 text-[#036666]" />
              <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
            </div>
          </div>

          {/* Skills Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {skillCategories.map((category) => (
              <Button
                key={category}
                variant={currentSkillCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentSkillCategory(category)}
                className={
                  currentSkillCategory === category ? "bg-[#036666] hover:bg-[#036666]/90" : "hover:bg-[#036666]/10"
                }
              >
                {category === "all" ? "All Skills" : category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredSkills.map((skill, index) => (
              <Card
                key={index}
                className="shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-5 h-5 text-[#036666]" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                        <Badge variant="outline" className="text-xs mt-1">
                          {skill.category}
                        </Badge>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-3" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills Badges */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-center mb-6">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["MS-Office", "Project Management", "OOPs", "NumPy", "Pandas", "PyTorch", "Matplotlib"].map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-gradient-to-r from-[#036666]/10 to-emerald-100 text-[#036666] hover:shadow-md transition-all duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Briefcase className="w-6 h-6 text-[#036666]" />
              <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
            </div>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-[#036666]">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium">{exp.company}</CardDescription>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="mb-2 bg-gradient-to-r from-[#036666] to-emerald-600">{exp.type}</Badge>
                      <div className="text-sm text-gray-600 flex items-center gap-1 mb-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1 text-xs hover:bg-[#036666]/10 bg-transparent"
                        onClick={() => window.open(exp.certificateLink, "_blank")}
                      >
                        <Eye className="w-3 h-3" />
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
              <FileText className="w-6 h-6 text-[#036666]" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Award className="w-8 h-8 text-[#036666] flex-shrink-0" />
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1 text-xs bg-transparent"
                        onClick={() => window.open(cert.link, "_blank")}
                      >
                        <Eye className="w-3 h-3" />
                        View
                      </Button>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{cert.name}</h4>
                    <p className="text-sm text-gray-600 mb-1">{cert.issuer}</p>
                    <p className="text-xs text-gray-500 mb-2">{cert.date}</p>
                    <p className="text-xs text-[#036666] font-mono">{cert.credentialId}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Globe className="w-6 h-6 text-[#036666]" />
              <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-[#036666] group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          project.complexity === "Advanced"
                            ? "border-red-300 text-red-600"
                            : project.complexity === "Intermediate"
                              ? "border-yellow-300 text-yellow-600"
                              : "border-green-300 text-green-600"
                        }`}
                      >
                        {project.complexity}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(project.link, "_blank")}
                        className="hover:bg-[#036666]/10"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.split(", ").map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-sm text-gray-900">Key Features:</h5>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs bg-[#036666]/5 text-[#036666]">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 bg-white/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Trophy className="w-6 h-6 text-[#036666]" />
              <h2 className="text-3xl font-bold text-gray-900">Achievements</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="shadow-xl border-0 bg-white/90 backdrop-blur-sm text-center hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <achievement.icon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{achievement.event}</p>
                  <p className="text-xs text-gray-500 mb-4">{achievement.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1 text-xs mx-auto bg-transparent"
                    onClick={() => window.open(achievement.certificateLink, "_blank")}
                  >
                    <Eye className="w-3 h-3" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Co-curricular Activities */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-[#036666]" />
                <CardTitle className="text-2xl">Co-curricular Activities</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="events" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="events">Event Management</TabsTrigger>
                  <TabsTrigger value="technical">Technical Activities</TabsTrigger>
                </TabsList>
                <TabsContent value="events" className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-[#036666]/5 rounded-lg">
                      <Heart className="w-5 h-5 text-[#036666] mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Principal&apos;s Farewell Program (2024)</h4>
                        <p className="text-sm text-gray-600">Led and anchored heartfelt farewell program</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-[#036666]/5 rounded-lg">
                      <Sparkles className="w-5 h-5 text-[#036666] mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">ANUGOONJ Cultural Fest (2023)</h4>
                        <p className="text-sm text-gray-600">Organized college&apos;s Annual Cultural Festival</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-[#036666]/5 rounded-lg">
                      <Users className="w-5 h-5 text-[#036666] mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Township Cultural Events</h4>
                        <p className="text-sm text-gray-600">
                          Coordinated various cultural events demonstrating leadership
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="technical" className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-[#036666]/5 rounded-lg">
                      <Code className="w-5 h-5 text-[#036666] mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Hackathons</h4>
                        <p className="text-sm text-gray-600">
                          Active participation in multiple hackathons with winning records
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-[#036666]/5 rounded-lg">
                      <Zap className="w-5 h-5 text-[#036666] mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Coding Contests</h4>
                        <p className="text-sm text-gray-600">
                          Regular participation in competitive programming contests
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-[#036666]/5 rounded-lg">
                      <Brain className="w-5 h-5 text-[#036666] mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Idea Presentations</h4>
                        <p className="text-sm text-gray-600">
                          Presenting innovative ideas and solutions at various forums
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm mt-8">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Languages className="w-5 h-5 text-[#036666]" />
                <CardTitle className="text-xl">Languages</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { lang: "English", level: "Fluent" },
                  { lang: "Hindi", level: "Fluent" },
                  { lang: "Odia", level: "Native" },
                  { lang: "Telugu", level: "Fluent" },
                  { lang: "Marathi", level: "Basic" },
                  { lang: "Gujarati", level: "Basic" },
                ].map((item) => (
                  <Badge
                    key={item.lang}
                    variant="secondary"
                    className="px-3 py-2 bg-gradient-to-r from-[#036666]/10 to-purple-100 text-gray-700 hover:shadow-md transition-all duration-300"
                  >
                    {item.lang} <span className="text-xs opacity-70">({item.level})</span>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mail className="w-6 h-6 text-[#036666]" />
              <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
            </div>
            <p className="text-gray-600">Let&apos;s connect and discuss opportunities!</p>
          </div>

          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-[#036666]/5 rounded-lg">
                      <Mail className="w-5 h-5 text-[#036666]" />
                      <span>nehapatigcek@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#036666]/5 rounded-lg">
                      <Phone className="w-5 h-5 text-[#036666]" />
                      <span>8208504361</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#036666]/5 rounded-lg">
                      <MapPin className="w-5 h-5 text-[#036666]" />
                      <span>Hyderabad, India</span>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 bg-transparent hover:bg-[#036666]/10"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 bg-transparent hover:bg-[#036666]/10"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </Button>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#036666] focus:border-transparent transition-all duration-300"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#036666] focus:border-transparent transition-all duration-300"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#036666] focus:border-transparent transition-all duration-300"
                    ></textarea>
                    <Button className="w-full bg-gradient-to-r from-[#036666] to-emerald-600 hover:shadow-lg transition-all duration-300">
                      Send Message
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Coffee className="w-5 h-5 text-[#036666]" />
              <span className="text-gray-400">Made with passion and dedication</span>
            </div>
            <p className="text-gray-400">© 2025 Neha Pati. Built with React.js and Next.js</p>
            <div className="flex justify-center gap-4 mt-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                Terms of Service
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
