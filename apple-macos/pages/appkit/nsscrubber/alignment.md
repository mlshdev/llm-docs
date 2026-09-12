> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubber/alignment](https://developer.apple.com/documentation/appkit/nsscrubber/alignment)

# NSScrubber.Alignment (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.12.2+

The specified preferred alignment of items within the scrubber, when they come to rest following a user’s scrolling or paging interaction.

## Declaration

```swift
enum Alignment
```

<a id="overview"></a>

## Overview

For details on how to choose the right alignment option for your app, see [Choose a scrubber touch-interaction model](../nsscrubber.md#Choose-a-scrubber-touch-interaction-model).

## Topics

### Constants

- [NSScrubber.Alignment.center](alignment/center.md): Center alignment of items within the scrubber.
- [NSScrubber.Alignment.leading](alignment/leading.md): Leading alignment of items within the scrubber.
- [NSScrubber.Alignment.none](alignment/none.md): No preference for item alignment.
- [NSScrubber.Alignment.trailing](alignment/trailing.md): Trailing alignment of items within the scrubber.

### Initializers

- [init(rawValue:)](alignment/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Changing the layout

- [scrubberLayout](scrubberlayout.md): An object used to describe the layout of items within the scrubber.
- [mode](mode-swift.property.md): A setting that determines whether interaction with the scrubber is fixed or free.
- [NSScrubber.Mode](mode-swift.enum.md): The scrolling behavior for a scrubber.
- [itemAlignment](itemalignment.md): A setting that specifies the snapping behavior of items in the scrubber.
- [isContinuous](iscontinuous.md): A Boolean value that, together with the [mode](mode-swift.property.md) property, determines scrubber interaction style.

# NSScrubberAlignment (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.12.2+

The specified preferred alignment of items within the scrubber, when they come to rest following a user’s scrolling or paging interaction.

## Declaration

```objectivec
enum NSScrubberAlignment : NSInteger;
```

<a id="overview"></a>

## Overview

For details on how to choose the right alignment option for your app, see [Choose a scrubber touch-interaction model](../nsscrubber.md#Choose-a-scrubber-touch-interaction-model).

## Topics

### Constants

- [NSScrubberAlignmentCenter](alignment/center.md): Center alignment of items within the scrubber.
- [NSScrubberAlignmentLeading](alignment/leading.md): Leading alignment of items within the scrubber.
- [NSScrubberAlignmentNone](alignment/none.md): No preference for item alignment.
- [NSScrubberAlignmentTrailing](alignment/trailing.md): Trailing alignment of items within the scrubber.

## See Also

### Changing the layout

- [scrubberLayout](scrubberlayout.md): An object used to describe the layout of items within the scrubber.
- [mode](mode-swift.property.md): A setting that determines whether interaction with the scrubber is fixed or free.
- [NSScrubberMode](mode-swift.enum.md): The scrolling behavior for a scrubber.
- [itemAlignment](itemalignment.md): A setting that specifies the snapping behavior of items in the scrubber.
- [continuous](iscontinuous.md): A Boolean value that, together with the [mode](mode-swift.property.md) property, determines scrubber interaction style.
