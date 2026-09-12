> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectmodel/entityversionhashesbyname](https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/entityversionhashesbyname)

# entityVersionHashesByName (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The dictionary of the model’s entity names and their corresponding version hashes.

## Declaration

```swift
var entityVersionHashesByName: [String : Data] { get }
```

<a id="Discussion"></a>

## Discussion

Core Data use the dictionary of version hash information is to determine schema compatibility.

## See Also

### Versioning and migrating entities

- [versionChecksum](versionchecksum.md): The Base64-encoded 128-bit model version hash.
- [versionIdentifiers](versionidentifiers.md): The set of developer-defined version identifiers for the object model.
- [isConfiguration(withName:compatibleWithStoreMetadata:)](isconfiguration%28withname_compatiblewithstoremetadata_%29.md): Returns a Boolean value that indicates whether a given configuration in the model is compatible with given metadata from a persistent store.

# entityVersionHashesByName (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The dictionary of the model’s entity names and their corresponding version hashes.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,NSData *> * entityVersionHashesByName;
```

<a id="Discussion"></a>

## Discussion

Core Data use the dictionary of version hash information is to determine schema compatibility.

## See Also

### Versioning and migrating entities

- [versionChecksum](versionchecksum.md): The Base64-encoded 128-bit model version hash.
- [versionIdentifiers](versionidentifiers.md): The set of developer-defined version identifiers for the object model.
- [isConfiguration:compatibleWithStoreMetadata:](isconfiguration%28withname_compatiblewithstoremetadata_%29.md): Returns a Boolean value that indicates whether a given configuration in the model is compatible with given metadata from a persistent store.
