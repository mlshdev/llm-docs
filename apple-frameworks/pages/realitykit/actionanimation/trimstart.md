> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/actionanimation/trimstart](https://developer.apple.com/documentation/realitykit/actionanimation/trimstart)

# trimStart

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The optional time, in seconds, at which the animation plays.

## Declaration

```swift
var trimStart: TimeInterval? { get set }
```

<a id="discussion"></a>

## Discussion

This property is `nil` by default, which plays the animation with `time` = `0`. If you set a value, the animation edits the duration according to the specified beginning time.

If you set a negative value for this property, the duration increases and the additional animation data fills in based on the [fillMode](../animationview/fillmode.md) you choose.
