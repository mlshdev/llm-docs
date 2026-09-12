> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionmessenger/deliverymode-swift.enum/unreliable](https://developer.apple.com/documentation/groupactivities/groupsessionmessenger/deliverymode-swift.enum/unreliable)

# GroupSessionMessenger.DeliveryMode.unreliable

**Framework:** Group Activities  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A best-effort attempt to deliver the message to known participants.

## Declaration

```swift
case unreliable
```

## Mentioned In

- [Synchronizing data during a SharePlay activity](../../synchronizing-data-during-a-shareplay-activity.md)

<a id="discussion"></a>

## Discussion

Use this approach when it’s okay to drop messages occasionally. Typically, you use this approach for messages you send frequently with similar information. For example, use it when the information in each new message replaces information in the preceding message.

This approach makes a best-effort attempt to deliver your messages to the known participants, and makes no guarantees on the delivery order of messages.

## See Also

### Getting the delivery mode options

- [GroupSessionMessenger.DeliveryMode.reliable](reliable.md): An attempt to ensure the delivery of messages to known participants.
