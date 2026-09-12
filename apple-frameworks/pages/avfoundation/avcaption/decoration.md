> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaption/decoration](https://developer.apple.com/documentation/avfoundation/avcaption/decoration)

# AVCaption.Decoration (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Text decorations for caption text.

## Declaration

```swift
struct Decoration
```

## Topics

### Decorations

- [underline](decoration/underline.md): A decoration representing a line under the text.
- [lineThrough](decoration/linethrough.md): A decoration representing a line through the text.
- [overline](decoration/overline.md): A decoration representing a line over the text.

### Initializers

- [init(rawValue:)](decoration/init%28rawvalue_%29.md): Creates a caption decoration by using a string.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Accessing font styles

- [fontStyle(at:)](fontstyle%28at_%29.md): Returns the font style and range at the index position.
- [AVCaption.FontStyle](fontstyle.md): Font styles for caption text.
- [fontWeight(at:)](fontweight%28at_%29.md): Returns the font weight and range at the index position.
- [AVCaption.FontWeight](fontweight.md): Font weights for a caption.
- [decoration(at:)](decoration%28at_%29.md): Returns the text decoration at the index position.

# AVCaptionDecoration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Text decorations for caption text.

## Declaration

```objectivec
enum AVCaptionDecoration : NSUInteger;
```

## Topics

### Decorations

- [AVCaptionDecorationUnderline](decoration/underline.md): A decoration representing a line under the text.
- [AVCaptionDecorationLineThrough](decoration/linethrough.md): A decoration representing a line through the text.
- [AVCaptionDecorationOverline](decoration/overline.md): A decoration representing a line over the text.
- [AVCaptionDecorationNone](../avcaptiondecoration/avcaptiondecorationnone.md): No text decoration.

## See Also

### Accessing font styles

- [fontStyleAtIndex:range:](fontstyleatindex_range_.md): Returns the font style and range at the index position.
- [AVCaptionFontStyle](fontstyle.md): Font styles for caption text.
- [fontWeightAtIndex:range:](fontweightatindex_range_.md): Returns the font weight and range at the index position.
- [AVCaptionFontWeight](fontweight.md): Font weights for a caption.
- [decorationAtIndex:range:](decorationatindex_range_.md): Returns the text decoration at the index position.
