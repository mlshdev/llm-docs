> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectmodelreference/init(model:versionchecksum:)](https://developer.apple.com/documentation/coredata/nsmanagedobjectmodelreference/init(model:versionchecksum:))

# init(model:versionChecksum:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates an object model reference for the specified model.

## Declaration

```swift
init(model: NSManagedObjectModel, versionChecksum: String)
```

## Parameters

- `model`: The managed object model.
- `versionChecksum`: The checksum of the object model’s version.

<a id="Discussion"></a>

## Discussion

To determine an object model’s version checksum, use its [versionChecksum](../nsmanagedobjectmodel/versionchecksum.md) property. Alternatively, you can find the checksum in the versioned model’s `VersionInfo.plist` file or in Xcode’s build log.

## See Also

### Creating a reference

- [init(fileURL:versionChecksum:)](init%28fileurl_versionchecksum_%29.md): Creates an object model reference for the model at the specified file URL.
- [init(name:in:versionChecksum:)](init%28name_in_versionchecksum_%29.md): Creates an object model reference for the named model in the specified bundle.
- [init(entityVersionHashes:in:versionChecksum:)](init%28entityversionhashes_in_versionchecksum_%29.md): Creates an object model reference with the entities corresponding to the specified entity version hashes.

# initWithModel:versionChecksum: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates an object model reference for the specified model.

## Declaration

```objectivec
- (instancetype) initWithModel:(NSManagedObjectModel *) model versionChecksum:(NSString *) versionChecksum;
```

## Parameters

- `model`: The managed object model.
- `versionChecksum`: The checksum of the object model’s version.

<a id="Discussion"></a>

## Discussion

To determine an object model’s version checksum, use its [versionChecksum](../nsmanagedobjectmodel/versionchecksum.md) property. Alternatively, you can find the checksum in the versioned model’s `VersionInfo.plist` file or in Xcode’s build log.

## See Also

### Creating a reference

- [initWithFileURL:versionChecksum:](init%28fileurl_versionchecksum_%29.md): Creates an object model reference for the model at the specified file URL.
- [initWithName:inBundle:versionChecksum:](init%28name_in_versionchecksum_%29.md): Creates an object model reference for the named model in the specified bundle.
- [initWithEntityVersionHashes:inBundle:versionChecksum:](init%28entityversionhashes_in_versionchecksum_%29.md): Creates an object model reference with the entities corresponding to the specified entity version hashes.
