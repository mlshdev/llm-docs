> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/asynclinesequence](https://developer.apple.com/documentation/foundation/asynclinesequence)

# AsyncLineSequence

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An asynchronous sequence of lines of text.

## Declaration

```swift
struct AsyncLineSequence<Base> where Base : AsyncSequence, Base.Element == UInt8
```

## Topics

### Type Aliases

- [AsyncLineSequence.Element](asynclinesequence/element.md): The type of elements produced by this asynchronous sequence.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Structures

- [AsyncCharacterSequence](asynccharactersequence.md): An asynchronous sequence of characters.
- [AsyncUnicodeScalarSequence](asyncunicodescalarsequence.md): An asychronous sequence of Unicode scalar values.
- [Expression](expression.md)
- [NSAttributedStringFormattingContextKey](nsattributedstringformattingcontextkey.md): A type that represents a key in the formatting context dictionary.
- [NSKeyValueChangeKey](nskeyvaluechangekey.md): The keys that can appear in the change dictionary.
- [NSKeyValueObservedChange](nskeyvalueobservedchange.md)
- [NSKeyValueOperator](nskeyvalueoperator.md): These constants define the available array operators. See [Using Collection Operators](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/CollectionOperators.html) for more information.
- [PresentationIntent](presentationintent.md): A type that defines presentation intent for blocks of characters like paragraphs, lists, block quotes, and tables.
