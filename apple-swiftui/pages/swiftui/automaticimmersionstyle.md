> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/automaticimmersionstyle

# AutomaticImmersionStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 1.0+

The default style of immersive spaces.

## Declaration

```swift
struct AutomaticImmersionStyle
```

<a id="overview"></a>

## Overview

You don’t typically use this style explicitly, but if you need to, use [automatic](immersionstyle/automatic.md) with the [immersionStyle(selection:in:)](scene/immersionstyle%28selection_in_%29.md)modifier to specify this style.

## Topics

### Creating the immersion style

- [init()](automaticimmersionstyle/init%28%29.md)

## Relationships

### Conforms To

- [ImmersionStyle](immersionstyle.md)

## See Also

### Supporting types

- [FullImmersionStyle](fullimmersionstyle.md): An immersion style that displays unbounded content that completely replaces passthrough video.
- [MixedImmersionStyle](mixedimmersionstyle.md): An immersion style that displays unbounded content intermixed with other app content, along with passthrough video.
- [ProgressiveImmersionStyle](progressiveimmersionstyle.md): An immersion style that displays unbounded content that partially replaces passthrough video.
