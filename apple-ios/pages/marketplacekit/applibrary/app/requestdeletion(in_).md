> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/applibrary/app/requestdeletion(in:)](https://developer.apple.com/documentation/marketplacekit/applibrary/app/requestdeletion(in:))

# requestDeletion(in:)

**Framework:** MarketplaceKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Prompts the person to delete the app.

## Declaration

```swift
@MainActor final func requestDeletion(in scene: UIWindowScene) async throws
```

## Parameters

- `scene`: The window scene in which to present app-deletion confirmation.

<a id="discussion"></a>

## Discussion

This method presents a system confirmation for the person to permit or deny the app’s deletion.
