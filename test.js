let first = 'ham';
let second = 'pineapple';
let txt = f`type Query {
  teams: [Team]
}
type Team {
  id: Int
  manager: String
  office: String
  extension_number: String
  mascot: String
  cleaning_duty: String
  project: String
}`

function f(strings, ...expressions) {
  console.log(strings[1])
}