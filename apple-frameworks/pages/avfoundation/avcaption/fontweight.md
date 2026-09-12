> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaption/fontweight](https://developer.apple.com/documentation/avfoundation/avcaption/fontweight)

# AVCaption.FontWeight (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Font weights for a caption.

## Declaration

```swift
enum FontWeight
```

## Topics

### Font weights

- [AVCaption.FontWeight.unknown](fontweight/unknown.md): An unknown font weight.
- [AVCaption.FontWeight.normal](fontweight/normal.md): A normal font weight.
- [AVCaption.FontWeight.bold](fontweight/bold.md): A bold font weight.

### Initializers

- [init(rawValue:)](fontweight/init%28rawvalue_%29.md)

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
- [AVCaption.FontStyle](fontstyle.md): Font styles for caption text.
- [fontWeight(at:)](fontweight%28at_%29.md): Returns the font weight and range at the index position.
- [decoration(at:)](decoration%28at_%29.md): Returns the text decoration at the index position.
- [AVCaption.Decoration](decoration.md): Text decorations for caption text.

# AVCaptionFontWeight (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Font weights for a caption.

## Declaration

```objectivec
enum AVCaptionFontWeight : NSInteger;
```

## Topics

### Font weights

- [AVCaptionFontWeightUnknown](fontweight/unknown.md): An unknown font weight.
- [AVCaptionFontWeightNormal](fontweight/normal.md): A normal font weight.
- [AVCaptionFontWeightBold](fontweight/bold.md): A bold font weight.

## See Also

### Accessing font styles

- [fontStyleAtIndex:range:](fontstyleatindex_range_.md): Returns the font style and range at the index position.
- [AVCaptionFontStyle](fontstyle.md): Font styles for caption text.
- [fontWeightAtIndex:range:](fontweightatindex_range_.md): Returns the font weight and range at the index position.
- [decorationAtIndex:range:](decorationatindex_range_.md): Returns the text decoration at the index position.
- [AVCaptionDecoration](decoration.md): Text decorations for caption text.
