> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaption/ruby/alignment-swift.enum](https://developer.apple.com/documentation/avfoundation/avcaption/ruby/alignment-swift.enum)

# AVCaption.Ruby.Alignment (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Constants that indicate ruby text alignments.

## Declaration

```swift
enum Alignment
```

## Topics

### Text alignments

- [AVCaption.Ruby.Alignment.start](alignment-swift.enum/start.md): An alignment with the ruby base and text at the left edge of horizontal text in a left-to-right inline progression, or at top of the vertical text in a top-to-bottom inline progression.
- [AVCaption.Ruby.Alignment.center](alignment-swift.enum/center.md): An alignment with the ruby text at the center of ruby base.
- [AVCaption.Ruby.Alignment.distributeSpaceBetween](alignment-swift.enum/distributespacebetween.md): An alignment with the ruby text so the spaces between the ruby text characters are equal.
- [AVCaption.Ruby.Alignment.distributeSpaceAround](alignment-swift.enum/distributespacearound.md): An alignment with the ruby text so the spaces around each ruby text character are equal.

### Initializers

- [init(rawValue:)](alignment-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing text properties

- [text](text.md): The ruby text.
- [position](position-swift.property.md): The ruby text position.
- [AVCaption.Ruby.Position](position-swift.enum.md): Constants that indicate ruby text positions.
- [alignment](alignment-swift.property.md): The ruby text alignment.

# AVCaptionRubyAlignment (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Constants that indicate ruby text alignments.

## Declaration

```objectivec
enum AVCaptionRubyAlignment : NSInteger;
```

## Topics

### Text alignments

- [AVCaptionRubyAlignmentStart](alignment-swift.enum/start.md): An alignment with the ruby base and text at the left edge of horizontal text in a left-to-right inline progression, or at top of the vertical text in a top-to-bottom inline progression.
- [AVCaptionRubyAlignmentCenter](alignment-swift.enum/center.md): An alignment with the ruby text at the center of ruby base.
- [AVCaptionRubyAlignmentDistributeSpaceBetween](alignment-swift.enum/distributespacebetween.md): An alignment with the ruby text so the spaces between the ruby text characters are equal.
- [AVCaptionRubyAlignmentDistributeSpaceAround](alignment-swift.enum/distributespacearound.md): An alignment with the ruby text so the spaces around each ruby text character are equal.

## See Also

### Accessing text properties

- [text](text.md): The ruby text.
- [position](position-swift.property.md): The ruby text position.
- [AVCaptionRubyPosition](position-swift.enum.md): Constants that indicate ruby text positions.
- [alignment](alignment-swift.property.md): The ruby text alignment.
