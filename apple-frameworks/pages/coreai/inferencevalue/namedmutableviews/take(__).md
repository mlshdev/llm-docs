> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencevalue/namedmutableviews/take(_:)](https://developer.apple.com/documentation/coreai/inferencevalue/namedmutableviews/take(_:))

# take(\_:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Takes the mutable view for the specified value.

## Declaration

```swift
mutating func take(_ valueName: String) -> InferenceValue.MutableView?
```

## Parameters

- `valueName`: The name of the value to take.

<a id="return-value"></a>

## Return Value

A mutable view of the value, or `nil` if no value with the specified name exists.

<a id="discussion"></a>

## Discussion

Each value can only be taken once. Requesting the same value again produces a fatal error.
