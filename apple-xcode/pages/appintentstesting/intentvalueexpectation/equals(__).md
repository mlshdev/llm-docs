> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/intentvalueexpectation/equals(_:)

# equals(\_:)

**Framework:** App Intents Testing  
**Kind:** Type Method  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

Creates an expectation that requires the value to be a string that equals a specified string.

## Declaration

```swift
static func equals(_ value: String) -> Self
```

## Parameters

- `value`: The string to compare the value to.

<a id="return-value"></a>

## Return Value

An expectation that compares a string value to `value`.

<a id="discussion"></a>

## Discussion

The comparison is exact and case-sensitive. A value that isn’t a string doesn’t satisfy the expectation.
