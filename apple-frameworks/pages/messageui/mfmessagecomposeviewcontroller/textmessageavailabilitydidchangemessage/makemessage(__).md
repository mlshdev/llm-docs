> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmessagecomposeviewcontroller/textmessageavailabilitydidchangemessage/makemessage(_:)](https://developer.apple.com/documentation/messageui/mfmessagecomposeviewcontroller/textmessageavailabilitydidchangemessage/makemessage(_:))

# makeMessage(\_:)

**Framework:** Message UI  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Transform a legacy Notification into a type-safe Message

## Declaration

```swift
static func makeMessage(_ notification: Notification) -> MFMessageComposeViewController.TextMessageAvailabilityDidChangeMessage?
```

## Parameters

- `notification`: The notification to parse

<a id="return-value"></a>

## Return Value

A Message if the notification contains valid data, nil otherwise
