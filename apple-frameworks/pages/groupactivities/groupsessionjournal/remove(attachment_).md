> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionjournal/remove(attachment:)](https://developer.apple.com/documentation/groupactivities/groupsessionjournal/remove(attachment:))

# remove(attachment:)

**Framework:** Group Activities  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Removes the specified attachment from the journal on all sessions.

## Declaration

```swift
final func remove(attachment: GroupSessionJournal.Attachment) async throws
```

## Parameters

- `attachment`: The attachment object associated with the item. You receive this object when you call the [add(\_:)](add%28__%29.md) or [add(\_:metadata:)](add%28__metadata_%29.md) method.

<a id="discussion"></a>

## Discussion

Call this method to remove an attachment that is no longer relevant. For example, you might remove an attachment containing a photo in response to someone deleting that photo from the activity. When you remove an attachment, the journal object updates the array of attachments and sends it to all participants. Remove any attachments from your app that aren’t still in the array.
