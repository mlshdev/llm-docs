> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/markdownparsingoptions/failurepolicy-swift.enum](https://developer.apple.com/documentation/foundation/attributedstring/markdownparsingoptions/failurepolicy-swift.enum)

# AttributedString.MarkdownParsingOptions.FailurePolicy

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that represents policies for handling parsing failures.

## Declaration

```swift
enum FailurePolicy
```

## Topics

### Declaring Failure Policies

- [AttributedString.MarkdownParsingOptions.FailurePolicy.returnPartiallyParsedIfPossible](failurepolicy-swift.enum/returnpartiallyparsedifpossible.md): A policy to return a partially-parsed string, if possible.
- [AttributedString.MarkdownParsingOptions.FailurePolicy.throwError](failurepolicy-swift.enum/throwerror.md): A policy to throw an error from the initializer if parsing fails.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Options

- [allowsExtendedAttributes](allowsextendedattributes.md): A Boolean value that indicates whether parsing allows extensions to Markdown that specify extended attributes.
- [appliesSourcePositionAttributes](appliessourcepositionattributes.md): A Boolean value that indicates whether parsing applies attributes that indicate the position of attributed text in the original Markdown string.
- [failurePolicy](failurepolicy-swift.property.md): The policy for handling a parsing failure.
- [interpretedSyntax](interpretedsyntax-swift.property.md): The syntax for interpreting a Markdown string.
- [AttributedString.MarkdownParsingOptions.InterpretedSyntax](interpretedsyntax-swift.enum.md): A type that represents the syntax for interpreting a Markdown string.
- [languageCode](languagecode.md): The language code for this document.
