> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentsizecategory/newvalueuserinfokey](https://developer.apple.com/documentation/uikit/uicontentsizecategory/newvalueuserinfokey)

# newValueUserInfoKey (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A key that reflects the new preferred content size.

## Declaration

```swift
nonisolated static let newValueUserInfoKey: String
```

<a id="Discussion"></a>

## Discussion

This key’s value is an [NSString](../../foundation/nsstring.md) object that reflects the new value of the [preferredContentSizeCategory](../uiapplication/preferredcontentsizecategory.md) property.

## See Also

### Managing the preferred content size

- [preferredContentSizeCategory](../uiapplication/preferredcontentsizecategory.md): The font sizing option preferred by the user.
- [UIContentSizeCategory](../uicontentsizecategory.md): Constants that indicate the preferred size of your content.
- [UIContentSizeCategoryAdjusting](../uicontentsizecategoryadjusting.md): A collection of methods that give controls an easy way to adopt automatic adjustment to content category changes.
- [didChangeNotification](didchangenotification.md): A notification that posts when the user changes the preferred content size setting.

# UIContentSizeCategoryNewValueKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A key that reflects the new preferred content size.

## Declaration

```objectivec
extern NSString * const UIContentSizeCategoryNewValueKey;
```

<a id="Discussion"></a>

## Discussion

This key’s value is an [NSString](../../foundation/nsstring.md) object that reflects the new value of the [preferredContentSizeCategory](../uiapplication/preferredcontentsizecategory.md) property.

## See Also

### Managing the preferred content size

- [preferredContentSizeCategory](../uiapplication/preferredcontentsizecategory.md): The font sizing option preferred by the user.
- [UIContentSizeCategory](../uicontentsizecategory.md): Constants that indicate the preferred size of your content.
- [UIContentSizeCategoryAdjusting](../uicontentsizecategoryadjusting.md): A collection of methods that give controls an easy way to adopt automatic adjustment to content category changes.
- [UIContentSizeCategoryDidChangeNotification](didchangenotification.md): A notification that posts when the user changes the preferred content size setting.
