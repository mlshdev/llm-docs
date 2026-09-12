> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaption/fontstyle](https://developer.apple.com/documentation/avfoundation/avcaption/fontstyle)

# AVCaption.FontStyle (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Font styles for caption text.

## Declaration

```swift
enum FontStyle
```

## Topics

### Font styles

- [AVCaption.FontStyle.unknown](fontstyle/unknown.md): An unknown font style.
- [AVCaption.FontStyle.normal](fontstyle/normal.md): A normal font style.
- [AVCaption.FontStyle.italic](fontstyle/italic.md): An italic font style.

### Initializers

- [init(rawValue:)](fontstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing font styles

- [fontStyle(at:)](fontstyle%28at_%29.md): Returns the font style and range at the index position.
- [fontWeight(at:)](fontweight%28at_%29.md): Returns the font weight and range at the index position.
- [AVCaption.FontWeight](fontweight.md): Font weights for a caption.
- [decoration(at:)](decoration%28at_%29.md): Returns the text decoration at the index position.
- [AVCaption.Decoration](decoration.md): Text decorations for caption text.

# AVCaptionFontStyle (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Font styles for caption text.

## Declaration

```objectivec
enum AVCaptionFontStyle : NSInteger;
```

## Topics

### Font styles

- [AVCaptionFontStyleUnknown](fontstyle/unknown.md): An unknown font style.
- [AVCaptionFontStyleNormal](fontstyle/normal.md): A normal font style.
- [AVCaptionFontStyleItalic](fontstyle/italic.md): An italic font style.

## See Also

### Accessing font styles

- [fontStyleAtIndex:range:](fontstyleatindex_range_.md): Returns the font style and range at the index position.
- [fontWeightAtIndex:range:](fontweightatindex_range_.md): Returns the font weight and range at the index position.
- [AVCaptionFontWeight](fontweight.md): Font weights for a caption.
- [decorationAtIndex:range:](decorationatindex_range_.md): Returns the text decoration at the index position.
- [AVCaptionDecoration](decoration.md): Text decorations for caption text.
