> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationcontent/launchimagename](https://developer.apple.com/documentation/usernotifications/unnotificationcontent/launchimagename)

# launchImageName (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The name of the image or storyboard to use when your app launches because of the notification.

## Declaration

```swift
var launchImageName: String { get }
```

<a id="Discussion"></a>

## Discussion

If you specify a value for this property, the system displays the specified image or storyboard when the system launches your app. The string in this property must match the name of an image file or storyboard in your app’s bundle.

## See Also

### Reading app configuration

- [badge](badge.md): The number that your app’s icon displays.
- [targetContentIdentifier](targetcontentidentifier.md): The value your app uses to determine which scene to display to handle the notification.

# launchImageName (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The name of the image or storyboard to use when your app launches because of the notification.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * launchImageName;
```

```objectivec
@property (atomic, copy, readonly) NSString * launchImageName;
```

<a id="Discussion"></a>

## Discussion

If you specify a value for this property, the system displays the specified image or storyboard when the system launches your app. The string in this property must match the name of an image file or storyboard in your app’s bundle.

## See Also

### Reading app configuration

- [badge](badge.md): The number that your app’s icon displays.
- [targetContentIdentifier](targetcontentidentifier.md): The value your app uses to determine which scene to display to handle the notification.
