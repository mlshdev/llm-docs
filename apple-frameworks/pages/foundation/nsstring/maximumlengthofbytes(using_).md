> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/maximumlengthofbytes(using:)](https://developer.apple.com/documentation/foundation/nsstring/maximumlengthofbytes(using:))

# maximumLengthOfBytes(using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the maximum number of bytes needed to store the receiver in a given encoding.

## Declaration

```swift
func maximumLengthOfBytes(using enc: UInt) -> Int
```

## Parameters

- `enc`: The encoding for which to determine the receiver’s length.

<a id="return-value"></a>

## Return Value

The maximum number of bytes needed to store the receiver in `encoding` in a non-external representation. The length does not include space for a terminating `NULL` character. Returns `0` if the amount of memory required for storing the results of the encoding conversion would exceed [NSIntegerMax](../../objectivec/nsintegermax.md).

<a id="Discussion"></a>

## Discussion

The result is an estimate and is returned in `O(1)` time; the estimate may be considerably greater than the actual length needed.

## See Also

### Getting a String’s Length

- [length](length.md): The number of UTF-16 code units in the receiver.
- [lengthOfBytes(using:)](lengthofbytes%28using_%29.md): Returns the number of bytes required to store the receiver in a given encoding.

# maximumLengthOfBytesUsingEncoding: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the maximum number of bytes needed to store the receiver in a given encoding.

## Declaration

```objectivec
- (NSUInteger) maximumLengthOfBytesUsingEncoding:(NSStringEncoding) enc;
```

## Parameters

- `enc`: The encoding for which to determine the receiver’s length.

<a id="return-value"></a>

## Return Value

The maximum number of bytes needed to store the receiver in `encoding` in a non-external representation. The length does not include space for a terminating `NULL` character. Returns `0` if the amount of memory required for storing the results of the encoding conversion would exceed [NSIntegerMax](../../objectivec/nsintegermax.md).

<a id="Discussion"></a>

## Discussion

The result is an estimate and is returned in `O(1)` time; the estimate may be considerably greater than the actual length needed.

## See Also

### Getting a String’s Length

- [length](length.md): The number of UTF-16 code units in the receiver.
- [lengthOfBytesUsingEncoding:](lengthofbytes%28using_%29.md): Returns the number of bytes required to store the receiver in a given encoding.
