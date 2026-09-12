> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/mixedimmersionstyle](https://developer.apple.com/documentation/swiftui/mixedimmersionstyle)

# MixedImmersionStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 1.0+

An immersion style that displays unbounded content intermixed with other app content, along with passthrough video.

## Declaration

```swift
struct MixedImmersionStyle
```

<a id="overview"></a>

## Overview

When this immersion style is selected, the immersion amount reported by the closure of [onImmersionChange(initial:\_:)](view/onimmersionchange%28initial___%29.md) is `0.0`.

Use [mixed](immersionstyle/mixed.md) with the [immersionStyle(selection:in:)](scene/immersionstyle%28selection_in_%29.md)modifier to specify this style.

## Topics

### Creating the immersion style

- [init()](mixedimmersionstyle/init%28%29.md)

## Relationships

### Conforms To

- [ImmersionStyle](immersionstyle.md)

## See Also

### Supporting types

- [AutomaticImmersionStyle](automaticimmersionstyle.md): The default style of immersive spaces.
- [FullImmersionStyle](fullimmersionstyle.md): An immersion style that displays unbounded content that completely replaces passthrough video.
- [ProgressiveImmersionStyle](progressiveimmersionstyle.md): An immersion style that displays unbounded content that partially replaces passthrough video.
