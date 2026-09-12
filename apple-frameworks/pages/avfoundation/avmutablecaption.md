> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecaption](https://developer.apple.com/documentation/avfoundation/avmutablecaption)

# AVMutableCaption (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A mutable caption subclass that you use to create new captions.

## Declaration

```swift
class AVMutableCaption
```

## Topics

### Configuring text and timing

- [text](avmutablecaption/text.md): The caption text.
- [timeRange](avmutablecaption/timerange.md): The time range over which the system presents the caption.

### Configuring the region

- [region](avmutablecaption/region.md): The region in which the caption exists.

### Configuring font styles

- [AVCaption.FontStyle](avcaption/fontstyle.md): Font styles for caption text.
- [setFontStyle(\_:in:)](avmutablecaption/setfontstyle%28__in_%29.md): Sets the font style for a range of text.
- [removeFontStyle(in:)](avmutablecaption/removefontstyle%28in_%29.md): Removes a font style from a range of text.
- [AVCaption.FontWeight](avcaption/fontweight.md): Font weights for a caption.
- [setFontWeight(\_:in:)](avmutablecaption/setfontweight%28__in_%29.md): Sets the font weight for a range of text.
- [removeFontWeight(in:)](avmutablecaption/removefontweight%28in_%29.md): Removes a font weight from a range of text.
- [AVCaption.Decoration](avcaption/decoration.md): Text decorations for caption text.
- [setDecoration(\_:in:)](avmutablecaption/setdecoration%28__in_%29.md): Sets a decoration for a range of text.
- [removeDecoration(in:)](avmutablecaption/removedecoration%28in_%29.md): Removes a decoration from a range of text.

### Configuring colors

- [setTextColor(\_:in:)](avmutablecaption/settextcolor%28__in_%29.md): Sets the text color for a range of text.
- [removeTextColor(in:)](avmutablecaption/removetextcolor%28in_%29.md): Removes the text color for a range of text.
- [setBackgroundColor(\_:in:)](avmutablecaption/setbackgroundcolor%28__in_%29.md): Sets the background color for a range of text.
- [removeBackgroundColor(in:)](avmutablecaption/removebackgroundcolor%28in_%29.md): Removes a background color from a range of text.

### Configuring alignment

- [textAlignment](avmutablecaption/textalignment.md): The alignment of the caption text.
- [AVCaption.TextAlignment](avcaption/textalignment-swift.enum.md): Text alignment options for a caption.

### Configuring animation

- [animation](avmutablecaption/animation.md): Animations to apply to the caption text.
- [AVCaption.Animation](avcaption/animation-swift.enum.md): Animation options for a caption.

### Configuring advanced typography

- [AVCaption.Ruby](avcaption/ruby.md): An object that presents ruby characters.
- [setRuby(\_:in:)](avmutablecaption/setruby%28__in_%29.md): Sets ruby text for a range.
- [removeRuby(in:)](avmutablecaption/removeruby%28in_%29.md): Removes ruby text from a range.
- [AVCaption.TextCombine](avcaption/textcombine.md): The caption’s supported rendering policy options.
- [setTextCombine(\_:in:)](avmutablecaption/settextcombine%28__in_%29.md): Sets text combine for a range.
- [removeTextCombine(in:)](avmutablecaption/removetextcombine%28in_%29.md): Removes text combine from a range.

## Relationships

### Inherits From

- [AVCaption](avcaption.md)

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

- [AVCaption](avcaption.md): An object that represents text to present over a time range.

# AVMutableCaption (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A mutable caption subclass that you use to create new captions.

## Declaration

```objectivec
@interface AVMutableCaption : AVCaption
```

## Topics

### Configuring text and timing

- [text](avmutablecaption/text.md): The caption text.
- [timeRange](avmutablecaption/timerange.md): The time range over which the system presents the caption.

### Configuring the region

- [region](avmutablecaption/region.md): The region in which the caption exists.

### Configuring font styles

- [AVCaptionFontStyle](avcaption/fontstyle.md): Font styles for caption text.
- [setFontStyle:inRange:](avmutablecaption/setfontstyle_inrange_.md): Sets the font style for a range of text.
- [removeFontStyleInRange:](avmutablecaption/removefontstyleinrange_.md): Removes a font style from a range of text.
- [AVCaptionFontWeight](avcaption/fontweight.md): Font weights for a caption.
- [setFontWeight:inRange:](avmutablecaption/setfontweight_inrange_.md): Sets the font weight for a range of text.
- [removeFontWeightInRange:](avmutablecaption/removefontweightinrange_.md): Removes a font weight from a range of text.
- [AVCaptionDecoration](avcaption/decoration.md): Text decorations for caption text.
- [setDecoration:inRange:](avmutablecaption/setdecoration_inrange_.md): Sets a decoration for a range of text.
- [removeDecorationInRange:](avmutablecaption/removedecorationinrange_.md): Removes a decoration from a range of text.

### Configuring colors

- [setTextColor:inRange:](avmutablecaption/settextcolor_inrange_.md): Sets the text color for a range of text.
- [removeTextColorInRange:](avmutablecaption/removetextcolorinrange_.md): Removes the text color for a range of text.
- [setBackgroundColor:inRange:](avmutablecaption/setbackgroundcolor_inrange_.md): Sets the background color for a range of text.
- [removeBackgroundColorInRange:](avmutablecaption/removebackgroundcolorinrange_.md): Removes a background color from a range of text.

### Configuring alignment

- [textAlignment](avmutablecaption/textalignment.md): The alignment of the caption text.
- [AVCaptionTextAlignment](avcaption/textalignment-swift.enum.md): Text alignment options for a caption.

### Configuring animation

- [animation](avmutablecaption/animation.md): Animations to apply to the caption text.
- [AVCaptionAnimation](avcaption/animation-swift.enum.md): Animation options for a caption.

### Configuring advanced typography

- [AVCaptionRuby](avcaption/ruby.md): An object that presents ruby characters.
- [setRuby:inRange:](avmutablecaption/setruby_inrange_.md): Sets ruby text for a range.
- [removeRubyInRange:](avmutablecaption/removerubyinrange_.md): Removes ruby text from a range.
- [AVCaptionTextCombine](avcaption/textcombine.md): The caption’s supported rendering policy options.
- [setTextCombine:inRange:](avmutablecaption/settextcombine_inrange_.md): Sets text combine for a range.
- [removeTextCombineInRange:](avmutablecaption/removetextcombineinrange_.md): Removes text combine from a range of text.

## Relationships

### Inherits From

- [AVCaption](avcaption.md)

## See Also

### Captions

- [AVCaption](avcaption.md): An object that represents text to present over a time range.
