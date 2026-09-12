> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/telephonymessagingsession/isconfiguredforcarriermessaging](https://developer.apple.com/documentation/telephonymessagingkit/telephonymessagingsession/isconfiguredforcarriermessaging)

# isConfiguredForCarrierMessaging

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

A Boolean value that indicates whether this app is configured to perform carrier messaging operations.

## Declaration

```swift
final var isConfiguredForCarrierMessaging: Bool { get }
```

## Mentioned In

- [Creating a carrier messaging app](../creating-a-carrier-messaging-app.md)

<a id="discussion"></a>

## Discussion

This value is `true` if the app is configured for carrier messaging operations; `false` if not, or if the system can’t determine the app’s status.
