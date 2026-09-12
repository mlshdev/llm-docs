> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/broadcastoptions/mirroredvideo](https://developer.apple.com/documentation/groupactivities/broadcastoptions/mirroredvideo)

# mirroredVideo

**Framework:** Group Activities  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An option to mirror video on its vertical axis.

## Declaration

```swift
static let mirroredVideo: BroadcastOptions
```

<a id="discussion"></a>

## Discussion

Include this option when your activity includes left-right directions in the video for the FaceTime call. The option mirrors the video along the vertical axis, which makes it easy for participants to mimic an instuctor’s movements. Without mirroring, views move in the opposite direction of the instructor, which can be jarring.
