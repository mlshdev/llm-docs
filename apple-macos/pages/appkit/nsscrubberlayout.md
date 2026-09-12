> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberlayout](https://developer.apple.com/documentation/appkit/nsscrubberlayout)

# NSScrubberLayout (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.12.2+

An abstract class that describes the layout of items within a scrubber control.

## Declaration

```swift
@MainActor class NSScrubberLayout
```

<a id="overview"></a>

## Overview

To determine the layout of items in a scrubber, use one of the built-in subclasses ([NSScrubberProportionalLayout](nsscrubberproportionallayout.md) or [NSScrubberFlowLayout](nsscrubberflowlayout.md)), or create a custom subclass to implement your own layout.

## Topics

### Creating a scrubber layout

- [init()](nsscrubberlayout/init%28%29.md): Initializes and returns a newly allocated scrubber layout object from code.
- [init(coder:)](nsscrubberlayout/init%28coder_%29.md): Initializes and returns a newly allocated scrubber layout object from a storyboard or nib file.

### Configuring a scrubber layout

- [layoutAttributesClass](nsscrubberlayout/layoutattributesclass.md): A property containing a class that describes layout attributes.
- [scrubber](nsscrubberlayout/scrubber.md): The scrubber control that this layout is assigned to.
- [visibleRect](nsscrubberlayout/visiblerect.md): The currently visible rectangle, in the coordinate space of the scrubber content.
- [invalidateLayout()](nsscrubberlayout/invalidatelayout%28%29.md): Signals that the layout has been invalidated, and that the scrubber control should perform a new layout pass.

### Subclassing a scrubber layout

- [prepare()](nsscrubberlayout/prepare%28%29.md): Gives you an opportunity to perform layout calculations when the scrubber’s layout is invalidated.
- [scrubberContentSize](nsscrubberlayout/scrubbercontentsize.md): The size required to contain all elements within the scrubber.
- [layoutAttributesForItem(at:)](nsscrubberlayout/layoutattributesforitem%28at_%29.md): The layout attributes for the item with the specified index.
- [layoutAttributesForItems(in:)](nsscrubberlayout/layoutattributesforitems%28in_%29.md): The set of layout attributes for all items within the provided rectangle.
- [shouldInvalidateLayoutForSelectionChange](nsscrubberlayout/shouldinvalidatelayoutforselectionchange.md): Determines whether the scrubber should refresh its layout when the selection changes.
- [shouldInvalidateLayoutForHighlightChange](nsscrubberlayout/shouldinvalidatelayoutforhighlightchange.md): Determines whether the scrubber should refresh its layout when an item is highlighted.
- [shouldInvalidateLayoutForChange(fromVisibleRect:toVisibleRect:)](nsscrubberlayout/shouldinvalidatelayoutforchange%28fromvisiblerect_tovisiblerect_%29.md): Determines whether the scrubber should refresh its layout in response to a change of its visible region.
- [automaticallyMirrorsInRightToLeftLayout](nsscrubberlayout/automaticallymirrorsinrighttoleftlayout.md): Determines whether the scrubber mirrors its layout for right-to-left layouts.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSScrubberFlowLayout](nsscrubberflowlayout.md)
- [NSScrubberProportionalLayout](nsscrubberproportionallayout.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Scrubber layouts

- [NSScrubberFlowLayout](nsscrubberflowlayout.md): A concrete layout object that arranges items end-to-end in a linear strip.
- [NSScrubberFlowLayoutDelegate](nsscrubberflowlayoutdelegate.md): A protocol that a scrubber delegate can adopt to provide the size of an item.
- [NSScrubberProportionalLayout](nsscrubberproportionallayout.md): A concrete layout object that sizes each item to some fraction of the scrubber’s visible size.
- [NSScrubberLayoutAttributes](nsscrubberlayoutattributes.md): The layout of a scrubber item.

# NSScrubberLayout (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.12.2+

An abstract class that describes the layout of items within a scrubber control.

## Declaration

```objectivec
@interface NSScrubberLayout : NSObject
```

<a id="overview"></a>

## Overview

To determine the layout of items in a scrubber, use one of the built-in subclasses ([NSScrubberProportionalLayout](nsscrubberproportionallayout.md) or [NSScrubberFlowLayout](nsscrubberflowlayout.md)), or create a custom subclass to implement your own layout.

## Topics

### Creating a scrubber layout

- [init](nsscrubberlayout/init%28%29.md): Initializes and returns a newly allocated scrubber layout object from code.
- [initWithCoder:](nsscrubberlayout/init%28coder_%29.md): Initializes and returns a newly allocated scrubber layout object from a storyboard or nib file.

### Configuring a scrubber layout

- [layoutAttributesClass](nsscrubberlayout/layoutattributesclass.md): A property containing a class that describes layout attributes.
- [scrubber](nsscrubberlayout/scrubber.md): The scrubber control that this layout is assigned to.
- [visibleRect](nsscrubberlayout/visiblerect.md): The currently visible rectangle, in the coordinate space of the scrubber content.
- [invalidateLayout](nsscrubberlayout/invalidatelayout%28%29.md): Signals that the layout has been invalidated, and that the scrubber control should perform a new layout pass.

### Subclassing a scrubber layout

- [prepareLayout](nsscrubberlayout/prepare%28%29.md): Gives you an opportunity to perform layout calculations when the scrubber’s layout is invalidated.
- [scrubberContentSize](nsscrubberlayout/scrubbercontentsize.md): The size required to contain all elements within the scrubber.
- [layoutAttributesForItemAtIndex:](nsscrubberlayout/layoutattributesforitem%28at_%29.md): The layout attributes for the item with the specified index.
- [layoutAttributesForItemsInRect:](nsscrubberlayout/layoutattributesforitems%28in_%29.md): The set of layout attributes for all items within the provided rectangle.
- [shouldInvalidateLayoutForSelectionChange](nsscrubberlayout/shouldinvalidatelayoutforselectionchange.md): Determines whether the scrubber should refresh its layout when the selection changes.
- [shouldInvalidateLayoutForHighlightChange](nsscrubberlayout/shouldinvalidatelayoutforhighlightchange.md): Determines whether the scrubber should refresh its layout when an item is highlighted.
- [shouldInvalidateLayoutForChangeFromVisibleRect:toVisibleRect:](nsscrubberlayout/shouldinvalidatelayoutforchange%28fromvisiblerect_tovisiblerect_%29.md): Determines whether the scrubber should refresh its layout in response to a change of its visible region.
- [automaticallyMirrorsInRightToLeftLayout](nsscrubberlayout/automaticallymirrorsinrighttoleftlayout.md): Determines whether the scrubber mirrors its layout for right-to-left layouts.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSScrubberFlowLayout](nsscrubberflowlayout.md)
- [NSScrubberProportionalLayout](nsscrubberproportionallayout.md)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)

## See Also

### Scrubber layouts

- [NSScrubberFlowLayout](nsscrubberflowlayout.md): A concrete layout object that arranges items end-to-end in a linear strip.
- [NSScrubberFlowLayoutDelegate](nsscrubberflowlayoutdelegate.md): A protocol that a scrubber delegate can adopt to provide the size of an item.
- [NSScrubberProportionalLayout](nsscrubberproportionallayout.md): A concrete layout object that sizes each item to some fraction of the scrubber’s visible size.
- [NSScrubberLayoutAttributes](nsscrubberlayoutattributes.md): The layout of a scrubber item.
