
const skillsVisualization = document.getElementById('skills-visualization');

if (skillsVisualization) {


    const skillsData = [
        {
            skill: "Customer Service", proficiency: 90
        },
        {
            skill: "Customer Issue Resolution", proficiency: 85
        },
        {
            skill: "Sales Assistance", proficiency: 80
        },
        {
            skill: "Cash Handling", proficiency: 90
        },
        {
            skill: "Teamwork", proficiency: 95
        },
        {
            skill: "Adaptability", proficiency: 92
        },
        {
            skill: "Attention to Detail", proficiency: 88
        },
    ];

    skillsData.forEach(skill => {
        const skillContainer = document.createElement('div');
        skillContainer.classList.add('skill-bar-container');

        const skillLabel = document.createElement('span');
        skillLabel.classList.add('skill-bar-label');
        skillLabel.textContent = skill.skill;

        const skillBar = document.createElement('div');
        skillBar.classList.add('skill-bar');

        const skillBarInner = document.createElement('div');
        skillBarInner.classList.add('skill-bar-inner');
        skillBarInner.style.width = '0%';

        const skillPercentage = document.createElement('span');
        skillPercentage.classList.add('skill-bar-percentage');
        skillPercentage.textContent = `${skill.proficiency}%`;

        skillBar.appendChild(skillBarInner);
        skillContainer.appendChild(skillLabel);
        skillContainer.appendChild(skillBar);
        skillContainer.appendChild(skillPercentage);

        skillsVisualization.appendChild(skillContainer);

        setTimeout(() => {
            skillBarInner.style.width = `${skill.proficiency}%`;
        }, 100);
    });
}