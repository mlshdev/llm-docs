> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/immersionstyle/progressive(aspectratio:)](https://developer.apple.com/documentation/swiftui/immersionstyle/progressive(aspectratio:))

# progressive(aspectRatio:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** macOS 26.0+ · visionOS 26.0+

An immersion style that displays unbounded content that partially replaces passthrough video.

## Declaration

```swift
static func progressive(aspectRatio: ProgressiveImmersionAspectRatio) -> ProgressiveImmersionStyle
```

## Parameters

- `aspectRatio`: The aspect ratio of the portal.

<a id="discussion"></a>

## Discussion

Use the [immersionStyle(selection:in:)](../scene/immersionstyle%28selection_in_%29.md) scene modifier to specify this style for an [ImmersiveSpace](../immersivespace.md).

The immersion style affects how windows interact with virtual objects in the environment. In `progressive` immersion, windows always render in front of virtual content, no matter how someone positions the window or the content. This helps people to avoid losing track of windows behind virtual content when passthrough is off.

The system initially uses a portal effect that replaces passthrough in a portion of the field of view. People can interactively adjust the size of the portal by rotating the Digital Crown, including down to a minimum amount of immersion defined by the app and up to the defined maximum amount of immersion.
