> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/oncontinueuseractivity(_:perform:)](https://developer.apple.com/documentation/swiftui/view/oncontinueuseractivity(_:perform:))

# onContinueUserActivity(\_:perform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Registers a handler to invoke in response to a user activity that your app receives.

## Declaration

```swift
nonisolated func onContinueUserActivity(_ activityType: String, perform action: @escaping (NSUserActivity) -> ()) -> some View

```

## Parameters

- `activityType`: The type of activity that the `action` closure handles. Be sure that this string matches one of the values that you list in the [NSUserActivityTypes](https://developer.apple.com/documentation/bundleresources/information-property-list/nsuseractivitytypes) array in your app’s Information Property List.
- `action`: A closure that SwiftUI calls when your app receives a user activity of the specified type. The closure takes the activity as an input parameter.

<a id="return-value"></a>

## Return Value

A view that handles incoming user activities.

<a id="discussion"></a>

## Discussion

Use this view modifier to receive [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) instances in a particular scene within your app. The scene that SwiftUI routes the incoming user activity to depends on the structure of your app, what scenes are active, and other configuration. For more information, see [handlesExternalEvents(matching:)](../scene/handlesexternalevents%28matching_%29.md).

UI frameworks traditionally pass Universal Links to your app using a user activity. However, SwiftUI passes a Universal Link to your app directly as a URL. To receive a Universal Link, use the [onOpenURL(perform:)](onopenurl%28perform_%29.md) modifier instead.

## See Also

### Sending and receiving user activities

- [Restoring your app’s state with SwiftUI](../restoring-your-app-s-state-with-swiftui.md): Provide app continuity for users by preserving their current activities.
- [userActivity(\_:element:\_:)](useractivity%28__element___%29.md): Advertises a user activity type.
- [userActivity(\_:isActive:\_:)](useractivity%28__isactive___%29.md): Advertises a user activity type.
