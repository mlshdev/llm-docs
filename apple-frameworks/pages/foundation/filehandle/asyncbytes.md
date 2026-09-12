> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/asyncbytes](https://developer.apple.com/documentation/foundation/filehandle/asyncbytes)

# FileHandle.AsyncBytes

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An asynchronous sequence of bytes.

## Declaration

```swift
struct AsyncBytes
```

<a id="overview"></a>

## Overview

Use the `for`-`await`-`in` syntax to iterate over the bytes in this sequence. For text files, you can also use its [characters](https://developer.apple.com/documentation/swift/asyncsequence/characters), [unicodeScalars](https://developer.apple.com/documentation/swift/asyncsequence/unicodescalars), or [lines](https://developer.apple.com/documentation/swift/asyncsequence/lines) properties to retrieve the contents in a more convenient format. Since all of these properties conform to [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence), as does the [FileHandle](../filehandle.md) property [bytes](bytes.md), you can use methods defined by [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence) to perform powerful inline processing. For example, you can skip the first `n` bytes of the file with `myFileHandle.bytes.prefix(n)`.

## Topics

### Adapting Textual Sequences

- [AsyncCharacterSequence](../asynccharactersequence.md): An asynchronous sequence of characters.
- [AsyncUnicodeScalarSequence](../asyncunicodescalarsequence.md): An asychronous sequence of Unicode scalar values.
- [AsyncLineSequence](../asynclinesequence.md): An asynchronous sequence of lines of text.

### Creating an Iterator

- [makeAsyncIterator()](asyncbytes/makeasynciterator%28%29.md): Creates the asynchronous iterator that produces elements of this asynchronous sequence.

### Structures

- [FileHandle.AsyncBytes.Iterator](asyncbytes/iterator.md): An iterator that produces the bytes of a file handle.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Reading from a file handle asynchronously

- [bytes](bytes.md): The file’s contents, as an asynchronous sequence of bytes.
