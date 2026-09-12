> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationaction/options](https://developer.apple.com/documentation/usernotifications/unnotificationaction/options)

# options (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The behaviors associated with the action.

## Declaration

```swift
var options: UNNotificationActionOptions { get }
```

<a id="Discussion"></a>

## Discussion

You app should define options for an action when your app requires the corresponding behavior.

## See Also

### Getting Options

- [UNNotificationActionOptions](../unnotificationactionoptions.md): The behaviors you can apply to an action.

# options (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The behaviors associated with the action.

## Declaration

```objectivec
@property (nonatomic, readonly) UNNotificationActionOptions options;
```

```objectivec
@property (atomic, readonly) UNNotificationActionOptions options;
```

<a id="Discussion"></a>

## Discussion

You app should define options for an action when your app requires the corresponding behavior.

## See Also

### Getting Options

- [UNNotificationActionOptionNone](../unnotificationactionoptionnone.md): The action has the default behavior.
- [UNNotificationActionOptions](../unnotificationactionoptions.md): The behaviors you can apply to an action.
