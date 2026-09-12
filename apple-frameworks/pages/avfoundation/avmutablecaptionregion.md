> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecaptionregion](https://developer.apple.com/documentation/avfoundation/avmutablecaptionregion)

# AVMutableCaptionRegion (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A mutable caption region subclass that you use to create new caption regions.

## Declaration

```swift
class AVMutableCaptionRegion
```

## Topics

### Creating a caption region

- [init()](avmutablecaptionregion/init%28%29.md): Creates a caption region.
- [init(identifier:)](avmutablecaptionregion/init%28identifier_%29.md): Creates a caption region that has an identifier.

### Configuring the region

- [origin](avmutablecaptionregion/origin.md): The region’s top-left position.
- [size](avmutablecaptionregion/size.md): The height and width of the region.
- [displayAlignment](avmutablecaptionregion/displayalignment.md): The alignment of lines for the region.
- [scroll](avmutablecaptionregion/scroll.md): The scroll mode of the region.
- [writingMode](avmutablecaptionregion/writingmode.md): The block and inline progression direction of the region.

## Relationships

### Inherits From

- [AVCaptionRegion](avcaptionregion.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Regions

- [AVCaptionRegion](avcaptionregion.md): An object that represents the region in which the system presents a caption.

# AVMutableCaptionRegion (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A mutable caption region subclass that you use to create new caption regions.

## Declaration

```objectivec
@interface AVMutableCaptionRegion : AVCaptionRegion
```

## Topics

### Creating a caption region

- [init](avmutablecaptionregion/init%28%29.md): Creates a caption region.
- [initWithIdentifier:](avmutablecaptionregion/init%28identifier_%29.md): Creates a caption region that has an identifier.

### Configuring the region

- [origin](avmutablecaptionregion/origin.md): The region’s top-left position.
- [size](avmutablecaptionregion/size.md): The height and width of the region.
- [displayAlignment](avmutablecaptionregion/displayalignment.md): The alignment of lines for the region.
- [scroll](avmutablecaptionregion/scroll.md): The scroll mode of the region.
- [writingMode](avmutablecaptionregion/writingmode.md): The block and inline progression direction of the region.

## Relationships

### Inherits From

- [AVCaptionRegion](avcaptionregion.md)

## See Also

### Regions

- [AVCaptionRegion](avcaptionregion.md): An object that represents the region in which the system presents a caption.
