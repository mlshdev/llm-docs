> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmessagecomposeviewcontroller/textmessageavailabilitydidchangemessage](https://developer.apple.com/documentation/messageui/mfmessagecomposeviewcontroller/textmessageavailabilitydidchangemessage)

# MFMessageComposeViewController.TextMessageAvailabilityDidChangeMessage

**Framework:** Message UI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Message type for text message availability change notifications.

## Declaration

```swift
struct TextMessageAvailabilityDidChangeMessage
```

<a id="overview"></a>

## Overview

This notification is posted when the value of `+canSendText` changes, indicating whether the device can send text messages.

> **Note**

> This notification may be delivered on any thread. Observers should dispatch to the main actor if needed for UI updates.

## Topics

### Initializers

- [init(canSendText:)](textmessageavailabilitydidchangemessage/init%28cansendtext_%29.md): Initialize with text message availability status

### Instance Properties

- [canSendText](textmessageavailabilitydidchangemessage/cansendtext.md): Whether text messages can be sent on this device

### Type Aliases

- [MFMessageComposeViewController.TextMessageAvailabilityDidChangeMessage.Subject](textmessageavailabilitydidchangemessage/subject.md): The notification subject type

### Type Properties

- [name](textmessageavailabilitydidchangemessage/name.md): The existing Objective-C notification name

### Type Methods

- [makeMessage(\_:)](textmessageavailabilitydidchangemessage/makemessage%28__%29.md): Transform a legacy Notification into a type-safe Message
- [makeNotification(\_:)](textmessageavailabilitydidchangemessage/makenotification%28__%29.md): Transform a type-safe Message into a legacy Notification

## Relationships

### Conforms To

- [NotificationCenter.AsyncMessage](../../foundation/notificationcenter/asyncmessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
