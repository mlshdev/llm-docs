> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/telephonymessagingsession/isconfiguredforcarriermessaging

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
