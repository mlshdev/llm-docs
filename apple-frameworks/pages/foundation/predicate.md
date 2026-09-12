> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/predicate](https://developer.apple.com/documentation/foundation/predicate)

# Predicate

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A logical condition used to test a set of input values for searching or filtering.

## Declaration

```swift
struct Predicate<each Input>
```

<a id="overview"></a>

## Overview

A predicate is a logical condition that evaluates to a Boolean value (true or false).  You use predicates for operations like filtering a collection or searching for matching elements.

To create a predicate, use the `Predicate(_:)` macro.  For example:

```swift
let messagePredicate = #Predicate<Message> { message in
    message.length < 100 && message.sender == "Jeremy"
}
```

In the example above, the closure that contains the predicate’s conditions takes one argument — the value being tested. Even though you write the predicate using a closure, the macro transforms that closure into a predicate when you compile. The code in the closure isn’t run as part of your program.

In the predicate’s definition, you can use the following operations:

- Arithmetic (`+`, `-`, `*`, `/`, `%`)
- Unary minus (`-`)
- Range (`...`, `..<`)
- Comparison (`<`, `<=`, `>`, `>=`, `==`, `!=`)
- Ternary conditional (`?:`)
- Conditional expressions
- Boolean logic (`&&`, `||`, `!`)
- Swift optionals (`?`, `??`, `!`, `flatMap(_:)`, `if`-`let` expressions)
- Types (`as`, `as?`, `as!`, `is`)
- Sequence operations (`allSatisfy()`, `filter()`, `contains()`, `contains(where:)`, `starts(with:)`, `max()`, `min()`)
- Subscript and member access (`[]`, `.`)
- String comparisons (`contains(_:)`, `localizedStandardContains(_:)`, `caseInsensitiveCompare(_:)`, `localizedCompare(_:)`)

A predicate can’t contain any nested declarations, use any flow control such as `for` loops, or modify variables from its enclosing scope. However, it can refer to constants that are in scope.

To express more complex queries, you can nest expressions in the predicate:

```swift
let messagePredicate = #Predicate<Message> { message in
    message.recipients.contains {
        $0.firstName == message.sender.firstName
    }
}
```

You can safely encode and decode predicates, pass predicates across concurrency boundaries, and load a predicate from a file. To define a list of types and key paths that are allowed when reading an archived predicate, use [PredicateCodableConfiguration](predicatecodableconfiguration.md).

You can transform a predicate into another representation — for example, to express a predicate in another query language, or to create a modified predicate — using the [expression](predicate/expression.md) property.

## Topics

### Inspecting and transforming a predicate

- [expression](predicate/expression.md): The component expressions of the predicate.

### Initializers

- [init(\_:)](predicate/init%28__%29.md)
- [init(all:)](predicate/init%28all_%29.md)
- [init(any:)](predicate/init%28any_%29.md)

### Instance Properties

- [variable](predicate/variable.md)

### Instance Methods

- [evaluate(\_:)](predicate/evaluate%28__%29.md)

### Type Properties

- [false](predicate/false.md)
- [true](predicate/true.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [DecodableWithConfiguration](decodablewithconfiguration.md)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [EncodableWithConfiguration](encodablewithconfiguration.md)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Filltering

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
