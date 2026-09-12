> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarchiver/init(forwritingwith:)](https://developer.apple.com/documentation/foundation/nsarchiver/init(forwritingwith:))

# init(forWritingWith:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns an archiver, initialized to encode stream and version information into a given mutable data object.

> Use NSKeyedArchiver instead

## Declaration

```swift
init(forWritingWith mdata: NSMutableData)
```

## Parameters

- `mdata`: The mutable data object into which to write the archive. This value must not be `nil`.

<a id="return-value"></a>

## Return Value

An archiver object, initialized to encode stream and version information into `data`.

<a id="Discussion"></a>

## Discussion

Raises an `NSInvalidArgumentException` if `data` is `nil`.

## See Also

### Related Documentation

- [archiverData](archiverdata.md): Deprecated. The receiver’s archive data.
- [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i)

# initForWritingWithMutableData: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns an archiver, initialized to encode stream and version information into a given mutable data object.

> Use NSKeyedArchiver instead

## Declaration

```objectivec
- (instancetype) initForWritingWithMutableData:(NSMutableData *) mdata;
```

## Parameters

- `mdata`: The mutable data object into which to write the archive. This value must not be `nil`.

<a id="return-value"></a>

## Return Value

An archiver object, initialized to encode stream and version information into `data`.

<a id="Discussion"></a>

## Discussion

Raises an `NSInvalidArgumentException` if `data` is `nil`.

## See Also

### Related Documentation

- [archiverData](archiverdata.md): Deprecated. The receiver’s archive data.
- [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i)
