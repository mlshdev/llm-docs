> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaption](https://developer.apple.com/documentation/avfoundation/avcaption)

# AVCaption (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that represents text to present over a time range.

## Declaration

```swift
class AVCaption
```

<a id="overview"></a>

## Overview

A caption contains a cue, which is a single sentence or paragraph of text for a time range in the video timeline. Within the active range, the caption may animate (for example, Karaoke lyrics) by rolling-up, changing visibility, or using other dynamic styling.

## Topics

### Creating a caption

- [init(\_:timeRange:)](avcaption/init%28__timerange_%29.md): Creates a caption that contains text and a time range.

### Accessing text and timing

- [text](avcaption/text.md): The caption text.
- [timeRange](avcaption/timerange.md): The time range over which the system presents the caption.

### Accessing the region

- [region](avcaption/region.md): The region in which the caption exists.

### Accessing font styles

- [fontStyle(at:)](avcaption/fontstyle%28at_%29.md): Returns the font style and range at the index position.
- [AVCaption.FontStyle](avcaption/fontstyle.md): Font styles for caption text.
- [fontWeight(at:)](avcaption/fontweight%28at_%29.md): Returns the font weight and range at the index position.
- [AVCaption.FontWeight](avcaption/fontweight.md): Font weights for a caption.
- [decoration(at:)](avcaption/decoration%28at_%29.md): Returns the text decoration at the index position.
- [AVCaption.Decoration](avcaption/decoration.md): Text decorations for caption text.

### Accessing colors

- [textColor(at:)](avcaption/textcolor%28at_%29.md): Returns the text color at the index position.
- [backgroundColor(at:)](avcaption/backgroundcolor%28at_%29.md): Returns the background color at the index position.

### Accessing alignment

- [textAlignment](avcaption/textalignment-swift.property.md): The alignment for the caption text.
- [AVCaption.TextAlignment](avcaption/textalignment-swift.enum.md): Text alignment options for a caption.

### Accessing animation

- [animation](avcaption/animation-swift.property.md): The animation that the system applies to this caption.
- [AVCaption.Animation](avcaption/animation-swift.enum.md): Animation options for a caption.

### Accessing advanced typography

- [ruby(at:)](avcaption/ruby%28at_%29.md): Returns the ruby text at the index position.
- [AVCaption.Ruby](avcaption/ruby.md): An object that presents ruby characters.
- [textCombine(at:)](avcaption/textcombine%28at_%29.md): Returns the text combine at the index position.
- [AVCaption.TextCombine](avcaption/textcombine.md): The caption’s supported rendering policy options.

### Initializers

- [init(coder:)](avcaption/init%28coder_%29.md)
- [init(text:timeRange:)](avcaption/init%28text_timerange_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVMutableCaption](avmutablecaption.md)

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

### Captions

- [AVMutableCaption](avmutablecaption.md): A mutable caption subclass that you use to create new captions.

# AVCaption (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that represents text to present over a time range.

## Declaration

```objectivec
@interface AVCaption : NSObject
```

<a id="overview"></a>

## Overview

A caption contains a cue, which is a single sentence or paragraph of text for a time range in the video timeline. Within the active range, the caption may animate (for example, Karaoke lyrics) by rolling-up, changing visibility, or using other dynamic styling.

## Topics

### Creating a caption

- [initWithText:timeRange:](avcaption/init%28__timerange_%29.md): Creates a caption that contains text and a time range.

### Accessing text and timing

- [text](avcaption/text.md): The caption text.
- [timeRange](avcaption/timerange.md): The time range over which the system presents the caption.

### Accessing the region

- [region](avcaption/region.md): The region in which the caption exists.

### Accessing font styles

- [fontStyleAtIndex:range:](avcaption/fontstyleatindex_range_.md): Returns the font style and range at the index position.
- [AVCaptionFontStyle](avcaption/fontstyle.md): Font styles for caption text.
- [fontWeightAtIndex:range:](avcaption/fontweightatindex_range_.md): Returns the font weight and range at the index position.
- [AVCaptionFontWeight](avcaption/fontweight.md): Font weights for a caption.
- [decorationAtIndex:range:](avcaption/decorationatindex_range_.md): Returns the text decoration at the index position.
- [AVCaptionDecoration](avcaption/decoration.md): Text decorations for caption text.

### Accessing colors

- [textColorAtIndex:range:](avcaption/textcoloratindex_range_.md): Returns the text color at the index position.
- [backgroundColorAtIndex:range:](avcaption/backgroundcoloratindex_range_.md): Returns the background color at the index position.

### Accessing alignment

- [textAlignment](avcaption/textalignment-swift.property.md): The alignment for the caption text.
- [AVCaptionTextAlignment](avcaption/textalignment-swift.enum.md): Text alignment options for a caption.

### Accessing animation

- [animation](avcaption/animation-swift.property.md): The animation that the system applies to this caption.
- [AVCaptionAnimation](avcaption/animation-swift.enum.md): Animation options for a caption.

### Accessing advanced typography

- [rubyAtIndex:range:](avcaption/rubyatindex_range_.md): Returns the ruby text at the index position.
- [AVCaptionRuby](avcaption/ruby.md): An object that presents ruby characters.
- [textCombineAtIndex:range:](avcaption/textcombineatindex_range_.md): Returns the text combine at the index position.
- [AVCaptionTextCombine](avcaption/textcombine.md): The caption’s supported rendering policy options.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVMutableCaption](avmutablecaption.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Captions

- [AVMutableCaption](avmutablecaption.md): A mutable caption subclass that you use to create new captions.
