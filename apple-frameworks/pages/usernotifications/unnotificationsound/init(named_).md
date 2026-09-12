> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationsound/init(named:)](https://developer.apple.com/documentation/usernotifications/unnotificationsound/init(named:))

# init(named:) (Swift)

**Framework:** User Notifications  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

Creates a sound object that represents a custom sound file.

## Declaration

```swift
convenience init(named name: UNNotificationSoundName)
```

## Parameters

- `name`: The name of the sound file to play. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

A sound object representing the custom sound.

<a id="Discussion"></a>

## Discussion

This method searches for sound files in the following locations, in order:

1. The *\<app_container\>*`/Library/Sounds` directory, where *\<app_container\>* is the app’s container directory.
2. The *\<group_container\>*`/Library/Sounds` directory, where *\<group_container\>* is one of the app’s shared group container directories. For information about how to configure group containers for your app, see [Configure app groups](https://help.apple.com/xcode/mac/current/#/dev8dd3880fe).
3. The main bundle of the current executable.

The method chooses the first file it finds with the specified name.

## See Also

### Creating Notification Sounds

- [default](default.md): Returns an object representing the default sound for notifications.

# soundNamed: (Objective-C)

**Framework:** User Notifications  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

Creates a sound object that represents a custom sound file.

## Declaration

```objectivec
+ (instancetype) soundNamed:(UNNotificationSoundName) name;
```

## Parameters

- `name`: The name of the sound file to play. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

A sound object representing the custom sound.

<a id="Discussion"></a>

## Discussion

This method searches for sound files in the following locations, in order:

1. The *\<app_container\>*`/Library/Sounds` directory, where *\<app_container\>* is the app’s container directory.
2. The *\<group_container\>*`/Library/Sounds` directory, where *\<group_container\>* is one of the app’s shared group container directories. For information about how to configure group containers for your app, see [Configure app groups](https://help.apple.com/xcode/mac/current/#/dev8dd3880fe).
3. The main bundle of the current executable.

The method chooses the first file it finds with the specified name.

## See Also

### Creating Notification Sounds

- [defaultSound](default.md): Returns an object representing the default sound for notifications.
