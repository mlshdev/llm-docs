> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/bytes](https://developer.apple.com/documentation/foundation/filehandle/bytes)

# bytes

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The file’s contents, as an asynchronous sequence of bytes.

## Declaration

```swift
var bytes: FileHandle.AsyncBytes { get }
```

<a id="Discussion"></a>

## Discussion

Use the `for`-`await`-`in` syntax to iterate over the bytes in this sequence. For text files, you can also use its [characters](https://developer.apple.com/documentation/swift/asyncsequence/characters), [unicodeScalars](https://developer.apple.com/documentation/swift/asyncsequence/unicodescalars), or [lines](https://developer.apple.com/documentation/swift/asyncsequence/lines) properties to retrieve the contents in a more convenient format. Since all of these properties conform to [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence), as does [bytes](bytes.md) itself, you can use methods defined by [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence) to perform powerful inline processing. For example, you can skip the first `n` bytes of the file with `myFileHandle.bytes.prefix(n)`.

> **Tip**

>  Rather than creating a [FileHandle](../filehandle.md) to read a file asynchronously, you can instead use a `file://` URL in combination with the [resourceBytes](../url/resourcebytes.md) property in [URL](../url.md).

## See Also

### Reading from a file handle asynchronously

- [FileHandle.AsyncBytes](asyncbytes.md): An asynchronous sequence of bytes.
