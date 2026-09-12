> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsunarchiver/init(forreadingwith:)](https://developer.apple.com/documentation/foundation/nsunarchiver/init(forreadingwith:))

# init(forReadingWith:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns an `NSUnarchiver` object initialized to read an archive from a given data object.

> Use NSKeyedUnarchiver instead

## Declaration

```swift
init?(forReadingWith data: Data)
```

## Parameters

- `data`: The archive data.

<a id="return-value"></a>

## Return Value

An `NSUnarchiver` object initialized to read an archive from `data`. Returns `nil` if `data` is not a valid archive.

<a id="Discussion"></a>

## Discussion

The method decodes the system version number that was archived in `data` prepares the `NSUnarchiver` object for a subsequent invocation of [decodeObject()](../nscoder/decodeobject%28%29.md).

Raises an `NSInvalidArgumentException` if `data` is `nil`.

## See Also

### Related Documentation

- [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i)
- [systemVersion](systemversion-swift.property.md): Deprecated. The system version number in effect when the archive was created.

# initForReadingWithData: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns an `NSUnarchiver` object initialized to read an archive from a given data object.

> Use NSKeyedUnarchiver instead

## Declaration

```objectivec
- (instancetype) initForReadingWithData:(NSData *) data;
```

## Parameters

- `data`: The archive data.

<a id="return-value"></a>

## Return Value

An `NSUnarchiver` object initialized to read an archive from `data`. Returns `nil` if `data` is not a valid archive.

<a id="Discussion"></a>

## Discussion

The method decodes the system version number that was archived in `data` prepares the `NSUnarchiver` object for a subsequent invocation of [decodeObject](../nscoder/decodeobject%28%29.md).

Raises an `NSInvalidArgumentException` if `data` is `nil`.

## See Also

### Related Documentation

- [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i)
- [systemVersion](systemversion-swift.property.md): Deprecated. The system version number in effect when the archive was created.
