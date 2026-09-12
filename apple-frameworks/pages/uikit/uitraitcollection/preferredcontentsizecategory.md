> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitraitcollection/preferredcontentsizecategory](https://developer.apple.com/documentation/uikit/uitraitcollection/preferredcontentsizecategory)

# preferredContentSizeCategory (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The font sizing option preferred by the user.

## Declaration

```swift
var preferredContentSizeCategory: UIContentSizeCategory { get }
```

<a id="Discussion"></a>

## Discussion

With Dynamic Type, users can ask that apps display text using fonts that are larger or smaller than the normal font size defined by the system. For example, a user with a visual impairment might request a larger default font size to make it easier to read text. Use the value of this property to request a [UIFont](../uifont.md) object that matches the user’s requested size.

## See Also

### Retrieving content size category information

- [UIContentSizeCategory](../uicontentsizecategory.md): Constants that indicate the preferred size of your content.

# preferredContentSizeCategory (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The font sizing option preferred by the user.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) UIContentSizeCategory preferredContentSizeCategory;
```

<a id="Discussion"></a>

## Discussion

With Dynamic Type, users can ask that apps display text using fonts that are larger or smaller than the normal font size defined by the system. For example, a user with a visual impairment might request a larger default font size to make it easier to read text. Use the value of this property to request a [UIFont](../uifont.md) object that matches the user’s requested size.

## See Also

### Retrieving content size category information

- [UIContentSizeCategory](../uicontentsizecategory.md): Constants that indicate the preferred size of your content.
- [UIContentSizeCategoryCompareToCategory](../uicontentsizecategorycomparetocategory.md): Compares two content size category values to determine whether they are equal or whether one is larger than the other.
- [UIContentSizeCategoryIsAccessibilityCategory](../uicontentsizecategoryisaccessibilitycategory.md): Returns a Boolean value that indicates whether the content size category belongs to the group of accessibility-related sizes.
