> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubber/mode-swift.enum](https://developer.apple.com/documentation/appkit/nsscrubber/mode-swift.enum)

# NSScrubber.Mode (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.12.2+

The scrolling behavior for a scrubber.

## Declaration

```swift
enum Mode
```

<a id="overview"></a>

## Overview

Scrolling is either *fixed* or *free*. For details on how to choose the correct scrolling mode for your app, see [Choose a scrubber touch-interaction model](../nsscrubber.md#Choose-a-scrubber-touch-interaction-model).

## Topics

### Constants

- [NSScrubber.Mode.fixed](mode-swift.enum/fixed.md): A scrolling mode in which scrubber items remain fixed in place, and the item under the user’s finger is highlighted.
- [NSScrubber.Mode.free](mode-swift.enum/free.md): A scrolling mode in which the scrubber scrolls as the user swipes horizontally across the scrubber.

### Initializers

- [init(rawValue:)](mode-swift.enum/init%28rawvalue_%29.md)

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
- [itemAlignment](itemalignment.md): A setting that specifies the snapping behavior of items in the scrubber.
- [NSScrubber.Alignment](alignment.md): The specified preferred alignment of items within the scrubber, when they come to rest following a user’s scrolling or paging interaction.
- [isContinuous](iscontinuous.md): A Boolean value that, together with the [mode](mode-swift.property.md) property, determines scrubber interaction style.

# NSScrubberMode (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.12.2+

The scrolling behavior for a scrubber.

## Declaration

```objectivec
enum NSScrubberMode : NSInteger;
```

<a id="overview"></a>

## Overview

Scrolling is either *fixed* or *free*. For details on how to choose the correct scrolling mode for your app, see [Choose a scrubber touch-interaction model](../nsscrubber.md#Choose-a-scrubber-touch-interaction-model).

## Topics

### Constants

- [NSScrubberModeFixed](mode-swift.enum/fixed.md): A scrolling mode in which scrubber items remain fixed in place, and the item under the user’s finger is highlighted.
- [NSScrubberModeFree](mode-swift.enum/free.md): A scrolling mode in which the scrubber scrolls as the user swipes horizontally across the scrubber.

## See Also

### Changing the layout

- [scrubberLayout](scrubberlayout.md): An object used to describe the layout of items within the scrubber.
- [mode](mode-swift.property.md): A setting that determines whether interaction with the scrubber is fixed or free.
- [itemAlignment](itemalignment.md): A setting that specifies the snapping behavior of items in the scrubber.
- [NSScrubberAlignment](alignment.md): The specified preferred alignment of items within the scrubber, when they come to rest following a user’s scrolling or paging interaction.
- [continuous](iscontinuous.md): A Boolean value that, together with the [mode](mode-swift.property.md) property, determines scrubber interaction style.
