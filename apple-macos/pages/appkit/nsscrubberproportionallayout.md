> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubberproportionallayout](https://developer.apple.com/documentation/appkit/nsscrubberproportionallayout)

# NSScrubberProportionalLayout (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.12.2+

A concrete layout object that sizes each item to some fraction of the scrubber’s visible size.

## Declaration

```swift
class NSScrubberProportionalLayout
```

## Topics

### Initializing a proprotional layout

- [init(numberOfVisibleItems:)](nsscrubberproportionallayout/init%28numberofvisibleitems_%29.md): Initializes and returns a newly allocated proportional layout, configured to display the given number of items.
- [init(coder:)](nsscrubberproportionallayout/init%28coder_%29.md): Initializes and returns a newly allocated proprotional layout object from a storyboard or nib file.

### Configuring the layout

- [numberOfVisibleItems](nsscrubberproportionallayout/numberofvisibleitems.md): The number of items visible in the scrubber at once.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Scrubber layouts

- [NSScrubberFlowLayout](nsscrubberflowlayout.md): A concrete layout object that arranges items end-to-end in a linear strip.
- [NSScrubberFlowLayoutDelegate](nsscrubberflowlayoutdelegate.md): A protocol that a scrubber delegate can adopt to provide the size of an item.
- [NSScrubberLayoutAttributes](nsscrubberlayoutattributes.md): The layout of a scrubber item.
- [NSScrubberLayout](nsscrubberlayout.md): An abstract class that describes the layout of items within a scrubber control.

# NSScrubberProportionalLayout (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.12.2+

A concrete layout object that sizes each item to some fraction of the scrubber’s visible size.

## Declaration

```objectivec
@interface NSScrubberProportionalLayout : NSScrubberLayout
```

## Topics

### Initializing a proprotional layout

- [initWithNumberOfVisibleItems:](nsscrubberproportionallayout/init%28numberofvisibleitems_%29.md): Initializes and returns a newly allocated proportional layout, configured to display the given number of items.
- [initWithCoder:](nsscrubberproportionallayout/init%28coder_%29.md): Initializes and returns a newly allocated proprotional layout object from a storyboard or nib file.

### Configuring the layout

- [numberOfVisibleItems](nsscrubberproportionallayout/numberofvisibleitems.md): The number of items visible in the scrubber at once.

## Relationships

### Inherits From

- [NSScrubberLayout](nsscrubberlayout.md)

## See Also

### Scrubber layouts

- [NSScrubberFlowLayout](nsscrubberflowlayout.md): A concrete layout object that arranges items end-to-end in a linear strip.
- [NSScrubberFlowLayoutDelegate](nsscrubberflowlayoutdelegate.md): A protocol that a scrubber delegate can adopt to provide the size of an item.
- [NSScrubberLayoutAttributes](nsscrubberlayoutattributes.md): The layout of a scrubber item.
- [NSScrubberLayout](nsscrubberlayout.md): An abstract class that describes the layout of items within a scrubber control.
