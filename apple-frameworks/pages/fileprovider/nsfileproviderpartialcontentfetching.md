> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderpartialcontentfetching](https://developer.apple.com/documentation/fileprovider/nsfileproviderpartialcontentfetching)

# NSFileProviderPartialContentFetching (Swift)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** macOS 12.3+

Support for fetching part of a file’s content.

## Declaration

```swift
protocol NSFileProviderPartialContentFetching : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Adopt this protocol to let the system request only part of a file. Apps that read files provided by your extension can benefit from this feature, either by minimizing the amount of data your file provider needs to download, or by finishing the download quickly, freeing up the reading process.

> **Important**

>  To trigger a partial download, an app must use POSIX read operations to read part of the file. If you clone the entire file, or read the file using file coordination, the system requests the entire file.

For example, a photo app could read just the metadata from each picture in a large album, without having to completely download all the images. Alternatively, a video streaming app could begin playing the video before reading the whole file, reading chunks of data just before it needs them.

## Topics

### Fetching Ranges from a File

- [fetchPartialContents(for:version:request:minimalRange:aligningTo:options:completionHandler:)](nsfileproviderpartialcontentfetching/fetchpartialcontents%28for_version_request_minimalrange_aligningto_options_completionhandler_%29.md): Tells the file provider to download the requested item from remote storage.
- [NSFileProviderFetchContentsOptions](nsfileproviderfetchcontentsoptions.md): Options for fetching a range of data from a file.
- [NSFileProviderMaterializationFlags](nsfileprovidermaterializationflags.md): Flags that provides additional information about the provided content.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### File Provider protocols

- [NSFileProviderReplicatedExtension](nsfileproviderreplicatedextension.md): A File Provider extension in which the system replicates the contents on disk.
- [NSFileProviderEnumerating](nsfileproviderenumerating.md): Support for enumerating the file provider’s contents.
- [NSFileProviderIncrementalContentFetching](nsfileproviderincrementalcontentfetching.md): Support for fetching changes to the item’s content.
- [NSFileProviderServicing](nsfileproviderservicing.md): Support for providing a custom service source.
- [NSFileProviderCustomAction](nsfileprovidercustomaction.md): Support for custom actions.
- [NSFileProviderExtensionActionIdentifier](nsfileproviderextensionactionidentifier.md): An identifier for custom actions.
- [NSFileProviderThumbnailing](nsfileproviderthumbnailing.md): Support for item thumbnails.
- [NSFileProviderPendingSetEnumerator](nsfileproviderpendingsetenumerator.md): A protocol for enumerating pending items.

# NSFileProviderPartialContentFetching (Objective-C)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** macOS 12.3+

Support for fetching part of a file’s content.

## Declaration

```objectivec
@protocol NSFileProviderPartialContentFetching <NSObject>
```

<a id="overview"></a>

## Overview

Adopt this protocol to let the system request only part of a file. Apps that read files provided by your extension can benefit from this feature, either by minimizing the amount of data your file provider needs to download, or by finishing the download quickly, freeing up the reading process.

> **Important**

>  To trigger a partial download, an app must use POSIX read operations to read part of the file. If you clone the entire file, or read the file using file coordination, the system requests the entire file.

For example, a photo app could read just the metadata from each picture in a large album, without having to completely download all the images. Alternatively, a video streaming app could begin playing the video before reading the whole file, reading chunks of data just before it needs them.

## Topics

### Fetching Ranges from a File

- [fetchPartialContentsForItemWithIdentifier:version:request:minimalRange:aligningTo:options:completionHandler:](nsfileproviderpartialcontentfetching/fetchpartialcontents%28for_version_request_minimalrange_aligningto_options_completionhandler_%29.md): Tells the file provider to download the requested item from remote storage.
- [NSFileProviderFetchContentsOptions](nsfileproviderfetchcontentsoptions.md): Options for fetching a range of data from a file.
- [NSFileProviderMaterializationFlags](nsfileprovidermaterializationflags.md): Flags that provides additional information about the provided content.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### File Provider protocols

- [NSFileProviderReplicatedExtension](nsfileproviderreplicatedextension.md): A File Provider extension in which the system replicates the contents on disk.
- [NSFileProviderEnumerating](nsfileproviderenumerating.md): Support for enumerating the file provider’s contents.
- [NSFileProviderIncrementalContentFetching](nsfileproviderincrementalcontentfetching.md): Support for fetching changes to the item’s content.
- [NSFileProviderServicing](nsfileproviderservicing.md): Support for providing a custom service source.
- [NSFileProviderCustomAction](nsfileprovidercustomaction.md): Support for custom actions.
- [NSFileProviderExtensionActionIdentifier](nsfileproviderextensionactionidentifier.md): An identifier for custom actions.
- [NSFileProviderThumbnailing](nsfileproviderthumbnailing.md): Support for item thumbnails.
- [NSFileProviderPendingSetEnumerator](nsfileproviderpendingsetenumerator.md): A protocol for enumerating pending items.
