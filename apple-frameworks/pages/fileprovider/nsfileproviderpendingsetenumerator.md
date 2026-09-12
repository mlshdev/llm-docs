> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderpendingsetenumerator](https://developer.apple.com/documentation/fileprovider/nsfileproviderpendingsetenumerator)

# NSFileProviderPendingSetEnumerator (Swift)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

A protocol for enumerating pending items.

## Declaration

```swift
protocol NSFileProviderPendingSetEnumerator : NSFileProviderEnumerator
```

<a id="overview"></a>

## Overview

Items are pending when they’ve changed but the File Provider extension hasn’t yet synced the changes. Examples include local changes that the extension hasn’t uploaded to its remote storage and items that the extension has marked as changed in the working set but hasn’t yet downloaded. The system calls [pendingItemsDidChange(completionHandler:)](nsfileproviderreplicatedextension/pendingitemsdidchange%28completionhandler_%29.md) and posts a [NSFileProviderPendingSetDidChange](nsfileproviderpendingsetdidchange.md) notification whenever the set of pending items changes.

To enumerate items in the pending set, call the [enumeratorForPendingItems()](nsfileprovidermanager/enumeratorforpendingitems%28%29.md) method, which returns an object that adopts the [NSFileProviderPendingSetEnumerator](nsfileproviderpendingsetenumerator.md) protocol.

The pending enumerator lists the items that meet all of the following criteria:

- The system observed a change, either on disk or in the working set.
- The change occurred more than one second ago.
- The File Provider extension hasn’t yet synced the change with its remote storage.

An item can appear in the pending set for many different reasons, including:

- The system is under load and can’t process all the events in a timely manner.
- The system is performing a long-running operation on the item, such as downloading or uploading new content.
- Pending changes to the item have raised an error.

The pending set only contains items that are already known to the File Provider extension and that remain queued for change longer than the system’s refresh interval. A new file in the local storage won’t appear in the pending set, even if the upload to the remote storage takes several minutes to complete.

## Topics

### Accessing Refresh Data

- [domainVersion](nsfileproviderpendingsetenumerator/domainversion.md): The domain version when the system last refreshed the pending set.
- [refreshInterval](nsfileproviderpendingsetenumerator/refreshinterval.md): The amount of time, in seconds, between updates to the pending set.

### Instance Properties

- [isMaximumSizeReached](nsfileproviderpendingsetenumerator/ismaximumsizereached.md)

## Relationships

### Inherits From

- [NSFileProviderEnumerator](nsfileproviderenumerator.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### File Provider protocols

- [NSFileProviderReplicatedExtension](nsfileproviderreplicatedextension.md): A File Provider extension in which the system replicates the contents on disk.
- [NSFileProviderEnumerating](nsfileproviderenumerating.md): Support for enumerating the file provider’s contents.
- [NSFileProviderIncrementalContentFetching](nsfileproviderincrementalcontentfetching.md): Support for fetching changes to the item’s content.
- [NSFileProviderPartialContentFetching](nsfileproviderpartialcontentfetching.md): Support for fetching part of a file’s content.
- [NSFileProviderServicing](nsfileproviderservicing.md): Support for providing a custom service source.
- [NSFileProviderCustomAction](nsfileprovidercustomaction.md): Support for custom actions.
- [NSFileProviderExtensionActionIdentifier](nsfileproviderextensionactionidentifier.md): An identifier for custom actions.
- [NSFileProviderThumbnailing](nsfileproviderthumbnailing.md): Support for item thumbnails.

# NSFileProviderPendingSetEnumerator (Objective-C)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

A protocol for enumerating pending items.

## Declaration

```objectivec
@protocol NSFileProviderPendingSetEnumerator <NSFileProviderEnumerator>
```

<a id="overview"></a>

## Overview

Items are pending when they’ve changed but the File Provider extension hasn’t yet synced the changes. Examples include local changes that the extension hasn’t uploaded to its remote storage and items that the extension has marked as changed in the working set but hasn’t yet downloaded. The system calls [pendingItemsDidChangeWithCompletionHandler:](nsfileproviderreplicatedextension/pendingitemsdidchange%28completionhandler_%29.md) and posts a [NSFileProviderPendingSetDidChange](nsfileproviderpendingsetdidchange.md) notification whenever the set of pending items changes.

To enumerate items in the pending set, call the [enumeratorForPendingItems](nsfileprovidermanager/enumeratorforpendingitems%28%29.md) method, which returns an object that adopts the [NSFileProviderPendingSetEnumerator](nsfileproviderpendingsetenumerator.md) protocol.

The pending enumerator lists the items that meet all of the following criteria:

- The system observed a change, either on disk or in the working set.
- The change occurred more than one second ago.
- The File Provider extension hasn’t yet synced the change with its remote storage.

An item can appear in the pending set for many different reasons, including:

- The system is under load and can’t process all the events in a timely manner.
- The system is performing a long-running operation on the item, such as downloading or uploading new content.
- Pending changes to the item have raised an error.

The pending set only contains items that are already known to the File Provider extension and that remain queued for change longer than the system’s refresh interval. A new file in the local storage won’t appear in the pending set, even if the upload to the remote storage takes several minutes to complete.

## Topics

### Accessing Refresh Data

- [domainVersion](nsfileproviderpendingsetenumerator/domainversion.md): The domain version when the system last refreshed the pending set.
- [refreshInterval](nsfileproviderpendingsetenumerator/refreshinterval.md): The amount of time, in seconds, between updates to the pending set.

### Instance Properties

- [maximumSizeReached](nsfileproviderpendingsetenumerator/ismaximumsizereached.md)

## Relationships

### Inherits From

- [NSFileProviderEnumerator](nsfileproviderenumerator.md)

## See Also

### File Provider protocols

- [NSFileProviderReplicatedExtension](nsfileproviderreplicatedextension.md): A File Provider extension in which the system replicates the contents on disk.
- [NSFileProviderEnumerating](nsfileproviderenumerating.md): Support for enumerating the file provider’s contents.
- [NSFileProviderIncrementalContentFetching](nsfileproviderincrementalcontentfetching.md): Support for fetching changes to the item’s content.
- [NSFileProviderPartialContentFetching](nsfileproviderpartialcontentfetching.md): Support for fetching part of a file’s content.
- [NSFileProviderServicing](nsfileproviderservicing.md): Support for providing a custom service source.
- [NSFileProviderCustomAction](nsfileprovidercustomaction.md): Support for custom actions.
- [NSFileProviderExtensionActionIdentifier](nsfileproviderextensionactionidentifier.md): An identifier for custom actions.
- [NSFileProviderThumbnailing](nsfileproviderthumbnailing.md): Support for item thumbnails.
