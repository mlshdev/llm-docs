> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaption/ruby/position-swift.enum](https://developer.apple.com/documentation/avfoundation/avcaption/ruby/position-swift.enum)

# AVCaption.Ruby.Position (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Constants that indicate ruby text positions.

## Declaration

```swift
enum Position
```

## Topics

### Ruby positions

- [AVCaption.Ruby.Position.before](position-swift.enum/before.md): Display ruby text above horizontal text, or to the right of vertical text in a right-to-left block progression.
- [AVCaption.Ruby.Position.after](position-swift.enum/after.md): Display ruby text below horizontal text, or to the left of vertical text in a right-to-left block progression.

### Initializers

- [init(rawValue:)](position-swift.enum/init%28rawvalue_%29.md)

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
- [alignment](alignment-swift.property.md): The ruby text alignment.
- [AVCaption.Ruby.Alignment](alignment-swift.enum.md): Constants that indicate ruby text alignments.

# AVCaptionRubyPosition (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Constants that indicate ruby text positions.

## Declaration

```objectivec
enum AVCaptionRubyPosition : NSInteger;
```

## Topics

### Ruby positions

- [AVCaptionRubyPositionBefore](position-swift.enum/before.md): Display ruby text above horizontal text, or to the right of vertical text in a right-to-left block progression.
- [AVCaptionRubyPositionAfter](position-swift.enum/after.md): Display ruby text below horizontal text, or to the left of vertical text in a right-to-left block progression.

## See Also

### Accessing text properties

- [text](text.md): The ruby text.
- [position](position-swift.property.md): The ruby text position.
- [alignment](alignment-swift.property.md): The ruby text alignment.
- [AVCaptionRubyAlignment](alignment-swift.enum.md): Constants that indicate ruby text alignments.
