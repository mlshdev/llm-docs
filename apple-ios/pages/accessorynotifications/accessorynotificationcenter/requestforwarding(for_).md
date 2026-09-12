> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/accessorynotificationcenter/requestforwarding(for:)](https://developer.apple.com/documentation/accessorynotifications/accessorynotificationcenter/requestforwarding(for:))

# requestForwarding(for:)

**Framework:** Accessory Notifications  
**Kind:** Instance Method  
**Availability:** iOS 26.5+

Requests permission to forward notifications and Live Activities to the specified accessory.

## Declaration

```swift
func requestForwarding(for accessory: ASAccessory) async throws -> ForwardingDecision
```

## Parameters

- `accessory`: An accessory object that [AccessorySetupKit](https://developer.apple.com/documentation/accessorysetupkit) provides when your companion app registers the accessory.

<a id="discussion"></a>

## Discussion

This method prompts the person to select which apps on their device can forward notifications and Live Activities to your accessory. The person can choose all apps, some apps, no apps, or dismiss the prompt. This method throws [AccessoryError.unsupportedPlatform](../accessoryerror/unsupportedplatform.md) if called on an unsupported device; call this method on iPhone only.
