> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/predicateexpectation

# PredicateExpectation

**Framework:** App Intents Testing  
**Kind:** Structure  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

A value expectation that checks a value of any convertible type against a predicate.

## Declaration

```swift
struct PredicateExpectation
```

<a id="overview"></a>

## Overview

Use a predicate expectation for values that aren’t strings, such as numbers, dates, measurements, people, or arrays of these. The predicate’s input can be any type that conforms to `IntentValueConvertible`. A predicate whose input type doesn’t match the value’s type isn’t satisfied.

The predicate’s input type determines how a missing value is handled. A predicate on a non-optional type, like `Predicate<Date>`, isn’t satisfied when the value is missing. A predicate on an optional type, like `Predicate<Date?>`, receives `nil` and decides for itself.

You don’t create a predicate expectation directly. Use [matches(\_:requirement:)](intentvalueexpectation/matches%28__requirement_%29.md) instead:

```swift
let createEventIntentDefinition = definitions.intents["CreateEventIntent"]
let expectation = createEventIntentDefinition.expect(
    attendeeCount: .matches(#Predicate<Int> { $0 >= 3 }),
    endDate: .matches(#Predicate<Date?> { $0 == nil || $0! > deadline })
)
```

## Relationships

### Conforms To

- [IntentValueExpectation](intentvalueexpectation.md)
- [ResolvableIntentValueExpectation](resolvableintentvalueexpectation.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
