> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivitysharingcontroller-4gtfk/result](https://developer.apple.com/documentation/groupactivities/groupactivitysharingcontroller-4gtfk/result)

# result

**Framework:** GroupActivities  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The result of a request to share a group activity.

## Declaration

```swift
@MainActor var result: GroupActivitySharingResult { get async }
```

<a id="discussion"></a>

## Discussion

Use this property to perform actions related to the starting of the activity. You don’t need to start the activity itself, since the view controller automatically joins your app to the activity when the result is `GroupActivitySharingResult/success`.

## See Also

### Getting the result

- [GroupActivitySharingResult](../groupactivitysharingresult-1gln2.md): The result of a request to share a group activity in macOS.
