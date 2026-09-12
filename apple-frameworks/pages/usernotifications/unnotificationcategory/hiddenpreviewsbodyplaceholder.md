> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationcategory/hiddenpreviewsbodyplaceholder](https://developer.apple.com/documentation/usernotifications/unnotificationcategory/hiddenpreviewsbodyplaceholder)

# hiddenPreviewsBodyPlaceholder (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

The placeholder text to display when the system disables notification previews for the app.

## Declaration

```swift
var hiddenPreviewsBodyPlaceholder: String { get }
```

<a id="Discussion"></a>

## Discussion

The string in this property may contain the special characters `%u` as a placeholder for the number of messages with the same thread identifier. If your app declares this string in a `.stringsdict` property list, the system formats the preview message using the information in that file. For more information about specifying a `.stringsdict` property file, see [Internationalization and Localization Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/Introduction/Introduction.html#//apple_ref/doc/uid/10000171i).

## See Also

### Getting the Information

- [identifier](identifier.md): The unique string assigned to the category.
- [actions](actions.md): The actions to display when the system delivers notifications of this type.
- [intentIdentifiers](intentidentifiers.md): The intents related to notifications of this category.
- [categorySummaryFormat](categorysummaryformat.md): A format string for the summary description used when the system groups the category’s notifications.

# hiddenPreviewsBodyPlaceholder (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

The placeholder text to display when the system disables notification previews for the app.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * hiddenPreviewsBodyPlaceholder;
```

```objectivec
@property (atomic, copy, readonly) NSString * hiddenPreviewsBodyPlaceholder;
```

<a id="Discussion"></a>

## Discussion

The string in this property may contain the special characters `%u` as a placeholder for the number of messages with the same thread identifier. If your app declares this string in a `.stringsdict` property list, the system formats the preview message using the information in that file. For more information about specifying a `.stringsdict` property file, see [Internationalization and Localization Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/Introduction/Introduction.html#//apple_ref/doc/uid/10000171i).

## See Also

### Getting the Information

- [identifier](identifier.md): The unique string assigned to the category.
- [actions](actions.md): The actions to display when the system delivers notifications of this type.
- [intentIdentifiers](intentidentifiers.md): The intents related to notifications of this category.
- [categorySummaryFormat](categorysummaryformat.md): A format string for the summary description used when the system groups the category’s notifications.
