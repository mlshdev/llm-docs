> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsciimagerep](https://developer.apple.com/documentation/appkit/nsciimagerep)

# NSCIImageRep (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that can render an image from a Core Image object.

## Declaration

```swift
class NSCIImageRep
```

## Topics

### Creating Representations of Core Image Objects

- [init(ciImage:)](nsciimagerep/init%28ciimage_%29-60ghw.md): Returns a representation of an image initialized to the specified Core Image instance.

### Getting Data

- [ciImage](nsciimagerep/ciimage.md): The Core Image instance.

### Initializers

- [init(CIImage:)](nsciimagerep/init%28ciimage_%29-4wx5x.md)
- [init(CIImage:)](nsciimagerep/init%28ciimage_%29-73fvp.md)

## Relationships

### Inherits From

- [NSImageRep](nsimagerep.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Bitmap Formats

- [NSBitmapImageRep](nsbitmapimagerep.md): An object that renders an image from bitmap data.
- [NSPICTImageRep](nspictimagerep.md): An object that renders an image from a PICT format data stream of version 1, version 2, and extended version 2.

# NSCIImageRep (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that can render an image from a Core Image object.

## Declaration

```objectivec
@interface NSCIImageRep : NSImageRep
```

## Topics

### Creating Representations of Core Image Objects

- [imageRepWithCIImage:](nsciimagerep/imagerepwithciimage_.md): Creates and returns a representation of an image initialized to the specified Core Image instance.
- [initWithCIImage:](nsciimagerep/init%28ciimage_%29-60ghw.md): Returns a representation of an image initialized to the specified Core Image instance.

### Getting Data

- [CIImage](nsciimagerep/ciimage.md): The Core Image instance.

## Relationships

### Inherits From

- [NSImageRep](nsimagerep.md)

## See Also

### Bitmap Formats

- [NSBitmapImageRep](nsbitmapimagerep.md): An object that renders an image from bitmap data.
- [NSPICTImageRep](nspictimagerep.md): An object that renders an image from a PICT format data stream of version 1, version 2, and extended version 2.
