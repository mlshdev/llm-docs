> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedarchiver/archiveddata(withrootobject:)](https://developer.apple.com/documentation/foundation/nskeyedarchiver/archiveddata(withrootobject:))

# archivedData(withRootObject:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 5.0)

Returns a data object that contains the encoded form of the object graph formed by the given root object.

> Use +archivedDataWithRootObject:requiringSecureCoding:error: instead

## Declaration

```swift
class func archivedData(withRootObject rootObject: Any) -> Data
```

## Parameters

- `rootObject`: The root of the object graph to archive.

<a id="return-value"></a>

## Return Value

An `NSData` object containing the encoded form of the object graph whose root object is `rootObject`. The format of the archive is [PropertyListSerialization.PropertyListFormat.binary](../propertylistserialization/propertylistformat/binary.md).

## See Also

### Archiving Data

- [archivedData(withRootObject:requiringSecureCoding:)](archiveddata%28withrootobject_requiringsecurecoding_%29.md): Encodes an object graph with the given root object into a data representation, optionally requiring secure coding.
- [finishEncoding()](finishencoding%28%29.md): Instructs the receiver to construct the final data stream.
- [encodedData](encodeddata.md): The encoded data for the archiver.
- [outputFormat](outputformat.md): The format in which the receiver encodes its data.
- [requiresSecureCoding](requiressecurecoding.md): Indicates whether the archiver requires all archived classes to resist object substitution attacks.
- [archiveRootObject(\_:toFile:)](archiverootobject%28__tofile_%29.md): Deprecated. Archives an object graph rooted at a given object to a file at a given path.

# archivedDataWithRootObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 5.0)

Returns a data object that contains the encoded form of the object graph formed by the given root object.

> Use +archivedDataWithRootObject:requiringSecureCoding:error: instead

## Declaration

```objectivec
+ (NSData *) archivedDataWithRootObject:(id) rootObject;
```

## Parameters

- `rootObject`: The root of the object graph to archive.

<a id="return-value"></a>

## Return Value

An `NSData` object containing the encoded form of the object graph whose root object is `rootObject`. The format of the archive is [NSPropertyListBinaryFormat_v1_0](../propertylistserialization/propertylistformat/binary.md).

## See Also

### Archiving Data

- [archivedDataWithRootObject:requiringSecureCoding:error:](archiveddata%28withrootobject_requiringsecurecoding_%29.md): Encodes an object graph with the given root object into a data representation, optionally requiring secure coding.
- [finishEncoding](finishencoding%28%29.md): Instructs the receiver to construct the final data stream.
- [encodedData](encodeddata.md): The encoded data for the archiver.
- [outputFormat](outputformat.md): The format in which the receiver encodes its data.
- [requiresSecureCoding](requiressecurecoding.md): Indicates whether the archiver requires all archived classes to resist object substitution attacks.
- [archiveRootObject:toFile:](archiverootobject%28__tofile_%29.md): Deprecated. Archives an object graph rooted at a given object to a file at a given path.
