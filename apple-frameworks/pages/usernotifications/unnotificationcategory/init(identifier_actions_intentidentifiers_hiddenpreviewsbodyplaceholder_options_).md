> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationcategory/init(identifier:actions:intentidentifiers:hiddenpreviewsbodyplaceholder:options:)](https://developer.apple.com/documentation/usernotifications/unnotificationcategory/init(identifier:actions:intentidentifiers:hiddenpreviewsbodyplaceholder:options:))

# init(identifier:actions:intentIdentifiers:hiddenPreviewsBodyPlaceholder:options:) (Swift)

**Framework:** User Notifications  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

Creates a category object containing the specified actions, options, and placeholder text used when previews aren’t shown.

## Declaration

```swift
convenience init(identifier: String, actions: [UNNotificationAction], intentIdentifiers: [String], hiddenPreviewsBodyPlaceholder: String, options: UNNotificationCategoryOptions = [])
```

## Parameters

- `identifier`: The unique identifier for the category. Each category that your app uses must have a unique identifier. Don’t specify an empty string.
- `actions`: The actions to display when the system delivers notifications of this type. When minimal space is available, the system displays only the first two actions in the array. You may specify an empty array for this parameter if you don’t want to display custom actions.
- `intentIdentifiers`: The intent identifier strings that you want to associate with notifications of this type. The Intents framework defines constants for each type of intent that you can associate with your notifications.
- `hiddenPreviewsBodyPlaceholder`: A placeholder string to display when the user has disabled notification previews for the app. Include the characters `%u` (the only supported formatting characters) in the string to represent the number of notifications with the same thread identifier. For example, the string “`%u Messages`” becomes “`2 Messages`” when there are two messages.

  To specify different strings for the singular and plural cases, use the [localizedUserNotificationString(forKey:arguments:)](../../foundation/nsstring/localizedusernotificationstring%28forkey_arguments_%29.md) method of [NSString](../../foundation/nsstring.md) to specify the value for this parameter. The key passed to that method contains the identifier of an entry in a `.stringsdict` property list of your project. A strings dictionary lets you specify different formatted strings based on the language rules, and is as described in [Internationalization and Localization Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/Introduction/Introduction.html#//apple_ref/doc/uid/10000171i).
- `options`: Additional options for handling notifications of this type. For a list of possible values, see [UNNotificationCategoryOptions](../unnotificationcategoryoptions.md).

<a id="return-value"></a>

## Return Value

An initialized category object.

## See Also

### Essentials

- [init(identifier:actions:intentIdentifiers:options:)](init%28identifier_actions_intentidentifiers_options_%29.md): Creates a category object containing the specified actions and options.
- [init(identifier:actions:intentIdentifiers:hiddenPreviewsBodyPlaceholder:categorySummaryFormat:options:)](init%28identifier_actions_intentidentifiers_hiddenpreviewsbodyplaceholder_categorysummaryformat_options_%29.md): Creates a category object containing the specified actions, options, placeholder text used when previews aren’t shown, and summary format string.

# categoryWithIdentifier:actions:intentIdentifiers:hiddenPreviewsBodyPlaceholder:options: (Objective-C)

**Framework:** User Notifications  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

Creates a category object containing the specified actions, options, and placeholder text used when previews aren’t shown.

## Declaration

```objectivec
+ (instancetype) categoryWithIdentifier:(NSString *) identifier actions:(NSArray<UNNotificationAction *> *) actions intentIdentifiers:(NSArray<NSString *> *) intentIdentifiers hiddenPreviewsBodyPlaceholder:(NSString *) hiddenPreviewsBodyPlaceholder options:(UNNotificationCategoryOptions) options;
```

## Parameters

- `identifier`: The unique identifier for the category. Each category that your app uses must have a unique identifier. Don’t specify an empty string.
- `actions`: The actions to display when the system delivers notifications of this type. When minimal space is available, the system displays only the first two actions in the array. You may specify an empty array for this parameter if you don’t want to display custom actions.
- `intentIdentifiers`: The intent identifier strings that you want to associate with notifications of this type. The Intents framework defines constants for each type of intent that you can associate with your notifications.
- `hiddenPreviewsBodyPlaceholder`: A placeholder string to display when the user has disabled notification previews for the app. Include the characters `%u` (the only supported formatting characters) in the string to represent the number of notifications with the same thread identifier. For example, the string “`%u Messages`” becomes “`2 Messages`” when there are two messages.

  To specify different strings for the singular and plural cases, use the [localizedUserNotificationStringForKey:arguments:](../../foundation/nsstring/localizedusernotificationstring%28forkey_arguments_%29.md) method of [NSString](../../foundation/nsstring.md) to specify the value for this parameter. The key passed to that method contains the identifier of an entry in a `.stringsdict` property list of your project. A strings dictionary lets you specify different formatted strings based on the language rules, and is as described in [Internationalization and Localization Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/Introduction/Introduction.html#//apple_ref/doc/uid/10000171i).
- `options`: Additional options for handling notifications of this type. For a list of possible values, see [UNNotificationCategoryOptions](../unnotificationcategoryoptions.md).

<a id="return-value"></a>

## Return Value

An initialized category object.

## See Also

### Essentials

- [categoryWithIdentifier:actions:intentIdentifiers:options:](init%28identifier_actions_intentidentifiers_options_%29.md): Creates a category object containing the specified actions and options.
- [categoryWithIdentifier:actions:intentIdentifiers:hiddenPreviewsBodyPlaceholder:categorySummaryFormat:options:](init%28identifier_actions_intentidentifiers_hiddenpreviewsbodyplaceholder_categorysummaryformat_options_%29.md): Creates a category object containing the specified actions, options, placeholder text used when previews aren’t shown, and summary format string.
