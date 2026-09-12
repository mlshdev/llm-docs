> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unusernotificationcenter/setbadgecount(_:withcompletionhandler:)](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter/setbadgecount(_:withcompletionhandler:))

# setBadgeCount(\_:withCompletionHandler:) (Swift)

**Framework:** User Notifications  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Updates the badge count for your app’s icon.

## Declaration

```swift
func setBadgeCount(_ newBadgeCount: Int, withCompletionHandler completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func setBadgeCount(_ newBadgeCount: Int) async throws
```

## Parameters

- `newBadgeCount`: The new value to display.
- `completionHandler`: The handler to execute after the update finishes. If the update fails, the system provides an error that contains additional information about the failure.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func setBadgeCount(_ newBadgeCount: Int) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Here’s an example that sets the badge count to a specific number.

```swift
let center = UNUserNotificationCenter.current()
do {
     // Set the badge count to 3.
     try await center.setBadgeCount(3)
} catch {
     // Handle any errors.
}
```

## See Also

### Managing the notification center

- [current()](current%28%29.md): Returns your app’s notification center.
- [getNotificationSettings(completionHandler:)](getnotificationsettings%28completionhandler_%29.md): Retrieves the authorization and feature-related settings for your app.

# setBadgeCount:withCompletionHandler: (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Updates the badge count for your app’s icon.

## Declaration

```objectivec
- (void) setBadgeCount:(NSInteger) newBadgeCount withCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `newBadgeCount`: The new value to display.
- `completionHandler`: The handler to execute after the update finishes. If the update fails, the system provides an error that contains additional information about the failure.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func setBadgeCount(_ newBadgeCount: Int) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Here’s an example that sets the badge count to a specific number.

```swift
let center = UNUserNotificationCenter.current()
do {
     // Set the badge count to 3.
     try await center.setBadgeCount(3)
} catch {
     // Handle any errors.
}
```

## See Also

### Managing the notification center

- [currentNotificationCenter](current%28%29.md): Returns your app’s notification center.
- [getNotificationSettingsWithCompletionHandler:](getnotificationsettings%28completionhandler_%29.md): Retrieves the authorization and feature-related settings for your app.
