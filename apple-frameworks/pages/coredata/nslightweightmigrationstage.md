> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nslightweightmigrationstage](https://developer.apple.com/documentation/coredata/nslightweightmigrationstage)

# NSLightweightMigrationStage (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An object that describes a series of models suitable for lightweight migration.

## Declaration

```swift
class NSLightweightMigrationStage
```

<a id="overview"></a>

## Overview

Use [NSLightweightMigrationStage](nslightweightmigrationstage.md) when you have a series of models to migrate and those models are compatible with lightweight migrations. Instances of this class supplement your custom migration stages and help maintain a consistent stage order for the entire migration.

## Topics

### Creating a migration stage

- [init(\_:)](nslightweightmigrationstage/init%28__%29.md): Creates a lightweight migration stage with the specified version checksums.

### Accessing the checksums

- [versionChecksums](nslightweightmigrationstage/versionchecksums.md): The array of version checksums.

## Relationships

### Inherits From

- [NSMigrationStage](nsmigrationstage.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Migration stages

- [NSCustomMigrationStage](nscustommigrationstage.md): An object that enables you to participate in the migration between two versions of the same model.
- [NSMigrationStage](nsmigrationstage.md): An abstract base class for describing an individual stage of a migration.

# NSLightweightMigrationStage (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An object that describes a series of models suitable for lightweight migration.

## Declaration

```objectivec
@interface NSLightweightMigrationStage : NSMigrationStage
```

<a id="overview"></a>

## Overview

Use [NSLightweightMigrationStage](nslightweightmigrationstage.md) when you have a series of models to migrate and those models are compatible with lightweight migrations. Instances of this class supplement your custom migration stages and help maintain a consistent stage order for the entire migration.

## Topics

### Creating a migration stage

- [initWithVersionChecksums:](nslightweightmigrationstage/initwithversionchecksums_.md): Creates a lightweight migration stage with the specified version checksums.

### Accessing the checksums

- [versionChecksums](nslightweightmigrationstage/versionchecksums.md): The array of version checksums.

## Relationships

### Inherits From

- [NSMigrationStage](nsmigrationstage.md)

## See Also

### Migration stages

- [NSCustomMigrationStage](nscustommigrationstage.md): An object that enables you to participate in the migration between two versions of the same model.
- [NSMigrationStage](nsmigrationstage.md): An abstract base class for describing an individual stage of a migration.
