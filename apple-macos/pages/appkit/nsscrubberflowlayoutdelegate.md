> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberflowlayoutdelegate](https://developer.apple.com/documentation/appkit/nsscrubberflowlayoutdelegate)

# NSScrubberFlowLayoutDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A protocol that a scrubber delegate can adopt to provide the size of an item.

## Declaration

```swift
protocol NSScrubberFlowLayoutDelegate : NSScrubberDelegate
```

<a id="overview"></a>

## Overview

This protocol conforms to the [NSScrubberDelegate](nsscrubberdelegate.md) protocol. Create an object that conforms to [NSScrubberFlowLayoutDelegate](nsscrubberflowlayoutdelegate.md) and assign it to the [delegate](nsscrubber/delegate.md) property of your scrubber object.

## Topics

### Controlling the item size

- [scrubber(\_:layout:sizeForItemAt:)](nsscrubberflowlayoutdelegate/scrubber%28__layout_sizeforitemat_%29.md): Asks the delegate for the size of each item in a scrubber whose items are arranged in a flow layout.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSScrubberDelegate](nsscrubberdelegate.md)

## See Also

### Scrubber layouts

- [NSScrubberFlowLayout](nsscrubberflowlayout.md): A concrete layout object that arranges items end-to-end in a linear strip.
- [NSScrubberProportionalLayout](nsscrubberproportionallayout.md): A concrete layout object that sizes each item to some fraction of the scrubber’s visible size.
- [NSScrubberLayoutAttributes](nsscrubberlayoutattributes.md): The layout of a scrubber item.
- [NSScrubberLayout](nsscrubberlayout.md): An abstract class that describes the layout of items within a scrubber control.

# NSScrubberFlowLayoutDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A protocol that a scrubber delegate can adopt to provide the size of an item.

## Declaration

```objectivec
@protocol NSScrubberFlowLayoutDelegate <NSScrubberDelegate>
```

<a id="overview"></a>

## Overview

This protocol conforms to the [NSScrubberDelegate](nsscrubberdelegate.md) protocol. Create an object that conforms to [NSScrubberFlowLayoutDelegate](nsscrubberflowlayoutdelegate.md) and assign it to the [delegate](nsscrubber/delegate.md) property of your scrubber object.

## Topics

### Controlling the item size

- [scrubber:layout:sizeForItemAtIndex:](nsscrubberflowlayoutdelegate/scrubber%28__layout_sizeforitemat_%29.md): Asks the delegate for the size of each item in a scrubber whose items are arranged in a flow layout.

## Relationships

### Inherits From

- [NSScrubberDelegate](nsscrubberdelegate.md)

## See Also

### Scrubber layouts

- [NSScrubberFlowLayout](nsscrubberflowlayout.md): A concrete layout object that arranges items end-to-end in a linear strip.
- [NSScrubberProportionalLayout](nsscrubberproportionallayout.md): A concrete layout object that sizes each item to some fraction of the scrubber’s visible size.
- [NSScrubberLayoutAttributes](nsscrubberlayoutattributes.md): The layout of a scrubber item.
- [NSScrubberLayout](nsscrubberlayout.md): An abstract class that describes the layout of items within a scrubber control.
