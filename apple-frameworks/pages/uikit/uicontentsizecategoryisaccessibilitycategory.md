> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentsizecategoryisaccessibilitycategory](https://developer.apple.com/documentation/uikit/uicontentsizecategoryisaccessibilitycategory)

# UIContentSizeCategoryIsAccessibilityCategory

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the content size category belongs to the group of accessibility-related sizes.

## Declaration

```objectivec
extern BOOL UIContentSizeCategoryIsAccessibilityCategory(UIContentSizeCategory category);
```

## See Also

### Retrieving content size category information

- [preferredContentSizeCategory](uitraitcollection/preferredcontentsizecategory.md): The font sizing option preferred by the user.
- [UIContentSizeCategory](uicontentsizecategory.md): Constants that indicate the preferred size of your content.
- [UIContentSizeCategoryCompareToCategory](uicontentsizecategorycomparetocategory.md): Compares two content size category values to determine whether they are equal or whether one is larger than the other.
