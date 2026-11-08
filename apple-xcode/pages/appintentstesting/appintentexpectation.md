> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/appintentexpectation

# AppIntentExpectation

**Framework:** App Intents Testing  
**Kind:** Structure  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

An expectation that checks an app intent’s parameters and, optionally, the result the intent returns.

## Declaration

```swift
struct AppIntentExpectation
```

<a id="overview"></a>

## Overview

Use an app intent expectation to declare what you expect of an intent before you have one, then check an intent against it or pass it to a framework that takes intent expectations. The expectation checks only the parameters you specify, and checks the result only when you add a result expectation. Checking an expectation doesn’t perform the intent.

You don’t create an app intent expectation directly. Call [expect](appintentdefinition/expect.md) or [result(\_:)](appintentdefinition/result%28__%29.md) on an intent definition, and optionally call [result(\_:)](appintentexpectation/result%28__%29.md) to add an expectation on the result. To check an intent and its result, call [isSatisfied(by:result:)](appintentexpectationproviding/issatisfied%28by_result_%29.md):

```swift
let expectation = createEventIntentDefinition
    .expect(title: .contains("NASA"))
    .result(eventEntityDefinition)

let result = try await intent.run()
let isSatisfied = try await expectation.isSatisfied(
    by: intent,
    result: result
)
```

## Topics

### Instance Methods

- [result(\_:)](appintentexpectation/result%28__%29.md): Beta. Returns an intent expectation that also requires the intent’s result to satisfy the value expectation you specify.

## Relationships

### Conforms To

- [AppIntentExpectationProviding](appintentexpectationproviding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
