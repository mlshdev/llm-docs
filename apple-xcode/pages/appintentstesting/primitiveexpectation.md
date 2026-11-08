> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/primitiveexpectation

# PrimitiveExpectation

**Framework:** App Intents Testing  
**Kind:** Structure  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

A value expectation that checks whether a value is present or whether its string content matches.

## Declaration

```swift
struct PrimitiveExpectation
```

<a id="overview"></a>

## Overview

Use a primitive expectation to require that an intent parameter, app entity property, or intent result has a value or has no value, or to check the content of a string value. String comparisons are exact and case-sensitive. A string expectation on a non-string value isn’t satisfied.

You don’t create a primitive expectation directly. Use [isNil](intentvalueexpectation/isnil.md), [notNil](intentvalueexpectation/notnil.md), [contains(\_:)](intentvalueexpectation/contains%28__%29.md), [contains(regex:)](intentvalueexpectation/contains%28regex_%29.md), or [equals(\_:)](intentvalueexpectation/equals%28__%29.md) instead. Passing `nil` as an `expect` argument is the same as leaving out its label: the expectation doesn’t check the value.

The following example expects an event with a title that contains “NASA”, a location, and no end date:

```swift
let createEventIntentDefinition = definitions.intents["CreateEventIntent"]
let expectation = createEventIntentDefinition.expect(
    title: .contains("NASA"),
    location: .notNil,
    endDate: .isNil
)
```

## Relationships

### Conforms To

- [IntentValueExpectation](intentvalueexpectation.md)
- [ResolvableIntentValueExpectation](resolvableintentvalueexpectation.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
