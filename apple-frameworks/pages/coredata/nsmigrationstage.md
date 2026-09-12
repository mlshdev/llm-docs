> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmigrationstage](https://developer.apple.com/documentation/coredata/nsmigrationstage)

# NSMigrationStage (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An abstract base class for describing an individual stage of a migration.

## Declaration

```swift
class NSMigrationStage
```

<a id="overview"></a>

## Overview

> **Important**

>  Don’t create instances of [NSMigrationStage](nsmigrationstage.md). Instead, use a concrete subclass, such as [NSLightweightMigrationStage](nslightweightmigrationstage.md) or [NSCustomMigrationStage](nscustommigrationstage.md).

## Topics

### Describing the purpose

- [label](nsmigrationstage/label.md): The textual description of the migration stage’s purpose.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSCustomMigrationStage](nscustommigrationstage.md)
- [NSLightweightMigrationStage](nslightweightmigrationstage.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Migration stages

- [NSLightweightMigrationStage](nslightweightmigrationstage.md): An object that describes a series of models suitable for lightweight migration.
- [NSCustomMigrationStage](nscustommigrationstage.md): An object that enables you to participate in the migration between two versions of the same model.

# NSMigrationStage (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An abstract base class for describing an individual stage of a migration.

## Declaration

```objectivec
@interface NSMigrationStage : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  Don’t create instances of [NSMigrationStage](nsmigrationstage.md). Instead, use a concrete subclass, such as [NSLightweightMigrationStage](nslightweightmigrationstage.md) or [NSCustomMigrationStage](nscustommigrationstage.md).

## Topics

### Describing the purpose

- [label](nsmigrationstage/label.md): The textual description of the migration stage’s purpose.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSCustomMigrationStage](nscustommigrationstage.md)
- [NSLightweightMigrationStage](nslightweightmigrationstage.md)

## See Also

### Migration stages

- [NSLightweightMigrationStage](nslightweightmigrationstage.md): An object that describes a series of models suitable for lightweight migration.
- [NSCustomMigrationStage](nscustommigrationstage.md): An object that enables you to participate in the migration between two versions of the same model.
