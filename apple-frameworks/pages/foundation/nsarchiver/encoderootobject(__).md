> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarchiver/encoderootobject(_:)](https://developer.apple.com/documentation/foundation/nsarchiver/encoderootobject(_:))

# encodeRootObject(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Archives a given object along with all the objects to which it is connected.

> Use NSKeyedArchiver instead

## Declaration

```swift
func encodeRootObject(_ rootObject: Any)
```

## Parameters

- `rootObject`: The root object of the object graph to archive.

<a id="Discussion"></a>

## Discussion

If any object is encountered more than once while traversing the graph, it is encoded only once, but the multiple references to it are stored. (See [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i) for more information.)

This message must not be sent more than once to a given `NSArchiver` object; an `NSInvalidArgumentException` is raised if a root object has already been encoded. If you need to encode multiple object graphs, therefore, don’t attempt to reuse an `NSArchiver` instance; instead, create a new one for each graph.

## See Also

### Archiving data

- [archivedData(withRootObject:)](archiveddata%28withrootobject_%29.md): Deprecated. Returns a data object containing the encoded form of the object graph whose root object is given.
- [archiveRootObject(\_:toFile:)](archiverootobject%28__tofile_%29.md): Deprecated. Creates a temporary instance of `NSArchiver` and archives an object graph by encoding it into a data object and writing the resulting data object to a specified file.
- [encodeConditionalObject(\_:)](encodeconditionalobject%28__%29.md): Deprecated. Conditionally archives a given object.

# encodeRootObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Archives a given object along with all the objects to which it is connected.

> Use NSKeyedArchiver instead

## Declaration

```objectivec
- (void) encodeRootObject:(id) rootObject;
```

## Parameters

- `rootObject`: The root object of the object graph to archive.

<a id="Discussion"></a>

## Discussion

If any object is encountered more than once while traversing the graph, it is encoded only once, but the multiple references to it are stored. (See [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i) for more information.)

This message must not be sent more than once to a given `NSArchiver` object; an `NSInvalidArgumentException` is raised if a root object has already been encoded. If you need to encode multiple object graphs, therefore, don’t attempt to reuse an `NSArchiver` instance; instead, create a new one for each graph.

## See Also

### Archiving data

- [archivedDataWithRootObject:](archiveddata%28withrootobject_%29.md): Deprecated. Returns a data object containing the encoded form of the object graph whose root object is given.
- [archiveRootObject:toFile:](archiverootobject%28__tofile_%29.md): Deprecated. Creates a temporary instance of `NSArchiver` and archives an object graph by encoding it into a data object and writing the resulting data object to a specified file.
- [encodeConditionalObject:](encodeconditionalobject%28__%29.md): Deprecated. Conditionally archives a given object.
