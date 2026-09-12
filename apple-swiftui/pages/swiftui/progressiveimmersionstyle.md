> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/progressiveimmersionstyle](https://developer.apple.com/documentation/swiftui/progressiveimmersionstyle)

# ProgressiveImmersionStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 1.0+

An immersion style that displays unbounded content that partially replaces passthrough video.

## Declaration

```swift
struct ProgressiveImmersionStyle
```

<a id="overview"></a>

## Overview

Use [progressive](immersionstyle/progressive.md) with the [immersionStyle(selection:in:)](scene/immersionstyle%28selection_in_%29.md)modifier to specify this style.

## Topics

### Creating the immersion style

- [init()](progressiveimmersionstyle/init%28%29.md): An immersion style that displays unbounded content that partially replaces passthrough video.

### Initializers

- [init(immersion:initialAmount:)](progressiveimmersionstyle/init%28immersion_initialamount_%29.md): An immersion style that displays unbounded content that partially replaces passthrough video.

### Instance Properties

- [aspectRatio](progressiveimmersionstyle/aspectratio.md): The aspect ratio used for this instance of the style.
- [initialImmersionAmount](progressiveimmersionstyle/initialimmersionamount.md): The initial amount of immersion used for this instance of the style.
- [maximumImmersionAmount](progressiveimmersionstyle/maximumimmersionamount.md): The maximum amount of immersion used for this instance of the style.
- [minimumImmersionAmount](progressiveimmersionstyle/minimumimmersionamount.md): The minimum amount of immersion used for this instance of the style.

## Relationships

### Conforms To

- [ImmersionStyle](immersionstyle.md)

## See Also

### Supporting types

- [AutomaticImmersionStyle](automaticimmersionstyle.md): The default style of immersive spaces.
- [FullImmersionStyle](fullimmersionstyle.md): An immersion style that displays unbounded content that completely replaces passthrough video.
- [MixedImmersionStyle](mixedimmersionstyle.md): An immersion style that displays unbounded content intermixed with other app content, along with passthrough video.
