> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/minimumcontentsizecategory](https://developer.apple.com/documentation/uikit/uiview/minimumcontentsizecategory)

# minimumContentSizeCategory (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The minimum content size category for the view and its subviews.

## Declaration

```swift
var minimumContentSizeCategory: UIContentSizeCategory? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to limit which content size categories your view hierarchy supports. The limit applies immediately after you set this value and when future content size category updates occur.

Set this property to `nil` to remove the minimum limit for the content size category.

## See Also

### Managing font-sizing preferences

- [maximumContentSizeCategory](maximumcontentsizecategory.md): The maximum content size category for the view and its subviews.
- [appliedContentSizeCategoryLimitsDescription](appliedcontentsizecategorylimitsdescription.md): A string that lists each of the view’s superviews, its content size category, and whether that view has content size category limits.

# minimumContentSizeCategory (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The minimum content size category for the view and its subviews.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIContentSizeCategory minimumContentSizeCategory;
```

<a id="Discussion"></a>

## Discussion

Use this property to limit which content size categories your view hierarchy supports. The limit applies immediately after you set this value and when future content size category updates occur.

Set this property to `nil` to remove the minimum limit for the content size category.

## See Also

### Managing font-sizing preferences

- [maximumContentSizeCategory](maximumcontentsizecategory.md): The maximum content size category for the view and its subviews.
- [appliedContentSizeCategoryLimitsDescription](appliedcontentsizecategorylimitsdescription.md): A string that lists each of the view’s superviews, its content size category, and whether that view has content size category limits.
