> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/appentityexpectation

# AppEntityExpectation

**Framework:** App Intents Testing  
**Kind:** Structure  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

An expectation that checks an app entity’s type, its property values, and, optionally, its instance identifier.

## Declaration

```swift
struct AppEntityExpectation
```

<a id="overview"></a>

## Overview

An entity expectation checks an entity’s properties, such as those of an entity that an intent returns. It checks each property independently, and doesn’t check properties that have no expectation.

You don’t create an entity expectation directly. Call `expect` on an [AppEntityDefinition](appentitydefinition.md) to check an entity’s properties, or on an [AppEntityIdentifierExpectation](appentityidentifierexpectation.md) to also check its identifier:

```swift
let expectation = createEventIntentDefinition.result(
    eventEntityDefinition.expect(
        title: .contains("NASA"),
        endDate: .isNil
    )
)
```

Pass an entity expectation to an intent’s result expectation, or wherever a property holds an entity. Intent parameters don’t accept entity expectations, because parameters hold entities as the caller passed them, before any entity query runs, so their properties aren’t available. To check an entity on its own, call [isSatisfied(by:)](intentvalueexpectation/issatisfied%28by_%29.md).

## Relationships

### Conforms To

- [AppEntityExpectationProviding](appentityexpectationproviding.md)
- [IntentValueExpectation](intentvalueexpectation.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
