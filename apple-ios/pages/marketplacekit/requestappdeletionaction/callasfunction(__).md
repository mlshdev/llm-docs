> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/requestappdeletionaction/callasfunction(_:)](https://developer.apple.com/documentation/marketplacekit/requestappdeletionaction/callasfunction(_:))

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
