> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationcategory/identifier](https://developer.apple.com/documentation/usernotifications/unnotificationcategory/identifier)

# identifier (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The unique string assigned to the category.

## Declaration

```swift
var identifier: String { get }
```

## Mentioned In

- [Declaring your actionable notification types](../declaring-your-actionable-notification-types.md)
- [Generating a remote notification](../generating-a-remote-notification.md)

<a id="Discussion"></a>

## Discussion

Use this string to differentiate the different types of notifications that your app can send. To assign a category to a local notification, assign this string to the [categoryIdentifier](../unmutablenotificationcontent/categoryidentifier.md) property of the content object. To assign a category to a remote notification, use the string as the value of the `category` key in the notification payload `aps` dictionary.

## See Also

### Getting the Information

- [actions](actions.md): The actions to display when the system delivers notifications of this type.
- [intentIdentifiers](intentidentifiers.md): The intents related to notifications of this category.
- [hiddenPreviewsBodyPlaceholder](hiddenpreviewsbodyplaceholder.md): The placeholder text to display when the system disables notification previews for the app.
- [categorySummaryFormat](categorysummaryformat.md): A format string for the summary description used when the system groups the category’s notifications.

# identifier (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The unique string assigned to the category.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * identifier;
```

```objectivec
@property (atomic, copy, readonly) NSString * identifier;
```

## Mentioned In

- [Declaring your actionable notification types](../declaring-your-actionable-notification-types.md)
- [Generating a remote notification](../generating-a-remote-notification.md)

<a id="Discussion"></a>

## Discussion

Use this string to differentiate the different types of notifications that your app can send. To assign a category to a local notification, assign this string to the [categoryIdentifier](../unmutablenotificationcontent/categoryidentifier.md) property of the content object. To assign a category to a remote notification, use the string as the value of the `category` key in the notification payload `aps` dictionary.

## See Also

### Getting the Information

- [actions](actions.md): The actions to display when the system delivers notifications of this type.
- [intentIdentifiers](intentidentifiers.md): The intents related to notifications of this category.
- [hiddenPreviewsBodyPlaceholder](hiddenpreviewsbodyplaceholder.md): The placeholder text to display when the system disables notification previews for the app.
- [categorySummaryFormat](categorysummaryformat.md): A format string for the summary description used when the system groups the category’s notifications.
