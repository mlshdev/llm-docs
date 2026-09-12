> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationcontent/targetcontentidentifier](https://developer.apple.com/documentation/usernotifications/unnotificationcontent/targetcontentidentifier)

# targetContentIdentifier (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The value your app uses to determine which scene to display to handle the notification.

## Declaration

```swift
var targetContentIdentifier: String? { get }
```

## Mentioned In

- [Generating a remote notification](../generating-a-remote-notification.md)

<a id="Discussion"></a>

## Discussion

Use this value to determine the content to show in your app when the user taps the notification.

## See Also

### Reading app configuration

- [launchImageName](launchimagename.md): The name of the image or storyboard to use when your app launches because of the notification.
- [badge](badge.md): The number that your app’s icon displays.

# targetContentIdentifier (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The value your app uses to determine which scene to display to handle the notification.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * targetContentIdentifier;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * targetContentIdentifier;
```

## Mentioned In

- [Generating a remote notification](../generating-a-remote-notification.md)

<a id="Discussion"></a>

## Discussion

Use this value to determine the content to show in your app when the user taps the notification.

## See Also

### Reading app configuration

- [launchImageName](launchimagename.md): The name of the image or storyboard to use when your app launches because of the notification.
- [badge](badge.md): The number that your app’s icon displays.
