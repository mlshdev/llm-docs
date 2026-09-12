> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotification/title](https://developer.apple.com/documentation/foundation/nsusernotification/title)

# title (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Specifies the title of the notification.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```swift
var title: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This value should be localized because it is presented to the user. The string is truncated to a length appropriate for display and the property is modified to reflect the truncation.

## See Also

### Display Information

- [subtitle](subtitle.md): Deprecated. Specifies the subtitle of the notification.
- [informativeText](informativetext.md): Deprecated. The body text of the notification.
- [contentImage](contentimage.md): Deprecated. Image shown in the content of the notification.
- [identifier](identifier.md): Deprecated. A string that uniquely identifies a notification.
- [response](response.md): Deprecated. The response with which the user responded to a notification.
- [responsePlaceholder](responseplaceholder.md): Deprecated. Optional placeholder string for inline reply field.

# title (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Specifies the title of the notification.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```objectivec
@property (copy, nullable) NSString * title;
```

<a id="Discussion"></a>

## Discussion

This value should be localized because it is presented to the user. The string is truncated to a length appropriate for display and the property is modified to reflect the truncation.

## See Also

### Display Information

- [subtitle](subtitle.md): Deprecated. Specifies the subtitle of the notification.
- [informativeText](informativetext.md): Deprecated. The body text of the notification.
- [contentImage](contentimage.md): Deprecated. Image shown in the content of the notification.
- [identifier](identifier.md): Deprecated. A string that uniquely identifies a notification.
- [response](response.md): Deprecated. The response with which the user responded to a notification.
- [responsePlaceholder](responseplaceholder.md): Deprecated. Optional placeholder string for inline reply field.
