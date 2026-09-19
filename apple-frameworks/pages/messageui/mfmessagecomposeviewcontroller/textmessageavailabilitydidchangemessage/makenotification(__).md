> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/messageui/mfmessagecomposeviewcontroller/textmessageavailabilitydidchangemessage/makenotification(_:)

# makeNotification(\_:)

**Framework:** Message UI  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Transform a type-safe Message into a legacy Notification

## Declaration

```swift
static func makeNotification(_ message: MFMessageComposeViewController.TextMessageAvailabilityDidChangeMessage) -> Notification
```

## Parameters

- `message`: The message to convert

<a id="return-value"></a>

## Return Value

A Notification compatible with Objective-C observers
