> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactitemenumerator/enumeratechanges(startingat:for:)](https://developer.apple.com/documentation/contactprovider/contactitemenumerator/enumeratechanges(startingat:for:))

# enumerateChanges(startingAt:for:)

**Framework:** ContactProvider  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Enumerates items changed since the last sync.

## Declaration

```swift
func enumerateChanges(startingAt syncAnchor: ContactItemSyncAnchor, for observer: any ContactItemChangeObserver) async
```

## Parameters

- `syncAnchor`: The sync anchor to enumerate changed items from.
- `observer`: The system observer that receives the change items and enumeration state.

<a id="discussion"></a>

## Discussion

The system calls `enumerateChanges(startingAt:for:)` for each batch of changed items to enumerate. After enumerating each batch of changed items, your implementation calls [didFinishEnumeratingChanges(upTo:moreComing:)](../contactitemchangeobserver/didfinishenumeratingchanges%28upto_morecoming_%29.md) .

Your implementation can enumerate items in any order, but that order must be deterministic and resumable.

## See Also

### Enumerating item changes

- [ContactItemSyncAnchor](../contactitemsyncanchor.md): A snapshot point into enumerating changed contact items.
- [ContactItemChangeObserver](../contactitemchangeobserver.md): A protocol that defines a system observer that receives a resumable enumeration of changed contact items.
