> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivitymetadata/lifetimepolicy-swift.struct/automatic](https://developer.apple.com/documentation/groupactivities/groupactivitymetadata/lifetimepolicy-swift.struct/automatic)

# automatic

**Framework:** Group Activities  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The default lifetime policy for a group activity.

## Declaration

```swift
static let automatic: GroupActivityMetadata.LifetimePolicy
```

<a id="discussion"></a>

## Discussion

Initiators and participants will have the option to leave the activity independently or end it for everyone.  When everyone has left the activity, it will end.

This case should be used by most apps and allows activities to continue until all participants leave the activity – regardless of which participant happens to have initiated the activity.
