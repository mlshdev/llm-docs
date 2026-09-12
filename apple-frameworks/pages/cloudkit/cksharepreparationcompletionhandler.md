> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksharepreparationcompletionhandler](https://developer.apple.com/documentation/cloudkit/cksharepreparationcompletionhandler)

# CKSharePreparationCompletionHandler

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef void (^)(CKShare *, NSError *) CKSharePreparationCompletionHandler;
```

## See Also

### Collaboration

- [Sharing CloudKit Data with Other iCloud Users](sharing-cloudkit-data-with-other-icloud-users.md): Create and share private CloudKit data with other users by implementing the sharing UI.
- [Sharing Core Data objects between iCloud users](../coredata/sharing-core-data-objects-between-icloud-users.md): Use Core Data and CloudKit to synchronize data between devices of an iCloud user and share data between different iCloud users.
- [CKShare](ckshare.md): A specialized record type that manages a collection of shared records.
- [CKAllowedSharingOptions](ckallowedsharingoptions.md): An object that controls participant access and permission options.
- [CKSystemSharingUIObserver](cksystemsharinguiobserver.md): An object the system uses to monitor changes in sharing.
- [UICloudSharingController](../uikit/uicloudsharingcontroller.md): A view controller that presents standard screens for adding and removing people from a CloudKit share record.
- [CKSharePreparationHandler](cksharepreparationhandler.md)
- [CKSharingSupported](../bundleresources/information-property-list/cksharingsupported.md): A Boolean value that indicates your app supports CloudKit Sharing.
