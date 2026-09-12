> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsunarchiver/unarchiveobject(withfile:)](https://developer.apple.com/documentation/foundation/nsunarchiver/unarchiveobject(withfile:))

# unarchiveObject(withFile:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Decodes and returns the object archived in the file `path`.

> Use NSKeyedUnarchiver instead

## Declaration

```swift
class func unarchiveObject(withFile path: String) -> Any?
```

## Parameters

- `path`: The path to a file than contains an archive created using [NSArchiver](../nsarchiver.md).

<a id="return-value"></a>

## Return Value

The object, or object graph, that was archived in the file at `path`. Returns `nil` if the file at `path` cannot be unarchived.

<a id="Discussion"></a>

## Discussion

This convenience method reads the file by invoking the `NSData` method [dataWithContentsOfFile:](../nsdata/datawithcontentsoffile_.md) and then invokes [unarchiveObject(with:)](unarchiveobject%28with_%29.md).

## See Also

### Decoding objects

- [unarchiveObject(with:)](unarchiveobject%28with_%29.md): Deprecated. Decodes and returns the object archived in a given `NSData` object.

# unarchiveObjectWithFile: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Decodes and returns the object archived in the file `path`.

> Use NSKeyedUnarchiver instead

## Declaration

```objectivec
+ (id) unarchiveObjectWithFile:(NSString *) path;
```

## Parameters

- `path`: The path to a file than contains an archive created using [NSArchiver](../nsarchiver.md).

<a id="return-value"></a>

## Return Value

The object, or object graph, that was archived in the file at `path`. Returns `nil` if the file at `path` cannot be unarchived.

<a id="Discussion"></a>

## Discussion

This convenience method reads the file by invoking the `NSData` method [dataWithContentsOfFile:](../nsdata/datawithcontentsoffile_.md) and then invokes [unarchiveObjectWithData:](unarchiveobject%28with_%29.md).

## See Also

### Decoding objects

- [unarchiveObjectWithData:](unarchiveobject%28with_%29.md): Deprecated. Decodes and returns the object archived in a given `NSData` object.
