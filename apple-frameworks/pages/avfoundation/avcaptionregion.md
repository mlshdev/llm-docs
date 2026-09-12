> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionregion](https://developer.apple.com/documentation/avfoundation/avcaptionregion)

# AVCaptionRegion (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that represents the region in which the system presents a caption.

## Declaration

```swift
class AVCaptionRegion
```

<a id="overview"></a>

## Overview

The framework defines four regions, and doesn’t support configuring region settings.

## Topics

### Accessing defined regions

- [appleITTTop](avcaptionregion/appleitttop.md): The top region for iTT format captions.
- [appleITTBottom](avcaptionregion/appleittbottom.md): The bottom region for iTT format captions.
- [appleITTLeft](avcaptionregion/appleittleft.md): The left region for iTT format captions.
- [appleITTRight](avcaptionregion/appleittright.md): The right region for iTT format captions.
- [subRipTextBottom](avcaptionregion/subriptextbottom.md): The bottom caption region for SubRip Text (SRT) format captions.

### Identifying a region

- [identifier](avcaptionregion/identifier.md): A string that identifies the region.

### Accessing dimensions

- [AVCaptionDimension](avcaptiondimension.md): A structure that defines a caption dimension.

### Accessing the location

- [origin](avcaptionregion/origin.md): The region’s top-left position.
- [AVCaptionPoint](avcaptionpoint.md): A structure that defines the origin point for a caption.

### Accessing the size

- [size](avcaptionregion/size.md): The height and width of the region.
- [AVCaptionSize](avcaptionsize.md): A structure that defines the height and width of a caption.

### Accessing the display alignment

- [displayAlignment](avcaptionregion/displayalignment-swift.property.md): The alignment of lines for the region.
- [AVCaptionRegion.DisplayAlignment](avcaptionregion/displayalignment-swift.enum.md): Constants that indicate the alignment of lines in a region.

### Accessing the scroll mode

- [scroll](avcaptionregion/scroll-swift.property.md): The scroll mode of the region.
- [AVCaptionRegion.Scroll](avcaptionregion/scroll-swift.enum.md): Constants that indicate the scrolling effects the system applies to a region.

### Accessing the writing mode

- [writingMode](avcaptionregion/writingmode-swift.property.md): The block and inline progression direction of the region.
- [AVCaptionRegion.WritingMode](avcaptionregion/writingmode-swift.enum.md): Constants that indicate the writing mode for a region.

### Processing regions

- [mutableCopy(with:)](avcaptionregion/mutablecopy%28with_%29.md): Creates a mutable copy of a caption region.
- [encode(with:)](avcaptionregion/encode%28with_%29.md): Encodes the region using the specified encoder.
- [isEqual(\_:)](avcaptionregion/isequal%28__%29.md): Returns a Boolean value that indicates whether an object equals another.

### Initializers

- [init(coder:)](avcaptionregion/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVMutableCaptionRegion](avmutablecaptionregion.md)

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

- [AVMutableCaptionRegion](avmutablecaptionregion.md): A mutable caption region subclass that you use to create new caption regions.

# AVCaptionRegion (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that represents the region in which the system presents a caption.

## Declaration

```objectivec
@interface AVCaptionRegion : NSObject
```

<a id="overview"></a>

## Overview

The framework defines four regions, and doesn’t support configuring region settings.

## Topics

### Accessing defined regions

- [appleITTTopRegion](avcaptionregion/appleitttop.md): The top region for iTT format captions.
- [appleITTBottomRegion](avcaptionregion/appleittbottom.md): The bottom region for iTT format captions.
- [appleITTLeftRegion](avcaptionregion/appleittleft.md): The left region for iTT format captions.
- [appleITTRightRegion](avcaptionregion/appleittright.md): The right region for iTT format captions.
- [subRipTextBottomRegion](avcaptionregion/subriptextbottom.md): The bottom caption region for SubRip Text (SRT) format captions.

### Identifying a region

- [identifier](avcaptionregion/identifier.md): A string that identifies the region.

### Accessing dimensions

- [AVCaptionDimension](avcaptiondimension.md): A structure that defines a caption dimension.
- [AVCaptionDimensionMake](avcaptiondimensionmake.md): Creates a caption dimension with a value and unit type.

### Accessing the location

- [origin](avcaptionregion/origin.md): The region’s top-left position.
- [AVCaptionPoint](avcaptionpoint.md): A structure that defines the origin point for a caption.
- [AVCaptionPointMake](avcaptionpointmake.md): Creates a caption point with the specified x and y positions.

### Accessing the size

- [size](avcaptionregion/size.md): The height and width of the region.
- [AVCaptionSize](avcaptionsize.md): A structure that defines the height and width of a caption.
- [AVCaptionSizeMake](avcaptionsizemake.md): Creates a caption size with the specified width and height.

### Accessing the display alignment

- [displayAlignment](avcaptionregion/displayalignment-swift.property.md): The alignment of lines for the region.
- [AVCaptionRegionDisplayAlignment](avcaptionregion/displayalignment-swift.enum.md): Constants that indicate the alignment of lines in a region.

### Accessing the scroll mode

- [scroll](avcaptionregion/scroll-swift.property.md): The scroll mode of the region.
- [AVCaptionRegionScroll](avcaptionregion/scroll-swift.enum.md): Constants that indicate the scrolling effects the system applies to a region.

### Accessing the writing mode

- [writingMode](avcaptionregion/writingmode-swift.property.md): The block and inline progression direction of the region.
- [AVCaptionRegionWritingMode](avcaptionregion/writingmode-swift.enum.md): Constants that indicate the writing mode for a region.

### Processing regions

- [mutableCopyWithZone:](avcaptionregion/mutablecopy%28with_%29.md): Creates a mutable copy of a caption region.
- [encodeWithCoder:](avcaptionregion/encode%28with_%29.md): Encodes the region using the specified encoder.
- [isEqual:](avcaptionregion/isequal%28__%29.md): Returns a Boolean value that indicates whether an object equals another.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVMutableCaptionRegion](avmutablecaptionregion.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Regions

- [AVMutableCaptionRegion](avmutablecaptionregion.md): A mutable caption region subclass that you use to create new caption regions.
