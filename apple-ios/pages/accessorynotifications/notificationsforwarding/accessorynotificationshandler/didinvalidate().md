> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorynotifications/notificationsforwarding/accessorynotificationshandler/didinvalidate()

# didInvalidate()

**Framework:** Accessory Notifications  
**Kind:** Instance Method  
**Availability:** iOS 26.5+

Handles notification session termination.

## Declaration

```swift
func didInvalidate()
```

<a id="discussion"></a>

## Discussion

Clean up resources and clear stored session references when the system calls this method.

## See Also

### Managing the session life cycle

- [didActivate(for:)](didactivate%28for_%29.md): Establishes a notification session for communication with the system.
