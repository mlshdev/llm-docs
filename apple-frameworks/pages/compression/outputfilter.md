> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/outputfilter](https://developer.apple.com/documentation/compression/outputfilter)

# OutputFilter

**Framework:** Compression  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

An encoder-decoder that writes output data to a stream.

## Declaration

```swift
class OutputFilter
```

## Topics

### Initializers

Creates an output filter for compressing or decompressing data.

- [init(\_:using:bufferCapacity:writingTo:)](outputfilter/init%28__using_buffercapacity_writingto_%29.md): Creates an output filter that can be used to compress or decompress data.

### Instance Methods

- [write(\_:)](outputfilter/write%28__%29.md): Writes data to the output filter.
- [finalize()](outputfilter/finalize%28%29.md): Finalizes the stream by flushing all the remaining data in the stream.

## See Also

### Objects that simplify multiple-step compression

- [Compressing and decompressing data with input and output filters](../accelerate/compressing-and-decompressing-data-with-input-and-output-filters.md): Compress and decompress streamed or from-memory data, using input and output filters.
- [Compressing and decompressing files with stream compression](../accelerate/compressing-and-decompressing-files-with-stream-compression.md): Perform compression for all files and decompression for files with supported extension types.
- [InputFilter](inputfilter.md): An encoder-decoder that reads input data from a stream.
- [Algorithm](algorithm.md): Algorithms used for compression or decompression.
- [FilterError](filtererror.md): Errors that occur during compression.
- [FilterOperation](filteroperation.md): Operations that define whether input and output filters compress or decompress data.
