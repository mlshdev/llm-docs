> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentsizecategory](https://developer.apple.com/documentation/uikit/uicontentsizecategory)

# UIContentSizeCategory (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Constants that indicate the preferred size of your content.

## Declaration

```swift
struct UIContentSizeCategory
```

## Topics

### Font sizes

- [unspecified](uicontentsizecategory/unspecified.md): An unspecified font size.
- [extraSmall](uicontentsizecategory/extrasmall.md): An extra-small font.
- [small](uicontentsizecategory/small.md): A small font.
- [medium](uicontentsizecategory/medium.md): A medium-sized font.
- [large](uicontentsizecategory/large.md): A large font.
- [extraLarge](uicontentsizecategory/extralarge.md): An extra-large font.
- [extraExtraLarge](uicontentsizecategory/extraextralarge.md): A font that is larger than the extra-large font but smaller than the largest font size available.
- [extraExtraExtraLarge](uicontentsizecategory/extraextraextralarge.md): The largest font size.

### Accessibility sizes

- [accessibilityMedium](uicontentsizecategory/accessibilitymedium.md): A medium font size that reflects the current accessibility settings.
- [accessibilityLarge](uicontentsizecategory/accessibilitylarge.md): A large font size that reflects the current accessibility settings.
- [accessibilityExtraLarge](uicontentsizecategory/accessibilityextralarge.md): An extra-large font size that reflects the current accessibility settings.
- [accessibilityExtraExtraLarge](uicontentsizecategory/accessibilityextraextralarge.md): A font that is larger than the extra-large font but not the largest available, reflecting the current accessibility settings.
- [accessibilityExtraExtraExtraLarge](uicontentsizecategory/accessibilityextraextraextralarge.md): The largest font size that reflects the current accessibility settings.
- [isAccessibilityCategory](uicontentsizecategory/isaccessibilitycategory.md): A Boolean value that indicates whether the content size category is associated with accessibility.

### Font size change notifications

- [didChangeNotification](uicontentsizecategory/didchangenotification.md): A notification that posts when the user changes the preferred content size setting.
- [newValueUserInfoKey](uicontentsizecategory/newvalueuserinfokey.md): A key that reflects the new preferred content size.

### Font size category creation

- [init(rawValue:)](uicontentsizecategory/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.
- [init(\_:)](uicontentsizecategory/init%28__%29-9l1kn.md): Creates a content size category from the specified SwiftUI content size category.
- [init(\_:)](uicontentsizecategory/init%28__%29-abz4.md): Creates a content size category from the specified SwiftUI Dynamic Type size.

### Structures

- [UIContentSizeCategory.DidChangeMessage](uicontentsizecategory/didchangemessage.md)

## Relationships

### Conforms To

- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the preferred content size

- [preferredContentSizeCategory](uiapplication/preferredcontentsizecategory.md): The font sizing option preferred by the user.
- [UIContentSizeCategoryAdjusting](uicontentsizecategoryadjusting.md): A collection of methods that give controls an easy way to adopt automatic adjustment to content category changes.
- [didChangeNotification](uicontentsizecategory/didchangenotification.md): A notification that posts when the user changes the preferred content size setting.
- [newValueUserInfoKey](uicontentsizecategory/newvalueuserinfokey.md): A key that reflects the new preferred content size.

# UIContentSizeCategory (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Constants that indicate the preferred size of your content.

## Declaration

```objectivec
typedef NSString * UIContentSizeCategory;
```

## Topics

### Font sizes

- [UIContentSizeCategoryUnspecified](uicontentsizecategory/unspecified.md): An unspecified font size.
- [UIContentSizeCategoryExtraSmall](uicontentsizecategory/extrasmall.md): An extra-small font.
- [UIContentSizeCategorySmall](uicontentsizecategory/small.md): A small font.
- [UIContentSizeCategoryMedium](uicontentsizecategory/medium.md): A medium-sized font.
- [UIContentSizeCategoryLarge](uicontentsizecategory/large.md): A large font.
- [UIContentSizeCategoryExtraLarge](uicontentsizecategory/extralarge.md): An extra-large font.
- [UIContentSizeCategoryExtraExtraLarge](uicontentsizecategory/extraextralarge.md): A font that is larger than the extra-large font but smaller than the largest font size available.
- [UIContentSizeCategoryExtraExtraExtraLarge](uicontentsizecategory/extraextraextralarge.md): The largest font size.

### Accessibility sizes

- [UIContentSizeCategoryAccessibilityMedium](uicontentsizecategory/accessibilitymedium.md): A medium font size that reflects the current accessibility settings.
- [UIContentSizeCategoryAccessibilityLarge](uicontentsizecategory/accessibilitylarge.md): A large font size that reflects the current accessibility settings.
- [UIContentSizeCategoryAccessibilityExtraLarge](uicontentsizecategory/accessibilityextralarge.md): An extra-large font size that reflects the current accessibility settings.
- [UIContentSizeCategoryAccessibilityExtraExtraLarge](uicontentsizecategory/accessibilityextraextralarge.md): A font that is larger than the extra-large font but not the largest available, reflecting the current accessibility settings.
- [UIContentSizeCategoryAccessibilityExtraExtraExtraLarge](uicontentsizecategory/accessibilityextraextraextralarge.md): The largest font size that reflects the current accessibility settings.

### Font size change notifications

- [UIContentSizeCategoryDidChangeNotification](uicontentsizecategory/didchangenotification.md): A notification that posts when the user changes the preferred content size setting.
- [UIContentSizeCategoryNewValueKey](uicontentsizecategory/newvalueuserinfokey.md): A key that reflects the new preferred content size.

## See Also

### Managing the preferred content size

- [preferredContentSizeCategory](uiapplication/preferredcontentsizecategory.md): The font sizing option preferred by the user.
- [UIContentSizeCategoryAdjusting](uicontentsizecategoryadjusting.md): A collection of methods that give controls an easy way to adopt automatic adjustment to content category changes.
- [UIContentSizeCategoryDidChangeNotification](uicontentsizecategory/didchangenotification.md): A notification that posts when the user changes the preferred content size setting.
- [UIContentSizeCategoryNewValueKey](uicontentsizecategory/newvalueuserinfokey.md): A key that reflects the new preferred content size.
