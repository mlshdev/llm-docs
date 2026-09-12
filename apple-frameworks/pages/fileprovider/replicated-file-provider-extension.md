> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/replicated-file-provider-extension](https://developer.apple.com/documentation/fileprovider/replicated-file-provider-extension)

# Replicated File Provider extension (Swift)

**Framework:** File Provider  
**Kind:** API Collection

Build a File Provider extension that syncs the local copies of your files with your remote storage.

<a id="overview"></a>

## Overview

When creating a replicated File Provider extension, the system takes responsibility for managing and storing the local copies of your documents and folders. Your extension syncs data between the local copy and the remote storage, providing the local system with the metadata and contents of the items in your remote storage. It also alerts the system to any remote changes to those items and uploads any local changes back to the remote storage. For more information, see [Synchronizing the File Provider Extension](synchronizing-the-file-provider-extension.md).

At a minimum, the File Provider extension needs to perform the following:

- Adopt both the [NSFileProviderReplicatedExtension](nsfileproviderreplicatedextension.md) and the [NSFileProviderEnumerating](nsfileproviderenumerating.md) protocols. You can add additional features by implementing the other protocols listed in the File Provider protocols listed below.
- Implement an object that adopts the [NSFileProviderEnumerator](nsfileproviderenumerator.md) protocol to enumerate the items from your remote storage when the system calls your [enumerator(for:request:)](nsfileproviderenumerating/enumerator%28for_request_%29.md) method.
- Implement a class that adopts the [NSFileProviderItemVersion](nsfileprovideritemversion.md) protocol to represent the items (directories and files) enumerated by your file provider.

> **Note**

>  The system uses two different enumerators. The first lets the system enumerate items from your remote storage. The second lets your app enumerate the items stored locally by the system. You must implement the first enumerator, returning it when the system calls your [enumerator(for:request:)](nsfileproviderenumerating/enumerator%28for_request_%29.md) method. The system provides the second enumerator when you call methods like the [NSFileProviderManager](nsfileprovidermanager.md) class’s [enumeratorForMaterializedItems()](nsfileprovidermanager/enumeratorformaterializeditems%28%29.md) method.

Your File Provider extension can add custom actions to the file browser’s context menu using the [File Provider UI](../fileproviderui.md) framework. You can also define custom services to communicate with the host app using [NSFileProviderService](../foundation/nsfileproviderservice.md). Use these interfaces to add features that aren’t provided by the base API.

## Topics

### Essentials

- [Synchronizing the File Provider Extension](synchronizing-the-file-provider-extension.md): Keep the local and remote copies of your File Provider extension’s content in sync.
- [Synchronizing files using file provider extensions](synchronizing-files-using-file-provider-extensions.md): Make remote files available in macOS and iOS, and synchronize their states by using file provider extensions.
- [Setting the Finder Sidebar Icon](setting-the-finder-sidebar-icon.md): Specify a standard or custom symbol as a sidebar icon.

### File Provider protocols

- [NSFileProviderReplicatedExtension](nsfileproviderreplicatedextension.md): A File Provider extension in which the system replicates the contents on disk.
- [NSFileProviderEnumerating](nsfileproviderenumerating.md): Support for enumerating the file provider’s contents.
- [NSFileProviderIncrementalContentFetching](nsfileproviderincrementalcontentfetching.md): Support for fetching changes to the item’s content.
- [NSFileProviderPartialContentFetching](nsfileproviderpartialcontentfetching.md): Support for fetching part of a file’s content.
- [NSFileProviderServicing](nsfileproviderservicing.md): Support for providing a custom service source.
- [NSFileProviderCustomAction](nsfileprovidercustomaction.md): Support for custom actions.
- [NSFileProviderExtensionActionIdentifier](nsfileproviderextensionactionidentifier.md): An identifier for custom actions.
- [NSFileProviderThumbnailing](nsfileproviderthumbnailing.md): Support for item thumbnails.
- [NSFileProviderPendingSetEnumerator](nsfileproviderpendingsetenumerator.md): A protocol for enumerating pending items.

### Items and metadata

- [NSFileProviderItemFields](nsfileprovideritemfields.md): Fields that specify which of the item’s properties have changed.
- [NSFileProviderItemVersion](nsfileprovideritemversion.md): The version of the item’s content and its metadata.
- [NSFileProviderRequest](nsfileproviderrequest.md): An object that provides information about the application requesting data from the File Provider extension.
- [NSFileProviderItemDecorating](nsfileprovideritemdecorating.md): Support for decorating items.
- [NSFileProviderItemDecorationIdentifier](nsfileprovideritemdecorationidentifier.md): A decoration identifier defined in the File Provider extension’s information property list.

### Domains

- [NSFileProviderDomainVersion](nsfileproviderdomainversion.md): An opaque object that identifies a specific version of a domain.
- [NSFileProviderDomainState](nsfileproviderdomainstate.md): An object that contains global state data about the domain.

### Testing protocols

- [NSFileProviderTestingChildrenEnumeration](nsfileprovidertestingchildrenenumeration.md): An operation that lists a directory’s content.
- [NSFileProviderTestingCollisionResolution](nsfileprovidertestingcollisionresolution.md): An operation that resolves a collision by renaming the new item.
- [NSFileProviderTestingContentFetch](nsfileprovidertestingcontentfetch.md): An operation that fetches an item’s content.
- [NSFileProviderTestingCreation](nsfileprovidertestingcreation.md): An operation that syncs the creation of the source item to the target location.
- [NSFileProviderTestingDeletion](nsfileprovidertestingdeletion.md): An operation that syncs the deletion of the source item to the target location.
- [NSFileProviderTestingIngestion](nsfileprovidertestingingestion.md): An operation that alerts the system to either local or remote storage changes.
- [NSFileProviderTestingLookup](nsfileprovidertestinglookup.md): An operation that looks up an item.
- [NSFileProviderTestingModification](nsfileprovidertestingmodification.md): An operation that syncs the modification of the source item to the target location.
- [NSFileProviderTestingOperation](nsfileprovidertestingoperation.md): An operation that the system can schedule.
- [NSFileProviderUserInteractionSuppressing](nsfileprovideruserinteractionsuppressing.md): Support for suppressing user-interaction alerts.
- [NSFileProviderTestingOperationSide](nsfileprovidertestingoperationside.md): The location where the operation takes place.
- [NSFileProviderTestingOperationType](nsfileprovidertestingoperationtype.md): The action that an operation performs.
- [com.apple.developer.fileprovider.testing-mode](../bundleresources/entitlements/com.apple.developer.fileprovider.testing-mode.md): A Boolean value that indicates whether you can place domains in testing mode.

### Information property list keys

- [NSDownloadsUbiquitousContents](../bundleresources/information-property-list/nsdownloadsubiquitouscontents.md): A Boolean value that indicates whether the system should download documents before handing them over to the app.
- [com.apple.developer.fileprovider.testing-mode](../bundleresources/entitlements/com.apple.developer.fileprovider.testing-mode.md): A Boolean value that indicates whether you can place domains in testing mode.
- [CFBundleSymbolName](../bundleresources/information-property-list/cfbundleicons/cfbundleprimaryicon/cfbundlesymbolname.md): The name of the symbol to show in the action sheet, and in Finder’s sidebar on macOS.

## See Also

### Extension types

- [Nonreplicated File Provider extension](nonreplicated-file-provider-extension.md): Build a File Provider extension that hosts and manages the user’s local files.

# Replicated File Provider extension (Objective-C)

**Framework:** File Provider  
**Kind:** API Collection

Build a File Provider extension that syncs the local copies of your files with your remote storage.

<a id="overview"></a>

## Overview

When creating a replicated File Provider extension, the system takes responsibility for managing and storing the local copies of your documents and folders. Your extension syncs data between the local copy and the remote storage, providing the local system with the metadata and contents of the items in your remote storage. It also alerts the system to any remote changes to those items and uploads any local changes back to the remote storage. For more information, see [Synchronizing the File Provider Extension](synchronizing-the-file-provider-extension.md).

At a minimum, the File Provider extension needs to perform the following:

- Adopt both the [NSFileProviderReplicatedExtension](nsfileproviderreplicatedextension.md) and the [NSFileProviderEnumerating](nsfileproviderenumerating.md) protocols. You can add additional features by implementing the other protocols listed in the File Provider protocols listed below.
- Implement an object that adopts the [NSFileProviderEnumerator](nsfileproviderenumerator.md) protocol to enumerate the items from your remote storage when the system calls your [enumeratorForContainerItemIdentifier:request:error:](nsfileproviderenumerating/enumerator%28for_request_%29.md) method.
- Implement a class that adopts the [NSFileProviderItemVersion](nsfileprovideritemversion.md) protocol to represent the items (directories and files) enumerated by your file provider.

> **Note**

>  The system uses two different enumerators. The first lets the system enumerate items from your remote storage. The second lets your app enumerate the items stored locally by the system. You must implement the first enumerator, returning it when the system calls your [enumeratorForContainerItemIdentifier:request:error:](nsfileproviderenumerating/enumerator%28for_request_%29.md) method. The system provides the second enumerator when you call methods like the [NSFileProviderManager](nsfileprovidermanager.md) class’s [enumeratorForMaterializedItems](nsfileprovidermanager/enumeratorformaterializeditems%28%29.md) method.

Your File Provider extension can add custom actions to the file browser’s context menu using the [File Provider UI](../fileproviderui.md) framework. You can also define custom services to communicate with the host app using [NSFileProviderService](../foundation/nsfileproviderservice.md). Use these interfaces to add features that aren’t provided by the base API.

## Topics

### Essentials

- [Synchronizing the File Provider Extension](synchronizing-the-file-provider-extension.md): Keep the local and remote copies of your File Provider extension’s content in sync.
- [Synchronizing files using file provider extensions](synchronizing-files-using-file-provider-extensions.md): Make remote files available in macOS and iOS, and synchronize their states by using file provider extensions.
- [Setting the Finder Sidebar Icon](setting-the-finder-sidebar-icon.md): Specify a standard or custom symbol as a sidebar icon.

### File Provider protocols

- [NSFileProviderReplicatedExtension](nsfileproviderreplicatedextension.md): A File Provider extension in which the system replicates the contents on disk.
- [NSFileProviderEnumerating](nsfileproviderenumerating.md): Support for enumerating the file provider’s contents.
- [NSFileProviderIncrementalContentFetching](nsfileproviderincrementalcontentfetching.md): Support for fetching changes to the item’s content.
- [NSFileProviderPartialContentFetching](nsfileproviderpartialcontentfetching.md): Support for fetching part of a file’s content.
- [NSFileProviderServicing](nsfileproviderservicing.md): Support for providing a custom service source.
- [NSFileProviderCustomAction](nsfileprovidercustomaction.md): Support for custom actions.
- [NSFileProviderExtensionActionIdentifier](nsfileproviderextensionactionidentifier.md): An identifier for custom actions.
- [NSFileProviderThumbnailing](nsfileproviderthumbnailing.md): Support for item thumbnails.
- [NSFileProviderPendingSetEnumerator](nsfileproviderpendingsetenumerator.md): A protocol for enumerating pending items.

### Items and metadata

- [NSFileProviderItemFields](nsfileprovideritemfields.md): Fields that specify which of the item’s properties have changed.
- [NSFileProviderItemVersion](nsfileprovideritemversion.md): The version of the item’s content and its metadata.
- [NSFileProviderRequest](nsfileproviderrequest.md): An object that provides information about the application requesting data from the File Provider extension.
- [NSFileProviderItemDecorating](nsfileprovideritemdecorating.md): Support for decorating items.
- [NSFileProviderItemDecorationIdentifier](nsfileprovideritemdecorationidentifier.md): A decoration identifier defined in the File Provider extension’s information property list.

### Domains

- [NSFileProviderDomainVersion](nsfileproviderdomainversion.md): An opaque object that identifies a specific version of a domain.
- [NSFileProviderDomainState](nsfileproviderdomainstate.md): An object that contains global state data about the domain.

### Testing protocols

- [NSFileProviderTestingChildrenEnumeration](nsfileprovidertestingchildrenenumeration.md): An operation that lists a directory’s content.
- [NSFileProviderTestingCollisionResolution](nsfileprovidertestingcollisionresolution.md): An operation that resolves a collision by renaming the new item.
- [NSFileProviderTestingContentFetch](nsfileprovidertestingcontentfetch.md): An operation that fetches an item’s content.
- [NSFileProviderTestingCreation](nsfileprovidertestingcreation.md): An operation that syncs the creation of the source item to the target location.
- [NSFileProviderTestingDeletion](nsfileprovidertestingdeletion.md): An operation that syncs the deletion of the source item to the target location.
- [NSFileProviderTestingIngestion](nsfileprovidertestingingestion.md): An operation that alerts the system to either local or remote storage changes.
- [NSFileProviderTestingLookup](nsfileprovidertestinglookup.md): An operation that looks up an item.
- [NSFileProviderTestingModification](nsfileprovidertestingmodification.md): An operation that syncs the modification of the source item to the target location.
- [NSFileProviderTestingOperation](nsfileprovidertestingoperation.md): An operation that the system can schedule.
- [NSFileProviderUserInteractionSuppressing](nsfileprovideruserinteractionsuppressing.md): Support for suppressing user-interaction alerts.
- [NSFileProviderTestingOperationSide](nsfileprovidertestingoperationside.md): The location where the operation takes place.
- [NSFileProviderTestingOperationType](nsfileprovidertestingoperationtype.md): The action that an operation performs.
- [com.apple.developer.fileprovider.testing-mode](../bundleresources/entitlements/com.apple.developer.fileprovider.testing-mode.md): A Boolean value that indicates whether you can place domains in testing mode.

### Information property list keys

- [NSDownloadsUbiquitousContents](../bundleresources/information-property-list/nsdownloadsubiquitouscontents.md): A Boolean value that indicates whether the system should download documents before handing them over to the app.
- [com.apple.developer.fileprovider.testing-mode](../bundleresources/entitlements/com.apple.developer.fileprovider.testing-mode.md): A Boolean value that indicates whether you can place domains in testing mode.
- [CFBundleSymbolName](../bundleresources/information-property-list/cfbundleicons/cfbundleprimaryicon/cfbundlesymbolname.md): The name of the symbol to show in the action sheet, and in Finder’s sidebar on macOS.

## See Also

### Extension types

- [Nonreplicated File Provider extension](nonreplicated-file-provider-extension.md): Build a File Provider extension that hosts and manages the user’s local files.
