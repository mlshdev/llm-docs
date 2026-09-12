> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/notificationuserinfokey](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/notificationuserinfokey)

# WKWebExtensionContext.NotificationUserInfoKey (Swift)

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants for specifying web extension context information in notifications.

## Declaration

```swift
struct NotificationUserInfoKey
```

## Topics

### Type properties

- [matchPatterns](notificationuserinfokey/matchpatterns.md): The corresponding value represents the affected permission match patterns in [WKWebExtensionContext](../wkwebextensioncontext.md) notifications.
- [permissions](notificationuserinfokey/permissions.md): The corresponding value represents the affected permissions in [WKWebExtensionContext](../wkwebextensioncontext.md) notifications.

### Initializers

- [init(\_:)](notificationuserinfokey/init%28__%29.md): Creates a constant from a value you provide.
- [init(rawValue:)](notificationuserinfokey/init%28rawvalue_%29.md): Creates a constant from a raw value you provide.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Structures

- [WKWebExtensionContext.Error](error.md): Constants used to indicate errors in the web extension context domain.

# WKWebExtensionContextNotificationUserInfoKey (Objective-C)

**Framework:** WebKit  
**Kind:** Type Alias  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants for specifying web extension context information in notifications.

## Declaration

```objectivec
typedef NSString * WKWebExtensionContextNotificationUserInfoKey;
```

## Topics

### Type properties

- [WKWebExtensionContextNotificationUserInfoKeyMatchPatterns](notificationuserinfokey/matchpatterns.md): The corresponding value represents the affected permission match patterns in [WKWebExtensionContext](../wkwebextensioncontext.md) notifications.
- [WKWebExtensionContextNotificationUserInfoKeyPermissions](notificationuserinfokey/permissions.md): The corresponding value represents the affected permissions in [WKWebExtensionContext](../wkwebextensioncontext.md) notifications.
