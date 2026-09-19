> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/textmessageavailabilitydidchange

# textMessageAvailabilityDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Notification posted when text message availability changes.

## Declaration

```swift
static var textMessageAvailabilityDidChange: NotificationCenter.BaseMessageIdentifier<MFMessageComposeViewController.TextMessageAvailabilityDidChangeMessage> { get }
```

<a id="discussion"></a>

## Discussion

This notification is posted when the device’s ability to send text messages changes (e.g., SIM card inserted/removed, airplane mode toggled, iMessage account status changed).

> **Note**

> This notification may be delivered on any thread.
