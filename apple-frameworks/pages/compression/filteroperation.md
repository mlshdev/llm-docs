> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/filteroperation](https://developer.apple.com/documentation/compression/filteroperation)

# FilterOperation

**Framework:** Compression  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Operations that define whether input and output filters compress or decompress data.

## Declaration

```swift
enum FilterOperation
```

## Topics

### Enumeration Cases

- [FilterOperation.compress](filteroperation/compress.md): An operation that compresses data.
- [FilterOperation.decompress](filteroperation/decompress.md): An operation that decompresses data.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Objects that simplify multiple-step compression

- [Compressing and decompressing data with input and output filters](../accelerate/compressing-and-decompressing-data-with-input-and-output-filters.md): Compress and decompress streamed or from-memory data, using input and output filters.
- [Compressing and decompressing files with stream compression](../accelerate/compressing-and-decompressing-files-with-stream-compression.md): Perform compression for all files and decompression for files with supported extension types.
- [InputFilter](inputfilter.md): An encoder-decoder that reads input data from a stream.
- [OutputFilter](outputfilter.md): An encoder-decoder that writes output data to a stream.
- [Algorithm](algorithm.md): Algorithms used for compression or decompression.
- [FilterError](filtererror.md): Errors that occur during compression.
