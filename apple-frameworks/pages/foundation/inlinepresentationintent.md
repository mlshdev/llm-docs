> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/inlinepresentationintent](https://developer.apple.com/documentation/foundation/inlinepresentationintent)

# InlinePresentationIntent (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that defines presentation intent for runs of characters for traits like emphasis, strikethrough, and code voice.

## Declaration

```swift
struct InlinePresentationIntent
```

## Topics

### Getting inline presentation types

- [code](inlinepresentationintent/code.md): An intent that represents a code voice presentation.
- [emphasized](inlinepresentationintent/emphasized.md): An intent that represents an emphasized presentation.
- [lineBreak](inlinepresentationintent/linebreak.md): An intent that represents a line break.
- [softBreak](inlinepresentationintent/softbreak.md): An intent that represents a soft line break.
- [strikethrough](inlinepresentationintent/strikethrough.md): An intent that represents a strikethrough presentation.
- [stronglyEmphasized](inlinepresentationintent/stronglyemphasized.md): An intent that represents a strongly emphasized presentation.
- [inlineHTML](inlinepresentationintent/inlinehtml.md): An intent that represents an inline HTML presentation.
- [blockHTML](inlinepresentationintent/blockhtml.md): An intent that represents a block HTML presentation.

### Initializers

- [init(rawValue:)](inlinepresentationintent/init%28rawvalue_%29.md): Creates an inline presentation intent using the raw value you specify.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# NSInlinePresentationIntent (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that defines presentation intent for runs of characters for traits like emphasis, strikethrough, and code voice.

## Declaration

```objectivec
enum NSInlinePresentationIntent : NSUInteger;
```

## Topics

### Getting inline presentation types

- [NSInlinePresentationIntentCode](inlinepresentationintent/code.md): An intent that represents a code voice presentation.
- [NSInlinePresentationIntentEmphasized](inlinepresentationintent/emphasized.md): An intent that represents an emphasized presentation.
- [NSInlinePresentationIntentLineBreak](inlinepresentationintent/linebreak.md): An intent that represents a line break.
- [NSInlinePresentationIntentSoftBreak](inlinepresentationintent/softbreak.md): An intent that represents a soft line break.
- [NSInlinePresentationIntentStrikethrough](inlinepresentationintent/strikethrough.md): An intent that represents a strikethrough presentation.
- [NSInlinePresentationIntentStronglyEmphasized](inlinepresentationintent/stronglyemphasized.md): An intent that represents a strongly emphasized presentation.
- [NSInlinePresentationIntentInlineHTML](inlinepresentationintent/inlinehtml.md): An intent that represents an inline HTML presentation.
- [NSInlinePresentationIntentBlockHTML](inlinepresentationintent/blockhtml.md): An intent that represents a block HTML presentation.

## See Also

### Representing markdown attributes

- [NSPresentationIntent](nspresentationintent.md): A type that contains the Markdown formatting for blocks of text, like paragraphs, lists, code blocks, and parts of tables.
- [NSAttributedStringMarkdownSourcePosition](nsattributedstringmarkdownsourceposition.md): The position of attributed string text in its original Markdown source string.
- [NSPresentationIntentKind](nspresentationintentkind.md): An enumeration of intended display styles for blocks of text like paragraphs, lists, and code blocks.
- [NSPresentationIntentTableColumnAlignment](nspresentationintenttablecolumnalignment.md): An enumeration of values for aligning the contents of table columns.
