> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationcategory/intentidentifiers](https://developer.apple.com/documentation/usernotifications/unnotificationcategory/intentidentifiers)

# intentIdentifiers (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The intents related to notifications of this category.

## Declaration

```swift
var intentIdentifiers: [String] { get }
```

<a id="Discussion"></a>

## Discussion

When the system delivers a notification, the presence of an intent identifier lets the system know that the notification is potentially related to the handling of a request made through Siri.

## See Also

### Getting the Information

- [identifier](identifier.md): The unique string assigned to the category.
- [actions](actions.md): The actions to display when the system delivers notifications of this type.
- [hiddenPreviewsBodyPlaceholder](hiddenpreviewsbodyplaceholder.md): The placeholder text to display when the system disables notification previews for the app.
- [categorySummaryFormat](categorysummaryformat.md): A format string for the summary description used when the system groups the category’s notifications.

# intentIdentifiers (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The intents related to notifications of this category.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSString *> * intentIdentifiers;
```

```objectivec
@property (atomic, copy, readonly) NSArray<NSString *> * intentIdentifiers;
```

<a id="Discussion"></a>

## Discussion

When the system delivers a notification, the presence of an intent identifier lets the system know that the notification is potentially related to the handling of a request made through Siri.

## See Also

### Getting the Information

- [identifier](identifier.md): The unique string assigned to the category.
- [actions](actions.md): The actions to display when the system delivers notifications of this type.
- [hiddenPreviewsBodyPlaceholder](hiddenpreviewsbodyplaceholder.md): The placeholder text to display when the system disables notification previews for the app.
- [categorySummaryFormat](categorysummaryformat.md): A format string for the summary description used when the system groups the category’s notifications.
