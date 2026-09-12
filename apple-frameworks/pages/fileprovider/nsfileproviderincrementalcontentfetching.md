> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderincrementalcontentfetching](https://developer.apple.com/documentation/fileprovider/nsfileproviderincrementalcontentfetching)

# NSFileProviderIncrementalContentFetching (Swift)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Support for fetching changes to the item’s content.

## Declaration

```swift
protocol NSFileProviderIncrementalContentFetching : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Adopt this protocol to support the incremental fetching of changes from your remote storage. If you don’t implement the [fetchContents(for:version:usingExistingContentsAt:existingVersion:request:completionHandler:)](nsfileproviderincrementalcontentfetching/fetchcontents%28for_version_usingexistingcontentsat_existingversion_request_completionhandler_%29.md) method, the system calls your [fetchContents(for:version:request:completionHandler:)](nsfileproviderreplicatedextension/fetchcontents%28for_version_request_completionhandler_%29.md) method for all updates.

## Topics

### Incrementally Fetching Contents

- [fetchContents(for:version:usingExistingContentsAt:existingVersion:request:completionHandler:)](nsfileproviderincrementalcontentfetching/fetchcontents%28for_version_usingexistingcontentsat_existingversion_request_completionhandler_%29.md): Asks the file provider for an update of the specified item.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### File Provider protocols

- [NSFileProviderReplicatedExtension](nsfileproviderreplicatedextension.md): A File Provider extension in which the system replicates the contents on disk.
- [NSFileProviderEnumerating](nsfileproviderenumerating.md): Support for enumerating the file provider’s contents.
- [NSFileProviderPartialContentFetching](nsfileproviderpartialcontentfetching.md): Support for fetching part of a file’s content.
- [NSFileProviderServicing](nsfileproviderservicing.md): Support for providing a custom service source.
- [NSFileProviderCustomAction](nsfileprovidercustomaction.md): Support for custom actions.
- [NSFileProviderExtensionActionIdentifier](nsfileproviderextensionactionidentifier.md): An identifier for custom actions.
- [NSFileProviderThumbnailing](nsfileproviderthumbnailing.md): Support for item thumbnails.
- [NSFileProviderPendingSetEnumerator](nsfileproviderpendingsetenumerator.md): A protocol for enumerating pending items.

# NSFileProviderIncrementalContentFetching (Objective-C)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Support for fetching changes to the item’s content.

## Declaration

```objectivec
@protocol NSFileProviderIncrementalContentFetching <NSObject>
```

<a id="overview"></a>

## Overview

Adopt this protocol to support the incremental fetching of changes from your remote storage. If you don’t implement the [fetchContentsForItemWithIdentifier:version:usingExistingContentsAtURL:existingVersion:request:completionHandler:](nsfileproviderincrementalcontentfetching/fetchcontents%28for_version_usingexistingcontentsat_existingversion_request_completionhandler_%29.md) method, the system calls your [fetchContentsForItemWithIdentifier:version:request:completionHandler:](nsfileproviderreplicatedextension/fetchcontents%28for_version_request_completionhandler_%29.md) method for all updates.

## Topics

### Incrementally Fetching Contents

- [fetchContentsForItemWithIdentifier:version:usingExistingContentsAtURL:existingVersion:request:completionHandler:](nsfileproviderincrementalcontentfetching/fetchcontents%28for_version_usingexistingcontentsat_existingversion_request_completionhandler_%29.md): Asks the file provider for an update of the specified item.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### File Provider protocols

- [NSFileProviderReplicatedExtension](nsfileproviderreplicatedextension.md): A File Provider extension in which the system replicates the contents on disk.
- [NSFileProviderEnumerating](nsfileproviderenumerating.md): Support for enumerating the file provider’s contents.
- [NSFileProviderPartialContentFetching](nsfileproviderpartialcontentfetching.md): Support for fetching part of a file’s content.
- [NSFileProviderServicing](nsfileproviderservicing.md): Support for providing a custom service source.
- [NSFileProviderCustomAction](nsfileprovidercustomaction.md): Support for custom actions.
- [NSFileProviderExtensionActionIdentifier](nsfileproviderextensionactionidentifier.md): An identifier for custom actions.
- [NSFileProviderThumbnailing](nsfileproviderthumbnailing.md): Support for item thumbnails.
- [NSFileProviderPendingSetEnumerator](nsfileproviderpendingsetenumerator.md): A protocol for enumerating pending items.
