> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/filtererror](https://developer.apple.com/documentation/compression/filtererror)

# FilterError

**Framework:** Compression  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Errors that occur during compression.

## Declaration

```swift
enum FilterError
```

## Topics

### Enumeration Cases

- [FilterError.invalidData](filtererror/invaliddata.md): An error that indicates invalid data passed to the encoder-decoder.
- [FilterError.invalidState](filtererror/invalidstate.md): An error that indicates a filter failed to initialize, or that it has an invalid internal stare or parameters.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Objects that simplify multiple-step compression

- [Compressing and decompressing data with input and output filters](../accelerate/compressing-and-decompressing-data-with-input-and-output-filters.md): Compress and decompress streamed or from-memory data, using input and output filters.
- [Compressing and decompressing files with stream compression](../accelerate/compressing-and-decompressing-files-with-stream-compression.md): Perform compression for all files and decompression for files with supported extension types.
- [InputFilter](inputfilter.md): An encoder-decoder that reads input data from a stream.
- [OutputFilter](outputfilter.md): An encoder-decoder that writes output data to a stream.
- [Algorithm](algorithm.md): Algorithms used for compression or decompression.
- [FilterOperation](filteroperation.md): Operations that define whether input and output filters compress or decompress data.
