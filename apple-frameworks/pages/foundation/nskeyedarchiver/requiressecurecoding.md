> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedarchiver/requiressecurecoding](https://developer.apple.com/documentation/foundation/nskeyedarchiver/requiressecurecoding)

# requiresSecureCoding (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether the archiver requires all archived classes to resist object substitution attacks.

## Declaration

```swift
var requiresSecureCoding: Bool { get set }
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) if the receiver requires [NSSecureCoding](../nssecurecoding.md); [false](https://developer.apple.com/documentation/swift/false) if not.

<a id="Discussion"></a>

## Discussion

If you set the archiver to require secure coding, it throws an exception if you attempt to archive a class which doesn’t conform to [NSSecureCoding](../nssecurecoding.md).

Note that the getter is on the superclass, [NSCoder](../nscoder.md). See [NSCoder](../nscoder.md) for more information about secure coding.

> **Note**

>  Enabling secure coding doesn’t change the output format of the archive. This means that you can encode archives with secure coding enabled, and decode them later with secure coding disabled.

## See Also

### Archiving Data

- [archivedData(withRootObject:requiringSecureCoding:)](archiveddata%28withrootobject_requiringsecurecoding_%29.md): Encodes an object graph with the given root object into a data representation, optionally requiring secure coding.
- [finishEncoding()](finishencoding%28%29.md): Instructs the receiver to construct the final data stream.
- [encodedData](encodeddata.md): The encoded data for the archiver.
- [outputFormat](outputformat.md): The format in which the receiver encodes its data.
- [archivedData(withRootObject:)](archiveddata%28withrootobject_%29.md): Deprecated. Returns a data object that contains the encoded form of the object graph formed by the given root object.
- [archiveRootObject(\_:toFile:)](archiverootobject%28__tofile_%29.md): Deprecated. Archives an object graph rooted at a given object to a file at a given path.

# requiresSecureCoding (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether the archiver requires all archived classes to resist object substitution attacks.

## Declaration

```objectivec
@property (readwrite) BOOL requiresSecureCoding;
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) if the receiver requires [NSSecureCoding](../nssecurecoding.md); [false](https://developer.apple.com/documentation/swift/false) if not.

<a id="Discussion"></a>

## Discussion

If you set the archiver to require secure coding, it throws an exception if you attempt to archive a class which doesn’t conform to [NSSecureCoding](../nssecurecoding.md).

Note that the getter is on the superclass, [NSCoder](../nscoder.md). See [NSCoder](../nscoder.md) for more information about secure coding.

> **Note**

>  Enabling secure coding doesn’t change the output format of the archive. This means that you can encode archives with secure coding enabled, and decode them later with secure coding disabled.

## See Also

### Archiving Data

- [archivedDataWithRootObject:requiringSecureCoding:error:](archiveddata%28withrootobject_requiringsecurecoding_%29.md): Encodes an object graph with the given root object into a data representation, optionally requiring secure coding.
- [finishEncoding](finishencoding%28%29.md): Instructs the receiver to construct the final data stream.
- [encodedData](encodeddata.md): The encoded data for the archiver.
- [outputFormat](outputformat.md): The format in which the receiver encodes its data.
- [archivedDataWithRootObject:](archiveddata%28withrootobject_%29.md): Deprecated. Returns a data object that contains the encoded form of the object graph formed by the given root object.
- [archiveRootObject:toFile:](archiverootobject%28__tofile_%29.md): Deprecated. Archives an object graph rooted at a given object to a file at a given path.
