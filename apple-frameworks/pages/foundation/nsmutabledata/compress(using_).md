> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledata/compress(using:)](https://developer.apple.com/documentation/foundation/nsmutabledata/compress(using:))

# compress(using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Compresses the data object’s bytes using an algorithm that you specify.

## Declaration

```swift
func compress(using algorithm: NSData.CompressionAlgorithm) throws
```

## Parameters

- `algorithm`: The algorithm to use to compress the data. For a list of available algorithms, see [NSData.CompressionAlgorithm](../nsdata/compressionalgorithm.md).

<a id="Discussion"></a>

## Discussion

Use this method to compress in-memory data when you want to reduce memory usage and can afford the time to compress and decompress the data. If your data object is already in a compressed format, such as media formats like JPEG images or AAC audio, [compress(using:)](compress%28using_%29.md) may provide minimal or no benefit.

The following example shows how to compress data from a string and prints the sizes of the data instances to illustrate the amount of compression:

```swift
var string = "NSData and its mutable subclass NSMutableData provide data objects, or object-oriented wrappers for byte buffers. Data objects let simple allocated buffers (that is, data with no embedded pointers) take on the behavior of Foundation objects."
let data = NSMutableData(data: Data(string.utf8))
print ("original data size: \(data.length)")
do {
    try data.compress(using: .zlib)
    print("zlib compressed size: \(data.length)")
} catch {
    print ("Compression error: \(error)")
}
// Prints:
//  original data size: 241
//  zlib compressed size: 158
```

## See Also

### Compressing and Decompressing Data

- [decompress(using:)](decompress%28using_%29.md): Decompresses the data object’s bytes.
- [NSData.CompressionAlgorithm](../nsdata/compressionalgorithm.md): An algorithm that indicates how to compress or decompress data.
- [NSCompressionErrorMaximum](../nscompressionerrormaximum-swift.var.md): The end of the range of error codes reserved for compression errors.
- [NSCompressionErrorMinimum](../nscompressionerrorminimum-swift.var.md): The start of the range of error codes reserved for compression errors.
- [NSCompressionFailedError](../nscompressionfailederror-swift.var.md): An error code value that indicates a failure to compress data using the provided algorithm.
- [NSDecompressionFailedError](../nsdecompressionfailederror-swift.var.md): An error code value that indicates a failure to decompress data using the provided algorithm.

# compressUsingAlgorithm:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Compresses the data object’s bytes using an algorithm that you specify.

## Declaration

```objectivec
- (BOOL) compressUsingAlgorithm:(NSDataCompressionAlgorithm) algorithm error:(NSError **) error;
```

## Parameters

- `algorithm`: The algorithm to use to compress the data. For a list of available algorithms, see [NSDataCompressionAlgorithm](../nsdata/compressionalgorithm.md).
- `error`: On return, a pointer to an [NSError](../nserror.md) instance that indicates why compressing the data failed, or `nil` if no error occurred.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="Discussion"></a>

## Discussion

Use this method to compress in-memory data when you want to reduce memory usage and can afford the time to compress and decompress the data. If your data object is already in a compressed format, such as media formats like JPEG images or AAC audio, [compressUsingAlgorithm:error:](compress%28using_%29.md) may provide minimal or no benefit.

The following example shows how to compress data from a string and prints the sizes of the data instances to illustrate the amount of compression:

```swift
var string = "NSData and its mutable subclass NSMutableData provide data objects, or object-oriented wrappers for byte buffers. Data objects let simple allocated buffers (that is, data with no embedded pointers) take on the behavior of Foundation objects."
let data = NSMutableData(data: Data(string.utf8))
print ("original data size: \(data.length)")
do {
    try data.compress(using: .zlib)
    print("zlib compressed size: \(data.length)")
} catch {
    print ("Compression error: \(error)")
}
// Prints:
//  original data size: 241
//  zlib compressed size: 158
```

## See Also

### Compressing and Decompressing Data

- [decompressUsingAlgorithm:error:](decompress%28using_%29.md): Decompresses the data object’s bytes.
- [NSDataCompressionAlgorithm](../nsdata/compressionalgorithm.md): An algorithm that indicates how to compress or decompress data.
- [NSCompressionErrorMaximum](../nscompressionerrormaximum-c.enum.case.md): The end of the range of error codes reserved for compression errors.
- [NSCompressionErrorMinimum](../nscompressionerrorminimum-c.enum.case.md): The start of the range of error codes reserved for compression errors.
- [NSCompressionFailedError](../nscompressionfailederror-c.enum.case.md): An error code value that indicates a failure to compress data using the provided algorithm.
- [NSDecompressionFailedError](../nsdecompressionfailederror-c.enum.case.md): An error code value that indicates a failure to decompress data using the provided algorithm.
