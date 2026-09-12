> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/poseselector/applied(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/poseselector/applied(to:eventhandler:))

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Select a pose if multiple poses are detected on the same frame.

## Declaration

```swift
func applied(to input: [Pose], eventHandler: EventHandler? = nil) -> Pose
```

## Parameters

- `input`: An array of poses.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

A selected pose based on the strategy.
