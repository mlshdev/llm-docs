> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/appintentexpectationproviding/issatisfied(by:result:)

# isSatisfied(by:result:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

Returns a Boolean value that indicates whether an intent and its optional result meet the requirements of the expectation.

## Declaration

```swift
func isSatisfied(by intent: AnyAppIntent, result: ResolvedIntentResult? = nil) async throws -> Bool
```

## Parameters

- `intent`: The intent to check.
- `result`: The result of performing the intent. If you omit this argument, the method treats the intent’s result as absent.

<a id="return-value"></a>

## Return Value

`true` if the intent and its result satisfy the expectation; otherwise, `false`.

<a id="discussion"></a>

## Discussion

Use this method to check an intent, and the result you get from performing it, against the expectation. Checking an expectation doesn’t perform the intent. The method checks each parameter independently; a parameter that the method can’t evaluate, such as a value of the wrong type, isn’t satisfied and doesn’t stop the method from checking the others.
