> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationcategory/actions](https://developer.apple.com/documentation/usernotifications/unnotificationcategory/actions)

# actions (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The actions to display when the system delivers notifications of this type.

## Declaration

```swift
var actions: [UNNotificationAction] { get }
```

<a id="Discussion"></a>

## Discussion

When displaying a notification assigned to this category, the system adds a button to the notification interface for each action in this property. The system displays these buttons after the notification’s content but before the Dismiss button.

When displaying banner notifications, the system displays only the first two actions.

## See Also

### Getting the Information

- [identifier](identifier.md): The unique string assigned to the category.
- [intentIdentifiers](intentidentifiers.md): The intents related to notifications of this category.
- [hiddenPreviewsBodyPlaceholder](hiddenpreviewsbodyplaceholder.md): The placeholder text to display when the system disables notification previews for the app.
- [categorySummaryFormat](categorysummaryformat.md): A format string for the summary description used when the system groups the category’s notifications.

# actions (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The actions to display when the system delivers notifications of this type.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<UNNotificationAction *> * actions;
```

```objectivec
@property (atomic, copy, readonly) NSArray<UNNotificationAction *> * actions;
```

<a id="Discussion"></a>

## Discussion

When displaying a notification assigned to this category, the system adds a button to the notification interface for each action in this property. The system displays these buttons after the notification’s content but before the Dismiss button.

When displaying banner notifications, the system displays only the first two actions.

## See Also

### Getting the Information

- [identifier](identifier.md): The unique string assigned to the category.
- [intentIdentifiers](intentidentifiers.md): The intents related to notifications of this category.
- [hiddenPreviewsBodyPlaceholder](hiddenpreviewsbodyplaceholder.md): The placeholder text to display when the system disables notification previews for the app.
- [categorySummaryFormat](categorysummaryformat.md): A format string for the summary description used when the system groups the category’s notifications.
