> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/intentvalueexpectationcallable

# IntentValueExpectationCallable

**Framework:** App Intents Testing  
**Kind:** Structure  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

A value that you call with labeled value expectations to create an expectation on the corresponding parameters or properties.

## Declaration

```swift
@dynamicCallable struct IntentValueExpectationCallable<Argument, Expectation> where Argument : Sendable
```

<a id="overview"></a>

## Overview

A callable lets you write an expectation as a single call, where each argument label names a parameter or property and each argument is the value expectation for it. The callable’s argument type determines which value expectations the arguments accept, and its expectation type is the expectation the call creates.

You don’t create a callable directly. Get one from the `expect` property of a definition, such as [expect](appintentdefinition/expect.md) or [expect](appentitydefinition/expect.md), and call it like a method:

```swift
let createEventIntentDefinition = definitions.intents["CreateEventIntent"]
let expectation = createEventIntentDefinition.expect(
    title: .contains("NASA")
)
```

## Topics

### Instance Methods

- [dynamicallyCall(withKeywordArguments:)](intentvalueexpectationcallable/dynamicallycall%28withkeywordarguments_%29.md): Beta. Creates an expectation from value expectations that you label with parameter or property names.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
