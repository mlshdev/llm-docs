> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarchiver/archiverootobject(_:tofile:)](https://developer.apple.com/documentation/foundation/nsarchiver/archiverootobject(_:tofile:))

# archiveRootObject(\_:toFile:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Creates a temporary instance of `NSArchiver` and archives an object graph by encoding it into a data object and writing the resulting data object to a specified file.

> Use NSKeyedArchiver instead

## Declaration

```swift
class func archiveRootObject(_ rootObject: Any, toFile path: String) -> Bool
```

## Parameters

- `rootObject`: The root object of the object graph to archive.
- `path`: The location of the file into which to write the archive.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the archive was written successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This convenience method invokes [archivedData(withRootObject:)](archiveddata%28withrootobject_%29.md) to get the encoded data, and then sends that data object the message [write(toFile:atomically:)](../nsdata/write%28tofile_atomically_%29.md), using `path` for the first argument and [true](https://developer.apple.com/documentation/swift/true) for the second.

The archived data should be retrieved from the archive by an [NSUnarchiver](../nsunarchiver.md) object.

## See Also

### Related Documentation

- [write(toFile:atomically:)](../nsdata/write%28tofile_atomically_%29.md): Writes the data object’s bytes to the file specified by a given path.

### Archiving data

- [archivedData(withRootObject:)](archiveddata%28withrootobject_%29.md): Deprecated. Returns a data object containing the encoded form of the object graph whose root object is given.
- [encodeRootObject(\_:)](encoderootobject%28__%29.md): Deprecated. Archives a given object along with all the objects to which it is connected.
- [encodeConditionalObject(\_:)](encodeconditionalobject%28__%29.md): Deprecated. Conditionally archives a given object.

# archiveRootObject:toFile: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Creates a temporary instance of `NSArchiver` and archives an object graph by encoding it into a data object and writing the resulting data object to a specified file.

> Use NSKeyedArchiver instead

## Declaration

```objectivec
+ (BOOL) archiveRootObject:(id) rootObject toFile:(NSString *) path;
```

## Parameters

- `rootObject`: The root object of the object graph to archive.
- `path`: The location of the file into which to write the archive.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the archive was written successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This convenience method invokes [archivedDataWithRootObject:](archiveddata%28withrootobject_%29.md) to get the encoded data, and then sends that data object the message [writeToFile:atomically:](../nsdata/write%28tofile_atomically_%29.md), using `path` for the first argument and [true](https://developer.apple.com/documentation/swift/true) for the second.

The archived data should be retrieved from the archive by an [NSUnarchiver](../nsunarchiver.md) object.

## See Also

### Related Documentation

- [writeToFile:atomically:](../nsdata/write%28tofile_atomically_%29.md): Writes the data object’s bytes to the file specified by a given path.

### Archiving data

- [archivedDataWithRootObject:](archiveddata%28withrootobject_%29.md): Deprecated. Returns a data object containing the encoded form of the object graph whose root object is given.
- [encodeRootObject:](encoderootobject%28__%29.md): Deprecated. Archives a given object along with all the objects to which it is connected.
- [encodeConditionalObject:](encodeconditionalobject%28__%29.md): Deprecated. Conditionally archives a given object.
