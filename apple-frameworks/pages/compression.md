> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression](https://developer.apple.com/documentation/compression)

# Compression (Swift)

**Framework:** Compression  
**Kind:** Framework  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Leverage compression algorithms for lossless data compression.

<a id="overview"></a>

## Overview

The Compression framework enables your app to provide lossless compression when saving or sharing files and data. Compression is a process in which you compress (encode) and decompress (decode) data. For example, a text editor may save its files in a compressed format, and automatically decompress the saved file when the user opens it.

![A flow diagram that illustrates the compression and decompression process. The encoder compresses the original data into the encoded (compressed) data. The decoder decompresses the encoded data into the decompressed data.](https://developer.apple.com/images/com.apple.compression/media-4311255@2x.png)

The framework offers two methods of compression:

- *Buffer compression* uses a single-step method for compressing files, making it perfect for use with uncompressed files under 8 MB, or compressed files under 1 MB.
- *Stream compression* uses multiple steps for compressing files, making it ideal for compressing larger files or streamed data, such as an incoming audio signal or downloading files.

To use buffer compression, you compress or decompress the input data with one call to the corresponding function. To learn more about buffer compression, including a walk-through of the code used to encode and decode a string, see [Compressing and decompressing data with buffer compression](accelerate/compressing-and-decompressing-data-with-buffer-compression.md).

To use stream compression, you call the compression or decompression function repeatedly to compress or decompress data from a source buffer to a destination buffer. Between calls, the compressor or decompressor moves processed data out of the source buffer and loads new data into the destination buffer. To learn more about stream compression, see the sample code project [Compressing and decompressing files with stream compression](accelerate/compressing-and-decompressing-files-with-stream-compression.md).

## Topics

### Objects that simplify multiple-step compression

Simplify encoding and decoding streams of data using Compression classes for Swift.

- [Compressing and decompressing data with input and output filters](accelerate/compressing-and-decompressing-data-with-input-and-output-filters.md): Compress and decompress streamed or from-memory data, using input and output filters.
- [Compressing and decompressing files with stream compression](accelerate/compressing-and-decompressing-files-with-stream-compression.md): Perform compression for all files and decompression for files with supported extension types.
- [InputFilter](compression/inputfilter.md): An encoder-decoder that reads input data from a stream.
- [OutputFilter](compression/outputfilter.md): An encoder-decoder that writes output data to a stream.
- [Algorithm](compression/algorithm.md): Algorithms used for compression or decompression.
- [FilterError](compression/filtererror.md): Errors that occur during compression.
- [FilterOperation](compression/filteroperation.md): Operations that define whether input and output filters compress or decompress data.

### Multiple-step compression

Stream compression functions compress or decompress sequential blocks of data.

- [compression_stream](compression/compression_stream.md): A structure representing a compression stream.
- [compression_stream_init(\_:\_:\_:)](compression/compression_stream_init%28______%29.md): Initializes a compression stream for either compression or decompression.
- [compression_stream_process(\_:\_:)](compression/compression_stream_process%28____%29.md): Performs compression or decompression using an initialized compression stream structure.
- [compression_stream_destroy(\_:)](compression/compression_stream_destroy%28__%29.md): Frees any memory allocated by stream initialization function.
- [compression_status](compression/compression_status.md): A set of values used to represent the status of stream compression.
- [compression_stream_flags](compression/compression_stream_flags.md): A set of values used to represent stream compression flags.
- [compression_stream_operation](compression/compression_stream_operation.md): A set of values used to represent a stream compression operation.
- [compression_algorithm](compression/compression_algorithm.md): A structure for values that represent compression algorithms.

### Single-step compression

Buffer compression functions compress or decompress a block of data stored contiguously in memory.

- [Compressing and decompressing data with buffer compression](accelerate/compressing-and-decompressing-data-with-buffer-compression.md): Compress a string, write it to the file system, and decompress the same file using buffer compression.
- [compression_encode_scratch_buffer_size(\_:)](compression/compression_encode_scratch_buffer_size%28__%29.md): Returns the required compression scratch buffer size for the selected algorithm.
- [compression_encode_buffer(\_:\_:\_:\_:\_:\_:)](compression/compression_encode_buffer%28____________%29.md): Compresses the contents of a source buffer into a destination buffer.
- [compression_decode_scratch_buffer_size(\_:)](compression/compression_decode_scratch_buffer_size%28__%29.md): Returns the required decompression scratch buffer size for the selected algorithm.
- [compression_decode_buffer(\_:\_:\_:\_:\_:\_:)](compression/compression_decode_buffer%28____________%29.md): Decompresses the contents of a source buffer into a destination buffer.
- [compression_algorithm](compression/compression_algorithm.md): A structure for values that represent compression algorithms.

# Compression (Objective-C)

**Framework:** Compression  
**Kind:** Framework  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Leverage compression algorithms for lossless data compression.

<a id="overview"></a>

## Overview

The Compression framework enables your app to provide lossless compression when saving or sharing files and data. Compression is a process in which you compress (encode) and decompress (decode) data. For example, a text editor may save its files in a compressed format, and automatically decompress the saved file when the user opens it.

![A flow diagram that illustrates the compression and decompression process. The encoder compresses the original data into the encoded (compressed) data. The decoder decompresses the encoded data into the decompressed data.](https://developer.apple.com/images/com.apple.compression/media-4311255@2x.png)

The framework offers two methods of compression:

- *Buffer compression* uses a single-step method for compressing files, making it perfect for use with uncompressed files under 8 MB, or compressed files under 1 MB.
- *Stream compression* uses multiple steps for compressing files, making it ideal for compressing larger files or streamed data, such as an incoming audio signal or downloading files.

To use buffer compression, you compress or decompress the input data with one call to the corresponding function. To learn more about buffer compression, including a walk-through of the code used to encode and decode a string, see [Compressing and decompressing data with buffer compression](accelerate/compressing-and-decompressing-data-with-buffer-compression.md).

To use stream compression, you call the compression or decompression function repeatedly to compress or decompress data from a source buffer to a destination buffer. Between calls, the compressor or decompressor moves processed data out of the source buffer and loads new data into the destination buffer. To learn more about stream compression, see the sample code project [Compressing and decompressing files with stream compression](accelerate/compressing-and-decompressing-files-with-stream-compression.md).

## Topics

### Objects that simplify multiple-step compression

Simplify encoding and decoding streams of data using Compression classes for Swift.

- [Compressing and decompressing data with input and output filters](accelerate/compressing-and-decompressing-data-with-input-and-output-filters.md): Compress and decompress streamed or from-memory data, using input and output filters.
- [Compressing and decompressing files with stream compression](accelerate/compressing-and-decompressing-files-with-stream-compression.md): Perform compression for all files and decompression for files with supported extension types.

### Multiple-step compression

Stream compression functions compress or decompress sequential blocks of data.

- [compression_stream](compression/compression_stream.md): A structure representing a compression stream.
- [compression_stream_init](compression/compression_stream_init%28______%29.md): Initializes a compression stream for either compression or decompression.
- [compression_stream_process](compression/compression_stream_process%28____%29.md): Performs compression or decompression using an initialized compression stream structure.
- [compression_stream_destroy](compression/compression_stream_destroy%28__%29.md): Frees any memory allocated by stream initialization function.
- [compression_status](compression/compression_status.md): A set of values used to represent the status of stream compression.
- [compression_stream_flags](compression/compression_stream_flags.md): A set of values used to represent stream compression flags.
- [compression_stream_operation](compression/compression_stream_operation.md): A set of values used to represent a stream compression operation.
- [compression_algorithm](compression/compression_algorithm.md): A structure for values that represent compression algorithms.

### Single-step compression

Buffer compression functions compress or decompress a block of data stored contiguously in memory.

- [Compressing and decompressing data with buffer compression](accelerate/compressing-and-decompressing-data-with-buffer-compression.md): Compress a string, write it to the file system, and decompress the same file using buffer compression.
- [compression_encode_scratch_buffer_size](compression/compression_encode_scratch_buffer_size%28__%29.md): Returns the required compression scratch buffer size for the selected algorithm.
- [compression_encode_buffer](compression/compression_encode_buffer%28____________%29.md): Compresses the contents of a source buffer into a destination buffer.
- [compression_decode_scratch_buffer_size](compression/compression_decode_scratch_buffer_size%28__%29.md): Returns the required decompression scratch buffer size for the selected algorithm.
- [compression_decode_buffer](compression/compression_decode_buffer%28____________%29.md): Decompresses the contents of a source buffer into a destination buffer.
- [compression_algorithm](compression/compression_algorithm.md): A structure for values that represent compression algorithms.
