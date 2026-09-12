> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentsizecategory/didchangenotification](https://developer.apple.com/documentation/uikit/uicontentsizecategory/didchangenotification)

# didChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that posts when the user changes the preferred content size setting.

## Declaration

```swift
nonisolated static let didChangeNotification: NSNotification.Name
```

## Mentioned In

- [Scaling fonts automatically](../scaling-fonts-automatically.md)

<a id="Discussion"></a>

## Discussion

This notification is sent when the value in the [preferredContentSizeCategory](../uiapplication/preferredcontentsizecategory.md) property changes. The `userInfo` dictionary of the notification contains the [newValueUserInfoKey](newvalueuserinfokey.md) key, which reflects the new setting.

## See Also

### Managing the preferred content size

- [preferredContentSizeCategory](../uiapplication/preferredcontentsizecategory.md): The font sizing option preferred by the user.
- [UIContentSizeCategory](../uicontentsizecategory.md): Constants that indicate the preferred size of your content.
- [UIContentSizeCategoryAdjusting](../uicontentsizecategoryadjusting.md): A collection of methods that give controls an easy way to adopt automatic adjustment to content category changes.
- [newValueUserInfoKey](newvalueuserinfokey.md): A key that reflects the new preferred content size.

# UIContentSizeCategoryDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that posts when the user changes the preferred content size setting.

## Declaration

```objectivec
extern NSNotificationName const UIContentSizeCategoryDidChangeNotification;
```

## Mentioned In

- [Scaling fonts automatically](../scaling-fonts-automatically.md)

<a id="Discussion"></a>

## Discussion

This notification is sent when the value in the [preferredContentSizeCategory](../uiapplication/preferredcontentsizecategory.md) property changes. The `userInfo` dictionary of the notification contains the [UIContentSizeCategoryNewValueKey](newvalueuserinfokey.md) key, which reflects the new setting.

## See Also

### Managing the preferred content size

- [preferredContentSizeCategory](../uiapplication/preferredcontentsizecategory.md): The font sizing option preferred by the user.
- [UIContentSizeCategory](../uicontentsizecategory.md): Constants that indicate the preferred size of your content.
- [UIContentSizeCategoryAdjusting](../uicontentsizecategoryadjusting.md): A collection of methods that give controls an easy way to adopt automatic adjustment to content category changes.
- [UIContentSizeCategoryNewValueKey](newvalueuserinfokey.md): A key that reflects the new preferred content size.
