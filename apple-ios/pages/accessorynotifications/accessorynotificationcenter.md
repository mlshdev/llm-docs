> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/accessorynotificationcenter](https://developer.apple.com/documentation/accessorynotifications/accessorynotificationcenter)

# AccessoryNotificationCenter

**Framework:** Accessory Notifications  
**Kind:** Class  
**Availability:** iOS 26.5+

A class that asks a person for permission to forward notifications.

## Declaration

```swift
class AccessoryNotificationCenter
```

<a id="overview"></a>

## Overview

Use this class from your accessory’s companion app to begin the notification forwarding life cycle by calling [requestForwarding(for:)](accessorynotificationcenter/requestforwarding%28for_%29.md).

## Topics

### Creating a notification center

- [init()](accessorynotificationcenter/init%28%29.md): Initializes an accessory notifications center object.

### Requesting notification forwarding

- [requestForwarding(for:)](accessorynotificationcenter/requestforwarding%28for_%29.md): Requests permission to forward notifications and Live Activities to the specified accessory.

### Checking forwarding status

- [forwardingStatus(for:)](accessorynotificationcenter/forwardingstatus%28for_%29.md): Retrieves the current notification forwarding status for an accessory.

### Managing notification settings

- [presentSettings(for:scenePersistentIdentifier:)](accessorynotificationcenter/presentsettings%28for_scenepersistentidentifier_%29.md): Presents notification forwarding settings for an accessory.

## See Also

### Authorization

- [ForwardingDecision](forwardingdecision.md): Possible decisions in response to the notification forwarding permission prompt.
