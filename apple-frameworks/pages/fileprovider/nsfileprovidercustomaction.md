> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidercustomaction](https://developer.apple.com/documentation/fileprovider/nsfileprovidercustomaction)

# NSFileProviderCustomAction (Swift)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Support for custom actions.

## Declaration

```swift
protocol NSFileProviderCustomAction : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Adopt this protocol to add a custom action to the context menu (for example, when the user control-clicks an item in Finder).

If you want to create an action that displays custom user interface elements, add actions using the [File Provider UI](../fileproviderui.md) framework instead. For more information, see `Adding Actions to the Context Menu`.

## Topics

### Performing Custom Actions

- [performAction(identifier:onItemsWithIdentifiers:completionHandler:)](nsfileprovidercustomaction/performaction%28identifier_onitemswithidentifiers_completionhandler_%29.md): Tells the File Provider extension to perform a custom action.

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
- [NSFileProviderExtensionActionIdentifier](nsfileproviderextensionactionidentifier.md): An identifier for custom actions.
- [NSFileProviderThumbnailing](nsfileproviderthumbnailing.md): Support for item thumbnails.
- [NSFileProviderPendingSetEnumerator](nsfileproviderpendingsetenumerator.md): A protocol for enumerating pending items.

# NSFileProviderCustomAction (Objective-C)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Support for custom actions.

## Declaration

```objectivec
@protocol NSFileProviderCustomAction <NSObject>
```

<a id="overview"></a>

## Overview

Adopt this protocol to add a custom action to the context menu (for example, when the user control-clicks an item in Finder).

If you want to create an action that displays custom user interface elements, add actions using the [File Provider UI](../fileproviderui.md) framework instead. For more information, see `Adding Actions to the Context Menu`.

## Topics

### Performing Custom Actions

- [performActionWithIdentifier:onItemsWithIdentifiers:completionHandler:](nsfileprovidercustomaction/performaction%28identifier_onitemswithidentifiers_completionhandler_%29.md): Tells the File Provider extension to perform a custom action.

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
- [NSFileProviderExtensionActionIdentifier](nsfileproviderextensionactionidentifier.md): An identifier for custom actions.
- [NSFileProviderThumbnailing](nsfileproviderthumbnailing.md): Support for item thumbnails.
- [NSFileProviderPendingSetEnumerator](nsfileproviderpendingsetenumerator.md): A protocol for enumerating pending items.
