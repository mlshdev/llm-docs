> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderenumerating](https://developer.apple.com/documentation/fileprovider/nsfileproviderenumerating)

# NSFileProviderEnumerating (Swift)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Support for enumerating the file provider’s contents.

## Declaration

```swift
protocol NSFileProviderEnumerating : NSObjectProtocol
```

## Topics

### Accessing Enumerators

- [enumerator(for:request:)](nsfileproviderenumerating/enumerator%28for_request_%29.md): Tells the file provider to return an enumerator for the provided directory.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [NSFileProviderReplicatedExtension](nsfileproviderreplicatedextension.md)

## See Also

### File Provider protocols

- [NSFileProviderReplicatedExtension](nsfileproviderreplicatedextension.md): A File Provider extension in which the system replicates the contents on disk.
- [NSFileProviderIncrementalContentFetching](nsfileproviderincrementalcontentfetching.md): Support for fetching changes to the item’s content.
- [NSFileProviderPartialContentFetching](nsfileproviderpartialcontentfetching.md): Support for fetching part of a file’s content.
- [NSFileProviderServicing](nsfileproviderservicing.md): Support for providing a custom service source.
- [NSFileProviderCustomAction](nsfileprovidercustomaction.md): Support for custom actions.
- [NSFileProviderExtensionActionIdentifier](nsfileproviderextensionactionidentifier.md): An identifier for custom actions.
- [NSFileProviderThumbnailing](nsfileproviderthumbnailing.md): Support for item thumbnails.
- [NSFileProviderPendingSetEnumerator](nsfileproviderpendingsetenumerator.md): A protocol for enumerating pending items.

# NSFileProviderEnumerating (Objective-C)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Support for enumerating the file provider’s contents.

## Declaration

```objectivec
@protocol NSFileProviderEnumerating <NSObject>
```

## Topics

### Accessing Enumerators

- [enumeratorForContainerItemIdentifier:request:error:](nsfileproviderenumerating/enumerator%28for_request_%29.md): Tells the file provider to return an enumerator for the provided directory.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [NSFileProviderReplicatedExtension](nsfileproviderreplicatedextension.md)

## See Also

### File Provider protocols

- [NSFileProviderReplicatedExtension](nsfileproviderreplicatedextension.md): A File Provider extension in which the system replicates the contents on disk.
- [NSFileProviderIncrementalContentFetching](nsfileproviderincrementalcontentfetching.md): Support for fetching changes to the item’s content.
- [NSFileProviderPartialContentFetching](nsfileproviderpartialcontentfetching.md): Support for fetching part of a file’s content.
- [NSFileProviderServicing](nsfileproviderservicing.md): Support for providing a custom service source.
- [NSFileProviderCustomAction](nsfileprovidercustomaction.md): Support for custom actions.
- [NSFileProviderExtensionActionIdentifier](nsfileproviderextensionactionidentifier.md): An identifier for custom actions.
- [NSFileProviderThumbnailing](nsfileproviderthumbnailing.md): Support for item thumbnails.
- [NSFileProviderPendingSetEnumerator](nsfileproviderpendingsetenumerator.md): A protocol for enumerating pending items.
