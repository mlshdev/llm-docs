> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationsound/default](https://developer.apple.com/documentation/usernotifications/unnotificationsound/default)

# default (Swift)

**Framework:** User Notifications  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

Returns an object representing the default sound for notifications.

## Declaration

```swift
@NSCopying class var `default`: UNNotificationSound { get }
```

<a id="return-value"></a>

## Return Value

A sound object that represents the default notification sound.

## See Also

### Creating Notification Sounds

- [init(named:)](init%28named_%29.md): Creates a sound object that represents a custom sound file.

# defaultSound (Objective-C)

**Framework:** User Notifications  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

Returns an object representing the default sound for notifications.

## Declaration

```objectivec
@property (class, nonatomic, copy, readonly) UNNotificationSound * defaultSound;
```

```objectivec
@property (class, atomic, copy, readonly) UNNotificationSound * defaultSound;
```

<a id="return-value"></a>

## Return Value

A sound object that represents the default notification sound.

## See Also

### Creating Notification Sounds

- [soundNamed:](init%28named_%29.md): Creates a sound object that represents a custom sound file.
