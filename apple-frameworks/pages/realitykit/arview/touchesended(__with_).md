> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/touchesended(_:with:)](https://developer.apple.com/documentation/realitykit/arview/touchesended(_:with:))

# touchesEnded(\_:with:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 26.0+

Tells the view when one or more fingers are raised from the view.

## Declaration

```swift
@MainActor @preconcurrency override dynamic func touchesEnded(_ touches: Set<UITouch>, with event: UIEvent?)
```

## Parameters

- `touches`: A set of `UITouch` instances that represent the touches whose values changed. These touches all belong to the specified `event`. For touches in a view, this set contains only one touch by default. To receive multiple touches, set the view’s [isMultipleTouchEnabled](../../uikit/uiview/ismultipletouchenabled.md) property to `true`.
- `event`: The event to which the touches belong.

<a id="discussion"></a>

## Discussion

See [touchesEnded(\_:with:)](../entitytranslationgesturerecognizer/touchesended%28__with_%29.md) for more information.

## See Also

### Handling touch input

- [touchesBegan(\_:with:)](touchesbegan%28__with_%29.md): Tells the view that one or more new touches occurred.
- [touchesMoved(\_:with:)](touchesmoved%28__with_%29.md): Tells the view when one or more touches associated with an event changed.
- [touchesCancelled(\_:with:)](touchescancelled%28__with_%29.md): Tells the view when a system event (such as a system alert) cancels a touch sequence.
