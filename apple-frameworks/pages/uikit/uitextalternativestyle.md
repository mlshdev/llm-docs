> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextalternativestyle](https://developer.apple.com/documentation/uikit/uitextalternativestyle)

# UITextAlternativeStyle (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A constant that determines if the system highlights alternative phrases during text input.

## Declaration

```swift
enum UITextAlternativeStyle
```

## Topics

### Constants

- [UITextAlternativeStyle.lowConfidence](uitextalternativestyle/lowconfidence.md): A constant that indicates that the text input should highlight alternatives because the input text may be incorrect.
- [UITextAlternativeStyle.none](uitextalternativestyle/none.md): A constant that indicates that the text input shouldn’t highlight alternatives because the input text is expected to be correct.

### Initializers

- [init(rawValue:)](uitextalternativestyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting text-phrase alternatives

- [insertText(\_:alternatives:style:)](uitextinput/inserttext%28__alternatives_style_%29.md)

# UITextAlternativeStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A constant that determines if the system highlights alternative phrases during text input.

## Declaration

```objectivec
enum UITextAlternativeStyle : NSInteger;
```

## Topics

### Constants

- [UITextAlternativeStyleLowConfidence](uitextalternativestyle/lowconfidence.md): A constant that indicates that the text input should highlight alternatives because the input text may be incorrect.
- [UITextAlternativeStyleNone](uitextalternativestyle/none.md): A constant that indicates that the text input shouldn’t highlight alternatives because the input text is expected to be correct.

## See Also

### Supporting text-phrase alternatives

- [insertText:alternatives:style:](uitextinput/inserttext%28__alternatives_style_%29.md)
