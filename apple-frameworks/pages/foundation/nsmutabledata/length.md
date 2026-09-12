> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledata/length](https://developer.apple.com/documentation/foundation/nsmutabledata/length)

# length (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of bytes contained in the mutable data object.

## Declaration

```swift
var length: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The mutable data object’s length parameter is read-writeable. You can set this parameter to expand or truncate the number of bytes contained by the data object. If the mutable data object is expanded, the additional bytes are filled with zeros.

> **Important**

>  Changing the length of a mutable data object invalidate any existing data pointers returned by the [bytes](../nsdata/bytes.md) or [mutableBytes](mutablebytes.md) properties.

## See Also

### Related Documentation

- [increaseLength(by:)](increaselength%28by_%29.md): Increases the length of the receiver by a given number of bytes.

# length (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of bytes contained in the mutable data object.

## Declaration

```objectivec
@property NSUInteger length;
```

<a id="Discussion"></a>

## Discussion

The mutable data object’s length parameter is read-writeable. You can set this parameter to expand or truncate the number of bytes contained by the data object. If the mutable data object is expanded, the additional bytes are filled with zeros.

> **Important**

>  Changing the length of a mutable data object invalidate any existing data pointers returned by the [bytes](../nsdata/bytes.md) or [mutableBytes](mutablebytes.md) properties.

## See Also

### Related Documentation

- [increaseLengthBy:](increaselength%28by_%29.md): Increases the length of the receiver by a given number of bytes.
