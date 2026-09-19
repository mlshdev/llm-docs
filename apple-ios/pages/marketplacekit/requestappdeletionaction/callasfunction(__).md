> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/marketplacekit/requestappdeletionaction/callasfunction(_:)

# callAsFunction(\_:)

**Framework:** MarketplaceKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Requests deletion of the specified app with someone’s confirmation.

## Declaration

```swift
func callAsFunction(_ app: AppLibrary.App) async throws
```

## Parameters

- `app`: The app to delete.

<a id="discussion"></a>

## Discussion

When you call this action, the system presents a confirmation UI. If the person confirms, the system deletes the app and its data.
