> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidersyncanchor](https://developer.apple.com/documentation/fileprovider/nsfileprovidersyncanchor)

# NSFileProviderSyncAnchor (Swift)

**Framework:** File Provider  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

A synchronization point that represents the last batch of changes returned by the enumerator.

## Declaration

```swift
struct NSFileProviderSyncAnchor
```

<a id="Discussion"></a>

## Discussion

Your file provider should populate the sync anchor with the information it needs to identify and enumerate only the changes that occurred after the synchronization point. For example, a simple sync anchor could use the time and date of the last update successfully downloaded from the server. A request to enumerate changes from that sync anchor would then return only the changes downloaded after that date.

The system only retains the last anchor passed to it. After the system calls [enumerateChanges(for:from:)](nsfileproviderenumerator/enumeratechanges%28for_from_%29.md) with a sync anchor, it’s safe to deallocate any older sync anchors.

## Topics

### Creating Sync Anchors

- [init(\_:)](nsfileprovidersyncanchor/init%28__%29.md): Returns a new sync anchor.
- [init(rawValue:)](nsfileprovidersyncanchor/init%28rawvalue_%29.md): Returns a new sync anchor from the provided data object.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Change Tracking

- [Tracking Your File Provider’s Changes](tracking-your-file-provider-s-changes.md): Create an enumerator to track changes to your file provider’s content.
- [NSFileProviderChangeObserver](nsfileproviderchangeobserver.md): An observer that receives changes and deletions during enumeration.

# NSFileProviderSyncAnchor (Objective-C)

**Framework:** File Provider  
**Kind:** Type Alias  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

A synchronization point that represents the last batch of changes returned by the enumerator.

## Declaration

```objectivec
typedef NSData * NSFileProviderSyncAnchor;
```

<a id="Discussion"></a>

## Discussion

Your file provider should populate the sync anchor with the information it needs to identify and enumerate only the changes that occurred after the synchronization point. For example, a simple sync anchor could use the time and date of the last update successfully downloaded from the server. A request to enumerate changes from that sync anchor would then return only the changes downloaded after that date.

The system only retains the last anchor passed to it. After the system calls [enumerateChangesForObserver:fromSyncAnchor:](nsfileproviderenumerator/enumeratechanges%28for_from_%29.md) with a sync anchor, it’s safe to deallocate any older sync anchors.

## See Also

### Change Tracking

- [Tracking Your File Provider’s Changes](tracking-your-file-provider-s-changes.md): Create an enumerator to track changes to your file provider’s content.
- [NSFileProviderChangeObserver](nsfileproviderchangeobserver.md): An observer that receives changes and deletions during enumeration.
