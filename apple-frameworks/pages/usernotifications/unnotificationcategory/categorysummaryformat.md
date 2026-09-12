> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationcategory/categorysummaryformat](https://developer.apple.com/documentation/usernotifications/unnotificationcategory/categorysummaryformat)

# categorySummaryFormat (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

A format string for the summary description used when the system groups the category’s notifications.

## Declaration

```swift
var categorySummaryFormat: String { get }
```

## See Also

### Getting the Information

- [identifier](identifier.md): The unique string assigned to the category.
- [actions](actions.md): The actions to display when the system delivers notifications of this type.
- [intentIdentifiers](intentidentifiers.md): The intents related to notifications of this category.
- [hiddenPreviewsBodyPlaceholder](hiddenpreviewsbodyplaceholder.md): The placeholder text to display when the system disables notification previews for the app.

# categorySummaryFormat (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

A format string for the summary description used when the system groups the category’s notifications.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * categorySummaryFormat;
```

```objectivec
@property (atomic, copy, readonly) NSString * categorySummaryFormat;
```

## See Also

### Getting the Information

- [identifier](identifier.md): The unique string assigned to the category.
- [actions](actions.md): The actions to display when the system delivers notifications of this type.
- [intentIdentifiers](intentidentifiers.md): The intents related to notifications of this category.
- [hiddenPreviewsBodyPlaceholder](hiddenpreviewsbodyplaceholder.md): The placeholder text to display when the system disables notification previews for the app.
