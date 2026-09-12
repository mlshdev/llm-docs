> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledata/increaselength(by:)](https://developer.apple.com/documentation/foundation/nsmutabledata/increaselength(by:))

# increaseLength(by:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Increases the length of the receiver by a given number of bytes.

## Declaration

```swift
func increaseLength(by extraLength: Int)
```

## Parameters

- `extraLength`: The number of bytes by which to increase the receiver’s length.

<a id="Discussion"></a>

## Discussion

The additional bytes are all set to `0`.

> **Important**

>  Changing the length of a mutable data object invalidates any existing data pointers returned by the [bytes](../nsdata/bytes.md) or [mutableBytes](mutablebytes.md) properties.

## See Also

### Related Documentation

- [length](length.md): The number of bytes contained in the mutable data object.

### Adding Bytes

- [append(\_:length:)](append%28__length_%29.md): Appends to the receiver a given number of bytes from a given buffer.
- [append(\_:)](append%28__%29.md): Appends the content of another data object to the receiver.

# increaseLengthBy: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Increases the length of the receiver by a given number of bytes.

## Declaration

```objectivec
- (void) increaseLengthBy:(NSUInteger) extraLength;
```

## Parameters

- `extraLength`: The number of bytes by which to increase the receiver’s length.

<a id="Discussion"></a>

## Discussion

The additional bytes are all set to `0`.

> **Important**

>  Changing the length of a mutable data object invalidates any existing data pointers returned by the [bytes](../nsdata/bytes.md) or [mutableBytes](mutablebytes.md) properties.

## See Also

### Related Documentation

- [length](length.md): The number of bytes contained in the mutable data object.

### Adding Bytes

- [appendBytes:length:](append%28__length_%29.md): Appends to the receiver a given number of bytes from a given buffer.
- [appendData:](append%28__%29.md): Appends the content of another data object to the receiver.
