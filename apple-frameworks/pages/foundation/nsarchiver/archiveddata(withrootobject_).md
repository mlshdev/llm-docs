> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarchiver/archiveddata(withrootobject:)](https://developer.apple.com/documentation/foundation/nsarchiver/archiveddata(withrootobject:))

# archivedData(withRootObject:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns a data object containing the encoded form of the object graph whose root object is given.

> Use NSKeyedArchiver instead

## Declaration

```swift
class func archivedData(withRootObject rootObject: Any) -> Data
```

## Parameters

- `rootObject`: The root object of the object graph to archive.

<a id="return-value"></a>

## Return Value

A data object containing the encoded form of the object graph whose root object is `rootObject`.

<a id="Discussion"></a>

## Discussion

This method invokes [init(forWritingWith:)](init%28forwritingwith_%29.md) and [encodeRootObject(\_:)](encoderootobject%28__%29.md) to create a temporary archiver that encodes the object graph.

## See Also

### Related Documentation

- [init(forWritingWith:)](init%28forwritingwith_%29.md): Deprecated. Returns an archiver, initialized to encode stream and version information into a given mutable data object.

### Archiving data

- [archiveRootObject(\_:toFile:)](archiverootobject%28__tofile_%29.md): Deprecated. Creates a temporary instance of `NSArchiver` and archives an object graph by encoding it into a data object and writing the resulting data object to a specified file.
- [encodeRootObject(\_:)](encoderootobject%28__%29.md): Deprecated. Archives a given object along with all the objects to which it is connected.
- [encodeConditionalObject(\_:)](encodeconditionalobject%28__%29.md): Deprecated. Conditionally archives a given object.

# archivedDataWithRootObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns a data object containing the encoded form of the object graph whose root object is given.

> Use NSKeyedArchiver instead

## Declaration

```objectivec
+ (NSData *) archivedDataWithRootObject:(id) rootObject;
```

## Parameters

- `rootObject`: The root object of the object graph to archive.

<a id="return-value"></a>

## Return Value

A data object containing the encoded form of the object graph whose root object is `rootObject`.

<a id="Discussion"></a>

## Discussion

This method invokes [initForWritingWithMutableData:](init%28forwritingwith_%29.md) and [encodeRootObject:](encoderootobject%28__%29.md) to create a temporary archiver that encodes the object graph.

## See Also

### Related Documentation

- [initForWritingWithMutableData:](init%28forwritingwith_%29.md): Deprecated. Returns an archiver, initialized to encode stream and version information into a given mutable data object.

### Archiving data

- [archiveRootObject:toFile:](archiverootobject%28__tofile_%29.md): Deprecated. Creates a temporary instance of `NSArchiver` and archives an object graph by encoding it into a data object and writing the resulting data object to a specified file.
- [encodeRootObject:](encoderootobject%28__%29.md): Deprecated. Archives a given object along with all the objects to which it is connected.
- [encodeConditionalObject:](encodeconditionalobject%28__%29.md): Deprecated. Conditionally archives a given object.
