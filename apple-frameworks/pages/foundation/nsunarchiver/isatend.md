> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsunarchiver/isatend](https://developer.apple.com/documentation/foundation/nsunarchiver/isatend)

# isAtEnd (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

A Boolean value that indicates whether the receiver has reached the end of the encoded data while decoding.

> Use NSKeyedUnarchiver instead

## Declaration

```swift
var isAtEnd: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver has reached the end of the encoded data while decoding, otherwise [false](https://developer.apple.com/documentation/swift/false).

You can invoke this method after invoking `decodeObject` to discover whether the archive contains extra data following the encoded object graph. If it does, you can either ignore this anomaly or consider it an error.

## See Also

### Managing an NSUnarchiver

- [systemVersion](systemversion-swift.property.md): Deprecated. The system version number in effect when the archive was created.

# atEnd (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

A Boolean value that indicates whether the receiver has reached the end of the encoded data while decoding.

> Use NSKeyedUnarchiver instead

## Declaration

```objectivec
@property (readonly, getter=isAtEnd) BOOL atEnd;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver has reached the end of the encoded data while decoding, otherwise [false](https://developer.apple.com/documentation/swift/false).

You can invoke this method after invoking `decodeObject` to discover whether the archive contains extra data following the encoded object graph. If it does, you can either ignore this anomaly or consider it an error.

## See Also

### Managing an NSUnarchiver

- [objectZone](objectzone-c.method.md): Deprecated. Returns the memory zone used to allocate decoded objects.
- [setObjectZone:](setobjectzone_.md): Deprecated. Sets the memory zone used to allocate decoded objects.
- [systemVersion](systemversion-swift.property.md): Deprecated. The system version number in effect when the archive was created.
