> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/imageposition](https://developer.apple.com/documentation/appkit/nscontrol/imageposition)

# NSControl.ImagePosition (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

A constant for specifying the position of a button’s image relative to its title.

## Declaration

```swift
enum ImagePosition
```

<a id="overview"></a>

## Overview

Use these constants with the [imagePosition](../nsbutton/imageposition.md) property of [NSButton](../nsbutton.md) and [NSButtonCell](../nsbuttoncell.md).

## Topics

### Positioning a Control’s Image

- [NSControl.ImagePosition.noImage](imageposition/noimage.md): The cell doesn’t display an image.
- [NSControl.ImagePosition.imageOnly](imageposition/imageonly.md): The cell displays an image but not a title.
- [NSControl.ImagePosition.imageLeading](imageposition/imageleading.md): The image is on the title’s leading edge.
- [NSControl.ImagePosition.imageTrailing](imageposition/imagetrailing.md): The image is on the title’s trailing edge.
- [NSControl.ImagePosition.imageLeft](imageposition/imageleft.md): The image is to the left of the title.
- [NSControl.ImagePosition.imageRight](imageposition/imageright.md): The image is to the right of the title.
- [NSControl.ImagePosition.imageBelow](imageposition/imagebelow.md): The image is below the title.
- [NSControl.ImagePosition.imageAbove](imageposition/imageabove.md): The image is above the title.
- [NSControl.ImagePosition.imageOverlaps](imageposition/imageoverlaps.md): The image overlaps the title.

### Initializers

- [init(rawValue:)](imageposition/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring button images

- [image](../nsbutton/image.md): The image that appears on the button when it’s in an off state, or `nil` if there is no such image.
- [alternateImage](../nsbutton/alternateimage.md): An alternate image that appears on the button when the button is in an on state.
- [imagePosition](../nsbutton/imageposition.md): The position of the button’s image relative to its title.
- [isBordered](../nsbutton/isbordered.md): A Boolean value that determines whether the button has a border.
- [isTransparent](../nsbutton/istransparent.md): A Boolean value that indicates whether the button is transparent.
- [bezelStyle](../nsbutton/bezelstyle-swift.property.md): The appearance of the button’s border.
- [bezelColor](../nsbutton/bezelcolor.md): The color of the button’s bezel, in appearances that support it.
- [showsBorderOnlyWhileMouseInside](../nsbutton/showsborderonlywhilemouseinside.md): A Boolean value that determines whether the button displays its border only when the pointer is over it.
- [imageHugsTitle](../nsbutton/imagehugstitle.md): A Boolean value that determines how the button’s image and title are positioned together within the button bezel.
- [imageScaling](../nsbutton/imagescaling.md): The scaling mode applied to make the cell’s image fit the frame of the image view.

# NSCellImagePosition (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

A constant for specifying the position of a button’s image relative to its title.

## Declaration

```objectivec
enum NSCellImagePosition : NSUInteger;
```

<a id="overview"></a>

## Overview

Use these constants with the [imagePosition](../nsbutton/imageposition.md) property of [NSButton](../nsbutton.md) and [NSButtonCell](../nsbuttoncell.md).

## Topics

### Positioning a Control’s Image

- [NSNoImage](imageposition/noimage.md): The cell doesn’t display an image.
- [NSImageOnly](imageposition/imageonly.md): The cell displays an image but not a title.
- [NSImageLeading](imageposition/imageleading.md): The image is on the title’s leading edge.
- [NSImageTrailing](imageposition/imagetrailing.md): The image is on the title’s trailing edge.
- [NSImageLeft](imageposition/imageleft.md): The image is to the left of the title.
- [NSImageRight](imageposition/imageright.md): The image is to the right of the title.
- [NSImageBelow](imageposition/imagebelow.md): The image is below the title.
- [NSImageAbove](imageposition/imageabove.md): The image is above the title.
- [NSImageOverlaps](imageposition/imageoverlaps.md): The image overlaps the title.

## See Also

### Configuring button images

- [image](../nsbutton/image.md): The image that appears on the button when it’s in an off state, or `nil` if there is no such image.
- [alternateImage](../nsbutton/alternateimage.md): An alternate image that appears on the button when the button is in an on state.
- [imagePosition](../nsbutton/imageposition.md): The position of the button’s image relative to its title.
- [bordered](../nsbutton/isbordered.md): A Boolean value that determines whether the button has a border.
- [transparent](../nsbutton/istransparent.md): A Boolean value that indicates whether the button is transparent.
- [bezelStyle](../nsbutton/bezelstyle-swift.property.md): The appearance of the button’s border.
- [bezelColor](../nsbutton/bezelcolor.md): The color of the button’s bezel, in appearances that support it.
- [showsBorderOnlyWhileMouseInside](../nsbutton/showsborderonlywhilemouseinside.md): A Boolean value that determines whether the button displays its border only when the pointer is over it.
- [imageHugsTitle](../nsbutton/imagehugstitle.md): A Boolean value that determines how the button’s image and title are positioned together within the button bezel.
- [imageScaling](../nsbutton/imagescaling.md): The scaling mode applied to make the cell’s image fit the frame of the image view.
