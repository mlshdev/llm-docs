> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/activitykit/pushtype/channel(_:)

# channel(\_:)

**Framework:** ActivityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A constant to configure a Live Activity that updates its dynamic content for broadcast channels.

## Declaration

```swift
static func channel(_ name: String) -> PushType
```

<a id="Overview"></a>

## Overview

The channel ID is a base64-encoded string. For information on creating a channel, refer to [Sending channel management requests to APNs](https://developer.apple.com/documentation/usernotifications/sending-channel-management-requests-to-apns). The code snippet below is an example of how to specify that you want to use a broadcast push channel.

```swift
Activity.request(attributes: attributes, 
content: content,
pushType: .channel("c29tZUNoYW5uZWw="))
```

## See Also

### Supporting ActivityKit push notifications

- [token](token.md): A constant you use to configure a Live Activity that updates its dynamic content by receiving ActivityKit push notifications.
