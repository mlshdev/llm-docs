> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/length](https://developer.apple.com/documentation/foundation/nsstring/length)

# length (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of UTF-16 code units in the receiver.

## Declaration

```swift
var length: Int { get }
```

<a id="Discussion"></a>

## Discussion

This number includes the individual characters of composed character sequences, so you cannot use this property to determine if a string will be visible when printed or how long it will appear.

## See Also

### Related Documentation

- [size(withAttributes:)](size%28withattributes_%29.md): Returns the bounding box size the receiver occupies when drawn with the given attributes.

### Getting a String’s Length

- [lengthOfBytes(using:)](lengthofbytes%28using_%29.md): Returns the number of bytes required to store the receiver in a given encoding.
- [maximumLengthOfBytes(using:)](maximumlengthofbytes%28using_%29.md): Returns the maximum number of bytes needed to store the receiver in a given encoding.

# length (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of UTF-16 code units in the receiver.

## Declaration

```objectivec
@property (readonly) NSUInteger length;
```

<a id="Discussion"></a>

## Discussion

This number includes the individual characters of composed character sequences, so you cannot use this property to determine if a string will be visible when printed or how long it will appear.

## See Also

### Related Documentation

- [sizeWithAttributes:](size%28withattributes_%29.md): Returns the bounding box size the receiver occupies when drawn with the given attributes.

### Getting a String’s Length

- [lengthOfBytesUsingEncoding:](lengthofbytes%28using_%29.md): Returns the number of bytes required to store the receiver in a given encoding.
- [maximumLengthOfBytesUsingEncoding:](maximumlengthofbytes%28using_%29.md): Returns the maximum number of bytes needed to store the receiver in a given encoding.
