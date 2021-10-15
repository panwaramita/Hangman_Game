const programmingLanguage=[
    "python",
    "javascript",
    "mongodb",
    "json",
    "java",
    "html",
    "css",
    "c",
    "csharp",
    "golang",
    "kotlin",
    "php",
    "sql",
    "ruby",
    "fortran",
]

export const randomLanguage=()=>{
return programmingLanguage[Math.floor(Math.random()*programmingLanguage.length)];
}