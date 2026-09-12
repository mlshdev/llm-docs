> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/objectcapturesession/usercompletedscanpass](https://developer.apple.com/documentation/realitykit/objectcapturesession/usercompletedscanpass)

# userCompletedScanPass

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+

This property starts out `false` at the start of a capture and will switch to `true` when the user has moved the device in a full circular scan pass around the bounding box of the target object and captured enough data to fill completely the capture dial.

## Declaration

```swift
@MainActor var userCompletedScanPass: Bool { get }
```

<a id="discussion"></a>

## Discussion

It is reset to `false` in a given capture session whenever either:

1. [beginNewScanPassAfterFlip()](beginnewscanpassafterflip%28%29.md) is called to start a new scan pass for a flipped object. or
2. [beginNewScanPass()](beginnewscanpass%28%29.md) is called to start a new scan pass on an unflipped object.
