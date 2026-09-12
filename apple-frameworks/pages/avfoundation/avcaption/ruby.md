> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaption/ruby](https://developer.apple.com/documentation/avfoundation/avcaption/ruby)

# AVCaption.Ruby (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that presents ruby characters.

## Declaration

```swift
class Ruby
```

<a id="overview"></a>

## Overview

Ruby characters are small annotations, typically used in Japanese content, that render alongside the base text.

## Topics

### Creating Ruby text

- [init(text:)](ruby/init%28text_%29.md): Creates ruby text.
- [init(text:position:alignment:)](ruby/init%28text_position_alignment_%29.md): Creates ruby text with position and alignment.

### Accessing text properties

- [text](ruby/text.md): The ruby text.
- [position](ruby/position-swift.property.md): The ruby text position.
- [AVCaption.Ruby.Position](ruby/position-swift.enum.md): Constants that indicate ruby text positions.
- [alignment](ruby/alignment-swift.property.md): The ruby text alignment.
- [AVCaption.Ruby.Alignment](ruby/alignment-swift.enum.md): Constants that indicate ruby text alignments.

### Initializers

- [init(coder:)](ruby/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../../foundation/nscoding.md)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing advanced typography

- [ruby(at:)](ruby%28at_%29.md): Returns the ruby text at the index position.
- [textCombine(at:)](textcombine%28at_%29.md): Returns the text combine at the index position.
- [AVCaption.TextCombine](textcombine.md): The caption’s supported rendering policy options.

# AVCaptionRuby (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that presents ruby characters.

## Declaration

```objectivec
@interface AVCaptionRuby : NSObject
```

<a id="overview"></a>

## Overview

Ruby characters are small annotations, typically used in Japanese content, that render alongside the base text.

## Topics

### Creating Ruby text

- [initWithText:](ruby/init%28text_%29.md): Creates ruby text.
- [initWithText:position:alignment:](ruby/init%28text_position_alignment_%29.md): Creates ruby text with position and alignment.

### Accessing text properties

- [text](ruby/text.md): The ruby text.
- [position](ruby/position-swift.property.md): The ruby text position.
- [AVCaptionRubyPosition](ruby/position-swift.enum.md): Constants that indicate ruby text positions.
- [alignment](ruby/alignment-swift.property.md): The ruby text alignment.
- [AVCaptionRubyAlignment](ruby/alignment-swift.enum.md): Constants that indicate ruby text alignments.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Accessing advanced typography

- [rubyAtIndex:range:](rubyatindex_range_.md): Returns the ruby text at the index position.
- [textCombineAtIndex:range:](textcombineatindex_range_.md): Returns the text combine at the index position.
- [AVCaptionTextCombine](textcombine.md): The caption’s supported rendering policy options.
