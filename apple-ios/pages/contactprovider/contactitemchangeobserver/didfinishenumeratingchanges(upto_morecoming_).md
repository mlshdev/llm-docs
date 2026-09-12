> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactitemchangeobserver/didfinishenumeratingchanges(upto:morecoming:)](https://developer.apple.com/documentation/contactprovider/contactitemchangeobserver/didfinishenumeratingchanges(upto:morecoming:))

# didFinishEnumeratingChanges(upTo:moreComing:)

**Framework:** ContactProvider  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Marks a sync anchor of changed contact items as completed.

## Declaration

```swift
func didFinishEnumeratingChanges(upTo syncAnchor: ContactItemSyncAnchor, moreComing: Bool)
```

## Parameters

- `syncAnchor`: The `ContactItemSyncAnchor` where the next change enumeration should start from.
- `moreComing`: If `true`, the enumerator receives another call to [enumerateChanges(startingAt:for:)](../contactitemenumerator/enumeratechanges%28startingat_for_%29.md).

<a id="discussion"></a>

## Discussion

A change enumeration can resume in the future, continuing from this sync anchor. Calling this method saves the current batch of changed items to the system Contacts database.

## See Also

### Ending enumeration

- [ContactItemSyncAnchor](../contactitemsyncanchor.md): A snapshot point into enumerating changed contact items.
- [didFinishEnumeratingChangesWithError(\_:)](didfinishenumeratingchangeswitherror%28__%29.md): Finishes the change enumeration with an error, indicating failure, to the observer.
