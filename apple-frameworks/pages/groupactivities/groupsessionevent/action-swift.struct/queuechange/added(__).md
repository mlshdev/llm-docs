> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionevent/action-swift.struct/queuechange/added(_:)](https://developer.apple.com/documentation/groupactivities/groupsessionevent/action-swift.struct/queuechange/added(_:))

# added(\_:)

**Framework:** Group Activities  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a queue change for an added item.

## Declaration

```swift
static func added(_ item: GroupSessionEvent.Action.QueueChange.Item) -> GroupSessionEvent.Action.QueueChange
```

## Parameters

- `item`: The item the participant added to the queue.

<a id="return-value"></a>

## Return Value

A type that contains information about the change.

<a id="discussion"></a>

## Discussion

Before showing a notice to the user, call this method to generate a type for the added item. Pass this type to the [updatedQueue(\_:)](../updatedqueue%28__%29.md) method to create the postable action.

## See Also

### Specifying the type of change

- [setUpNext(\_:)](setupnext%28__%29.md): Returns a queue change for a new up-next item.
