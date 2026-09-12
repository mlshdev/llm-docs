> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscompressionerrorminimum-swift.var](https://developer.apple.com/documentation/foundation/nscompressionerrorminimum-swift.var)

# NSCompressionErrorMinimum

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The start of the range of error codes reserved for compression errors.

## Declaration

```swift
var NSCompressionErrorMinimum: Int { get }
```

## See Also

### Compressing and Decompressing Data

- [compressed(using:)](nsdata/compressed%28using_%29.md): Returns a new data object by compressing the data object’s bytes.
- [decompressed(using:)](nsdata/decompressed%28using_%29.md): Returns a new data object by decompressing data object’s bytes.
- [NSData.CompressionAlgorithm](nsdata/compressionalgorithm.md): An algorithm that indicates how to compress or decompress data.
- [NSCompressionErrorMaximum](nscompressionerrormaximum-swift.var.md): The end of the range of error codes reserved for compression errors.
- [NSCompressionFailedError](nscompressionfailederror-swift.var.md): An error code value that indicates a failure to compress data using the provided algorithm.
- [NSDecompressionFailedError](nsdecompressionfailederror-swift.var.md): An error code value that indicates a failure to decompress data using the provided algorithm.
