> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entityrotationgesturerecognizer/touchesbegan(_:with:)](https://developer.apple.com/documentation/realitykit/entityrotationgesturerecognizer/touchesbegan(_:with:))

# touchesBegan(\_:with:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

Sent to the gesture recognizer when one or more fingers touch down on the associated entity.

## Declaration

```swift
@MainActor @preconcurrency override dynamic func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent)
```

## Parameters

- `touches`: A set of `UITouch` instances in the event represented by `event` that represent the touches in the `UITouch.Phase.began` phase.
- `event`: A `UIEvent` object representing the event to which the touches belong.

## See Also

### Using the recognizer

- [entity](entity.md): The entity the receiver is associated with
- [canPrevent(\_:)](canprevent%28__%29.md)
