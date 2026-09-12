> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberlayoutattributes](https://developer.apple.com/documentation/appkit/nsscrubberlayoutattributes)

# NSScrubberLayoutAttributes (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.12.2+

The layout of a scrubber item.

## Declaration

```swift
class NSScrubberLayoutAttributes
```

<a id="overview"></a>

## Overview

A layout attributes object is the model for the layout of a single item in a scrubber control.

If you require model attributes in addition to those provided by this class, create a subclass and add appropriate attributes. Subclasses must implement [isEqual(\_:)](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/isequal%28_:%29), [hash](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/hash) and the [NSCopying](https://developer.apple.com/documentation/foundation/nscopying) protocol.

## Topics

### Creating layout attributes

- [init(forItemAt:)](nsscrubberlayoutattributes/init%28foritemat_%29.md): Creates a new layout attributes object for the specified scrubber item index.

### Controlling the layout

- [alpha](nsscrubberlayoutattributes/alpha.md): The item’s alpha value.
- [frame](nsscrubberlayoutattributes/frame.md): The frame of the scrubber item.
- [itemIndex](nsscrubberlayoutattributes/itemindex.md): The index of the scrubber item that is represented by the item’s layout attributes.

### Initializers

- [init(forItemAtIndex:)](nsscrubberlayoutattributes/init%28foritematindex_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Scrubber layouts

- [NSScrubberFlowLayout](nsscrubberflowlayout.md): A concrete layout object that arranges items end-to-end in a linear strip.
- [NSScrubberFlowLayoutDelegate](nsscrubberflowlayoutdelegate.md): A protocol that a scrubber delegate can adopt to provide the size of an item.
- [NSScrubberProportionalLayout](nsscrubberproportionallayout.md): A concrete layout object that sizes each item to some fraction of the scrubber’s visible size.
- [NSScrubberLayout](nsscrubberlayout.md): An abstract class that describes the layout of items within a scrubber control.

# NSScrubberLayoutAttributes (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.12.2+

The layout of a scrubber item.

## Declaration

```objectivec
@interface NSScrubberLayoutAttributes : NSObject
```

<a id="overview"></a>

## Overview

A layout attributes object is the model for the layout of a single item in a scrubber control.

If you require model attributes in addition to those provided by this class, create a subclass and add appropriate attributes. Subclasses must implement [isEqual:](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/isequal%28_:%29), [hash](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/hash) and the [NSCopying](https://developer.apple.com/documentation/foundation/nscopying) protocol.

## Topics

### Creating layout attributes

- [layoutAttributesForItemAtIndex:](nsscrubberlayoutattributes/init%28foritemat_%29.md): Creates a new layout attributes object for the specified scrubber item index.

### Controlling the layout

- [alpha](nsscrubberlayoutattributes/alpha.md): The item’s alpha value.
- [frame](nsscrubberlayoutattributes/frame.md): The frame of the scrubber item.
- [itemIndex](nsscrubberlayoutattributes/itemindex.md): The index of the scrubber item that is represented by the item’s layout attributes.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Scrubber layouts

- [NSScrubberFlowLayout](nsscrubberflowlayout.md): A concrete layout object that arranges items end-to-end in a linear strip.
- [NSScrubberFlowLayoutDelegate](nsscrubberflowlayoutdelegate.md): A protocol that a scrubber delegate can adopt to provide the size of an item.
- [NSScrubberProportionalLayout](nsscrubberproportionallayout.md): A concrete layout object that sizes each item to some fraction of the scrubber’s visible size.
- [NSScrubberLayout](nsscrubberlayout.md): An abstract class that describes the layout of items within a scrubber control.
