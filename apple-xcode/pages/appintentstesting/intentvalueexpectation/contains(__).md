> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/intentvalueexpectation/contains(_:)

# contains(\_:)

**Framework:** App Intents Testing  
**Kind:** Type Method  
**Availability:** iOS 27.3+ beta · iPadOS 27.3+ beta · Mac Catalyst 27.3+ beta · macOS 27.3+ beta · tvOS 27.3+ beta · visionOS 27.3+ beta · watchOS 27.3+ beta

Creates an expectation that requires the value to be a string that contains a substring.

## Declaration

```swift
static func contains(_ substring: String) -> Self
```

## Parameters

- `substring`: The text to search for in the string.

<a id="return-value"></a>

## Return Value

An expectation that searches a string value for `substring`.

<a id="discussion"></a>

## Discussion

The comparison is exact and case-sensitive. A value that isn’t a string doesn’t satisfy the expectation.
