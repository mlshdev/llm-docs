> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedarchiver/encodeddata](https://developer.apple.com/documentation/foundation/nskeyedarchiver/encodeddata)

# encodedData (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The encoded data for the archiver.

## Declaration

```swift
var encodedData: Data { get }
```

<a id="Discussion"></a>

## Discussion

If encoding has not yet finished, invoking this property calls [finishEncoding()](finishencoding%28%29.md) and populates this property with the encoded data. If you initialized the keyed archiver with [init(forWritingWith:)](init%28forwritingwith_%29.md) and a specific mutable data instance, this property contains that instance.

## See Also

### Archiving Data

- [archivedData(withRootObject:requiringSecureCoding:)](archiveddata%28withrootobject_requiringsecurecoding_%29.md): Encodes an object graph with the given root object into a data representation, optionally requiring secure coding.
- [finishEncoding()](finishencoding%28%29.md): Instructs the receiver to construct the final data stream.
- [outputFormat](outputformat.md): The format in which the receiver encodes its data.
- [requiresSecureCoding](requiressecurecoding.md): Indicates whether the archiver requires all archived classes to resist object substitution attacks.
- [archivedData(withRootObject:)](archiveddata%28withrootobject_%29.md): Deprecated. Returns a data object that contains the encoded form of the object graph formed by the given root object.
- [archiveRootObject(\_:toFile:)](archiverootobject%28__tofile_%29.md): Deprecated. Archives an object graph rooted at a given object to a file at a given path.

# encodedData (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The encoded data for the archiver.

## Declaration

```objectivec
@property (strong, readonly) NSData * encodedData;
```

<a id="Discussion"></a>

## Discussion

If encoding has not yet finished, invoking this property calls [finishEncoding](finishencoding%28%29.md) and populates this property with the encoded data. If you initialized the keyed archiver with [initForWritingWithMutableData:](init%28forwritingwith_%29.md) and a specific mutable data instance, this property contains that instance.

## See Also

### Archiving Data

- [archivedDataWithRootObject:requiringSecureCoding:error:](archiveddata%28withrootobject_requiringsecurecoding_%29.md): Encodes an object graph with the given root object into a data representation, optionally requiring secure coding.
- [finishEncoding](finishencoding%28%29.md): Instructs the receiver to construct the final data stream.
- [outputFormat](outputformat.md): The format in which the receiver encodes its data.
- [requiresSecureCoding](requiressecurecoding.md): Indicates whether the archiver requires all archived classes to resist object substitution attacks.
- [archivedDataWithRootObject:](archiveddata%28withrootobject_%29.md): Deprecated. Returns a data object that contains the encoded form of the object graph formed by the given root object.
- [archiveRootObject:toFile:](archiverootobject%28__tofile_%29.md): Deprecated. Archives an object graph rooted at a given object to a file at a given path.
