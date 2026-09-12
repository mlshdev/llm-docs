> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmessagecomposeviewcontroller/textmessageavailabilitydidchangemessage/subject](https://developer.apple.com/documentation/messageui/mfmessagecomposeviewcontroller/textmessageavailabilitydidchangemessage/subject)

# MFMessageComposeViewController.TextMessageAvailabilityDidChangeMessage.Subject

**Framework:** Message UI  
**Kind:** Type Alias  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

The notification subject type

## Declaration

```swift
typealias Subject = MFMessageComposeViewController
```

<a id="discussion"></a>

## Discussion

This notification is always posted with a `nil` object, so instance filtering is not applicable. The type provides namespace scoping for the identifier.
