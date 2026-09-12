> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/predicatecodableconfiguration](https://developer.apple.com/documentation/foundation/predicatecodableconfiguration)

# PredicateCodableConfiguration

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A specification of the expected types and key paths found in an archived predicate.

## Declaration

```swift
struct PredicateCodableConfiguration
```

<a id="overview"></a>

## Overview

Use this configuration when encoding and decoding a predicate to restrict what that predicate can contain.  If a predicate contains data types or keypaths that aren’t allowed by the configuration, the encoding or decoding process throws an error.

```swift
var configuration = PredicateCodableConfiguration.standardConfiguration
configuration.allowType(Message.self, identifier: "MyApp.Message")
configuration.allowType(Person.self, identifier: "MyApp.Person")
configuration.allowKeyPath(\Message.sender, identifier: "MyApp.Message.sender")
configuration.allowKeyPath(\Person.firstName, identifier: "MyApp.Person.firstName")
configuration.allowKeyPath(\Person.lastName, identifier: "MyApp.Person.lastName")

struct MyRequest: Codable {
    let predicate: Predicate<Message>
    
    func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(predicate, forKey: .predicate, configuration: configuration)
    }
    
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        predicate = try container.decode(Predicate<Message>.self, forKey: .predicate, configuration: configuration)
    }
}
```

## Topics

### Creating a configuration

- [init()](predicatecodableconfiguration/init%28%29.md)
- [standardConfiguration](predicatecodableconfiguration/standardconfiguration.md)

### Allowing types and key paths

- [allow(\_:)](predicatecodableconfiguration/allow%28__%29.md)
- [allowKeyPathsForPropertiesProvided(by:recursive:)](predicatecodableconfiguration/allowkeypathsforpropertiesprovided%28by_recursive_%29.md)
- [allowPartialType(\_:identifier:)](predicatecodableconfiguration/allowpartialtype%28__identifier_%29.md)
- [allowType(\_:identifier:)](predicatecodableconfiguration/allowtype%28__identifier_%29.md)

### Disallowing types and key paths

- [disallowKeyPathsForPropertiesProvided(by:recursive:)](predicatecodableconfiguration/disallowkeypathsforpropertiesprovided%28by_recursive_%29.md)
- [disallowPartialType(\_:)](predicatecodableconfiguration/disallowpartialtype%28__%29.md)
- [disallowType(\_:)](predicatecodableconfiguration/disallowtype%28__%29.md)

### Instance Methods

- [allowKeyPath(\_:identifier:)](predicatecodableconfiguration/allowkeypath%28__identifier_%29.md)
- [disallowKeyPath(\_:)](predicatecodableconfiguration/disallowkeypath%28__%29.md)

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Filltering

- [Predicate](predicate.md): A logical condition used to test a set of input values for searching or filtering.
- [PredicateError](predicateerror.md): An error thrown while evaluating a predicate.
- [PredicateCodableKeyPathProviding](predicatecodablekeypathproviding.md): A type that provides the expected key paths found in an archived predicate.
- [PredicateExpression](predicateexpression.md): A component expression that makes up part of a predicate.
- [StandardPredicateExpression](standardpredicateexpression.md): A component expression that makes up part of a predicate, and that’s supported by the standard predicate type.
- [PredicateExpressions](predicateexpressions.md): The expressions that make up a predicate.
- [PredicateBindings](predicatebindings.md): A mapping from a predicates’s input variables to their values.
- [NSPredicate](nspredicate.md): A definition of logical conditions for constraining a search for a fetch or for in-memory filtering.
- [NSExpression](nsexpression.md): An expression for use in a comparison predicate.
- [NSComparisonPredicate](nscomparisonpredicate.md): A specialized predicate for comparing expressions.
- [NSCompoundPredicate](nscompoundpredicate.md): A specialized predicate that evaluates logical combinations of other predicates.
