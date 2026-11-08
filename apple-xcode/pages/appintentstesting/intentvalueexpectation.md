> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/intentvalueexpectation

# IntentValueExpectation

**Framework:** App Intents Testing  
**Kind:** Protocol  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

A type that describes the value you expect for an intent parameter, an app entity property, or an intent result.

## Declaration

```swift
protocol IntentValueExpectation : Sendable
```

<a id="overview"></a>

## Overview

A value expectation states a requirement on a single value, such as a string that contains a substring, or a value that’s absent. Pass value expectations to [expect](appentitydefinition/expect.md) and [result(\_:)](appintentdefinition/result%28__%29.md) to build entity and intent expectations, or check a value directly with [isSatisfied(by:)](intentvalueexpectation/issatisfied%28by_%29.md). Intent parameters accept only [ResolvableIntentValueExpectation](resolvableintentvalueexpectation.md) values; see [expect](appintentdefinition/expect.md).

You get value expectations from the static members that the framework provides, such as [contains(\_:)](intentvalueexpectation/contains%28__%29.md), [isNil](intentvalueexpectation/isnil.md), and [matches(\_:requirement:)](intentvalueexpectation/matches%28__requirement_%29.md), and from entity definitions and entity expectations. Don’t declare new conformances to this protocol.

For example, check whether an entity from an intent result has a title that contains a substring:

```swift
let event: AnyAppEntity = try result.value
let expectation = eventEntityDefinition.expect(title: .contains("NASA"))
let isSatisfied = try await expectation.isSatisfied(by: event)
```

## Topics

### Instance Methods

- [isSatisfied(by:)](intentvalueexpectation/issatisfied%28by_%29.md): Beta. Returns a Boolean value that indicates whether a value meets the requirements of the expectation.

### Type Properties

- [isNil](intentvalueexpectation/isnil.md): Beta. Conforms when `Self` is `PrimitiveExpectation`. An expectation that requires a parameter, property, or result to have no value.
- [notNil](intentvalueexpectation/notnil.md): Beta. Conforms when `Self` is `PrimitiveExpectation`. An expectation that requires a parameter, property, or result to have a value.

### Type Methods

- [contains(\_:)](intentvalueexpectation/contains%28__%29.md): Beta. Conforms when `Self` is `PrimitiveExpectation`. Creates an expectation that requires the value to be a string that contains a substring.
- [contains(regex:)](intentvalueexpectation/contains%28regex_%29.md): Beta. Conforms when `Self` is `PrimitiveExpectation`. Creates an expectation that requires the value to be a string that contains a match for a regular expression.
- [equals(\_:)](intentvalueexpectation/equals%28__%29.md): Beta. Conforms when `Self` is `PrimitiveExpectation`. Creates an expectation that requires the value to be a string that equals a specified string.
- [matches(\_:requirement:)](intentvalueexpectation/matches%28__requirement_%29.md): Beta. Conforms when `Self` is `PredicateExpectation`. Creates an expectation that requires the value to satisfy a predicate, with an optional description of the check.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [AppEntityExpectationProviding](appentityexpectationproviding.md)
- [ResolvableAppEntityExpectation](resolvableappentityexpectation.md)
- [ResolvableIntentValueExpectation](resolvableintentvalueexpectation.md)

### Conforming Types

- [AppEntityDefinition](appentitydefinition.md)
- [AppEntityExpectation](appentityexpectation.md)
- [AppEntityIdentifierExpectation](appentityidentifierexpectation.md)
- [PredicateExpectation](predicateexpectation.md)
- [PrimitiveExpectation](primitiveexpectation.md)
