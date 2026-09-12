> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionjournal/attachments-swift.struct](https://developer.apple.com/documentation/groupactivities/groupsessionjournal/attachments-swift.struct)

# GroupSessionJournal.Attachments

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An asynchronous sequence that contains one or more incoming attachment containers for you to process.

## Declaration

```swift
struct Attachments
```

<a id="overview"></a>

## Overview

After a participant uploads a file or data, the system makes that content available on the [GroupSessionJournal.Attachments](attachments-swift.struct.md) asynchronous sequence of each session participant. Configure an asynchronous task to monitor this sequence and process results when they arrive.

The following example shows you how to configure this task and use it to iterate over the available items. The `journal` variable contains a previously configured [GroupSessionJournal](../groupsessionjournal.md) object.

```swift
let attachmentListener = Task {
   for await attachments in journal.attachments {
      for attachment in attachments {
         // Download and process each attachment.
      }
   }
}
```

## Topics

### Creating an iterator

- [makeAsyncIterator()](attachments-swift.struct/makeasynciterator%28%29.md): Creates the asynchronous iterator that produces elements of this asynchronous sequence.
- [GroupSessionJournal.Attachments.Iterator](attachments-swift.struct/iterator.md): The asynchronous iterator that produces a sequence of attachments.
- [GroupSessionJournal.Attachments.Element](attachments-swift.struct/element.md): The type of element this asynchronous sequence produces.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Downloading content from the session

- [attachments](attachments-swift.property.md): The currently available attachments for you to download and incorporate into your app.
- [GroupSessionJournal.Attachment](attachment.md): A container for the data you download.
