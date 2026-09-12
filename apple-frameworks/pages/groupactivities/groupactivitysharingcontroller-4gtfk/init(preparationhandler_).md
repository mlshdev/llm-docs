> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivitysharingcontroller-4gtfk/init(preparationhandler:)](https://developer.apple.com/documentation/groupactivities/groupactivitysharingcontroller-4gtfk/init(preparationhandler:))

# init(preparationHandler:)

**Framework:** GroupActivities  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Initializes the SharePlay sharing controller with a closure that creates the activity object.

## Declaration

```swift
@MainActor init<ActivityType>(preparationHandler: @escaping () async throws -> ActivityType) where ActivityType : GroupActivity
```

## Parameters

- `preparationHandler`: A closure that takes no parameters and returns the activity object.

<a id="discussion"></a>

## Discussion

The initializer executes the closure asynchronously so that your app can present the view controller in a timely manner. Use this method when the creation of the [GroupActivity](../groupactivity.md) object might take a significant amount of time.

## See Also

### Creating the group activity sharing controller

- [init(\_:)](init%28__%29.md): Initializes the sharing controller with the specified activity and type information.
