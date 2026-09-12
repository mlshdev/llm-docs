> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/nsurlcredentialstoragechanged](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nsurlcredentialstoragechanged)

# NSURLCredentialStorageChanged (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 5.0)

A notification posted when the set of stored credentials changes.

> Notification is never posted

## Declaration

```swift
static let NSURLCredentialStorageChanged: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification’s [object](../../notification/object.md) is the [URLCredentialStorage](../../urlcredentialstorage.md) instance that changed. This notification does not contain a [userInfo](../../notification/userinfo.md) dictionary.

# NSURLCredentialStorageChangedNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 5.0)

A notification posted when the set of stored credentials changes.

> Notification is never posted

## Declaration

```objectivec
extern NSNotificationName const NSURLCredentialStorageChangedNotification;
```

<a id="Discussion"></a>

## Discussion

The notification’s [object](../../notification/object.md) is the [NSURLCredentialStorage](../../urlcredentialstorage.md) instance that changed. This notification does not contain a [userInfo](../../notification/userinfo.md) dictionary.
