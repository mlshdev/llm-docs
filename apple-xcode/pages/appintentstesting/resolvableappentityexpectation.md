> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/resolvableappentityexpectation

# ResolvableAppEntityExpectation

**Framework:** App Intents Testing  
**Kind:** Protocol  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

An entity expectation that checks an app entity as the caller passed it, before any query runs.

## Declaration

```swift
protocol ResolvableAppEntityExpectation : AppEntityExpectationProviding, ResolvableIntentValueExpectation
```

<a id="overview"></a>

## Overview

No query runs to populate the entity parameters of an intent, so an entity parameter accepts only an expectation that conforms to this protocol, such as an [AppEntityDefinition](appentitydefinition.md) that checks the entity’s type or an [AppEntityIdentifierExpectation](appentityidentifierexpectation.md) that checks its identifier. An [AppEntityExpectation](appentityexpectation.md), which checks property values, doesn’t conform.

You get resolvable entity expectations from entity definitions. Don’t declare new conformances to this protocol.

## Relationships

### Inherits From

- [AppEntityExpectationProviding](appentityexpectationproviding.md)
- [IntentValueExpectation](intentvalueexpectation.md)
- [ResolvableIntentValueExpectation](resolvableintentvalueexpectation.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [AppEntityDefinition](appentitydefinition.md)
- [AppEntityIdentifierExpectation](appentityidentifierexpectation.md)
