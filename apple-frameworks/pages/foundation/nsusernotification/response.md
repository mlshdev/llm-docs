> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotification/response](https://developer.apple.com/documentation/foundation/nsusernotification/response)

# response (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.9+ (deprecated in 11.0)

The response with which the user responded to a notification.

## Declaration

```swift
@NSCopying var response: NSAttributedString? { get }
```

<a id="Discussion"></a>

## Discussion

When the user responds to a notification, the [NSUserNotificationCenterDelegate](../nsusernotificationcenterdelegate.md) method [userNotificationCenter(\_:didActivate:)](../nsusernotificationcenterdelegate/usernotificationcenter%28__didactivate_%29.md) is called with the notification, the [activationType](activationtype-swift.property.md) property set to [NSUserNotification.ActivationType.replied](activationtype-swift.enum/replied.md), and this property is set with the user’s response.

## See Also

### Display Information

- [title](title.md): Deprecated. Specifies the title of the notification.
- [subtitle](subtitle.md): Deprecated. Specifies the subtitle of the notification.
- [informativeText](informativetext.md): Deprecated. The body text of the notification.
- [contentImage](contentimage.md): Deprecated. Image shown in the content of the notification.
- [identifier](identifier.md): Deprecated. A string that uniquely identifies a notification.
- [responsePlaceholder](responseplaceholder.md): Deprecated. Optional placeholder string for inline reply field.

# response (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.9+ (deprecated in 11.0)

The response with which the user responded to a notification.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSAttributedString * response;
```

<a id="Discussion"></a>

## Discussion

When the user responds to a notification, the [NSUserNotificationCenterDelegate](../nsusernotificationcenterdelegate.md) method [userNotificationCenter:didActivateNotification:](../nsusernotificationcenterdelegate/usernotificationcenter%28__didactivate_%29.md) is called with the notification, the [activationType](activationtype-swift.property.md) property set to [NSUserNotificationActivationTypeReplied](activationtype-swift.enum/replied.md), and this property is set with the user’s response.

## See Also

### Display Information

- [title](title.md): Deprecated. Specifies the title of the notification.
- [subtitle](subtitle.md): Deprecated. Specifies the subtitle of the notification.
- [informativeText](informativetext.md): Deprecated. The body text of the notification.
- [contentImage](contentimage.md): Deprecated. Image shown in the content of the notification.
- [identifier](identifier.md): Deprecated. A string that uniquely identifies a notification.
- [responsePlaceholder](responseplaceholder.md): Deprecated. Optional placeholder string for inline reply field.
