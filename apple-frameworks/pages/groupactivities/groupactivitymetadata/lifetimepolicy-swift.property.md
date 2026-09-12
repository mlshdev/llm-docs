> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivitymetadata/lifetimepolicy-swift.property](https://developer.apple.com/documentation/groupactivities/groupactivitymetadata/lifetimepolicy-swift.property)

# lifetimePolicy

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Determines how an activity can be ended.

## Declaration

```swift
var lifetimePolicy: GroupActivityMetadata.LifetimePolicy
```

<a id="discussion"></a>

## Discussion

Most activities can be left or ended independently by any participant. For example, a game being played together or a TV show being watched together doesn’t depend on a particular participant to be able to continue for everyone else.

Some activities, though, might depend on the initiator’s presence in the activity for it to continue.  For example, the initiator might be sharing a photo that belongs to them, or a file from their device.  Setting [lifetimePolicy](lifetimepolicy-swift.property.md) to [endsWhenInitiatorLeaves](lifetimepolicy-swift.struct/endswheninitiatorleaves.md) in these cases would ensure that the activity ends when the initiator leaves.
