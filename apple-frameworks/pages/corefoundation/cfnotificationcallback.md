> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfnotificationcallback

# CFNotificationCallback (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback function invoked for each observer of a notification when the notification is posted.

## Declaration

```swift
typealias CFNotificationCallback = (CFNotificationCenter?, UnsafeMutableRawPointer?, CFNotificationName?, UnsafeRawPointer?, CFDictionary?) -> Void
```

## Parameters

- `center`: The notification center handling the notification.
- `observer`: An arbitrary value, other than `NULL`, that identifies the observer.
- `name`: The name of the notification being posted.
- `object`: An arbitrary value that identifies the object posting the notification. For distributed notifications, `object` is always a CFString object. This value could be `NULL`.
- `userInfo`: A dictionary containing additional information regarding the notification. This value could be `NULL`.

  If the notification center is a Darwin notification center, this value must be ignored.

# CFNotificationCallback (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Callback function invoked for each observer of a notification when the notification is posted.

## Declaration

```objectivec
typedef void (*)(struct __CFNotificationCenter *, void *, const struct __CFString *, const void *, const struct __CFDictionary *) CFNotificationCallback;
```

## Parameters

- `center`: The notification center handling the notification.
- `observer`: An arbitrary value, other than `NULL`, that identifies the observer.
- `name`: The name of the notification being posted.
- `object`: An arbitrary value that identifies the object posting the notification. For distributed notifications, `object` is always a CFString object. This value could be `NULL`.
- `userInfo`: A dictionary containing additional information regarding the notification. This value could be `NULL`.

  If the notification center is a Darwin notification center, this value must be ignored.
