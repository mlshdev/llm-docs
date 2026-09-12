> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/actionanimation/offset](https://developer.apple.com/documentation/realitykit/actionanimation/offset)

# offset

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The time, in seconds, at which the animation begins within the duration.

## Declaration

```swift
var offset: TimeInterval { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `0`, which indicates that the animation plays with no offset. Setting a value for this property moves the animation data along the timeline and doesn’t change timing. If you set a `AnimationAction/fillMode` other than [none](../animationfillmode/none.md), the animation fills the vacant area created by the offset according to the characteristics of the specified fill mode.
