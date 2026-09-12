> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/compressed(using:)](https://developer.apple.com/documentation/foundation/nsdata/compressed(using:))

# compressed(using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a new data object by compressing the data object’s bytes.

## Declaration

```swift
func compressed(using algorithm: NSData.CompressionAlgorithm) throws -> Self
```

## Parameters

- `algorithm`: An algorithm used to compress the data. For a list of available algorithms, see [NSData.CompressionAlgorithm](compressionalgorithm.md).

<a id="return-value"></a>

## Return Value

An [NSData](../nsdata.md) instance that contains the compressed buffer data.

<a id="Discussion"></a>

## Discussion

Use this method to compress in-memory data when you want to reduce memory usage and can afford the time to compress and decompress it. If your data object is already in a compressed format, such as media formats like JPEG images or AAC audio, additional compression may provide minimal or no reduction in memory usage.

To restore this data, use [decompressed(using:)](decompressed%28using_%29.md), and specify the algorithm originally used to compress the data.

The following example shows how to compress the data from a string and prints the sizes of the data instances to illustrate the amount of compression:

```swift
var string = "NSData and its mutable subclass NSMutableData provide data objects, or object-oriented wrappers for byte buffers. Data objects let simple allocated buffers (that is, data with no embedded pointers) take on the behavior of Foundation objects."
let data = Data(string.utf8) as NSData
print ("original data size: \(data.count) bytes")
do {
    let compressedData = try data.compressed(using: .zlib)
    print("zlib compressed size: \(compressedData.count) bytes")
} catch {
    print ("Compression error: \(error)")
}
// Prints:
//  original data size: 241 bytes
//  zlib compressed size: 158 bytes
```

## See Also

### Compressing and Decompressing Data

- [decompressed(using:)](decompressed%28using_%29.md): Returns a new data object by decompressing data object’s bytes.
- [NSData.CompressionAlgorithm](compressionalgorithm.md): An algorithm that indicates how to compress or decompress data.
- [NSCompressionErrorMaximum](../nscompressionerrormaximum-swift.var.md): The end of the range of error codes reserved for compression errors.
- [NSCompressionErrorMinimum](../nscompressionerrorminimum-swift.var.md): The start of the range of error codes reserved for compression errors.
- [NSCompressionFailedError](../nscompressionfailederror-swift.var.md): An error code value that indicates a failure to compress data using the provided algorithm.
- [NSDecompressionFailedError](../nsdecompressionfailederror-swift.var.md): An error code value that indicates a failure to decompress data using the provided algorithm.

# compressedDataUsingAlgorithm:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a new data object by compressing the data object’s bytes.

## Declaration

```objectivec
- (instancetype) compressedDataUsingAlgorithm:(NSDataCompressionAlgorithm) algorithm error:(NSError **) error;
```

## Parameters

- `algorithm`: An algorithm used to compress the data. For a list of available algorithms, see [NSDataCompressionAlgorithm](compressionalgorithm.md).
- `error`: On return, a pointer to an [NSError](../nserror.md) instance that indicates why compressing the data failed, or `nil` if no error occurred.

<a id="return-value"></a>

## Return Value

An [NSData](../nsdata.md) instance that contains the compressed buffer data. On failure, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to compress in-memory data when you want to reduce memory usage and can afford the time to compress and decompress it. If your data object is already in a compressed format, such as media formats like JPEG images or AAC audio, additional compression may provide minimal or no reduction in memory usage.

To restore this data, use [decompressedDataUsingAlgorithm:error:](decompressed%28using_%29.md), and specify the algorithm originally used to compress the data.

The following example shows how to compress the data from a string and prints the sizes of the data instances to illustrate the amount of compression:

```swift
var string = "NSData and its mutable subclass NSMutableData provide data objects, or object-oriented wrappers for byte buffers. Data objects let simple allocated buffers (that is, data with no embedded pointers) take on the behavior of Foundation objects."
let data = Data(string.utf8) as NSData
print ("original data size: \(data.count) bytes")
do {
    let compressedData = try data.compressed(using: .zlib)
    print("zlib compressed size: \(compressedData.count) bytes")
} catch {
    print ("Compression error: \(error)")
}
// Prints:
//  original data size: 241 bytes
//  zlib compressed size: 158 bytes
```

## See Also

### Compressing and Decompressing Data

- [decompressedDataUsingAlgorithm:error:](decompressed%28using_%29.md): Returns a new data object by decompressing data object’s bytes.
- [NSDataCompressionAlgorithm](compressionalgorithm.md): An algorithm that indicates how to compress or decompress data.
