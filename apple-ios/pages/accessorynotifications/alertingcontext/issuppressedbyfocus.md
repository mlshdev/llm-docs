> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorynotifications/alertingcontext/issuppressedbyfocus

# isSuppressedByFocus

**Framework:** Accessory Notifications  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

A Boolean value that indicates whether the device’s Focus state suppresses notification alerts.

## Declaration

```swift
var isSuppressedByFocus: Bool { get }
```

<a id="discussion"></a>

## Discussion

A `true` value indicates that the notification attempts to alert the person, but the device’s active Focus state suppresses it.

## See Also

### Determining alerting behavior

- [shouldAlert](shouldalert.md): A Boolean value that indicates the recommended alerting behavior.
- [notificationCanAlert](notificationcanalert.md): A Boolean value that indicates whether the accessory can alert the person for the notification.
