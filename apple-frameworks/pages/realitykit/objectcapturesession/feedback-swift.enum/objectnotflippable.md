> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/objectcapturesession/feedback-swift.enum/objectnotflippable](https://developer.apple.com/documentation/realitykit/objectcapturesession/feedback-swift.enum/objectnotflippable)

# ObjectCaptureSession.Feedback.objectNotFlippable

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+

It is not recommended to flip this object since is is unlikely the algorithm will be able to stitch the flipped orientation.  This is usually due to feature-less, low-texture objects.  In this case, multiple passes at different heights leaving object at its original orientation are recommended instead of flipping.

## Declaration

```swift
case objectNotFlippable
```
