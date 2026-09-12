> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager)

# NSFileProviderManager (Swift)

**Framework:** File Provider  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

A manager object that you use to communicate with the file provider from either your app or your File Provider extension.

## Declaration

```swift
class NSFileProviderManager
```

## Mentioned In

- [Signaling Changes for User-Driven Actions](signaling-changes-for-user-driven-actions.md)
- [Synchronizing the File Provider Extension](synchronizing-the-file-provider-extension.md)

## Topics

### Accessing File Provider data

- [default](nsfileprovidermanager/default.md): A property that returns the shared file provider manager object.
- [documentStorageURL](nsfileprovidermanager/documentstorageurl.md): The root URL for all shared documents.
- [providerIdentifier](nsfileprovidermanager/provideridentifier.md): A purpose identifier for coordinated reads and writes.

### Translating user-visible URLs

- [getUserVisibleURL(for:completionHandler:)](nsfileprovidermanager/getuservisibleurl%28for_completionhandler_%29.md): Returns the user-visible URL for an item.
- [getIdentifierForUserVisibleFile(at:completionHandler:)](nsfileprovidermanager/getidentifierforuservisiblefile%28at_completionhandler_%29.md): Returns the identifier and domain for a user-visible URL.

### Working with items

- [reimportItems(below:completionHandler:)](nsfileprovidermanager/reimportitems%28below_completionhandler_%29.md): Tells the system to reimport the item and its content recursively.
- [evictItem(identifier:completionHandler:)](nsfileprovidermanager/evictitem%28identifier_completionhandler_%29.md): Asks the system to remove an item from its cache.
- [requestDownloadForItem(withIdentifier:requestedRange:)](nsfileprovidermanager/requestdownloadforitem%28withidentifier_requestedrange_%29.md)
- [requestDownloadForItem(withIdentifier:requestedRange:completionHandler:)](nsfileprovidermanager/requestdownloadforitem%28withidentifier_requestedrange_completionhandler_%29.md)
- [requestModification(of:forItemWithIdentifier:options:completionHandler:)](nsfileprovidermanager/requestmodification%28of_foritemwithidentifier_options_completionhandler_%29.md)
- [enumeratorForMaterializedItems()](nsfileprovidermanager/enumeratorformaterializeditems%28%29.md): Returns an enumerator for all the items the system currently stores on disk.
- [enumeratorForPendingItems()](nsfileprovidermanager/enumeratorforpendingitems%28%29.md): Returns an enumerator for the set of pending items.

### Performing actions

- [placeholderURL(for:)](nsfileprovidermanager/placeholderurl%28for_%29.md): Returns a placeholder URL for a given document URL.
- [writePlaceholder(at:withMetadata:)](nsfileprovidermanager/writeplaceholder%28at_withmetadata_%29.md): Writes a document placeholder with the provided metadata.
- [register(\_:forItemWithIdentifier:completionHandler:)](nsfileprovidermanager/register%28__foritemwithidentifier_completionhandler_%29.md): Registers the URL session task responsible for the specified item.
- [signalEnumerator(for:completionHandler:)](nsfileprovidermanager/signalenumerator%28for_completionhandler_%29.md): Alerts the system to changes in the specified folder’s content.
- [waitForChanges(below:completionHandler:)](nsfileprovidermanager/waitforchanges%28below_completionhandler_%29.md): Requests a notification after the system completes all the specified changes.
- [globalProgress(for:)](nsfileprovidermanager/globalprogress%28for_%29.md): Returns a progress object that tracks either the uploading or downloading of items from the File Provider extension’s remote storage.

### Working with domains

- [init(for:)](nsfileprovidermanager/init%28for_%29.md): Returns a newly created file provider manager for the specified domain.
- [import(\_:fromDirectoryAt:completionHandler:)](nsfileprovidermanager/import%28__fromdirectoryat_completionhandler_%29.md): Creates a new domain that takes ownership of on-disk data that your app previously managed without a file provider.
- [add(\_:completionHandler:)](nsfileprovidermanager/add%28__completionhandler_%29.md): Adds a domain to the File Provider extension.
- [getDomainsWithCompletionHandler(\_:)](nsfileprovidermanager/getdomainswithcompletionhandler%28__%29.md): Returns all of the File Provider extension’s domains.
- [remove(\_:completionHandler:)](nsfileprovidermanager/remove%28__completionhandler_%29.md): Removes a domain from the File Provider extension.
- [remove(\_:mode:completionHandler:)](nsfileprovidermanager/remove%28__mode_completionhandler_%29.md): Removes a domain from the File Provider extension using the specified options.
- [removeAllDomains(completionHandler:)](nsfileprovidermanager/removealldomains%28completionhandler_%29.md): Removes all domains from the File Provider extension.
- [NSFileProviderManager.DomainRemovalMode](nsfileprovidermanager/domainremovalmode.md): A mode indicating how the system handles user data when removing a domain.
- [disconnect(reason:options:completionHandler:)](nsfileprovidermanager/disconnect%28reason_options_completionhandler_%29.md): Disconnects the domain from the extension.
- [NSFileProviderManager.DisconnectionOptions](nsfileprovidermanager/disconnectionoptions.md): Options for disconnecting a domain from the extension.
- [reconnect(completionHandler:)](nsfileprovidermanager/reconnect%28completionhandler_%29.md): Reconnects the domain with the extension.
- [waitForStabilization(completionHandler:)](nsfileprovidermanager/waitforstabilization%28completionhandler_%29.md): Requests a notification after the domain stabilizes.
- [temporaryDirectoryURL()](nsfileprovidermanager/temporarydirectoryurl%28%29.md): Returns the URL of a directory that the File Provider extension can use to temporarily store files before passing them to the system.

### Syncing Desktop and Documents folders

- [claimKnownFolders(\_:localizedReason:completionHandler:)](nsfileprovidermanager/claimknownfolders%28__localizedreason_completionhandler_%29.md): Asks the domain to sync the specified known folders.
- [releaseKnownFolders(\_:localizedReason:completionHandler:)](nsfileprovidermanager/releaseknownfolders%28__localizedreason_completionhandler_%29.md): Asks the system to stop replicating the specified known folders in the domain.
- [NSFileProviderKnownFolders](nsfileproviderknownfolders.md): Constants that identify known folders.
- [NSFileProviderKnownFolderLocations](nsfileproviderknownfolderlocations.md): A class for working with known-folder locations.
- [NSFileProviderKnownFolderSupporting](nsfileproviderknownfoldersupporting.md): A protocol that defines the interface for sharing known-folder locations with the system.

### Working with external volumes

- [stateDirectoryURL()](nsfileprovidermanager/statedirectoryurl%28%29.md): Returns a URL for a directory for storing state information for the domain.
- [checkDomainsCanBeStoredOnVolume(at:)](nsfileprovidermanager/checkdomainscanbestoredonvolume%28at_%29.md): Checks whether the specified URL is eligible for storing a domain.
- [NSFileProviderManager.EligibilityResult](nsfileprovidermanager/eligibilityresult.md): Constants that specify whether a URL is eligible for storing a domain.
- [NSFileProviderExternalVolumeHandling](nsfileproviderexternalvolumehandling.md): A protocol that defines the interface for handling external volumes.

### Using services

- [getService(named:for:completionHandler:)](nsfileprovidermanager/getservice%28named_for_completionhandler_%29.md)

### Testing

- [listAvailableTestingOperations()](nsfileprovidermanager/listavailabletestingoperations%28%29.md): Lists all the operations that are ready for scheduling.
- [run(\_:)](nsfileprovidermanager/run%28__%29.md): Asks the system to schedule and execute the specified operations.

### Handling errors

- [signalErrorResolved(\_:completionHandler:)](nsfileprovidermanager/signalerrorresolved%28__completionhandler_%29.md): Indicates a resolved error.

### Collecting diagnostic reports

- [requestDiagnosticCollection(for:errorReason:completionHandler:)](nsfileprovidermanager/requestdiagnosticcollection%28for_errorreason_completionhandler_%29.md): Requests a diagnostics collection for use when working directly with Apple to improve sync behavior.

### Initializers

- [init(forDomain:)](nsfileprovidermanager/init%28fordomain_%29.md)

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

# NSFileProviderManager (Objective-C)

**Framework:** File Provider  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

A manager object that you use to communicate with the file provider from either your app or your File Provider extension.

## Declaration

```objectivec
@interface NSFileProviderManager : NSObject
```

## Mentioned In

- [Signaling Changes for User-Driven Actions](signaling-changes-for-user-driven-actions.md)
- [Synchronizing the File Provider Extension](synchronizing-the-file-provider-extension.md)

## Topics

### Accessing File Provider data

- [defaultManager](nsfileprovidermanager/default.md): A property that returns the shared file provider manager object.
- [documentStorageURL](nsfileprovidermanager/documentstorageurl.md): The root URL for all shared documents.
- [providerIdentifier](nsfileprovidermanager/provideridentifier.md): A purpose identifier for coordinated reads and writes.

### Translating user-visible URLs

- [getUserVisibleURLForItemIdentifier:completionHandler:](nsfileprovidermanager/getuservisibleurl%28for_completionhandler_%29.md): Returns the user-visible URL for an item.
- [getIdentifierForUserVisibleFileAtURL:completionHandler:](nsfileprovidermanager/getidentifierforuservisiblefile%28at_completionhandler_%29.md): Returns the identifier and domain for a user-visible URL.

### Working with items

- [reimportItemsBelowItemWithIdentifier:completionHandler:](nsfileprovidermanager/reimportitems%28below_completionhandler_%29.md): Tells the system to reimport the item and its content recursively.
- [evictItemWithIdentifier:completionHandler:](nsfileprovidermanager/evictitem%28identifier_completionhandler_%29.md): Asks the system to remove an item from its cache.
- [requestDownloadForItemWithIdentifier:requestedRange:completionHandler:](nsfileprovidermanager/requestdownloadforitemwithidentifier_requestedrange_completionhandler_.md)
- [requestModificationOfFields:forItemWithIdentifier:options:completionHandler:](nsfileprovidermanager/requestmodification%28of_foritemwithidentifier_options_completionhandler_%29.md)
- [enumeratorForMaterializedItems](nsfileprovidermanager/enumeratorformaterializeditems%28%29.md): Returns an enumerator for all the items the system currently stores on disk.
- [enumeratorForPendingItems](nsfileprovidermanager/enumeratorforpendingitems%28%29.md): Returns an enumerator for the set of pending items.

### Performing actions

- [placeholderURLForURL:](nsfileprovidermanager/placeholderurl%28for_%29.md): Returns a placeholder URL for a given document URL.
- [writePlaceholderAtURL:withMetadata:error:](nsfileprovidermanager/writeplaceholder%28at_withmetadata_%29.md): Writes a document placeholder with the provided metadata.
- [registerURLSessionTask:forItemWithIdentifier:completionHandler:](nsfileprovidermanager/register%28__foritemwithidentifier_completionhandler_%29.md): Registers the URL session task responsible for the specified item.
- [signalEnumeratorForContainerItemIdentifier:completionHandler:](nsfileprovidermanager/signalenumerator%28for_completionhandler_%29.md): Alerts the system to changes in the specified folder’s content.
- [waitForChangesOnItemsBelowItemWithIdentifier:completionHandler:](nsfileprovidermanager/waitforchanges%28below_completionhandler_%29.md): Requests a notification after the system completes all the specified changes.
- [globalProgressForKind:](nsfileprovidermanager/globalprogress%28for_%29.md): Returns a progress object that tracks either the uploading or downloading of items from the File Provider extension’s remote storage.

### Working with domains

- [managerForDomain:](nsfileprovidermanager/init%28for_%29.md): Returns a newly created file provider manager for the specified domain.
- [importDomain:fromDirectoryAtURL:completionHandler:](nsfileprovidermanager/import%28__fromdirectoryat_completionhandler_%29.md): Creates a new domain that takes ownership of on-disk data that your app previously managed without a file provider.
- [addDomain:completionHandler:](nsfileprovidermanager/add%28__completionhandler_%29.md): Adds a domain to the File Provider extension.
- [getDomainsWithCompletionHandler:](nsfileprovidermanager/getdomainswithcompletionhandler%28__%29.md): Returns all of the File Provider extension’s domains.
- [removeDomain:completionHandler:](nsfileprovidermanager/remove%28__completionhandler_%29.md): Removes a domain from the File Provider extension.
- [removeDomain:mode:completionHandler:](nsfileprovidermanager/remove%28__mode_completionhandler_%29.md): Removes a domain from the File Provider extension using the specified options.
- [removeAllDomainsWithCompletionHandler:](nsfileprovidermanager/removealldomains%28completionhandler_%29.md): Removes all domains from the File Provider extension.
- [NSFileProviderDomainRemovalMode](nsfileprovidermanager/domainremovalmode.md): A mode indicating how the system handles user data when removing a domain.
- [disconnectWithReason:options:completionHandler:](nsfileprovidermanager/disconnect%28reason_options_completionhandler_%29.md): Disconnects the domain from the extension.
- [NSFileProviderManagerDisconnectionOptions](nsfileprovidermanager/disconnectionoptions.md): Options for disconnecting a domain from the extension.
- [reconnectWithCompletionHandler:](nsfileprovidermanager/reconnect%28completionhandler_%29.md): Reconnects the domain with the extension.
- [waitForStabilizationWithCompletionHandler:](nsfileprovidermanager/waitforstabilization%28completionhandler_%29.md): Requests a notification after the domain stabilizes.
- [temporaryDirectoryURLWithError:](nsfileprovidermanager/temporarydirectoryurl%28%29.md): Returns the URL of a directory that the File Provider extension can use to temporarily store files before passing them to the system.

### Syncing Desktop and Documents folders

- [claimKnownFolders:localizedReason:completionHandler:](nsfileprovidermanager/claimknownfolders%28__localizedreason_completionhandler_%29.md): Asks the domain to sync the specified known folders.
- [releaseKnownFolders:localizedReason:completionHandler:](nsfileprovidermanager/releaseknownfolders%28__localizedreason_completionhandler_%29.md): Asks the system to stop replicating the specified known folders in the domain.
- [NSFileProviderKnownFolders](nsfileproviderknownfolders.md): Constants that identify known folders.
- [NSFileProviderKnownFolderLocations](nsfileproviderknownfolderlocations.md): A class for working with known-folder locations.
- [NSFileProviderKnownFolderSupporting](nsfileproviderknownfoldersupporting.md): A protocol that defines the interface for sharing known-folder locations with the system.

### Working with external volumes

- [stateDirectoryURLWithError:](nsfileprovidermanager/statedirectoryurl%28%29.md): Returns a URL for a directory for storing state information for the domain.
- [checkDomainsCanBeStored:onVolumeAtURL:unsupportedReason:error:](nsfileprovidermanager/checkdomainscanbestored_onvolumeaturl_unsupportedreason_error_.md): Check if a URL is eligible for storing a domain.
- [NSFileProviderExternalVolumeHandling](nsfileproviderexternalvolumehandling.md): A protocol that defines the interface for handling external volumes.

### Using services

- [getServiceWithName:itemIdentifier:completionHandler:](nsfileprovidermanager/getservice%28named_for_completionhandler_%29.md)

### Testing

- [listAvailableTestingOperationsWithError:](nsfileprovidermanager/listavailabletestingoperations%28%29.md): Lists all the operations that are ready for scheduling.
- [runTestingOperations:error:](nsfileprovidermanager/run%28__%29.md): Asks the system to schedule and execute the specified operations.

### Handling errors

- [signalErrorResolved:completionHandler:](nsfileprovidermanager/signalerrorresolved%28__completionhandler_%29.md): Indicates a resolved error.

### Collecting diagnostic reports

- [requestDiagnosticCollectionForItemWithIdentifier:errorReason:completionHandler:](nsfileprovidermanager/requestdiagnosticcollection%28for_errorreason_completionhandler_%29.md): Requests a diagnostics collection for use when working directly with Apple to improve sync behavior.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
