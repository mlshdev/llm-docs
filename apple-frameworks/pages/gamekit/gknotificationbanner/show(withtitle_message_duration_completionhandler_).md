> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gknotificationbanner/show(withtitle:message:duration:completionhandler:)](https://developer.apple.com/documentation/gamekit/gknotificationbanner/show(withtitle:message:duration:completionhandler:))

# show(withTitle:message:duration:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ (deprecated in 16.1) · iPadOS 5.0+ (deprecated in 16.1) · Mac Catalyst 13.1+ (deprecated in 16.1) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.1) · visionOS 1.0+ (deprecated in 1.0)

Displays a banner to the player for a specified period of time.

> Use [UNNotificationRequest](../../usernotifications/unnotificationrequest.md) or provide a custom interface instead.

## Declaration

```swift
class func show(withTitle title: String?, message: String?, duration: TimeInterval, completionHandler: (@Sendable () -> Void)? = nil)
```

```swift
class func show(withTitle title: String?, message: String?, duration: TimeInterval) async
```

## Parameters

- `title`: The title of the banner.
- `message`: The message on the banner.
- `duration`: The amount of time that GameKit should dispay the banner to the player.
- `completionHandler`: The block that GameKit calls when the player or GameKit dismisses the banner.

## See Also

### Displaying the Banner

- [show(withTitle:message:completionHandler:)](show%28withtitle_message_completionhandler_%29.md): Deprecated. Displays a banner with a title and message to the player.

# showBannerWithTitle:message:duration:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ (deprecated in 16.1) · iPadOS 5.0+ (deprecated in 16.1) · Mac Catalyst 13.1+ (deprecated in 16.1) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.1) · visionOS 1.0+ (deprecated in 1.0)

Displays a banner to the player for a specified period of time.

> Use [UNNotificationRequest](../../usernotifications/unnotificationrequest.md) or provide a custom interface instead.

## Declaration

```objectivec
+ (void) showBannerWithTitle:(NSString *) title message:(NSString *) message duration:(NSTimeInterval) duration completionHandler:(void (^)()) completionHandler;
```

## Parameters

- `title`: The title of the banner.
- `message`: The message on the banner.
- `duration`: The amount of time that GameKit should dispay the banner to the player.
- `completionHandler`: The block that GameKit calls when the player or GameKit dismisses the banner.

## See Also

### Displaying the Banner

- [showBannerWithTitle:message:completionHandler:](show%28withtitle_message_completionhandler_%29.md): Deprecated. Displays a banner with a title and message to the player.
