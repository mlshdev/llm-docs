> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/immersivecontentbrightness](https://developer.apple.com/documentation/swiftui/immersivecontentbrightness)

# ImmersiveContentBrightness

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 1.0+

The content brightness of an immersive space.

## Declaration

```swift
struct ImmersiveContentBrightness
```

<a id="overview"></a>

## Overview

Use a value of this type as an input to the [immersiveContentBrightness(\_:)](scene/immersivecontentbrightness%28__%29.md) scene modifier to indicate the ambient content brightness of an [ImmersiveSpace](immersivespace.md).

When you do this to create an environment that’s suitable for video playback, use one of the standard brightness values like [bright](immersivecontentbrightness/bright.md), [dim](immersivecontentbrightness/dim.md), or [dark](immersivecontentbrightness/dark.md) to provide good results for most use cases. To optimize further, you can create a custom brightness using a normalized value that expresses the linear brightness ratio between a standard dynamic range white video frame and the background that surrounds the player window.

## Topics

### Getting brightness levels

- [automatic](immersivecontentbrightness/automatic.md): The default content brightness.
- [dark](immersivecontentbrightness/dark.md): A dark content brightness.
- [dim](immersivecontentbrightness/dim.md): A dimmed content brightness.
- [bright](immersivecontentbrightness/bright.md): A bright content brightness.
- [custom(\_:)](immersivecontentbrightness/custom%28__%29.md): Creates a content brightness with a custom value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Adjusting content brightness

- [immersiveContentBrightness(\_:)](scene/immersivecontentbrightness%28__%29.md): Sets the content brightness of an immersive space.
