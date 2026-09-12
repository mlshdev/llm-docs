> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activity/activityupdates-swift.type.property](https://developer.apple.com/documentation/activitykit/activity/activityupdates-swift.type.property)

# activityUpdates

**Framework:** ActivityKit  
**Kind:** Type Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+

An asynchronous sequence you use to observe changes to ongoing Live Activities and to asynchronously access a Live Activity when you start it.

## Declaration

```swift
static var activityUpdates: Activity<Attributes>.ActivityUpdates { get }
```

## Mentioned In

- [Displaying live data with Live Activities](../displaying-live-data-with-live-activities.md)

## See Also

### Accessing Live Activities

- [activities](activities.md): An array of your app’s current Live Activities.
- [Activity.ActivityUpdates](activityupdates-swift.struct.md): Conforms when `Attributes` conforms to `ActivityAttributes`. A structure that offers functionality to observe changes to a Live Activity.
