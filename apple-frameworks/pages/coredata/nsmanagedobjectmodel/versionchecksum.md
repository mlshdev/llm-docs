> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectmodel/versionchecksum](https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/versionchecksum)

# versionChecksum (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The Base64-encoded 128-bit model version hash.

## Declaration

```swift
var versionChecksum: String { get }
```

<a id="Discussion"></a>

## Discussion

This value is also available in the versioned model’s `VersionInfo.plist` file and in Xcode’s build log.

## See Also

### Versioning and migrating entities

- [versionIdentifiers](versionidentifiers.md): The set of developer-defined version identifiers for the object model.
- [entityVersionHashesByName](entityversionhashesbyname.md): The dictionary of the model’s entity names and their corresponding version hashes.
- [isConfiguration(withName:compatibleWithStoreMetadata:)](isconfiguration%28withname_compatiblewithstoremetadata_%29.md): Returns a Boolean value that indicates whether a given configuration in the model is compatible with given metadata from a persistent store.

# versionChecksum (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The Base64-encoded 128-bit model version hash.

## Declaration

```objectivec
@property (copy, readonly) NSString * versionChecksum;
```

<a id="Discussion"></a>

## Discussion

This value is also available in the versioned model’s `VersionInfo.plist` file and in Xcode’s build log.

## See Also

### Versioning and migrating entities

- [versionIdentifiers](versionidentifiers.md): The set of developer-defined version identifiers for the object model.
- [entityVersionHashesByName](entityversionhashesbyname.md): The dictionary of the model’s entity names and their corresponding version hashes.
- [isConfiguration:compatibleWithStoreMetadata:](isconfiguration%28withname_compatiblewithstoremetadata_%29.md): Returns a Boolean value that indicates whether a given configuration in the model is compatible with given metadata from a persistent store.
