> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/sizelimitexceedednotification](https://developer.apple.com/documentation/foundation/userdefaults/sizelimitexceedednotification)

# sizeLimitExceededNotification (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted when the amount of data in the defaults database exceeds the allowed maximum.

## Declaration

```swift
class let sizeLimitExceededNotification: NSNotification.Name
```

<a id="discussion"></a>

## Discussion

In tvOS, the system posts this notification as a warning when the size of your app’s defaults database reaches 512 kilobytes. If your app continues to write to the defaults database, the system terminates your app when the database reaches or exceeds 1 megabyte in size. The system doesn’t post size exceeded notifications for other platforms.

The system posts this notification on your app’s main thread.

## See Also

### Monitoring settings changes and issues

- [UserDefaults.DidChangeMessage](didchangemessage.md): A message the system sends when a user-defaults setting changes.
- [didChangeNotification](didchangenotification.md): Posted when the current process changes the value of a setting.
- [UserDefaults.SizeLimitExceededMessage](sizelimitexceededmessage.md): A message the system sends when the size of the data in the defaults database exceeds the maximum.

# NSUserDefaultsSizeLimitExceededNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted when the amount of data in the defaults database exceeds the allowed maximum.

## Declaration

```objectivec
extern NSNotificationName const NSUserDefaultsSizeLimitExceededNotification;
```

<a id="discussion"></a>

## Discussion

In tvOS, the system posts this notification as a warning when the size of your app’s defaults database reaches 512 kilobytes. If your app continues to write to the defaults database, the system terminates your app when the database reaches or exceeds 1 megabyte in size. The system doesn’t post size exceeded notifications for other platforms.

The system posts this notification on your app’s main thread.

## See Also

### Monitoring settings changes and issues

- [NSUserDefaultsDidChangeNotification](didchangenotification.md): Posted when the current process changes the value of a setting.
