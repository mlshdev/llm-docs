> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiomixgroup/speed](https://developer.apple.com/documentation/realitykit/audiomixgroup/speed)

# speed

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The rate of playback for an audio mix group.

## Declaration

```swift
var speed: Double
```

<a id="discussion"></a>

## Discussion

The system limits the rate of playback to the range of `[0.25, 4]`. The default speed is `1`, which is equivalent to a normal playback rate.

> **Note**

> [AudioGeneratorController](../audiogeneratorcontroller.md) ignores this value.
