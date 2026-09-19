> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/contactprovider/contactitemchangeobserver/didfinishenumeratingchangeswitherror(_:)

# didFinishEnumeratingChangesWithError(\_:)

**Framework:** ContactProvider  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Finishes the change enumeration with an error, indicating failure, to the observer.

## Declaration

```swift
func didFinishEnumeratingChangesWithError(_: any Error)
```

<a id="discussion"></a>

## Discussion

Use `ContactProviderError.changeAnchorExpired` to restart the content enumeration.

## See Also

### Ending enumeration

- [didFinishEnumeratingChanges(upTo:moreComing:)](didfinishenumeratingchanges%28upto_morecoming_%29.md): Marks a sync anchor of changed contact items as completed.
- [ContactItemSyncAnchor](../contactitemsyncanchor.md): A snapshot point into enumerating changed contact items.
