> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionjournal/attachment](https://developer.apple.com/documentation/groupactivities/groupsessionjournal/attachment)

# GroupSessionJournal.Attachment

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A container for the data you download.

## Declaration

```swift
struct Attachment
```

## Mentioned In

- [Synchronizing data during a SharePlay activity](../synchronizing-data-during-a-shareplay-activity.md)

<a id="overview"></a>

## Overview

When your app receives a new item, the system packages it in an [GroupSessionJournal.Attachment](attachment.md) and delivers it to your app. Use this container type to download the contents of the file and decode it to a type that your app recognizes.

## Topics

### Downloading the attachment data

- [load(\_:)](attachment/load%28__%29.md): Downloads the attachment data and asynchronously delivers it as the type you specify.
- [loadMetadata(of:)](attachment/loadmetadata%28of_%29.md): Downloads the metadata for the attachment asynchronously and delivers it as the type you specify.

### Identifying the attachment

- [id](attachment/id.md): The unique identifier for this attachment.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Downloading content from the session

- [attachments](attachments-swift.property.md): The currently available attachments for you to download and incorporate into your app.
- [GroupSessionJournal.Attachments](attachments-swift.struct.md): An asynchronous sequence that contains one or more incoming attachment containers for you to process.
