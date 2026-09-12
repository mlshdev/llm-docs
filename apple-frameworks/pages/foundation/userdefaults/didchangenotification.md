> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/didchangenotification](https://developer.apple.com/documentation/foundation/userdefaults/didchangenotification)

# didChangeNotification (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted when the current process changes the value of a setting.

## Declaration

```swift
class let didChangeNotification: NSNotification.Name
```

## Mentioned In

- [Accessing settings from your code](../accessing-settings-from-your-code.md)

<a id="discussion"></a>

## Discussion

When you write a new value to a setting, or remove an existing value, the system generates this notification to alert you that your app’s settings changed. Use this notification in other parts of your app to incorporate updated settings. The system posts this notification on the same thread you used to make the change.

If a different process changes your app’s settings, the system doesn’t generate this notification. To detect changes made by another process, register a key-value observer on the [UserDefaults](../userdefaults.md) object. Key-value observing reports all updates to setting values, regardless of which process made the change.

## See Also

### Monitoring settings changes and issues

- [UserDefaults.DidChangeMessage](didchangemessage.md): A message the system sends when a user-defaults setting changes.
- [UserDefaults.SizeLimitExceededMessage](sizelimitexceededmessage.md): A message the system sends when the size of the data in the defaults database exceeds the maximum.
- [sizeLimitExceededNotification](sizelimitexceedednotification.md): Posted when the amount of data in the defaults database exceeds the allowed maximum.

# NSUserDefaultsDidChangeNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted when the current process changes the value of a setting.

## Declaration

```objectivec
extern NSNotificationName const NSUserDefaultsDidChangeNotification;
```

## Mentioned In

- [Accessing settings from your code](../accessing-settings-from-your-code.md)

<a id="discussion"></a>

## Discussion

When you write a new value to a setting, or remove an existing value, the system generates this notification to alert you that your app’s settings changed. Use this notification in other parts of your app to incorporate updated settings. The system posts this notification on the same thread you used to make the change.

If a different process changes your app’s settings, the system doesn’t generate this notification. To detect changes made by another process, register a key-value observer on the [NSUserDefaults](../userdefaults.md) object. Key-value observing reports all updates to setting values, regardless of which process made the change.

## See Also

### Monitoring settings changes and issues

- [NSUserDefaultsSizeLimitExceededNotification](sizelimitexceedednotification.md): Posted when the amount of data in the defaults database exceeds the allowed maximum.
