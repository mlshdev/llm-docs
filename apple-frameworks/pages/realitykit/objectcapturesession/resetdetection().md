> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/objectcapturesession/resetdetection()](https://developer.apple.com/documentation/realitykit/objectcapturesession/resetdetection())

# resetDetection()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+

Moves the session state from `.detecting` back to `.ready` to reset the bounding box and prepare to select a new one with a new call to `startDetecting()`.

## Declaration

```swift
@discardableResult @MainActor func resetDetection() -> Bool
```

<a id="discussion"></a>

## Discussion

If the session is not in `.detecting` state this will return false and have no effect.

This call allows the object selection process to be restarted from scratch by the user if the wrong object is automatically selected or the user wants to discard manual bounding box edits and rerun the automatic selection process.
