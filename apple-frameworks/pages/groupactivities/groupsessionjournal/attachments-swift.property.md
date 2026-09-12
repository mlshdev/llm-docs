> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionjournal/attachments-swift.property](https://developer.apple.com/documentation/groupactivities/groupsessionjournal/attachments-swift.property)

# attachments

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The currently available attachments for you to download and incorporate into your app.

## Declaration

```swift
final var attachments: GroupSessionJournal.Attachments { get set }
```

<a id="discussion"></a>

## Discussion

This property contains an asynchronous sequence that you monitor while the current session is active. To monitor this sequence, configure an asynchronous task and iterate over the contents of the [GroupSessionJournal.Attachments](attachments-swift.struct.md) type. For an example of how to configure this task, see the overview for [GroupSessionJournal](../groupsessionjournal.md).

The system updates this array whenever a participant adds or removes an attachment. Iterate over the array and update your app’s data structures to match the current contents.

## See Also

### Downloading content from the session

- [GroupSessionJournal.Attachments](attachments-swift.struct.md): An asynchronous sequence that contains one or more incoming attachment containers for you to process.
- [GroupSessionJournal.Attachment](attachment.md): A container for the data you download.
