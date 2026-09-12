> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/useractivity(_:element:_:)](https://developer.apple.com/documentation/swiftui/view/useractivity(_:element:_:))

# userActivity(\_:element:\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Advertises a user activity type.

## Declaration

```swift
nonisolated func userActivity<P>(_ activityType: String, element: P?, _ update: @escaping (P, NSUserActivity) -> ()) -> some View

```

## Parameters

- `activityType`: The type of activity to advertise.
- `element`: If the element is `nil`, the handler will not be associated with the activity (and if there are no handlers, no activity is advertised). The method passes the non-`nil` element to the handler as a convenience so the handlers don’t all need to implement an early exit with `guard element = element else { return }`.
- `update`: A function that modifies the passed-in activity for advertisement.

<a id="discussion"></a>

## Discussion

The scope of the activity applies only to the scene or window the view is in.

## See Also

### Sending and receiving user activities

- [Restoring your app’s state with SwiftUI](../restoring-your-app-s-state-with-swiftui.md): Provide app continuity for users by preserving their current activities.
- [userActivity(\_:isActive:\_:)](useractivity%28__isactive___%29.md): Advertises a user activity type.
- [onContinueUserActivity(\_:perform:)](oncontinueuseractivity%28__perform_%29.md): Registers a handler to invoke in response to a user activity that your app receives.
