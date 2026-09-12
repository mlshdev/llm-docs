> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filters-and-sorting](https://developer.apple.com/documentation/foundation/filters-and-sorting)

# Filters and Sorting (Swift)

**Framework:** Foundation  
**Kind:** API Collection

Use predicates, expressions, and sort descriptors to examine elements in collections and other services.

## Topics

### Filltering

- [Predicate](predicate.md): A logical condition used to test a set of input values for searching or filtering.
- [PredicateError](predicateerror.md): An error thrown while evaluating a predicate.
- [PredicateCodableConfiguration](predicatecodableconfiguration.md): A specification of the expected types and key paths found in an archived predicate.
- [PredicateCodableKeyPathProviding](predicatecodablekeypathproviding.md): A type that provides the expected key paths found in an archived predicate.
- [PredicateExpression](predicateexpression.md): A component expression that makes up part of a predicate.
- [StandardPredicateExpression](standardpredicateexpression.md): A component expression that makes up part of a predicate, and that’s supported by the standard predicate type.
- [PredicateExpressions](predicateexpressions.md): The expressions that make up a predicate.
- [PredicateBindings](predicatebindings.md): A mapping from a predicates’s input variables to their values.
- [NSPredicate](nspredicate.md): A definition of logical conditions for constraining a search for a fetch or for in-memory filtering.
- [NSExpression](nsexpression.md): An expression for use in a comparison predicate.
- [NSComparisonPredicate](nscomparisonpredicate.md): A specialized predicate for comparing expressions.
- [NSCompoundPredicate](nscompoundpredicate.md): A specialized predicate that evaluates logical combinations of other predicates.

### Sorting

- [NSSortDescriptor](nssortdescriptor.md): An immutable description of how to order a collection of objects according to a property common to all the objects.
- [ComparisonResult](comparisonresult.md): Constants that indicate sort order.
- [SortDescriptor](sortdescriptor.md): A serializable description of how to sort numerics and strings.
- [SortComparator](sortcomparator.md): A comparison algorithm for a specified type.
- [ComparableComparator](comparablecomparator.md): A comparator that compares types according to their conformance to the comparable protocol.
- [KeyPathComparator](keypathcomparator.md): A comparator that uses another sort comparator to provide the comparison of values at a key path.
- [SortOrder](sortorder.md): The orderings that you can perform sorts with.

## See Also

### Fundamentals

- [Numbers, Data, and Basic Values](numbers-data-and-basic-values.md): Work with primitive values and other fundamental types used throughout Cocoa.
- [Strings and Text](strings-and-text.md): Create and process strings of Unicode characters, use regular expressions to find patterns, and perform natural language analysis of text.
- [Collections](collections.md): Use arrays, dictionaries, sets, and specialized collections to store and iterate groups of objects or values.
- [Dates and Times](dates-and-times.md): Compare dates and times, and perform calendar and time zone calculations.
- [Units and Measurement](units-and-measurement.md): Label numeric quantities with physical dimensions to allow locale-aware formatting and conversion between related units.
- [Data Formatting](data-formatting.md): Convert numbers, dates, measurements, and other values to and from locale-aware string representations.

# Filters and Sorting (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

Use predicates, expressions, and sort descriptors to examine elements in collections and other services.

## Topics

### Filltering

- [NSPredicate](nspredicate.md): A definition of logical conditions for constraining a search for a fetch or for in-memory filtering.
- [NSExpression](nsexpression.md): An expression for use in a comparison predicate.
- [NSComparisonPredicate](nscomparisonpredicate.md): A specialized predicate for comparing expressions.
- [NSCompoundPredicate](nscompoundpredicate.md): A specialized predicate that evaluates logical combinations of other predicates.

### Sorting

- [NSSortDescriptor](nssortdescriptor.md): An immutable description of how to order a collection of objects according to a property common to all the objects.
- [NSComparisonResult](comparisonresult.md): Constants that indicate sort order.

## See Also

### Fundamentals

- [Numbers, Data, and Basic Values](numbers-data-and-basic-values.md): Work with primitive values and other fundamental types used throughout Cocoa.
- [Strings and Text](strings-and-text.md): Create and process strings of Unicode characters, use regular expressions to find patterns, and perform natural language analysis of text.
- [Collections](collections.md): Use arrays, dictionaries, sets, and specialized collections to store and iterate groups of objects or values.
- [Dates and Times](dates-and-times.md): Compare dates and times, and perform calendar and time zone calculations.
- [Units and Measurement](units-and-measurement.md): Label numeric quantities with physical dimensions to allow locale-aware formatting and conversion between related units.
- [Data Formatting](data-formatting.md): Convert numbers, dates, measurements, and other values to and from locale-aware string representations.
