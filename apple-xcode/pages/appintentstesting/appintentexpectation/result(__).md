> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/appintentexpectation/result(_:)

# result(\_:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

Returns an intent expectation that also requires the intent’s result to satisfy the value expectation you specify.

## Declaration

```swift
func result(_ resultExpectation: (any IntentValueExpectation)?) -> AppIntentExpectation
```

## Parameters

- `resultExpectation`: The value expectation for the intent’s result. Pass [isNil](../intentvalueexpectation/isnil.md) to expect no result, or `nil` to leave the result unchecked.

<a id="return-value"></a>

## Return Value

An intent expectation that checks the same parameters and uses `resultExpectation` for the result, replacing any earlier result expectation.

<a id="discussion"></a>

## Discussion

Call this method after [expect](../appintentdefinition/expect.md) to check an intent’s parameters and its result together:

```swift
let expectation = createEventIntentDefinition
    .expect(title: .contains("NASA"))
    .result(eventEntityDefinition)
```
