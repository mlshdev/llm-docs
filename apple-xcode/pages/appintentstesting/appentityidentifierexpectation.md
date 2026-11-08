> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/appentityidentifierexpectation

# AppEntityIdentifierExpectation

**Framework:** App Intents Testing  
**Kind:** Structure  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

An expectation that checks whether an app entity is a specific instance by comparing its type and identifier.

## Declaration

```swift
struct AppEntityIdentifierExpectation
```

<a id="overview"></a>

## Overview

An identifier expectation checks which entity instance a value holds. You can pass it as an intent parameter expectation, as an intent result expectation, or wherever a property holds an entity.

You don’t create an identifier expectation directly. Call [expectIdentifier(\_:)](appentitydefinition/expectidentifier%28__%29.md) instead:

```swift
let workCalendarExpectation = createEventIntentDefinition.expect(
    calendar: calendarEntityDefinition.expectIdentifier(
        "edea53fb-90b7-4481-afc7-d86e2dd0d27d"
    )
)
```

To also check the instance’s properties, call `expect` on it, which returns an [AppEntityExpectation](appentityexpectation.md).

## Topics

### Instance Properties

- [expect](appentityidentifierexpectation/expect.md): Beta. A callable that creates an entity expectation for the current instance from value expectations for its properties.

## Relationships

### Conforms To

- [AppEntityExpectationProviding](appentityexpectationproviding.md)
- [IntentValueExpectation](intentvalueexpectation.md)
- [ResolvableAppEntityExpectation](resolvableappentityexpectation.md)
- [ResolvableIntentValueExpectation](resolvableintentvalueexpectation.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
