> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/appentityexpectationproviding

# AppEntityExpectationProviding

**Framework:** App Intents Testing  
**Kind:** Protocol  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

A value expectation that checks an app entity’s type and, optionally, its identifier or property values.

## Declaration

```swift
protocol AppEntityExpectationProviding : IntentValueExpectation
```

<a id="overview"></a>

## Overview

An entity definition on its own expects any entity of its type. Call [expect](appentitydefinition/expect.md) to also check property values, or [expectIdentifier(\_:)](appentitydefinition/expectidentifier%28__%29.md) to expect a specific instance. Use entity expectations to check an intent result, a property that holds an entity, or an entity on its own with [isSatisfied(by:)](intentvalueexpectation/issatisfied%28by_%29.md).

You get entity expectations from entity definitions. Don’t declare new conformances to this protocol.

## Relationships

### Inherits From

- [IntentValueExpectation](intentvalueexpectation.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [ResolvableAppEntityExpectation](resolvableappentityexpectation.md)

### Conforming Types

- [AppEntityDefinition](appentitydefinition.md)
- [AppEntityExpectation](appentityexpectation.md)
- [AppEntityIdentifierExpectation](appentityidentifierexpectation.md)
