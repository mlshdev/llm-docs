> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/decompressed(using:)](https://developer.apple.com/documentation/foundation/nsdata/decompressed(using:))

# decompressed(using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a new data object by decompressing data object’s bytes.

## Declaration

```swift
func decompressed(using algorithm: NSData.CompressionAlgorithm) throws -> Self
```

## Parameters

- `algorithm`: An algorithm used to decompress the data. For a list of available algorithms, see [NSData.CompressionAlgorithm](compressionalgorithm.md).

<a id="return-value"></a>

## Return Value

An [NSData](../nsdata.md) instance that contains the decompressed buffer data.

<a id="Discussion"></a>

## Discussion

Use this method to inflate in-memory data when you need uncompressed bytes. Specify the same algorithm used to compress the data to successfully decompress it.

The following example shows how to create a new [NSData](../nsdata.md) instance from data compressed with the [NSData.CompressionAlgorithm.zlib](compressionalgorithm/zlib.md) algorithm:

```swift
do {
    let uncompressedData = try compressedData.decompressed(using: .zlib)
} catch {
    print ("Decompression error: \(error)")
}
```

## See Also

### Compressing and Decompressing Data

- [compressed(using:)](compressed%28using_%29.md): Returns a new data object by compressing the data object’s bytes.
- [NSData.CompressionAlgorithm](compressionalgorithm.md): An algorithm that indicates how to compress or decompress data.
- [NSCompressionErrorMaximum](../nscompressionerrormaximum-swift.var.md): The end of the range of error codes reserved for compression errors.
- [NSCompressionErrorMinimum](../nscompressionerrorminimum-swift.var.md): The start of the range of error codes reserved for compression errors.
- [NSCompressionFailedError](../nscompressionfailederror-swift.var.md): An error code value that indicates a failure to compress data using the provided algorithm.
- [NSDecompressionFailedError](../nsdecompressionfailederror-swift.var.md): An error code value that indicates a failure to decompress data using the provided algorithm.

# decompressedDataUsingAlgorithm:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a new data object by decompressing data object’s bytes.

## Declaration

```objectivec
- (instancetype) decompressedDataUsingAlgorithm:(NSDataCompressionAlgorithm) algorithm error:(NSError **) error;
```

## Parameters

- `algorithm`: An algorithm used to decompress the data. For a list of available algorithms, see [NSDataCompressionAlgorithm](compressionalgorithm.md).
- `error`: On return, a pointer to an [NSError](../nserror.md) instance that indicates why decompressing the data failed, or [nil](../../objectivec/nil-227m0.md) if no error occurred.

<a id="return-value"></a>

## Return Value

An [NSData](../nsdata.md) instance that contains the decompressed buffer data. On failure, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to inflate in-memory data when you need uncompressed bytes. Specify the same algorithm used to compress the data to successfully decompress it.

The following example shows how to create a new [NSData](../nsdata.md) instance from data compressed with the [NSDataCompressionAlgorithmZlib](compressionalgorithm/zlib.md) algorithm:

```swift
do {
    let uncompressedData = try compressedData.decompressed(using: .zlib)
} catch {
    print ("Decompression error: \(error)")
}
```

## See Also

### Compressing and Decompressing Data

- [compressedDataUsingAlgorithm:error:](compressed%28using_%29.md): Returns a new data object by compressing the data object’s bytes.
- [NSDataCompressionAlgorithm](compressionalgorithm.md): An algorithm that indicates how to compress or decompress data.
