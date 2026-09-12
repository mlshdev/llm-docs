> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/humanbodyactionperiodpredictor/applied(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/humanbodyactionperiodpredictor/applied(to:eventhandler:))

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Predicts human body action periods from an array of poses.

## Declaration

```swift
func applied(to input: [Pose], eventHandler: EventHandler? = nil) async throws -> [HumanBodyActionPeriodPredictor.Prediction]
```

## Parameters

- `input`: An async sequence of pose windows.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

An async sequence of predictions.

## See Also

### Performing the transformation

- [HumanBodyActionPeriodPredictor.Prediction](prediction.md): A human body action period prediction.
