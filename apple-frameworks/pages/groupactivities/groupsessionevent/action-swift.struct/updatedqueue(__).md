> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionevent/action-swift.struct/updatedqueue(_:)](https://developer.apple.com/documentation/groupactivities/groupsessionevent/action-swift.struct/updatedqueue(_:))

# updatedQueue(\_:)

**Framework:** Group Activities  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns an action that represents a change to the playback queue.

## Declaration

```swift
static func updatedQueue(_ change: GroupSessionEvent.Action.QueueChange) -> GroupSessionEvent.Action
```

## Parameters

- `change`: The change that ocurred to the queue.

<a id="discussion"></a>

## Discussion

When you want to notify the user of changes to the playback queue, call this method to create an action type with the details of the change. Then call the [showNotice(\_:)](../../groupsession/shownotice%28__%29.md) method to post that action. For example, use the following code to notify the user that someone added a song to the queue.

```swift
groupSession.showNotice(.updatedQueue(.added(.song("Here comes the sun"))))
```

## See Also

### Getting change-related actions

- [updatedQueue](updatedqueue.md): An action that represents a nonspecific change to the queue.
- [GroupSessionEvent.Action.QueueChange](queuechange.md): A type that describes a modification to the playback queue.
