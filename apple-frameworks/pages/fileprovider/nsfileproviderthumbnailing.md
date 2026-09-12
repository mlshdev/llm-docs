> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderthumbnailing](https://developer.apple.com/documentation/fileprovider/nsfileproviderthumbnailing)

# NSFileProviderThumbnailing (Swift)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Support for item thumbnails.

## Declaration

```swift
protocol NSFileProviderThumbnailing : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Adopt this protocol if your File Provider extension supports downloading thumbnails from the remote storage.

## Topics

### Providing Thumbnails

- [fetchThumbnails(for:requestedSize:perThumbnailCompletionHandler:completionHandler:)](nsfileproviderthumbnailing/fetchthumbnails%28for_requestedsize_perthumbnailcompletionhandler_completionhandler_%29.md): Asks the file provider for a thumbnail of the specified items.

## Relationships

### Inherits From

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
- [NSFileProviderPendingSetEnumerator](nsfileproviderpendingsetenumerator.md): A protocol for enumerating pending items.

# NSFileProviderThumbnailing (Objective-C)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Support for item thumbnails.

## Declaration

```objectivec
@protocol NSFileProviderThumbnailing <NSObject>
```

<a id="overview"></a>

## Overview

Adopt this protocol if your File Provider extension supports downloading thumbnails from the remote storage.

## Topics

### Providing Thumbnails

- [fetchThumbnailsForItemIdentifiers:requestedSize:perThumbnailCompletionHandler:completionHandler:](nsfileproviderthumbnailing/fetchthumbnails%28for_requestedsize_perthumbnailcompletionhandler_completionhandler_%29.md): Asks the file provider for a thumbnail of the specified items.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### File Provider protocols

- [NSFileProviderReplicatedExtension](nsfileproviderreplicatedextension.md): A File Provider extension in which the system replicates the contents on disk.
- [NSFileProviderEnumerating](nsfileproviderenumerating.md): Support for enumerating the file provider’s contents.
- [NSFileProviderIncrementalContentFetching](nsfileproviderincrementalcontentfetching.md): Support for fetching changes to the item’s content.
- [NSFileProviderPartialContentFetching](nsfileproviderpartialcontentfetching.md): Support for fetching part of a file’s content.
- [NSFileProviderServicing](nsfileproviderservicing.md): Support for providing a custom service source.
- [NSFileProviderCustomAction](nsfileprovidercustomaction.md): Support for custom actions.
- [NSFileProviderExtensionActionIdentifier](nsfileproviderextensionactionidentifier.md): An identifier for custom actions.
- [NSFileProviderPendingSetEnumerator](nsfileproviderpendingsetenumerator.md): A protocol for enumerating pending items.
