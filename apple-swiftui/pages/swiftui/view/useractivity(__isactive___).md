> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/useractivity(_:isactive:_:)](https://developer.apple.com/documentation/swiftui/view/useractivity(_:isactive:_:))

# userActivity(\_:isActive:\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Advertises a user activity type.

## Declaration

```swift
nonisolated func userActivity(_ activityType: String, isActive: Bool = true, _ update: @escaping (NSUserActivity) -> ()) -> some View

```

## Parameters

- `activityType`: The type of activity to advertise.
- `isActive`: When `false`, avoids advertising the activity. Defaults to `true`.
- `update`: A function that modifies the passed-in activity for advertisement.

<a id="discussion"></a>

## Discussion

You can use `userActivity(_:isActive:_:)` to start, stop, or modify the advertisement of a specific type of user activity.

The scope of the activity applies only to the scene or window the view is in.

## See Also

### Sending and receiving user activities

- [Restoring your app’s state with SwiftUI](../restoring-your-app-s-state-with-swiftui.md): Provide app continuity for users by preserving their current activities.
- [userActivity(\_:element:\_:)](useractivity%28__element___%29.md): Advertises a user activity type.
- [onContinueUserActivity(\_:perform:)](oncontinueuseractivity%28__perform_%29.md): Registers a handler to invoke in response to a user activity that your app receives.
