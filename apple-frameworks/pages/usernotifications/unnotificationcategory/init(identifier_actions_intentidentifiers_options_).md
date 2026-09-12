> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationcategory/init(identifier:actions:intentidentifiers:options:)](https://developer.apple.com/documentation/usernotifications/unnotificationcategory/init(identifier:actions:intentidentifiers:options:))

# init(identifier:actions:intentIdentifiers:options:) (Swift)

**Framework:** User Notifications  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

Creates a category object containing the specified actions and options.

## Declaration

```swift
convenience init(identifier: String, actions: [UNNotificationAction], intentIdentifiers: [String], options: UNNotificationCategoryOptions = [])
```

## Parameters

- `identifier`: The unique identifier for the category. Each category that your app uses must have a unique identifier. Don’t specify an empty string.
- `actions`: The actions to display when the system delivers notifications of this type. When minimal space is available, the system displays only the first two actions in the array. You may specify an empty array for this parameter if you don’t want to display custom actions.
- `intentIdentifiers`: The intent identifier strings that you want to associate with notifications of this type. The Intents framework defines constants for each type of intent that you can associate with your notifications.
- `options`: Additional options for handling notifications of this type. For a list of possible values, see [UNNotificationCategoryOptions](../unnotificationcategoryoptions.md).

<a id="return-value"></a>

## Return Value

An initialized category object.

## See Also

### Essentials

- [init(identifier:actions:intentIdentifiers:hiddenPreviewsBodyPlaceholder:options:)](init%28identifier_actions_intentidentifiers_hiddenpreviewsbodyplaceholder_options_%29.md): Creates a category object containing the specified actions, options, and placeholder text used when previews aren’t shown.
- [init(identifier:actions:intentIdentifiers:hiddenPreviewsBodyPlaceholder:categorySummaryFormat:options:)](init%28identifier_actions_intentidentifiers_hiddenpreviewsbodyplaceholder_categorysummaryformat_options_%29.md): Creates a category object containing the specified actions, options, placeholder text used when previews aren’t shown, and summary format string.

# categoryWithIdentifier:actions:intentIdentifiers:options: (Objective-C)

**Framework:** User Notifications  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

Creates a category object containing the specified actions and options.

## Declaration

```objectivec
+ (instancetype) categoryWithIdentifier:(NSString *) identifier actions:(NSArray<UNNotificationAction *> *) actions intentIdentifiers:(NSArray<NSString *> *) intentIdentifiers options:(UNNotificationCategoryOptions) options;
```

## Parameters

- `identifier`: The unique identifier for the category. Each category that your app uses must have a unique identifier. Don’t specify an empty string.
- `actions`: The actions to display when the system delivers notifications of this type. When minimal space is available, the system displays only the first two actions in the array. You may specify an empty array for this parameter if you don’t want to display custom actions.
- `intentIdentifiers`: The intent identifier strings that you want to associate with notifications of this type. The Intents framework defines constants for each type of intent that you can associate with your notifications.
- `options`: Additional options for handling notifications of this type. For a list of possible values, see [UNNotificationCategoryOptions](../unnotificationcategoryoptions.md).

<a id="return-value"></a>

## Return Value

An initialized category object.

## See Also

### Essentials

- [categoryWithIdentifier:actions:intentIdentifiers:hiddenPreviewsBodyPlaceholder:options:](init%28identifier_actions_intentidentifiers_hiddenpreviewsbodyplaceholder_options_%29.md): Creates a category object containing the specified actions, options, and placeholder text used when previews aren’t shown.
- [categoryWithIdentifier:actions:intentIdentifiers:hiddenPreviewsBodyPlaceholder:categorySummaryFormat:options:](init%28identifier_actions_intentidentifiers_hiddenpreviewsbodyplaceholder_categorysummaryformat_options_%29.md): Creates a category object containing the specified actions, options, placeholder text used when previews aren’t shown, and summary format string.
