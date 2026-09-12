> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/untextinputnotificationaction/init(identifier:title:options:icon:textinputbuttontitle:textinputplaceholder:)](https://developer.apple.com/documentation/usernotifications/untextinputnotificationaction/init(identifier:title:options:icon:textinputbuttontitle:textinputplaceholder:))

# init(identifier:title:options:icon:textInputButtonTitle:textInputPlaceholder:) (Swift)

**Framework:** User Notifications  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an action object with an icon that accepts text input from the user.

## Declaration

```swift
convenience init(identifier: String, title: String, options: UNNotificationActionOptions = [], icon: UNNotificationActionIcon?, textInputButtonTitle: String, textInputPlaceholder: String)
```

## Parameters

- `identifier`: The string that you use internally to identify the action. This string must be unique among all of your app’s supported actions. When the user selects the action, the system passes this string to your app and asks you to perform the related task. This parameter must not be `nil` or an empty string.
- `title`: The localized string the system displays to the user. The system displays this string as the title of a button, which the system adds to the notification interface. This parameter must not be `nil`.
- `options`: Additional options describing how the action behaves. Include options when you need the related behavior. For a list of possible values, see [UNNotificationActionOptions](../unnotificationactionoptions.md).
- `icon`: The icon to display to the user.
- `textInputButtonTitle`: The localized title of the text input button that’s displayed to the user.
- `textInputPlaceholder`: The localized placeholder text to display in the text input field.

<a id="return-value"></a>

## Return Value

A new text input action object.

## See Also

### Essentials

- [init(identifier:title:options:textInputButtonTitle:textInputPlaceholder:)](init%28identifier_title_options_textinputbuttontitle_textinputplaceholder_%29.md): Creates an action object that accepts text input from the user.

# actionWithIdentifier:title:options:icon:textInputButtonTitle:textInputPlaceholder: (Objective-C)

**Framework:** User Notifications  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an action object with an icon that accepts text input from the user.

## Declaration

```objectivec
+ (instancetype) actionWithIdentifier:(NSString *) identifier title:(NSString *) title options:(UNNotificationActionOptions) options icon:(UNNotificationActionIcon *) icon textInputButtonTitle:(NSString *) textInputButtonTitle textInputPlaceholder:(NSString *) textInputPlaceholder;
```

## Parameters

- `identifier`: The string that you use internally to identify the action. This string must be unique among all of your app’s supported actions. When the user selects the action, the system passes this string to your app and asks you to perform the related task. This parameter must not be `nil` or an empty string.
- `title`: The localized string the system displays to the user. The system displays this string as the title of a button, which the system adds to the notification interface. This parameter must not be `nil`.
- `options`: Additional options describing how the action behaves. Include options when you need the related behavior. For a list of possible values, see [UNNotificationActionOptions](../unnotificationactionoptions.md).
- `icon`: The icon to display to the user.
- `textInputButtonTitle`: The localized title of the text input button that’s displayed to the user.
- `textInputPlaceholder`: The localized placeholder text to display in the text input field.

<a id="return-value"></a>

## Return Value

A new text input action object.

## See Also

### Essentials

- [actionWithIdentifier:title:options:textInputButtonTitle:textInputPlaceholder:](init%28identifier_title_options_textinputbuttontitle_textinputplaceholder_%29.md): Creates an action object that accepts text input from the user.
