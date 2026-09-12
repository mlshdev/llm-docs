> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksystemsharinguiobserver](https://developer.apple.com/documentation/cloudkit/cksystemsharinguiobserver)

# CKSystemSharingUIObserver (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object the system uses to monitor changes in sharing.

## Declaration

```swift
class CKSystemSharingUIObserver
```

<a id="overview"></a>

## Overview

Initialize a `CKSystemSharingUIObserver` instance with your [CKContainer](ckcontainer.md) when preparing to share an item using the share sheet. Use your implementation to update the local state of a shared item when your app receives a [CKShare](ckshare.md), or to delete a locally cached share when the system notifies your app about a share deletion.

The system only propagates changes on the local device using `CKSystemSharingUIObserver`. The system doesn’t notify your app about any remote changes on the server. For more information about how to keep your local cache in sync with remote changes, see [Remote Records](remote-records.md).

## Topics

### Creating a sharing observer

- [init(container:)](cksystemsharinguiobserver/init%28container_%29.md): Creates and initializes an observer using the provided container.

### Accessing sharing blocks

- [systemSharingUIDidSaveShareBlock](cksystemsharinguiobserver/systemsharinguididsaveshareblock-8c9vi.md): A callback block the system invokes after the success or failure of a share save by the system sharing UI.
- [systemSharingUIDidStopSharingBlock](cksystemsharinguiobserver/systemsharinguididstopsharingblock-7nmiw.md): A callback block the system invokes after the success or failure of a share delete by the system sharing UI.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Collaboration

- [Sharing CloudKit Data with Other iCloud Users](sharing-cloudkit-data-with-other-icloud-users.md): Create and share private CloudKit data with other users by implementing the sharing UI.
- [Sharing Core Data objects between iCloud users](../coredata/sharing-core-data-objects-between-icloud-users.md): Use Core Data and CloudKit to synchronize data between devices of an iCloud user and share data between different iCloud users.
- [CKShare](ckshare.md): A specialized record type that manages a collection of shared records.
- [CKShareTransferRepresentation](cksharetransferrepresentation.md): A transfer representation the system uses to share an item.
- [CKAllowedSharingOptions](ckallowedsharingoptions.md): An object that controls participant access and permission options.
- [UICloudSharingController](../uikit/uicloudsharingcontroller.md): A view controller that presents standard screens for adding and removing people from a CloudKit share record.
- [CKSharingSupported](../bundleresources/information-property-list/cksharingsupported.md): A Boolean value that indicates your app supports CloudKit Sharing.

# CKSystemSharingUIObserver (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object the system uses to monitor changes in sharing.

## Declaration

```objectivec
@interface CKSystemSharingUIObserver : NSObject
```

<a id="overview"></a>

## Overview

Initialize a `CKSystemSharingUIObserver` instance with your [CKContainer](ckcontainer.md) when preparing to share an item using the share sheet. Use your implementation to update the local state of a shared item when your app receives a [CKShare](ckshare.md), or to delete a locally cached share when the system notifies your app about a share deletion.

The system only propagates changes on the local device using `CKSystemSharingUIObserver`. The system doesn’t notify your app about any remote changes on the server. For more information about how to keep your local cache in sync with remote changes, see [Remote Records](remote-records.md).

## Topics

### Creating a sharing observer

- [initWithContainer:](cksystemsharinguiobserver/init%28container_%29.md): Creates and initializes an observer using the provided container.

### Accessing sharing blocks

- [systemSharingUIDidSaveShareBlock](cksystemsharinguiobserver/systemsharinguididsaveshareblock-39zlv.md): A callback block the system invokes after the success or failure of a share save by the system sharing UI.
- [systemSharingUIDidStopSharingBlock](cksystemsharinguiobserver/systemsharinguididstopsharingblock-4g5bn.md): A callback block the system invokes after the success or failure of a share delete by the system sharing UI.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Collaboration

- [Sharing CloudKit Data with Other iCloud Users](sharing-cloudkit-data-with-other-icloud-users.md): Create and share private CloudKit data with other users by implementing the sharing UI.
- [Sharing Core Data objects between iCloud users](../coredata/sharing-core-data-objects-between-icloud-users.md): Use Core Data and CloudKit to synchronize data between devices of an iCloud user and share data between different iCloud users.
- [CKShare](ckshare.md): A specialized record type that manages a collection of shared records.
- [CKAllowedSharingOptions](ckallowedsharingoptions.md): An object that controls participant access and permission options.
- [UICloudSharingController](../uikit/uicloudsharingcontroller.md): A view controller that presents standard screens for adding and removing people from a CloudKit share record.
- [CKSharePreparationCompletionHandler](cksharepreparationcompletionhandler.md)
- [CKSharePreparationHandler](cksharepreparationhandler.md)
- [CKSharingSupported](../bundleresources/information-property-list/cksharingsupported.md): A Boolean value that indicates your app supports CloudKit Sharing.
