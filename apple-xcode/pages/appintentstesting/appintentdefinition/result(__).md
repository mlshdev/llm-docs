> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/appintentdefinition/result(_:)

# result(\_:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

Creates an intent expectation that checks the result the intent returns, but none of its parameters.

## Declaration

```swift
func result(_ resultExpectation: any IntentValueExpectation) -> AppIntentExpectation
```

## Parameters

- `resultExpectation`: The value expectation for the intent’s result, such as an [AppEntityExpectation](../appentityexpectation.md). Pass [isNil](../intentvalueexpectation/isnil.md) to expect no result.

<a id="return-value"></a>

## Return Value

An intent expectation that checks only the intent’s result.

<a id="discussion"></a>

## Discussion

To check the result, perform the intent and pass both the intent and its result to [isSatisfied(by:result:)](../appintentexpectationproviding/issatisfied%28by_result_%29.md). If you omit the result, the framework treats the intent as returning no value. For example:

```swift
let createEventIntentDefinition = definitions.intents["CreateEventIntent"]
let intent = createEventIntentDefinition.makeIntent(title: "NASA launch")
let result = try await intent.run()

let expectation = createEventIntentDefinition.result(.notNil)
let isSatisfied = try await expectation.isSatisfied(
    by: intent,
    result: result
)
```
