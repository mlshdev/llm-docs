> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/accessorynotificationcenter/forwardingstatus(for:)](https://developer.apple.com/documentation/accessorynotifications/accessorynotificationcenter/forwardingstatus(for:))

# forwardingStatus(for:)

**Framework:** Accessory Notifications  
**Kind:** Instance Method  
**Availability:** iOS 26.5+

Retrieves the current notification forwarding status for an accessory.

## Declaration

```swift
func forwardingStatus(for accessory: ASAccessory) async throws -> ForwardingDecision
```

## Parameters

- `accessory`: The accessory to query.

<a id="return-value"></a>

## Return Value

The current forwarding decision for the specified accessory.
