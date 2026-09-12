> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/eventstorechanged](https://developer.apple.com/documentation/eventkit/ekeventstore/eventstorechanged)

# EKEventStore.EventStoreChanged

**Framework:** EventKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A notification posted when changes are made to the Calendar or Reminders database.

## Declaration

```swift
struct EventStoreChanged
```

<a id="overview"></a>

## Overview

Let observation = NotificationCenter.default.addObserver(of: eventStore, for: .changed) { message in … }

## Topics

### Initializers

- [init()](eventstorechanged/init%28%29.md)

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../../foundation/notificationcenter/mainactormessage.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
