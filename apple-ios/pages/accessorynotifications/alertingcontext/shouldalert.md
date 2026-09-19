> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorynotifications/alertingcontext/shouldalert

# shouldAlert

**Framework:** Accessory Notifications  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

A Boolean value that indicates the recommended alerting behavior.

## Declaration

```swift
var shouldAlert: Bool { get }
```

<a id="discussion"></a>

## Discussion

Use this property to closely match the iPhone’s alerting behavior. The system sets this value based on notification settings, device Focus state, and other alerting factors.

## See Also

### Determining alerting behavior

- [notificationCanAlert](notificationcanalert.md): A Boolean value that indicates whether the accessory can alert the person for the notification.
- [isSuppressedByFocus](issuppressedbyfocus.md): A Boolean value that indicates whether the device’s Focus state suppresses notification alerts.
