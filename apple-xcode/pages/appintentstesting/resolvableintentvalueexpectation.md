> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-6bb1532b03d3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/resolvableintentvalueexpectation

# ResolvableIntentValueExpectation

**Framework:** App Intents Testing  
**Kind:** Protocol  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

A value expectation that checks a value as the caller passed it, before any query runs.

## Declaration

```swift
protocol ResolvableIntentValueExpectation : IntentValueExpectation
```

<a id="overview"></a>

## Overview

Intent parameters hold values as the caller passed them, so [expect](appintentdefinition/expect.md) accepts only expectations that conform to this protocol.

You get resolvable expectations from the framework, such as [contains(\_:)](intentvalueexpectation/contains%28__%29.md) and [isNil](intentvalueexpectation/isnil.md). Don’t declare new conformances to this protocol.

## Relationships

### Inherits From

- [IntentValueExpectation](intentvalueexpectation.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [ResolvableAppEntityExpectation](resolvableappentityexpectation.md)

### Conforming Types

- [AppEntityDefinition](appentitydefinition.md)
- [AppEntityIdentifierExpectation](appentityidentifierexpectation.md)
- [PredicateExpectation](predicateexpectation.md)
- [PrimitiveExpectation](primitiveexpectation.md)
