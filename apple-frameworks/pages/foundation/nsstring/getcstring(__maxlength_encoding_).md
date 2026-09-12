> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/getcstring(_:maxlength:encoding:)](https://developer.apple.com/documentation/foundation/nsstring/getcstring(_:maxlength:encoding:))

# getCString(\_:maxLength:encoding:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Converts the string to a given encoding and stores it in a buffer.

## Declaration

```swift
func getCString(_ buffer: UnsafeMutablePointer<CChar>, maxLength maxBufferCount: Int, encoding: UInt) -> Bool
```

## Parameters

- `buffer`: Upon return, contains the converted C-string plus the `NULL` termination byte. The buffer must include room for `maxBufferCount` bytes.
- `maxBufferCount`: The maximum number of bytes in the string to return in buffer (*including* the `NULL` termination byte).
- `encoding`: The encoding for the returned C string. For possible values, see [NSStringEncoding](../nsstringencoding.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation was successful, otherwise [false](https://developer.apple.com/documentation/swift/false). Returns [false](https://developer.apple.com/documentation/swift/false) if conversion is not possible due to encoding errors or if `buffer` is too small.

<a id="Discussion"></a>

## Discussion

Note that in the treatment of the `maxBufferCount` argument, this method differs from the deprecated [getCString(\_:maxLength:)](getcstring%28__maxlength_%29.md) method which it replaces. (The buffer should include room for `maxBufferCount` bytes; this number should accommodate the expected size of the return value plus the `NULL` termination byte, which this method adds.)

You can use [canBeConverted(to:)](canbeconverted%28to_%29.md) to check whether a string can be losslessly converted to `encoding`. If it can’t, you can use [data(using:allowLossyConversion:)](data%28using_allowlossyconversion_%29.md) to get a C-string representation using `encoding`, allowing some loss of information (note that the data returned by [data(using:allowLossyConversion:)](data%28using_allowlossyconversion_%29.md) is not a strict C-string since it does not have a `NULL` terminator).

## See Also

### Related Documentation

- [canBeConverted(to:)](canbeconverted%28to_%29.md): Returns a Boolean value that indicates whether the receiver can be converted to a given encoding without loss of information.

### Getting C Strings

- [cString(using:)](cstring%28using_%29.md): Returns a representation of the string as a C string using a given encoding.
- [utf8String](utf8string.md): A null-terminated UTF8 representation of the string.

# getCString:maxLength:encoding: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Converts the string to a given encoding and stores it in a buffer.

## Declaration

```objectivec
- (BOOL) getCString:(char *) buffer maxLength:(NSUInteger) maxBufferCount encoding:(NSStringEncoding) encoding;
```

## Parameters

- `buffer`: Upon return, contains the converted C-string plus the `NULL` termination byte. The buffer must include room for `maxBufferCount` bytes.
- `maxBufferCount`: The maximum number of bytes in the string to return in buffer (*including* the `NULL` termination byte).
- `encoding`: The encoding for the returned C string. For possible values, see [NSStringEncoding](../nsstringencoding.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation was successful, otherwise [false](https://developer.apple.com/documentation/swift/false). Returns [false](https://developer.apple.com/documentation/swift/false) if conversion is not possible due to encoding errors or if `buffer` is too small.

<a id="Discussion"></a>

## Discussion

Note that in the treatment of the `maxBufferCount` argument, this method differs from the deprecated [getCString:maxLength:](getcstring%28__maxlength_%29.md) method which it replaces. (The buffer should include room for `maxBufferCount` bytes; this number should accommodate the expected size of the return value plus the `NULL` termination byte, which this method adds.)

You can use [canBeConvertedToEncoding:](canbeconverted%28to_%29.md) to check whether a string can be losslessly converted to `encoding`. If it can’t, you can use [dataUsingEncoding:allowLossyConversion:](data%28using_allowlossyconversion_%29.md) to get a C-string representation using `encoding`, allowing some loss of information (note that the data returned by [dataUsingEncoding:allowLossyConversion:](data%28using_allowlossyconversion_%29.md) is not a strict C-string since it does not have a `NULL` terminator).

## See Also

### Related Documentation

- [canBeConvertedToEncoding:](canbeconverted%28to_%29.md): Returns a Boolean value that indicates whether the receiver can be converted to a given encoding without loss of information.

### Getting C Strings

- [cStringUsingEncoding:](cstring%28using_%29.md): Returns a representation of the string as a C string using a given encoding.
- [UTF8String](utf8string.md): A null-terminated UTF8 representation of the string.
