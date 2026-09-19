> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/contactprovider/contactprovidermanager/signalenumerator(for:)

# signalEnumerator(for:)

**Framework:** ContactProvider  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Requests that the extension enumerate its contacts for the domain.

## Declaration

```swift
func signalEnumerator(for collection: ContactItem.Identifier = .rootContainer) async throws
```

## Parameters

- `collection`: The collection to enumerate; defaults to [rootContainer](../contactitem/identifier/rootcontainer.md).

<a id="discussion"></a>

## Discussion

You typically call this when you need to invoke the app extension on demand. One example is when the app receives a push notification informing it that updated contact data is available.
