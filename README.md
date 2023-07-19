# Cyclotron

Cyclotron is a function where you can circulate a particle e, p, n(electron, proton, neutron) inside a cyclotron.

Each particle has a circulation function within the cyclotron, which can create either a closed or an open cycle.

# Function example

cyclotron(particle, matrix): *output

cuclotron(e, 4x4): [
  [ 'e', 'e', 'e', 'e' ],
  [ 1, 1, 1, 'e' ],
  [ 1, 1, 1, 'e' ],
  [ 1, 1, 1, 'e' ]
]

cyclotron(p, 4x4): [
  [ 'p', 'p', 'p', 'p' ],
  [ 'p', 1, 1, 'p' ],
  [ 'p', 1, 'p', 'p' ],
  [ 'p', 'p', 'p', 1 ]
]

cyclotron(n, 4x4): [
  [ 'e', 'e', 'e', 'e' ],
  [ 1, 1, 1, 'e' ],
  [ 1, 1, 1, 'e' ],
  [ 1, 1, 1, 'e' ]
]
