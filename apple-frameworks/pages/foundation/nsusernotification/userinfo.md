> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsusernotification/userinfo

# userInfo (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Application-specific user info that can be attached to the notification.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```swift
var userInfo: [String : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

All items must be property list types or an exception is thrown.

The `userInfo` content must be of reasonable serialized size (less than 1KB) or an exception is thrown.

# userInfo (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Application-specific user info that can be attached to the notification.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```objectivec
@property (copy, nullable) NSDictionary<NSString *,id> * userInfo;
```

<a id="Discussion"></a>

## Discussion

All items must be property list types or an exception is thrown.

The `userInfo` content must be of reasonable serialized size (less than 1KB) or an exception is thrown.
