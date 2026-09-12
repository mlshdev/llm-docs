> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpimageoverlay](https://developer.apple.com/documentation/carplay/cpimageoverlay)

# CPImageOverlay (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An overlay that displays information over an image.

## Declaration

```swift
@MainActor class CPImageOverlay
```

## Topics

### Initializers

- [init(coder:)](cpimageoverlay/init%28coder_%29.md)
- [init(image:alignment:)](cpimageoverlay/init%28image_alignment_%29.md): Initialize an overlay with a UIImage.
- [init(text:textColor:backgroundColor:alignment:)](cpimageoverlay/init%28text_textcolor_backgroundcolor_alignment_%29.md): Initialize an overlay with properties that control the overlay’s appearance and text contents.

### Instance Properties

- [alignment](cpimageoverlay/alignment-swift.property.md): The alignment for positioning the overlay.
- [backgroundColor](cpimageoverlay/backgroundcolor.md): The background color of the overlay.
- [image](cpimageoverlay/image.md): An optional image to display in the overlay.
- [text](cpimageoverlay/text.md): The text displayed in the overlay.
- [textColor](cpimageoverlay/textcolor.md): The color of the overlay text.

### Enumerations

- [CPImageOverlay.Alignment](cpimageoverlay/alignment-swift.enum.md): Alignment options for positioning.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# CPImageOverlay (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An overlay that displays information over an image.

## Declaration

```objectivec
@interface CPImageOverlay : NSObject
```

## Topics

### Instance Properties

- [alignment](cpimageoverlay/alignment-swift.property.md): The alignment for positioning the overlay.
- [backgroundColor](cpimageoverlay/backgroundcolor.md): The background color of the overlay.
- [image](cpimageoverlay/image.md): An optional image to display in the overlay.
- [text](cpimageoverlay/text.md): The text displayed in the overlay.
- [textColor](cpimageoverlay/textcolor.md): The color of the overlay text.

### Instance Methods

- [initWithImage:alignment:](cpimageoverlay/init%28image_alignment_%29.md): Initialize an overlay with a UIImage.
- [initWithText:textColor:backgroundColor:alignment:](cpimageoverlay/init%28text_textcolor_backgroundcolor_alignment_%29.md): Initialize an overlay with properties that control the overlay’s appearance and text contents.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
