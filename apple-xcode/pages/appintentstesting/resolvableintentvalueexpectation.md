> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
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

Intent parameters hold values as the caller passed them, so [expect](appintentdefinition/expect.md) accepts only expectations that conform to this protocol. For an entity parameter, you can check its type with an [AppEntityDefinition](appentitydefinition.md) or its identifier with an [AppEntityIdentifierExpectation](appentityidentifierexpectation.md), but not its properties, because no query has run to populate them.

You get resolvable expectations from the static members that the framework provides, such as [contains(\_:)](intentvalueexpectation/contains%28__%29.md) and [isNil](intentvalueexpectation/isnil.md), and from entity definitions and identifier expectations. Don’t declare new conformances to this protocol.

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
