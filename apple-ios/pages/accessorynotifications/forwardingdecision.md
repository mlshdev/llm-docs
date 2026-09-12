> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/forwardingdecision](https://developer.apple.com/documentation/accessorynotifications/forwardingdecision)

# ForwardingDecision

**Framework:** Accessory Notifications  
**Kind:** Enumeration  
**Availability:** iOS 26.5+

Possible decisions in response to the notification forwarding permission prompt.

## Declaration

```swift
enum ForwardingDecision
```

<a id="overview"></a>

## Overview

When your app calls [requestForwarding(for:)](accessorynotificationcenter/requestforwarding%28for_%29.md), the system prompts the person to choose which apps can forward notifications to your accessory.

## Topics

### Identifying the decision

- [ForwardingDecision.allow](forwardingdecision/allow.md): An option that indicates the person allows notifications from all applicable apps.
- [ForwardingDecision.deny](forwardingdecision/deny.md): An option that indicates the person doesn’t allow notification forwarding.
- [ForwardingDecision.limited](forwardingdecision/limited.md): An option that indicates the person allows notifications from a selected subset of apps.
- [ForwardingDecision.undetermined](forwardingdecision/undetermined.md): An option that indicates the person dismissed the prompt without responding.

### Accessing the decision’s description

- [description](forwardingdecision/description.md): A textual representation of the decision.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Authorization

- [AccessoryNotificationCenter](accessorynotificationcenter.md): A class that asks a person for permission to forward notifications.
