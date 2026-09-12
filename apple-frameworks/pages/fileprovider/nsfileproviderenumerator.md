> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderenumerator](https://developer.apple.com/documentation/fileprovider/nsfileproviderenumerator)

# NSFileProviderEnumerator (Swift)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

A protocol for enumerating items and changes.

## Declaration

```swift
protocol NSFileProviderEnumerator : NSObjectProtocol
```

## Mentioned In

- [Defining Your File Provider’s Content](defining-your-file-provider-s-content.md)
- [Synchronizing the File Provider Extension](synchronizing-the-file-provider-extension.md)

## Topics

### Enumerating Items and Changes

- [enumerateItems(for:startingAt:)](nsfileproviderenumerator/enumerateitems%28for_startingat_%29.md): Requests the next batch of items, starting at the specified page.
- [enumerateChanges(for:from:)](nsfileproviderenumerator/enumeratechanges%28for_from_%29.md): Requests the next batch of changes after the specified sync anchor.
- [currentSyncAnchor(completionHandler:)](nsfileproviderenumerator/currentsyncanchor%28completionhandler_%29.md): Returns the current sync anchor.
- [invalidate()](nsfileproviderenumerator/invalidate%28%29.md): Stops the enumeration of items and changes.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [NSFileProviderPendingSetEnumerator](nsfileproviderpendingsetenumerator.md)

# NSFileProviderEnumerator (Objective-C)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

A protocol for enumerating items and changes.

## Declaration

```objectivec
@protocol NSFileProviderEnumerator <NSObject>
```

## Mentioned In

- [Defining Your File Provider’s Content](defining-your-file-provider-s-content.md)
- [Synchronizing the File Provider Extension](synchronizing-the-file-provider-extension.md)

## Topics

### Enumerating Items and Changes

- [enumerateItemsForObserver:startingAtPage:](nsfileproviderenumerator/enumerateitems%28for_startingat_%29.md): Requests the next batch of items, starting at the specified page.
- [enumerateChangesForObserver:fromSyncAnchor:](nsfileproviderenumerator/enumeratechanges%28for_from_%29.md): Requests the next batch of changes after the specified sync anchor.
- [currentSyncAnchorWithCompletionHandler:](nsfileproviderenumerator/currentsyncanchor%28completionhandler_%29.md): Returns the current sync anchor.
- [invalidate](nsfileproviderenumerator/invalidate%28%29.md): Stops the enumeration of items and changes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [NSFileProviderPendingSetEnumerator](nsfileproviderpendingsetenumerator.md)
