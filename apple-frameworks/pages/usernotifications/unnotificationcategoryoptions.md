> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationcategoryoptions](https://developer.apple.com/documentation/usernotifications/unnotificationcategoryoptions)

# UNNotificationCategoryOptions (Swift)

**Framework:** User Notifications  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

Constants indicating how to handle notifications associated with this category.

## Declaration

```swift
struct UNNotificationCategoryOptions
```

## Topics

### Creating an option

- [init(rawValue:)](unnotificationcategoryoptions/init%28rawvalue_%29.md): Initializes a notification category options object using the specified raw value.

### Customizing a category

- [allowInCarPlay](unnotificationcategoryoptions/allowincarplay.md): Allow CarPlay to display notifications of this type.
- [allowAnnouncement](unnotificationcategoryoptions/allowannouncement.md): Deprecated. An option that grants Siri permission to read incoming messages out loud when the user has a compatible audio output device connected.

### Managing hidden preview behavior

- [hiddenPreviewsShowTitle](unnotificationcategoryoptions/hiddenpreviewsshowtitle.md): Show the notification’s title, even if the user has disabled notification previews for the app.
- [hiddenPreviewsShowSubtitle](unnotificationcategoryoptions/hiddenpreviewsshowsubtitle.md): Show the notification’s subtitle, even if the user has disabled notification previews for the app.

### Managing action handling behavior

- [customDismissAction](unnotificationcategoryoptions/customdismissaction.md): Send dismiss actions to the `UNUserNotificationCenter` object’s delegate for handling.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Getting the Options

- [options](unnotificationcategory/options.md): Options for how to handle notifications of this type.

# UNNotificationCategoryOptions (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

Constants indicating how to handle notifications associated with this category.

## Declaration

```objectivec
enum UNNotificationCategoryOptions : NSUInteger;
```

## Topics

### Customizing a category

- [UNNotificationCategoryOptionAllowInCarPlay](unnotificationcategoryoptions/allowincarplay.md): Allow CarPlay to display notifications of this type.
- [UNNotificationCategoryOptionAllowAnnouncement](unnotificationcategoryoptions/allowannouncement.md): Deprecated. An option that grants Siri permission to read incoming messages out loud when the user has a compatible audio output device connected.

### Managing hidden preview behavior

- [UNNotificationCategoryOptionHiddenPreviewsShowTitle](unnotificationcategoryoptions/hiddenpreviewsshowtitle.md): Show the notification’s title, even if the user has disabled notification previews for the app.
- [UNNotificationCategoryOptionHiddenPreviewsShowSubtitle](unnotificationcategoryoptions/hiddenpreviewsshowsubtitle.md): Show the notification’s subtitle, even if the user has disabled notification previews for the app.

### Managing action handling behavior

- [UNNotificationCategoryOptionCustomDismissAction](unnotificationcategoryoptions/customdismissaction.md): Send dismiss actions to the `UNUserNotificationCenter` object’s delegate for handling.

## See Also

### Getting the Options

- [options](unnotificationcategory/options.md): Options for how to handle notifications of this type.
