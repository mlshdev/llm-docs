> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/groupactivities/groupsessionmessenger/deliverymode-swift.enum/reliable

# GroupSessionMessenger.DeliveryMode.reliable

**Framework:** Group Activities  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An attempt to ensure the delivery of messages to known participants.

## Declaration

```swift
case reliable
```

## Mentioned In

- [Synchronizing data during a SharePlay activity](../../synchronizing-data-during-a-shareplay-activity.md)

<a id="discussion"></a>

## Discussion

Use this approach to send messages that are critical to the experience you create. The [GroupSessionMessenger](../../groupsessionmessenger.md) enqueues a message until it is successfully transmitted to all known participants.  The system doesn’t guarantee delivery to participants who join a group session after you send a message, or who leave the group prior to delivery.

## See Also

### Getting the delivery mode options

- [GroupSessionMessenger.DeliveryMode.unreliable](unreliable.md): A best-effort attempt to deliver the message to known participants.
