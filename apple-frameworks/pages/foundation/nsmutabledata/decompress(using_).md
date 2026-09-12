> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledata/decompress(using:)](https://developer.apple.com/documentation/foundation/nsmutabledata/decompress(using:))

# decompress(using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Decompresses the data object’s bytes.

## Declaration

```swift
func decompress(using algorithm: NSData.CompressionAlgorithm) throws
```

## Parameters

- `algorithm`: The algorithm to use for decompressing the data. For a list of available algorithms, see [NSData.CompressionAlgorithm](../nsdata/compressionalgorithm.md).

<a id="Discussion"></a>

## Discussion

Use this method to inflate in-memory data when you need uncompressed bytes. Specify the same algorithm used to compress the data to successfully decompress it.

The following example shows how to inflate an instance of [NSMutableData](../nsmutabledata.md) compressed with the [NSData.CompressionAlgorithm.zlib](../nsdata/compressionalgorithm/zlib.md) algorithm:

```swift
do {
    data.decompress(using: .zlib)
} catch {
    print ("Decompression error: \(error)")
}
```

## See Also

### Compressing and Decompressing Data

- [compress(using:)](compress%28using_%29.md): Compresses the data object’s bytes using an algorithm that you specify.
- [NSData.CompressionAlgorithm](../nsdata/compressionalgorithm.md): An algorithm that indicates how to compress or decompress data.
- [NSCompressionErrorMaximum](../nscompressionerrormaximum-swift.var.md): The end of the range of error codes reserved for compression errors.
- [NSCompressionErrorMinimum](../nscompressionerrorminimum-swift.var.md): The start of the range of error codes reserved for compression errors.
- [NSCompressionFailedError](../nscompressionfailederror-swift.var.md): An error code value that indicates a failure to compress data using the provided algorithm.
- [NSDecompressionFailedError](../nsdecompressionfailederror-swift.var.md): An error code value that indicates a failure to decompress data using the provided algorithm.

# decompressUsingAlgorithm:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Decompresses the data object’s bytes.

## Declaration

```objectivec
- (BOOL) decompressUsingAlgorithm:(NSDataCompressionAlgorithm) algorithm error:(NSError **) error;
```

## Parameters

- `algorithm`: The algorithm to use for decompressing the data. For a list of available algorithms, see [NSDataCompressionAlgorithm](../nsdata/compressionalgorithm.md).
- `error`: On return, a pointer to an [NSError](../nserror.md) instance that indicates why decompressing the data failed, or `nil` if no error occurred.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="Discussion"></a>

## Discussion

Use this method to inflate in-memory data when you need uncompressed bytes. Specify the same algorithm used to compress the data to successfully decompress it.

The following example shows how to inflate an instance of [NSMutableData](../nsmutabledata.md) compressed with the [NSDataCompressionAlgorithmZlib](../nsdata/compressionalgorithm/zlib.md) algorithm:

```swift
do {
    data.decompress(using: .zlib)
} catch {
    print ("Decompression error: \(error)")
}
```

## See Also

### Compressing and Decompressing Data

- [compressUsingAlgorithm:error:](compress%28using_%29.md): Compresses the data object’s bytes using an algorithm that you specify.
- [NSDataCompressionAlgorithm](../nsdata/compressionalgorithm.md): An algorithm that indicates how to compress or decompress data.
- [NSCompressionErrorMaximum](../nscompressionerrormaximum-c.enum.case.md): The end of the range of error codes reserved for compression errors.
- [NSCompressionErrorMinimum](../nscompressionerrorminimum-c.enum.case.md): The start of the range of error codes reserved for compression errors.
- [NSCompressionFailedError](../nscompressionfailederror-c.enum.case.md): An error code value that indicates a failure to compress data using the provided algorithm.
- [NSDecompressionFailedError](../nsdecompressionfailederror-c.enum.case.md): An error code value that indicates a failure to decompress data using the provided algorithm.
