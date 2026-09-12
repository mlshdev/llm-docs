> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spatialaudiocomponent/directivity](https://developer.apple.com/documentation/realitykit/spatialaudiocomponent/directivity)

# directivity

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The radiation pattern for sound that an entity emits.

## Declaration

```swift
var directivity: Audio.Directivity
```

<a id="discussion"></a>

## Discussion

> **Note**

> You can’t update the `directivity` property dynamically. Set it before you prepare or play an audio resource on an entity.
