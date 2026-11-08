> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/intentvalueexpectation/issatisfied(by:)

# isSatisfied(by:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

Returns a Boolean value that indicates whether a value meets the requirements of the expectation.

## Declaration

```swift
func isSatisfied(by value: (any IntentValueExpressing)?) async throws -> Bool
```

## Parameters

- `value`: The value to check, or `nil` for an absent value.

<a id="return-value"></a>

## Return Value

`true` if the value satisfies the expectation; otherwise, `false`.

<a id="discussion"></a>

## Discussion

Use this method to check an intent parameter value, an app entity property value, an intent result value, or an entity on its own. For an entity, the method checks each property independently; a property that the method can’t evaluate, such as a value of the wrong type, isn’t satisfied and doesn’t stop the method from checking the others.
