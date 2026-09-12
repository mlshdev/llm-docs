> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcloudkitcontaineroptions](https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontaineroptions)

# NSPersistentCloudKitContainerOptions (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object that customizes how a store description aligns with a CloudKit database.

## Declaration

```swift
class NSPersistentCloudKitContainerOptions
```

## Mentioned In

- [Creating a Core Data Model for CloudKit](creating-a-core-data-model-for-cloudkit.md)
- [Setting Up Core Data with CloudKit](setting-up-core-data-with-cloudkit.md)

<a id="overview"></a>

## Overview

Use [NSPersistentCloudKitContainerOptions](nspersistentcloudkitcontaineroptions.md) to customize the behavior of an [NSPersistentCloudKitContainer](nspersistentcloudkitcontainer.md) or to create additional store descriptions that sync to other containers.

For more information about setting up multiple stores, see [Setting Up Core Data with CloudKit](setting-up-core-data-with-cloudkit.md).

## Topics

### Creating Container Options

- [init(containerIdentifier:)](nspersistentcloudkitcontaineroptions/init%28containeridentifier_%29.md): Initializes container options using the given CloudKit container identifier.
- [containerIdentifier](nspersistentcloudkitcontaineroptions/containeridentifier.md): The identifier of the CloudKit container associated with a given store description.
- [databaseScope](nspersistentcloudkitcontaineroptions/databasescope-4c72t.md): The database scope — public, private, or shared — to use for a specified store in a persistent CloudKit container.

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

### CloudKit mirroring

- [Mirroring a Core Data store with CloudKit](mirroring-a-core-data-store-with-cloudkit.md): Back user interfaces with a local replica of a CloudKit private database.
- [Synchronizing a local store to the cloud](synchronizing-a-local-store-to-the-cloud.md): Share data between a user’s devices and other iCloud users.
- [NSPersistentCloudKitContainer](nspersistentcloudkitcontainer.md): A container that encapsulates the Core Data stack in your app, and mirrors select persistent stores to a CloudKit private database.
- [Sharing Core Data objects between iCloud users](sharing-core-data-objects-between-icloud-users.md): Use Core Data and CloudKit to synchronize data between devices of an iCloud user and share data between different iCloud users.

# NSPersistentCloudKitContainerOptions (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object that customizes how a store description aligns with a CloudKit database.

## Declaration

```objectivec
@interface NSPersistentCloudKitContainerOptions : NSObject
```

## Mentioned In

- [Creating a Core Data Model for CloudKit](creating-a-core-data-model-for-cloudkit.md)
- [Setting Up Core Data with CloudKit](setting-up-core-data-with-cloudkit.md)

<a id="overview"></a>

## Overview

Use [NSPersistentCloudKitContainerOptions](nspersistentcloudkitcontaineroptions.md) to customize the behavior of an [NSPersistentCloudKitContainer](nspersistentcloudkitcontainer.md) or to create additional store descriptions that sync to other containers.

For more information about setting up multiple stores, see [Setting Up Core Data with CloudKit](setting-up-core-data-with-cloudkit.md).

## Topics

### Creating Container Options

- [initWithContainerIdentifier:](nspersistentcloudkitcontaineroptions/init%28containeridentifier_%29.md): Initializes container options using the given CloudKit container identifier.
- [containerIdentifier](nspersistentcloudkitcontaineroptions/containeridentifier.md): The identifier of the CloudKit container associated with a given store description.
- [databaseScope](nspersistentcloudkitcontaineroptions/databasescope-2784h.md): The database scope — public, private, or shared — to use for a specified store in a persistent CloudKit container.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### CloudKit mirroring

- [Mirroring a Core Data store with CloudKit](mirroring-a-core-data-store-with-cloudkit.md): Back user interfaces with a local replica of a CloudKit private database.
- [Synchronizing a local store to the cloud](synchronizing-a-local-store-to-the-cloud.md): Share data between a user’s devices and other iCloud users.
- [NSPersistentCloudKitContainer](nspersistentcloudkitcontainer.md): A container that encapsulates the Core Data stack in your app, and mirrors select persistent stores to a CloudKit private database.
- [Sharing Core Data objects between iCloud users](sharing-core-data-objects-between-icloud-users.md): Use Core Data and CloudKit to synchronize data between devices of an iCloud user and share data between different iCloud users.
