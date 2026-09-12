> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivitysharingcontroller-4gtfk/init(_:)](https://developer.apple.com/documentation/groupactivities/groupactivitysharingcontroller-4gtfk/init(_:))

# init(\_:)

**Framework:** GroupActivities  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Initializes the sharing controller with the specified activity and type information.

## Declaration

```swift
@MainActor init<ActivityType>(_ activity: ActivityType) throws where ActivityType : GroupActivity
```

## Parameters

- `activity`: The activity object to start.

## See Also

### Creating the group activity sharing controller

- [init(preparationHandler:)](init%28preparationhandler_%29.md): Initializes the SharePlay sharing controller with a closure that creates the activity object.
