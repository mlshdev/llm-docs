> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedarchiver/outputformat](https://developer.apple.com/documentation/foundation/nskeyedarchiver/outputformat)

# outputFormat (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The format in which the receiver encodes its data.

## Declaration

```swift
var outputFormat: PropertyListSerialization.PropertyListFormat { get set }
```

<a id="Discussion"></a>

## Discussion

The available formats are [PropertyListSerialization.PropertyListFormat.xml](../propertylistserialization/propertylistformat/xml.md) and [PropertyListSerialization.PropertyListFormat.binary](../propertylistserialization/propertylistformat/binary.md).

## See Also

### Archiving Data

- [archivedData(withRootObject:requiringSecureCoding:)](archiveddata%28withrootobject_requiringsecurecoding_%29.md): Encodes an object graph with the given root object into a data representation, optionally requiring secure coding.
- [finishEncoding()](finishencoding%28%29.md): Instructs the receiver to construct the final data stream.
- [encodedData](encodeddata.md): The encoded data for the archiver.
- [requiresSecureCoding](requiressecurecoding.md): Indicates whether the archiver requires all archived classes to resist object substitution attacks.
- [archivedData(withRootObject:)](archiveddata%28withrootobject_%29.md): Deprecated. Returns a data object that contains the encoded form of the object graph formed by the given root object.
- [archiveRootObject(\_:toFile:)](archiverootobject%28__tofile_%29.md): Deprecated. Archives an object graph rooted at a given object to a file at a given path.

# outputFormat (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The format in which the receiver encodes its data.

## Declaration

```objectivec
@property NSPropertyListFormat outputFormat;
```

<a id="Discussion"></a>

## Discussion

The available formats are [NSPropertyListXMLFormat_v1_0](../propertylistserialization/propertylistformat/xml.md) and [NSPropertyListBinaryFormat_v1_0](../propertylistserialization/propertylistformat/binary.md).

## See Also

### Archiving Data

- [archivedDataWithRootObject:requiringSecureCoding:error:](archiveddata%28withrootobject_requiringsecurecoding_%29.md): Encodes an object graph with the given root object into a data representation, optionally requiring secure coding.
- [finishEncoding](finishencoding%28%29.md): Instructs the receiver to construct the final data stream.
- [encodedData](encodeddata.md): The encoded data for the archiver.
- [requiresSecureCoding](requiressecurecoding.md): Indicates whether the archiver requires all archived classes to resist object substitution attacks.
- [archivedDataWithRootObject:](archiveddata%28withrootobject_%29.md): Deprecated. Returns a data object that contains the encoded form of the object graph formed by the given root object.
- [archiveRootObject:toFile:](archiverootobject%28__tofile_%29.md): Deprecated. Archives an object graph rooted at a given object to a file at a given path.
