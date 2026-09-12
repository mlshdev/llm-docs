> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberflowlayout](https://developer.apple.com/documentation/appkit/nsscrubberflowlayout)

# NSScrubberFlowLayout (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.12.2+

A concrete layout object that arranges items end-to-end in a linear strip.

## Declaration

```swift
class NSScrubberFlowLayout
```

<a id="overview"></a>

## Overview

To set the size of items on a per-item basis, ensure that your scrubber delegate conforms to the [NSScrubberFlowLayoutDelegate](nsscrubberflowlayoutdelegate.md) protocol, and provides an implementation of the [scrubber(\_:layout:sizeForItemAt:)](nsscrubberflowlayoutdelegate/scrubber%28__layout_sizeforitemat_%29.md) method.

## Topics

### Configuring the layout

- [itemSpacing](nsscrubberflowlayout/itemspacing.md): The horizontal spacing between items, specified in points.
- [itemSize](nsscrubberflowlayout/itemsize.md): The frame size for each item in the scrubber.

### Invalidating the layout

- [invalidateLayoutForItems(at:)](nsscrubberflowlayout/invalidatelayoutforitems%28at_%29.md): Informs the scrubber that it should perform a new layout pass for the items at the specified indexes.

## Relationships

### Inherits From

- [NSScrubberLayout](nsscrubberlayout.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Scrubber layouts

- [NSScrubberFlowLayoutDelegate](nsscrubberflowlayoutdelegate.md): A protocol that a scrubber delegate can adopt to provide the size of an item.
- [NSScrubberProportionalLayout](nsscrubberproportionallayout.md): A concrete layout object that sizes each item to some fraction of the scrubber’s visible size.
- [NSScrubberLayoutAttributes](nsscrubberlayoutattributes.md): The layout of a scrubber item.
- [NSScrubberLayout](nsscrubberlayout.md): An abstract class that describes the layout of items within a scrubber control.

# NSScrubberFlowLayout (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.12.2+

A concrete layout object that arranges items end-to-end in a linear strip.

## Declaration

```objectivec
@interface NSScrubberFlowLayout : NSScrubberLayout
```

<a id="overview"></a>

## Overview

To set the size of items on a per-item basis, ensure that your scrubber delegate conforms to the [NSScrubberFlowLayoutDelegate](nsscrubberflowlayoutdelegate.md) protocol, and provides an implementation of the [scrubber:layout:sizeForItemAtIndex:](nsscrubberflowlayoutdelegate/scrubber%28__layout_sizeforitemat_%29.md) method.

## Topics

### Configuring the layout

- [itemSpacing](nsscrubberflowlayout/itemspacing.md): The horizontal spacing between items, specified in points.
- [itemSize](nsscrubberflowlayout/itemsize.md): The frame size for each item in the scrubber.

### Invalidating the layout

- [invalidateLayoutForItemsAtIndexes:](nsscrubberflowlayout/invalidatelayoutforitems%28at_%29.md): Informs the scrubber that it should perform a new layout pass for the items at the specified indexes.

## Relationships

### Inherits From

- [NSScrubberLayout](nsscrubberlayout.md)

## See Also

### Scrubber layouts

- [NSScrubberFlowLayoutDelegate](nsscrubberflowlayoutdelegate.md): A protocol that a scrubber delegate can adopt to provide the size of an item.
- [NSScrubberProportionalLayout](nsscrubberproportionallayout.md): A concrete layout object that sizes each item to some fraction of the scrubber’s visible size.
- [NSScrubberLayoutAttributes](nsscrubberlayoutattributes.md): The layout of a scrubber item.
- [NSScrubberLayout](nsscrubberlayout.md): An abstract class that describes the layout of items within a scrubber control.
