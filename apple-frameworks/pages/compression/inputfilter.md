> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/inputfilter](https://developer.apple.com/documentation/compression/inputfilter)

# InputFilter

**Framework:** Compression  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

An encoder-decoder that reads input data from a stream.

## Declaration

```swift
class InputFilter<D> where D : DataProtocol
```

## Topics

### Initializers

- [init(\_:using:bufferCapacity:readingFrom:)](inputfilter/init%28__using_buffercapacity_readingfrom_%29.md): Creates an input filter that can be used to compress or decompress data.

### Instance Methods

- [readData(ofLength:)](inputfilter/readdata%28oflength_%29.md): Reads processed data from the input filter.

## See Also

### Objects that simplify multiple-step compression

- [Compressing and decompressing data with input and output filters](../accelerate/compressing-and-decompressing-data-with-input-and-output-filters.md): Compress and decompress streamed or from-memory data, using input and output filters.
- [Compressing and decompressing files with stream compression](../accelerate/compressing-and-decompressing-files-with-stream-compression.md): Perform compression for all files and decompression for files with supported extension types.
- [OutputFilter](outputfilter.md): An encoder-decoder that writes output data to a stream.
- [Algorithm](algorithm.md): Algorithms used for compression or decompression.
- [FilterError](filtererror.md): Errors that occur during compression.
- [FilterOperation](filteroperation.md): Operations that define whether input and output filters compress or decompress data.
