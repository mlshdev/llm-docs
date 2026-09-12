> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedarchiver/archiverootobject(_:tofile:)](https://developer.apple.com/documentation/foundation/nskeyedarchiver/archiverootobject(_:tofile:))

# archiveRootObject(\_:toFile:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 5.0)

Archives an object graph rooted at a given object to a file at a given path.

> Use +archivedDataWithRootObject:requiringSecureCoding:error: and -writeToURL:options:error: instead

## Declaration

```swift
class func archiveRootObject(_ rootObject: Any, toFile path: String) -> Bool
```

## Parameters

- `rootObject`: The root of the object graph to archive.
- `path`: The path of the file in which to write the archive.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation was successful, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method archives the graph formed by the root object to a data object, then atomically writes it to the given path. The format of the archive is [PropertyListSerialization.PropertyListFormat.binary](../propertylistserialization/propertylistformat/binary.md).

## See Also

### Archiving Data

- [archivedData(withRootObject:requiringSecureCoding:)](archiveddata%28withrootobject_requiringsecurecoding_%29.md): Encodes an object graph with the given root object into a data representation, optionally requiring secure coding.
- [finishEncoding()](finishencoding%28%29.md): Instructs the receiver to construct the final data stream.
- [encodedData](encodeddata.md): The encoded data for the archiver.
- [outputFormat](outputformat.md): The format in which the receiver encodes its data.
- [requiresSecureCoding](requiressecurecoding.md): Indicates whether the archiver requires all archived classes to resist object substitution attacks.
- [archivedData(withRootObject:)](archiveddata%28withrootobject_%29.md): Deprecated. Returns a data object that contains the encoded form of the object graph formed by the given root object.

# archiveRootObject:toFile: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 5.0)

Archives an object graph rooted at a given object to a file at a given path.

> Use +archivedDataWithRootObject:requiringSecureCoding:error: and -writeToURL:options:error: instead

## Declaration

```objectivec
+ (BOOL) archiveRootObject:(id) rootObject toFile:(NSString *) path;
```

## Parameters

- `rootObject`: The root of the object graph to archive.
- `path`: The path of the file in which to write the archive.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation was successful, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method archives the graph formed by the root object to a data object, then atomically writes it to the given path. The format of the archive is [NSPropertyListBinaryFormat_v1_0](../propertylistserialization/propertylistformat/binary.md).

## See Also

### Archiving Data

- [archivedDataWithRootObject:requiringSecureCoding:error:](archiveddata%28withrootobject_requiringsecurecoding_%29.md): Encodes an object graph with the given root object into a data representation, optionally requiring secure coding.
- [finishEncoding](finishencoding%28%29.md): Instructs the receiver to construct the final data stream.
- [encodedData](encodeddata.md): The encoded data for the archiver.
- [outputFormat](outputformat.md): The format in which the receiver encodes its data.
- [requiresSecureCoding](requiressecurecoding.md): Indicates whether the archiver requires all archived classes to resist object substitution attacks.
- [archivedDataWithRootObject:](archiveddata%28withrootobject_%29.md): Deprecated. Returns a data object that contains the encoded form of the object graph formed by the given root object.
