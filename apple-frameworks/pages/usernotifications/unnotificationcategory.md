> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationcategory](https://developer.apple.com/documentation/usernotifications/unnotificationcategory)

# UNNotificationCategory (Swift)

**Framework:** User Notifications  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

A type of notification your app supports and the custom actions that the system displays.

## Declaration

```swift
class UNNotificationCategory
```

## Mentioned In

- [Declaring your actionable notification types](declaring-your-actionable-notification-types.md)
- [Generating a remote notification](generating-a-remote-notification.md)

<a id="overview"></a>

## Overview

A [UNNotificationCategory](unnotificationcategory.md) object defines a type of notification that your executable can receive. You create category objects to define your app’s *actionable notifications* — notifications that have action buttons the user can select in response to the notification. Each category object you create stores the actions and other behaviors associated with a specific type of notification. Register your category objects using the [setNotificationCategories(\_:)](unusernotificationcenter/setnotificationcategories%28__%29.md) method of [UNUserNotificationCenter](unusernotificationcenter.md). You can register as many category objects as you need.

> **Note**

>  When someone performs a Double Tap gesture while viewing a notification on Apple Watch Series 9 or Apple Watch Ultra 2, the system invokes the first nondestructive action. A nondestructive action doesn’t include the [destructive](unnotificationactionoptions/destructive.md) option, and won’t delete user data or change the app irrevocably.

To apply category objects to your notifications, include the category’s identifier string in the payload of any notifications you create. For local notifications, put this string in the [categoryIdentifier](unmutablenotificationcontent/categoryidentifier.md) property of the [UNMutableNotificationContent](unmutablenotificationcontent.md) object that you use to specify the notification’s content. For remote notifications, use this string as the value of the `category` key in the `aps` dictionary of your payload.

Categories can have associated actions, which define custom buttons the system displays for notifications of that category. When the system has unlimited space, the system displays up to 10 actions. When the system has limited space, the system displays at most two actions.

## Topics

### Essentials

- [init(identifier:actions:intentIdentifiers:options:)](unnotificationcategory/init%28identifier_actions_intentidentifiers_options_%29.md): Creates a category object containing the specified actions and options.
- [init(identifier:actions:intentIdentifiers:hiddenPreviewsBodyPlaceholder:options:)](unnotificationcategory/init%28identifier_actions_intentidentifiers_hiddenpreviewsbodyplaceholder_options_%29.md): Creates a category object containing the specified actions, options, and placeholder text used when previews aren’t shown.
- [init(identifier:actions:intentIdentifiers:hiddenPreviewsBodyPlaceholder:categorySummaryFormat:options:)](unnotificationcategory/init%28identifier_actions_intentidentifiers_hiddenpreviewsbodyplaceholder_categorysummaryformat_options_%29.md): Creates a category object containing the specified actions, options, placeholder text used when previews aren’t shown, and summary format string.

### Getting the Information

- [identifier](unnotificationcategory/identifier.md): The unique string assigned to the category.
- [actions](unnotificationcategory/actions.md): The actions to display when the system delivers notifications of this type.
- [intentIdentifiers](unnotificationcategory/intentidentifiers.md): The intents related to notifications of this category.
- [hiddenPreviewsBodyPlaceholder](unnotificationcategory/hiddenpreviewsbodyplaceholder.md): The placeholder text to display when the system disables notification previews for the app.
- [categorySummaryFormat](unnotificationcategory/categorysummaryformat.md): A format string for the summary description used when the system groups the category’s notifications.

### Getting the Options

- [options](unnotificationcategory/options.md): Options for how to handle notifications of this type.
- [UNNotificationCategoryOptions](unnotificationcategoryoptions.md): Constants indicating how to handle notifications associated with this category.

### Initializers

- [init(coder:)](unnotificationcategory/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Notification categories and user actions

- [Declaring your actionable notification types](declaring-your-actionable-notification-types.md): Differentiate your notifications and add action buttons to the notification interface.
- [UNNotificationAction](unnotificationaction.md): A task your app performs in response to a notification that the system delivers.
- [UNTextInputNotificationAction](untextinputnotificationaction.md): An action that accepts user-typed text.

# UNNotificationCategory (Objective-C)

**Framework:** User Notifications  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

A type of notification your app supports and the custom actions that the system displays.

## Declaration

```objectivec
@interface UNNotificationCategory : NSObject
```

## Mentioned In

- [Declaring your actionable notification types](declaring-your-actionable-notification-types.md)
- [Generating a remote notification](generating-a-remote-notification.md)

<a id="overview"></a>

## Overview

A [UNNotificationCategory](unnotificationcategory.md) object defines a type of notification that your executable can receive. You create category objects to define your app’s *actionable notifications* — notifications that have action buttons the user can select in response to the notification. Each category object you create stores the actions and other behaviors associated with a specific type of notification. Register your category objects using the [setNotificationCategories:](unusernotificationcenter/setnotificationcategories%28__%29.md) method of [UNUserNotificationCenter](unusernotificationcenter.md). You can register as many category objects as you need.

> **Note**

>  When someone performs a Double Tap gesture while viewing a notification on Apple Watch Series 9 or Apple Watch Ultra 2, the system invokes the first nondestructive action. A nondestructive action doesn’t include the [UNNotificationActionOptionDestructive](unnotificationactionoptions/destructive.md) option, and won’t delete user data or change the app irrevocably.

To apply category objects to your notifications, include the category’s identifier string in the payload of any notifications you create. For local notifications, put this string in the [categoryIdentifier](unmutablenotificationcontent/categoryidentifier.md) property of the [UNMutableNotificationContent](unmutablenotificationcontent.md) object that you use to specify the notification’s content. For remote notifications, use this string as the value of the `category` key in the `aps` dictionary of your payload.

Categories can have associated actions, which define custom buttons the system displays for notifications of that category. When the system has unlimited space, the system displays up to 10 actions. When the system has limited space, the system displays at most two actions.

## Topics

### Essentials

- [categoryWithIdentifier:actions:intentIdentifiers:options:](unnotificationcategory/init%28identifier_actions_intentidentifiers_options_%29.md): Creates a category object containing the specified actions and options.
- [categoryWithIdentifier:actions:intentIdentifiers:hiddenPreviewsBodyPlaceholder:options:](unnotificationcategory/init%28identifier_actions_intentidentifiers_hiddenpreviewsbodyplaceholder_options_%29.md): Creates a category object containing the specified actions, options, and placeholder text used when previews aren’t shown.
- [categoryWithIdentifier:actions:intentIdentifiers:hiddenPreviewsBodyPlaceholder:categorySummaryFormat:options:](unnotificationcategory/init%28identifier_actions_intentidentifiers_hiddenpreviewsbodyplaceholder_categorysummaryformat_options_%29.md): Creates a category object containing the specified actions, options, placeholder text used when previews aren’t shown, and summary format string.

### Getting the Information

- [identifier](unnotificationcategory/identifier.md): The unique string assigned to the category.
- [actions](unnotificationcategory/actions.md): The actions to display when the system delivers notifications of this type.
- [intentIdentifiers](unnotificationcategory/intentidentifiers.md): The intents related to notifications of this category.
- [hiddenPreviewsBodyPlaceholder](unnotificationcategory/hiddenpreviewsbodyplaceholder.md): The placeholder text to display when the system disables notification previews for the app.
- [categorySummaryFormat](unnotificationcategory/categorysummaryformat.md): A format string for the summary description used when the system groups the category’s notifications.

### Getting the Options

- [options](unnotificationcategory/options.md): Options for how to handle notifications of this type.
- [UNNotificationCategoryOptions](unnotificationcategoryoptions.md): Constants indicating how to handle notifications associated with this category.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Notification categories and user actions

- [Declaring your actionable notification types](declaring-your-actionable-notification-types.md): Differentiate your notifications and add action buttons to the notification interface.
- [UNNotificationAction](unnotificationaction.md): A task your app performs in response to a notification that the system delivers.
- [UNTextInputNotificationAction](untextinputnotificationaction.md): An action that accepts user-typed text.
