> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/cttextalignment](https://developer.apple.com/documentation/coretext/cttextalignment)

# CTTextAlignment (Swift)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that specify text alignment.

## Declaration

```swift
enum CTTextAlignment
```

## Topics

### Constants

- [CTTextAlignment.left](cttextalignment/left.md): Text is visually left-aligned.
- [CTTextAlignment.right](cttextalignment/right.md): Text is visually right-aligned.
- [CTTextAlignment.center](cttextalignment/center.md): Text is visually center-aligned.
- [CTTextAlignment.justified](cttextalignment/justified.md): Text is fully justified.
- [CTTextAlignment.natural](cttextalignment/natural.md): Text uses the natural alignment of the text’s script.

### Initializers

- [init(\_:)](cttextalignment/init%28__%29.md): Converts a UIKit text alignment constant value to the matching constant value that Core Text uses.
- [init(rawValue:)](cttextalignment/init%28rawvalue_%29.md)

### Deprecated

- [kCTLeftTextAlignment](cttextalignment/kctlefttextalignment.md): Deprecated. Text is visually left-aligned.
- [kCTRightTextAlignment](cttextalignment/kctrighttextalignment.md): Deprecated. Text is visually right-aligned.
- [kCTCenterTextAlignment](cttextalignment/kctcentertextalignment.md): Deprecated. Text is visually center-aligned.
- [kCTJustifiedTextAlignment](cttextalignment/kctjustifiedtextalignment.md): Deprecated. Text is fully justified.
- [kCTNaturalTextAlignment](cttextalignment/kctnaturaltextalignment.md): Deprecated. Text uses the natural alignment of the text’s script.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [CTLineBreakMode](ctlinebreakmode.md): These constants specify what happens when a line is too long for its frame.
- [CTWritingDirection](ctwritingdirection.md): These constants specify the writing direction.
- [CTParagraphStyleSpecifier](ctparagraphstylespecifier.md): Constants used to query and modify a paragraph style object.

# CTTextAlignment (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that specify text alignment.

## Declaration

```objectivec
enum CTTextAlignment : uint8_t;
```

## Topics

### Constants

- [kCTTextAlignmentLeft](cttextalignment/left.md): Text is visually left-aligned.
- [kCTTextAlignmentRight](cttextalignment/right.md): Text is visually right-aligned.
- [kCTTextAlignmentCenter](cttextalignment/center.md): Text is visually center-aligned.
- [kCTTextAlignmentJustified](cttextalignment/justified.md): Text is fully justified.
- [kCTTextAlignmentNatural](cttextalignment/natural.md): Text uses the natural alignment of the text’s script.

### Deprecated

- [kCTLeftTextAlignment](cttextalignment/kctlefttextalignment.md): Deprecated. Text is visually left-aligned.
- [kCTRightTextAlignment](cttextalignment/kctrighttextalignment.md): Deprecated. Text is visually right-aligned.
- [kCTCenterTextAlignment](cttextalignment/kctcentertextalignment.md): Deprecated. Text is visually center-aligned.
- [kCTJustifiedTextAlignment](cttextalignment/kctjustifiedtextalignment.md): Deprecated. Text is fully justified.
- [kCTNaturalTextAlignment](cttextalignment/kctnaturaltextalignment.md): Deprecated. Text uses the natural alignment of the text’s script.

## See Also

### Constants

- [CTLineBreakMode](ctlinebreakmode.md): These constants specify what happens when a line is too long for its frame.
- [CTWritingDirection](ctwritingdirection.md): These constants specify the writing direction.
- [CTParagraphStyleSpecifier](ctparagraphstylespecifier.md): Constants used to query and modify a paragraph style object.
