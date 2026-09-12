> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/jointsselector/applied(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/jointsselector/applied(to:eventhandler:))

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Select joints to be included in the pose. Ignored joints will be reset to zero in all fields.

## Declaration

```swift
func applied(to input: Pose, eventHandler: EventHandler? = nil) -> Pose
```

## Parameters

- `input`: A pose.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

A pose with the ignored joints set to zero.
