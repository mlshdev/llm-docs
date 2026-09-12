> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedarchiver/archiveddata(withrootobject:requiringsecurecoding:)](https://developer.apple.com/documentation/foundation/nskeyedarchiver/archiveddata(withrootobject:requiringsecurecoding:))

# archivedData(withRootObject:requiringSecureCoding:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Encodes an object graph with the given root object into a data representation, optionally requiring secure coding.

## Declaration

```swift
class func archivedData(withRootObject object: Any, requiringSecureCoding requiresSecureCoding: Bool) throws -> Data
```

## Parameters

- `object`: The root of the object graph to archive.
- `requiresSecureCoding`: A Boolean value indicating whether all encoded objects must conform to [NSSecureCoding](../nssecurecoding.md).

<a id="Discussion"></a>

## Discussion

To prevent the possibility of encoding an object that [NSKeyedUnarchiver](../nskeyedunarchiver.md) can’t decode, set `requiresSecureCoding` to true whenever possible. This ensures that all encoded objects conform to [NSSecureCoding](../nssecurecoding.md).

> **Note**

>  Enabling secure coding doesn’t change the output format of the archive. This means that you can encode archives with secure coding enabled, and decode them later with secure coding disabled.

## See Also

### Archiving Data

- [finishEncoding()](finishencoding%28%29.md): Instructs the receiver to construct the final data stream.
- [encodedData](encodeddata.md): The encoded data for the archiver.
- [outputFormat](outputformat.md): The format in which the receiver encodes its data.
- [requiresSecureCoding](requiressecurecoding.md): Indicates whether the archiver requires all archived classes to resist object substitution attacks.
- [archivedData(withRootObject:)](archiveddata%28withrootobject_%29.md): Deprecated. Returns a data object that contains the encoded form of the object graph formed by the given root object.
- [archiveRootObject(\_:toFile:)](archiverootobject%28__tofile_%29.md): Deprecated. Archives an object graph rooted at a given object to a file at a given path.

# archivedDataWithRootObject:requiringSecureCoding:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Encodes an object graph with the given root object into a data representation, optionally requiring secure coding.

## Declaration

```objectivec
+ (NSData *) archivedDataWithRootObject:(id) object requiringSecureCoding:(BOOL) requiresSecureCoding error:(NSError **) error;
```

## Parameters

- `object`: The root of the object graph to archive.
- `requiresSecureCoding`: A Boolean value indicating whether all encoded objects must conform to [NSSecureCoding](../nssecurecoding.md).
- `error`: On return, the error that occurred while encoding, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

To prevent the possibility of encoding an object that [NSKeyedUnarchiver](../nskeyedunarchiver.md) can’t decode, set `requiresSecureCoding` to true whenever possible. This ensures that all encoded objects conform to [NSSecureCoding](../nssecurecoding.md).

> **Note**

>  Enabling secure coding doesn’t change the output format of the archive. This means that you can encode archives with secure coding enabled, and decode them later with secure coding disabled.

## See Also

### Archiving Data

- [finishEncoding](finishencoding%28%29.md): Instructs the receiver to construct the final data stream.
- [encodedData](encodeddata.md): The encoded data for the archiver.
- [outputFormat](outputformat.md): The format in which the receiver encodes its data.
- [requiresSecureCoding](requiressecurecoding.md): Indicates whether the archiver requires all archived classes to resist object substitution attacks.
- [archivedDataWithRootObject:](archiveddata%28withrootobject_%29.md): Deprecated. Returns a data object that contains the encoded form of the object graph formed by the given root object.
- [archiveRootObject:toFile:](archiverootobject%28__tofile_%29.md): Deprecated. Archives an object graph rooted at a given object to a file at a given path.
