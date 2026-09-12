> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivity/metadata](https://developer.apple.com/documentation/groupactivities/groupactivity/metadata)

# metadata

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A description of the activity, and optional image to display to the user.

## Declaration

```swift
var metadata: GroupActivityMetadata { get async }
```

<a id="discussion"></a>

## Discussion

The system accesses this property when it’s ready to invite other participants to join the activity. Don’t access this property directly. Instead, implement it in your custom activity types and provide descriptive information about the current activity. For example, provide the title of the activity and an image that illustrates the activity.

## See Also

### Specifying the activity details

- [activityIdentifier](activityidentifier.md): An app-defined string that uniquely identifies the activity.
