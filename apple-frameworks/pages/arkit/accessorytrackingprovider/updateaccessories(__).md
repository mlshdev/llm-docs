> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/accessorytrackingprovider/updateaccessories(_:)](https://developer.apple.com/documentation/arkit/accessorytrackingprovider/updateaccessories(_:))

# updateAccessories(\_:)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** visionOS 27.0+

Updates the accessories being tracked by a provider.

## Declaration

```swift
final func updateAccessories(_ accessories: [Accessory]) async throws
```

## Parameters

- `accessories`: The new set of accessories to track.

<a id="discussion"></a>

## Discussion

Updates are atomic: if any accessory fails to be added, the entire request fails and the provider continues tracking the original set of accessories.

Update requests are processed sequentially. If multiple requests are made while an update is in progress, only the most recent request is retained and will be processed next; intermediate requests are superseded and throw an error.

> **Throws**

> `AccessoryTrackingProvider.Error` if the update fails, including when one or more accessories cannot be added or the request is superseded by a more recent request.
