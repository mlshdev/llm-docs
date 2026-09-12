> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectmodel/versionidentifiers](https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/versionidentifiers)

# versionIdentifiers (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The set of developer-defined version identifiers for the object model.

## Declaration

```swift
var versionIdentifiers: Set<AnyHashable> { get set }
```

<a id="Discussion"></a>

## Discussion

Merged models return the combined collection of identifiers. The Core Data framework does not assign a default identifier to object models, nor does it depend on this value at runtime. For models you create in Xcode, set this value in the model inspector.

Use this value when debugging to help determine the models that Core Data merges to create the merged model.

## See Also

### Versioning and migrating entities

- [versionChecksum](versionchecksum.md): The Base64-encoded 128-bit model version hash.
- [entityVersionHashesByName](entityversionhashesbyname.md): The dictionary of the model’s entity names and their corresponding version hashes.
- [isConfiguration(withName:compatibleWithStoreMetadata:)](isconfiguration%28withname_compatiblewithstoremetadata_%29.md): Returns a Boolean value that indicates whether a given configuration in the model is compatible with given metadata from a persistent store.

# versionIdentifiers (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The set of developer-defined version identifiers for the object model.

## Declaration

```objectivec
@property (copy) NSSet * versionIdentifiers;
```

<a id="Discussion"></a>

## Discussion

Merged models return the combined collection of identifiers. The Core Data framework does not assign a default identifier to object models, nor does it depend on this value at runtime. For models you create in Xcode, set this value in the model inspector.

Use this value when debugging to help determine the models that Core Data merges to create the merged model.

## See Also

### Versioning and migrating entities

- [versionChecksum](versionchecksum.md): The Base64-encoded 128-bit model version hash.
- [entityVersionHashesByName](entityversionhashesbyname.md): The dictionary of the model’s entity names and their corresponding version hashes.
- [isConfiguration:compatibleWithStoreMetadata:](isconfiguration%28withname_compatiblewithstoremetadata_%29.md): Returns a Boolean value that indicates whether a given configuration in the model is compatible with given metadata from a persistent store.
