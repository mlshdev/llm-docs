> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectmodelreference/init(fileurl:versionchecksum:)](https://developer.apple.com/documentation/coredata/nsmanagedobjectmodelreference/init(fileurl:versionchecksum:))

# init(fileURL:versionChecksum:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates an object model reference for the model at the specified file URL.

## Declaration

```swift
init(fileURL: URL, versionChecksum: String)
```

## Parameters

- `fileURL`: The on-disk location of the managed object model.
- `versionChecksum`: The checksum of the object model’s version.

<a id="Discussion"></a>

## Discussion

To determine an object model’s version checksum, use its [versionChecksum](../nsmanagedobjectmodel/versionchecksum.md) property. Alternatively, you can find the checksum in the versioned model’s `VersionInfo.plist` file or in Xcode’s build log.

## See Also

### Creating a reference

- [init(model:versionChecksum:)](init%28model_versionchecksum_%29.md): Creates an object model reference for the specified model.
- [init(name:in:versionChecksum:)](init%28name_in_versionchecksum_%29.md): Creates an object model reference for the named model in the specified bundle.
- [init(entityVersionHashes:in:versionChecksum:)](init%28entityversionhashes_in_versionchecksum_%29.md): Creates an object model reference with the entities corresponding to the specified entity version hashes.

# initWithFileURL:versionChecksum: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates an object model reference for the model at the specified file URL.

## Declaration

```objectivec
- (instancetype) initWithFileURL:(NSURL *) fileURL versionChecksum:(NSString *) versionChecksum;
```

## Parameters

- `fileURL`: The on-disk location of the managed object model.
- `versionChecksum`: The checksum of the object model’s version.

<a id="Discussion"></a>

## Discussion

To determine an object model’s version checksum, use its [versionChecksum](../nsmanagedobjectmodel/versionchecksum.md) property. Alternatively, you can find the checksum in the versioned model’s `VersionInfo.plist` file or in Xcode’s build log.

## See Also

### Creating a reference

- [initWithModel:versionChecksum:](init%28model_versionchecksum_%29.md): Creates an object model reference for the specified model.
- [initWithName:inBundle:versionChecksum:](init%28name_in_versionchecksum_%29.md): Creates an object model reference for the named model in the specified bundle.
- [initWithEntityVersionHashes:inBundle:versionChecksum:](init%28entityversionhashes_in_versionchecksum_%29.md): Creates an object model reference with the entities corresponding to the specified entity version hashes.
