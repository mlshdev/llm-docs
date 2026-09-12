> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationdescriptor/init(identifier:displayname:supportedfamilies:useractivity:)](https://developer.apple.com/documentation/clockkit/clkcomplicationdescriptor/init(identifier:displayname:supportedfamilies:useractivity:))

# init(identifier:displayName:supportedFamilies:userActivity:)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Returns a new complication descriptor with an associated user activity.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
convenience init(identifier: String, displayName: String, supportedFamilies: [CLKComplicationFamily], userActivity: NSUserActivity)
```

## Parameters

- `identifier`: A string that uniquely identifies the descriptor.
- `displayName`: A localized name that ClockKit shows to the user to identify complications from the descriptor.
- `supportedFamilies`: The families that support this type of complication. Note that different descriptors can support different sets of families.
- `userActivity`: A user activity object that represents the state of the app at a moment in time.

## Mentioned In

- [Declaring complications for your app](../declaring-complications-for-your-app.md)

<a id="Discussion"></a>

## Discussion

If the user taps on a complication specified by this descriptor, the system launches the app and calls [handle(\_:)](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/handle%28_:%29-5pyj1), passing the user activity. Your [handle(\_:)](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/handle%28_:%29-5pyj1) method should update the app so that it’s in the specified state.

Because the system can pass configurations as part of a shared watch face, only include data useable by any instance of the app. For example, avoid using identifiers that might change between users, like an index into the user’s favorites list. Instead, use items that remain constant across all copies of the app, like unique string identifiers.

## See Also

### Creating descriptors

- [init(identifier:displayName:supportedFamilies:)](init%28identifier_displayname_supportedfamilies_%29.md): Deprecated. Returns a new complication descriptor.
- [init(identifier:displayName:supportedFamilies:userInfo:)](init%28identifier_displayname_supportedfamilies_userinfo_%29.md): Deprecated. Returns a new complication descriptor with an associated dictionary of user data.
