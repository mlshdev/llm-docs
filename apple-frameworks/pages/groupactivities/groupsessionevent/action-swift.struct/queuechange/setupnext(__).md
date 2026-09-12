> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionevent/action-swift.struct/queuechange/setupnext(_:)](https://developer.apple.com/documentation/groupactivities/groupsessionevent/action-swift.struct/queuechange/setupnext(_:))

# setUpNext(\_:)

**Framework:** Group Activities  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a queue change for a new up-next item.

## Declaration

```swift
static func setUpNext(_ item: GroupSessionEvent.Action.QueueChange.Item) -> GroupSessionEvent.Action.QueueChange
```

## Parameters

- `item`: The next item in the queue.

<a id="return-value"></a>

## Return Value

A type that contains information about the change.

<a id="discussion"></a>

## Discussion

Before showing a notice to the user, call this method to generate a type for the changed up-next item. Pass this type to the [updatedQueue(\_:)](../updatedqueue%28__%29.md) method to create the postable action.

## See Also

### Specifying the type of change

- [added(\_:)](added%28__%29.md): Returns a queue change for an added item.
