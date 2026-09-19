> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/asynccharactersequence

# AsyncCharacterSequence

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An asynchronous sequence of characters.

## Declaration

```swift
struct AsyncCharacterSequence<Base> where Base : AsyncSequence, Base.Element == UInt8
```

## Topics

### Type Aliases

- [AsyncCharacterSequence.Element](asynccharactersequence/element.md): The type of elements produced by this asynchronous sequence.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Structures

- [AsyncLineSequence](asynclinesequence.md): An asynchronous sequence of lines of text.
- [AsyncUnicodeScalarSequence](asyncunicodescalarsequence.md): An asychronous sequence of Unicode scalar values.
- [Expression](expression.md)
- [NSAttributedStringFormattingContextKey](nsattributedstringformattingcontextkey.md): A type that represents a key in the formatting context dictionary.
- [NSKeyValueChangeKey](nskeyvaluechangekey.md): The keys that can appear in the change dictionary.
- [NSKeyValueObservedChange](nskeyvalueobservedchange.md)
- [NSKeyValueOperator](nskeyvalueoperator.md): These constants define the available array operators. See [Using Collection Operators](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/CollectionOperators.html) for more information.
- [PresentationIntent](presentationintent.md): A type that defines presentation intent for blocks of characters like paragraphs, lists, block quotes, and tables.
