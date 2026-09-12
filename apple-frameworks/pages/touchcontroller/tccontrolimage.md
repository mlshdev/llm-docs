> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccontrolimage](https://developer.apple.com/documentation/touchcontroller/tccontrolimage)

# TCControlImage (Swift)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Represents an image to be rendered using Metal.

## Declaration

```swift
class TCControlImage
```

## Topics

### Creating a control image

- [init(cgImage:size:device:)](tccontrolimage/init%28cgimage_size_device_%29-22z05.md): Creates a new image from a CGImage.
- [init(texture:size:)](tccontrolimage/init%28texture_size_%29.md): Creates a new image with the specified texture and size.
- [init(texture:size:highlight:offset:tintColor:)](tccontrolimage/init%28texture_size_highlight_offset_tintcolor_%29.md): Creates a new image with the specified texture, size, highlight texture, offset, and color tint.
- [init(uiImage:size:device:)](tccontrolimage/init%28uiimage_size_device_%29-3hqf.md): Creates a new image from a UIImage.

### Inspecting the control image

- [highlightTexture](tccontrolimage/highlighttexture.md): The Metal texture to use for the image when highlighted. May be `nil`.
- [offset](tccontrolimage/offset.md): The offset from the center of the parent control in points.
- [size](tccontrolimage/size.md): The size of the image in points.
- [texture](tccontrolimage/texture.md): The Metal texture to use for the image.
- [tintColor](tccontrolimage/tintcolor.md): The color tint to apply to the texture. The color ref is retained.

### Initializers

- [init(CGImage:size:device:)](tccontrolimage/init%28cgimage_size_device_%29-6wxv8.md)
- [init(UIImage:size:device:)](tccontrolimage/init%28uiimage_size_device_%29-9csn2.md)
- [init(texture:size:highlightTexture:offset:tintColor:)](tccontrolimage/init%28texture_size_highlighttexture_offset_tintcolor_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Visuals

- [TCControlContents](tccontrolcontents.md): Represents the visual contents of a touch control.
- [TCControlLayout](tccontrollayout.md): A protocol defining the controlLayout properties for a control.

# TCControlImage (Objective-C)

**Framework:** Touch Controller  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Represents an image to be rendered using Metal.

## Declaration

```objectivec
@interface TCControlImage : NSObject
```

## Topics

### Creating a control image

- [initWithCGImage:size:device:](tccontrolimage/init%28cgimage_size_device_%29-22z05.md): Creates a new image from a CGImage.
- [initWithTexture:size:](tccontrolimage/init%28texture_size_%29.md): Creates a new image with the specified texture and size.
- [initWithTexture:size:highlightTexture:offset:tintColor:](tccontrolimage/init%28texture_size_highlight_offset_tintcolor_%29.md): Creates a new image with the specified texture, size, highlight texture, offset, and color tint.
- [initWithUIImage:size:device:](tccontrolimage/init%28uiimage_size_device_%29-3hqf.md): Creates a new image from a UIImage.

### Inspecting the control image

- [highlightTexture](tccontrolimage/highlighttexture.md): The Metal texture to use for the image when highlighted. May be `nil`.
- [offset](tccontrolimage/offset.md): The offset from the center of the parent control in points.
- [size](tccontrolimage/size.md): The size of the image in points.
- [texture](tccontrolimage/texture.md): The Metal texture to use for the image.
- [tintColor](tccontrolimage/tintcolor.md): The color tint to apply to the texture. The color ref is retained.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Visuals

- [TCControlContents](tccontrolcontents.md): Represents the visual contents of a touch control.
- [TCControlLayout](tccontrollayout.md): A protocol defining the controlLayout properties for a control.
