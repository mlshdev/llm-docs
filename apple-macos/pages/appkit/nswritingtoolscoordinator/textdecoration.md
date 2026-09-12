> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/textdecoration](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/textdecoration)

# NSWritingToolsCoordinator.TextDecoration (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 27.0+

Use the `NSWritingToolsCoordinator.TextDecoration` constants to determine the type of decoration to be applied to a preview for grammar animation. The grammar animation needs previews of the text of the issue in two forms, without and with the grammar indication underline applied. If you use grammar animation, you must implement the delegate method [writingToolsCoordinator(\_:requestsPreviewFor:of:in:textDecoration:completion:)](delegate-swift.protocol/writingtoolscoordinator%28__requestspreviewfor_of_in_textdecoration_completion_%29.md) to provide both forms of previews, based on the specified decoration.

## Declaration

```swift
enum TextDecoration
```

## Topics

### Enumeration Cases

- [NSWritingToolsCoordinator.TextDecoration.grammarUnderline](textdecoration/grammarunderline.md): Requests a preview of the text with the grammar indication underline.
- [NSWritingToolsCoordinator.TextDecoration.none](textdecoration/none.md): Requests a preview of the text without any additional decoration.

### Initializers

- [init(rawValue:)](textdecoration/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSWritingToolsCoordinatorTextDecoration (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 27.0+

Use the `NSWritingToolsCoordinator.TextDecoration` constants to determine the type of decoration to be applied to a preview for grammar animation. The grammar animation needs previews of the text of the issue in two forms, without and with the grammar indication underline applied. If you use grammar animation, you must implement the delegate method [writingToolsCoordinator:requestsPreviewForTextAnimation:ofRange:inContext:textDecoration:completion:](delegate-swift.protocol/writingtoolscoordinator%28__requestspreviewfor_of_in_textdecoration_completion_%29.md) to provide both forms of previews, based on the specified decoration.

## Declaration

```objectivec
enum NSWritingToolsCoordinatorTextDecoration : NSInteger;
```

## Topics

### Enumeration Cases

- [NSWritingToolsCoordinatorTextDecorationGrammarUnderline](textdecoration/grammarunderline.md): Requests a preview of the text with the grammar indication underline.
- [NSWritingToolsCoordinatorTextDecorationNone](textdecoration/none.md): Requests a preview of the text without any additional decoration.
