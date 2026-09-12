> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedarchiver/finishencoding()](https://developer.apple.com/documentation/foundation/nskeyedarchiver/finishencoding())

# finishEncoding() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Instructs the receiver to construct the final data stream.

## Declaration

```swift
func finishEncoding()
```

<a id="Discussion"></a>

## Discussion

No more values can be encoded after this method is called. You must call this method when finished.

## See Also

### Related Documentation

- [init(forWritingWith:)](init%28forwritingwith_%29.md): Deprecated. Initializes an archiver to encode data into a given a mutable-data object.

### Archiving Data

- [archivedData(withRootObject:requiringSecureCoding:)](archiveddata%28withrootobject_requiringsecurecoding_%29.md): Encodes an object graph with the given root object into a data representation, optionally requiring secure coding.
- [encodedData](encodeddata.md): The encoded data for the archiver.
- [outputFormat](outputformat.md): The format in which the receiver encodes its data.
- [requiresSecureCoding](requiressecurecoding.md): Indicates whether the archiver requires all archived classes to resist object substitution attacks.
- [archivedData(withRootObject:)](archiveddata%28withrootobject_%29.md): Deprecated. Returns a data object that contains the encoded form of the object graph formed by the given root object.
- [archiveRootObject(\_:toFile:)](archiverootobject%28__tofile_%29.md): Deprecated. Archives an object graph rooted at a given object to a file at a given path.

# finishEncoding (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Instructs the receiver to construct the final data stream.

## Declaration

```objectivec
- (void) finishEncoding;
```

<a id="Discussion"></a>

## Discussion

No more values can be encoded after this method is called. You must call this method when finished.

## See Also

### Related Documentation

- [initForWritingWithMutableData:](init%28forwritingwith_%29.md): Deprecated. Initializes an archiver to encode data into a given a mutable-data object.

### Archiving Data

- [archivedDataWithRootObject:requiringSecureCoding:error:](archiveddata%28withrootobject_requiringsecurecoding_%29.md): Encodes an object graph with the given root object into a data representation, optionally requiring secure coding.
- [encodedData](encodeddata.md): The encoded data for the archiver.
- [outputFormat](outputformat.md): The format in which the receiver encodes its data.
- [requiresSecureCoding](requiressecurecoding.md): Indicates whether the archiver requires all archived classes to resist object substitution attacks.
- [archivedDataWithRootObject:](archiveddata%28withrootobject_%29.md): Deprecated. Returns a data object that contains the encoded form of the object graph formed by the given root object.
- [archiveRootObject:toFile:](archiverootobject%28__tofile_%29.md): Deprecated. Archives an object graph rooted at a given object to a file at a given path.
