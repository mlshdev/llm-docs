> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/appintentexpectationproviding

# AppIntentExpectationProviding

**Framework:** App Intents Testing  
**Kind:** Protocol  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

A type that describes the app intent you expect, including its type and, optionally, its parameter values and result.

## Declaration

```swift
protocol AppIntentExpectationProviding : Sendable
```

<a id="overview"></a>

## Overview

An intent definition on its own expects any intent of its type, whatever its parameters are. Call [expect](appintentdefinition/expect.md) to also check parameter values, and [result(\_:)](appintentdefinition/result%28__%29.md) or [result(\_:)](appintentexpectation/result%28__%29.md) to check the result. Check an intent with [isSatisfied(by:result:)](appintentexpectationproviding/issatisfied%28by_result_%29.md), or pass the expectation to a framework that takes intent expectations.

You get intent expectations from intent definitions. Don’t declare new conformances to this protocol.

For example, expect an intent with a title that contains a substring:

```swift
let expectation = createEventIntentDefinition.expect(
    title: .contains("NASA")
)
let isSatisfied = try await expectation.isSatisfied(by: intent)
```

## Topics

### Instance Methods

- [isSatisfied(by:result:)](appintentexpectationproviding/issatisfied%28by_result_%29.md): Beta. Returns a Boolean value that indicates whether an intent and its optional result meet the requirements of the expectation.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [AppIntentDefinition](appintentdefinition.md)
- [AppIntentExpectation](appintentexpectation.md)
