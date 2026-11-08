> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/appintentdefinition/expect

# expect

**Framework:** App Intents Testing  
**Kind:** Instance Property  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

A callable that creates an intent expectation from value expectations for the intent’s parameters.

## Declaration

```swift
var expect: IntentValueExpectationCallable<any ResolvableIntentValueExpectation, AppIntentExpectation> { get }
```

<a id="discussion"></a>

## Discussion

Call `expect` with a labeled argument for each parameter you want to check. Each label names a parameter, and each argument is the value expectation for it. The order of the labels doesn’t matter. The expectation doesn’t check parameters you omit or pass `nil` for. Pass [isNil](../intentvalueexpectation/isnil.md) to expect a parameter to be absent. For example:

```swift
let createEventIntentDefinition = definitions.intents["CreateEventIntent"]
let expectation = createEventIntentDefinition.expect(
    title: .contains("NASA")
)
```

The framework checks each parameter as the caller passed it, before any entity query runs. An entity parameter accepts an entity definition or an [AppEntityIdentifierExpectation](../appentityidentifierexpectation.md), but not an [AppEntityExpectation](../appentityexpectation.md).

The framework matches labels to parameter names when it evaluates the expectation, not when your code compiles, so a misspelled label reads as a missing parameter.
