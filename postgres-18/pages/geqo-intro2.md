> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/geqo.sgml#geqo-intro2](https://www.postgresql.org/docs/18/geqo-intro2.html)

# Genetic Algorithms

The genetic algorithm (GA) is a heuristic optimization method which operates through randomized search. The set of possible solutions for the optimization problem is considered as a *population* of *individuals*. The degree of adaptation of an individual to its environment is specified by its *fitness*.

The coordinates of an individual in the search space are represented by *chromosomes*, in essence a set of character strings. A *gene* is a subsection of a chromosome which encodes the value of a single parameter being optimized. Typical encodings for a gene could be *binary* or *integer*.

Through simulation of the evolutionary operations *recombination*, *mutation*, and *selection* new generations of search points are found that show a higher average fitness than their ancestors. [Structure of a Genetic Algorithm](./geqo-intro2.md#structure-of-a-genetic-algorithm) illustrates these steps.

**Structure of a Genetic Algorithm**

According to the `comp.ai.genetic` FAQ it cannot be stressed too strongly that a GA is not a pure random search for a solution to a problem. A GA uses stochastic processes, but the result is distinctly non-random (better than random).
