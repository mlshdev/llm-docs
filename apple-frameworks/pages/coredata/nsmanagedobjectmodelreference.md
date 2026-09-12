> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectmodelreference](https://developer.apple.com/documentation/coredata/nsmanagedobjectmodelreference)

# NSManagedObjectModelReference (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An object that describes a specific version of an object model.

## Declaration

```swift
class NSManagedObjectModelReference
```

## Topics

### Creating a reference

- [init(model:versionChecksum:)](nsmanagedobjectmodelreference/init%28model_versionchecksum_%29.md): Creates an object model reference for the specified model.
- [init(fileURL:versionChecksum:)](nsmanagedobjectmodelreference/init%28fileurl_versionchecksum_%29.md): Creates an object model reference for the model at the specified file URL.
- [init(name:in:versionChecksum:)](nsmanagedobjectmodelreference/init%28name_in_versionchecksum_%29.md): Creates an object model reference for the named model in the specified bundle.
- [init(entityVersionHashes:in:versionChecksum:)](nsmanagedobjectmodelreference/init%28entityversionhashes_in_versionchecksum_%29.md): Creates an object model reference with the entities corresponding to the specified entity version hashes.

### Resolving the model object

- [resolvedModel](nsmanagedobjectmodelreference/resolvedmodel.md): The resolved object model.
- [versionChecksum](nsmanagedobjectmodelreference/versionchecksum.md): The version checksum of the resolved model.

### Initializers

- [init(entityVersionHashes:inBundle:versionChecksum:)](nsmanagedobjectmodelreference/init%28entityversionhashes_inbundle_versionchecksum_%29.md)
- [init(name:inBundle:versionChecksum:)](nsmanagedobjectmodelreference/init%28name_inbundle_versionchecksum_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Creating a custom migration stage

- [init(migratingFrom:to:)](nscustommigrationstage/init%28migratingfrom_to_%29.md): Creates a custom migration stage with the specified source and destination model references.

# NSManagedObjectModelReference (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An object that describes a specific version of an object model.

## Declaration

```objectivec
@interface NSManagedObjectModelReference : NSObject
```

## Topics

### Creating a reference

- [initWithModel:versionChecksum:](nsmanagedobjectmodelreference/init%28model_versionchecksum_%29.md): Creates an object model reference for the specified model.
- [initWithFileURL:versionChecksum:](nsmanagedobjectmodelreference/init%28fileurl_versionchecksum_%29.md): Creates an object model reference for the model at the specified file URL.
- [initWithName:inBundle:versionChecksum:](nsmanagedobjectmodelreference/init%28name_in_versionchecksum_%29.md): Creates an object model reference for the named model in the specified bundle.
- [initWithEntityVersionHashes:inBundle:versionChecksum:](nsmanagedobjectmodelreference/init%28entityversionhashes_in_versionchecksum_%29.md): Creates an object model reference with the entities corresponding to the specified entity version hashes.

### Resolving the model object

- [resolvedModel](nsmanagedobjectmodelreference/resolvedmodel.md): The resolved object model.
- [versionChecksum](nsmanagedobjectmodelreference/versionchecksum.md): The version checksum of the resolved model.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Creating a custom migration stage

- [initWithCurrentModelReference:nextModelReference:](nscustommigrationstage/initwithcurrentmodelreference_nextmodelreference_.md): Creates a custom migration stage with the specified source and destination model references.
