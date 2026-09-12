> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/actionanimation/trimend](https://developer.apple.com/documentation/realitykit/actionanimation/trimend)

# trimEnd

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The optional time, in seconds, at which the animation stops.

## Declaration

```swift
var trimEnd: TimeInterval? { get set }
```

<a id="discussion"></a>

## Discussion

This property is `nil` by default, which plays the animation until `time` = [duration](../animationgroup/duration.md). If you set a value, the animation edits the duration according to the specified ending time.
