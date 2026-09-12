> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/objectcapturesession/numberofshotstaken](https://developer.apple.com/documentation/realitykit/objectcapturesession/numberofshotstaken)

# numberOfShotsTaken

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+

The number of shots taken in the entire capture session so far, including both automatic capture and manual capture.

## Declaration

```swift
@MainActor var numberOfShotsTaken: Int { get }
```

<a id="discussion"></a>

## Discussion

This number includes shots from all scan passes, flipped or unflipped.  It can be directly compared to the `maximumNumberOfInputImages` to keep track of the memory limits required for reconstruction of this session on-device and whether over-capture mode limits are reached for a given session.
