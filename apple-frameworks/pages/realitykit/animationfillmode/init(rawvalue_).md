> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationfillmode/init(rawvalue:)](https://developer.apple.com/documentation/realitykit/animationfillmode/init(rawvalue:))

# init(rawValue:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Creates a fill mode from its backing data type.

## Declaration

```swift
init(rawValue: Int8)
```

## Parameters

- `rawValue`: The backing data value for the fill mode.

<a id="discussion"></a>

## Discussion

Use this initializer to unarchive a fill mode from data:

```swift
let rawValue = unarchiveNextInt8(from: data) // Pseudo code.
let fillMode = AnimationFillMode(rawValue: rawValue)
```

## See Also

### Choosing a fill mode

- [none](none.md): An option that indicates an animation doesn’t display frame data outside of its normal duration.
- [forwards](forwards.md): An option that freezes the last frame of the animation until it stops.
- [backwards](backwards.md): An option that shows the first animation frame while playback progresses to the beginning position.
- [both](both.md): An option that displays the animation’s initial frame or final frame when playback occurs outside of the normal duration.
