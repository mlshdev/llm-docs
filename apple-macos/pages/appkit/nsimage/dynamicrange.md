> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/dynamicrange](https://developer.apple.com/documentation/appkit/nsimage/dynamicrange)

# NSImage.DynamicRange (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 14.0+

Describes how High Dynamic Range (HDR) image content displays.

## Declaration

```swift
enum DynamicRange
```

<a id="overview"></a>

## Overview

Use this type to enable or constrain the display of High Dynamic Range (HDR) in an [NSImageView](../nsimageview.md). Displaying HDR content in an [NSImageView](../nsimageview.md) requires that the [NSImage](../nsimage.md) has HDR content in the ITU-R 2100 color space and that the output device has Extended Dynamic Range (EDR) capabilities.

## Topics

### Setting the dynamic range

- [NSImage.DynamicRange.standard](dynamicrange/standard.md): Restricts the image content dynamic range to the standard range regardless of the actual range of the image content.
- [NSImage.DynamicRange.constrainedHigh](dynamicrange/constrainedhigh.md): Allows for constrained High Dynamic Range (HDR) image content which is useful for mixing HDR and Standard Dynamic Range (SDR) content.
- [NSImage.DynamicRange.high](dynamicrange/high.md): Allows image content to use extended dynamic range if it has dynamic range content.
- [NSImage.DynamicRange.unspecified](dynamicrange/unspecified.md): Indicates that the dynamic range treatment of the image is unknown or otherwise unspecified.

### Initializers

- [init(rawValue:)](dynamicrange/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [NSCursor.FrameResizePosition](../nscursor/frameresizeposition.md): The position along the perimeter of a rectangular frame (its edges and corners) from which it’s resized.
- [NSHorizontalDirection](../nshorizontaldirection.md): An absolute direction on the horizontal axis.
- [NSSharingCollaborationMode](../nssharingcollaborationmode.md): Represents the types of sharing (collaborating on an item vs. sending a copy of the item) The share picker supports up to two modes, each of which corresponds to one of these types
- [NSTextCursorAccessoryPlacement](../nstextcursoraccessoryplacement.md)
- [NSVerticalDirection](../nsverticaldirection.md): A direction on the vertical axis.
- [NSWritingToolsBehavior](../nswritingtoolsbehavior.md): Constants that specify the Writing Tools experience for the underlying view.
- [NSWritingToolsResultOptions](../nswritingtoolsresultoptions.md): Constants to specify what type of content to allow in Writing Tools suggestions or rewrites.

# NSImageDynamicRange (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 14.0+

Describes how High Dynamic Range (HDR) image content displays.

## Declaration

```objectivec
enum NSImageDynamicRange : NSInteger;
```

<a id="overview"></a>

## Overview

Use this type to enable or constrain the display of High Dynamic Range (HDR) in an [NSImageView](../nsimageview.md). Displaying HDR content in an [NSImageView](../nsimageview.md) requires that the [NSImage](../nsimage.md) has HDR content in the ITU-R 2100 color space and that the output device has Extended Dynamic Range (EDR) capabilities.

## Topics

### Setting the dynamic range

- [NSImageDynamicRangeStandard](dynamicrange/standard.md): Restricts the image content dynamic range to the standard range regardless of the actual range of the image content.
- [NSImageDynamicRangeConstrainedHigh](dynamicrange/constrainedhigh.md): Allows for constrained High Dynamic Range (HDR) image content which is useful for mixing HDR and Standard Dynamic Range (SDR) content.
- [NSImageDynamicRangeHigh](dynamicrange/high.md): Allows image content to use extended dynamic range if it has dynamic range content.
- [NSImageDynamicRangeUnspecified](dynamicrange/unspecified.md): Indicates that the dynamic range treatment of the image is unknown or otherwise unspecified.

## See Also

### Enumerations

- [NSCursorFrameResizePosition](../nscursor/frameresizeposition.md): The position along the perimeter of a rectangular frame (its edges and corners) from which it’s resized.
- [NSCursorFrameResizeDirections](../nscursorframeresizedirections.md): The directions in which a rectangular frame can be resized.
- [NSHorizontalDirections](../nshorizontaldirections.md): The absolute directions on the horizontal axis.
- [NSSharingCollaborationMode](../nssharingcollaborationmode.md): Represents the types of sharing (collaborating on an item vs. sending a copy of the item) The share picker supports up to two modes, each of which corresponds to one of these types
- [NSTextCursorAccessoryPlacement](../nstextcursoraccessoryplacement.md)
- [NSVerticalDirections](../nsverticaldirections.md): The directions on the vertical axis.
- [NSWritingToolsBehavior](../nswritingtoolsbehavior.md): Constants that specify the Writing Tools experience for the underlying view.
- [NSWritingToolsResultOptions](../nswritingtoolsresultoptions.md): Constants to specify what type of content to allow in Writing Tools suggestions or rewrites.
