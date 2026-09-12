> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsunarchiver/systemversion-swift.property](https://developer.apple.com/documentation/foundation/nsunarchiver/systemversion-swift.property)

# systemVersion (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

The system version number in effect when the archive was created.

> Use NSKeyedUnarchiver instead

## Declaration

```swift
var systemVersion: UInt32 { get }
```

<a id="Discussion"></a>

## Discussion

This information is available as soon as the receiver has been initialized.

## See Also

### Managing an NSUnarchiver

- [isAtEnd](isatend.md): Deprecated. A Boolean value that indicates whether the receiver has reached the end of the encoded data while decoding.

# systemVersion (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

The system version number in effect when the archive was created.

> Use NSKeyedUnarchiver instead

## Declaration

```objectivec
@property (readonly) unsigned int systemVersion;
```

<a id="Discussion"></a>

## Discussion

This information is available as soon as the receiver has been initialized.

## See Also

### Managing an NSUnarchiver

- [atEnd](isatend.md): Deprecated. A Boolean value that indicates whether the receiver has reached the end of the encoded data while decoding.
- [objectZone](objectzone-c.method.md): Deprecated. Returns the memory zone used to allocate decoded objects.
- [setObjectZone:](setobjectzone_.md): Deprecated. Sets the memory zone used to allocate decoded objects.
