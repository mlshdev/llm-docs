> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaption/textcombine](https://developer.apple.com/documentation/avfoundation/avcaption/textcombine)

# AVCaption.TextCombine (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The caption’s supported rendering policy options.

## Declaration

```swift
enum TextCombine
```

<a id="overview"></a>

## Overview

Text combine is a special rendering policy that combines multiple characters into one unit and presents it in upright position in a vertical text flow. This presentation achieves a horizontal-in-vertical layout (or Tate-Chu-Yoko layout), which lets the caption render a horizontal text string in vertical text.

## Topics

### Text combine options

- [AVCaption.TextCombine.all](textcombine/all.md): An option that combines all of the characters.
- [AVCaption.TextCombine.none](textcombine/none.md): An option that doesn’t combine text upright.
- [AVCaption.TextCombine.oneDigit](textcombine/onedigit.md): An option that makes one digit upright.
- [AVCaption.TextCombine.twoDigits](textcombine/twodigits.md): An option that combines two consecutive digits.
- [AVCaption.TextCombine.threeDigits](textcombine/threedigits.md): An option that combines three consecutive digits.
- [AVCaption.TextCombine.fourDigits](textcombine/fourdigits.md): An option that combines four consecutive digits.

### Initializers

- [init(rawValue:)](textcombine/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing advanced typography

- [ruby(at:)](ruby%28at_%29.md): Returns the ruby text at the index position.
- [AVCaption.Ruby](ruby.md): An object that presents ruby characters.
- [textCombine(at:)](textcombine%28at_%29.md): Returns the text combine at the index position.

# AVCaptionTextCombine (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The caption’s supported rendering policy options.

## Declaration

```objectivec
enum AVCaptionTextCombine : NSInteger;
```

<a id="overview"></a>

## Overview

Text combine is a special rendering policy that combines multiple characters into one unit and presents it in upright position in a vertical text flow. This presentation achieves a horizontal-in-vertical layout (or Tate-Chu-Yoko layout), which lets the caption render a horizontal text string in vertical text.

## Topics

### Text combine options

- [AVCaptionTextCombineAll](textcombine/all.md): An option that combines all of the characters.
- [AVCaptionTextCombineNone](textcombine/none.md): An option that doesn’t combine text upright.
- [AVCaptionTextCombineOneDigit](textcombine/onedigit.md): An option that makes one digit upright.
- [AVCaptionTextCombineTwoDigits](textcombine/twodigits.md): An option that combines two consecutive digits.
- [AVCaptionTextCombineThreeDigits](textcombine/threedigits.md): An option that combines three consecutive digits.
- [AVCaptionTextCombineFourDigits](textcombine/fourdigits.md): An option that combines four consecutive digits.

## See Also

### Accessing advanced typography

- [rubyAtIndex:range:](rubyatindex_range_.md): Returns the ruby text at the index position.
- [AVCaptionRuby](ruby.md): An object that presents ruby characters.
- [textCombineAtIndex:range:](textcombineatindex_range_.md): Returns the text combine at the index position.
