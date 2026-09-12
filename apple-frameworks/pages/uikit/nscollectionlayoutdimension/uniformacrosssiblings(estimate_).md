> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscollectionlayoutdimension/uniformacrosssiblings(estimate:)](https://developer.apple.com/documentation/uikit/nscollectionlayoutdimension/uniformacrosssiblings(estimate:))

# uniformAcrossSiblings(estimate:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a dimension in which each item receives as much room as it requires and grows to match the dimension of its largest sibling.

## Declaration

```swift
class func uniformAcrossSiblings(estimate estimatedDimension: CGFloat) -> Self
```

<a id="Discussion"></a>

## Discussion

Use the [uniformAcrossSiblings(estimate:)](uniformacrosssiblings%28estimate_%29.md) dimension to ensure that self-sizing items have a consistent size across their group. This dimension provides an alternative to using the [estimated(\_:)](estimated%28__%29.md) dimension, which might not result in a uniform layout for items that vary in size.

![Two diagrams that each show a horizontal layout group with three items. The left diagram is labeled “Estimated,” and its items vary in size according to their content. The right diagram is labeled “Uniform across siblings,” and its items match the size of the largest item.](https://developer.apple.com/images/com.apple.uikit/media-4278490@2x.png)

Items with this dimension receive at least as much room as they require, and they increase in size to match the dimension of the largest self-sizing sibling in their parent group. The parent group’s dimension needs to be [estimated(\_:)](estimated%28__%29.md) on the axis where items specify this dimension so the group can grow to fit the items.

For example, items using this dimension in a horizontal [NSCollectionLayoutGroup](../nscollectionlayoutgroup.md) all have a height equal to the tallest item in that group. That group’s [heightDimension](../nscollectionlayoutsize/heightdimension.md) is [estimated(\_:)](estimated%28__%29.md) to allow for it to grow to fit the tallest item. The following code shows an example of this layout.

```swift
// Item width: To lay out 3 items horizontally, use 1/3 of the width of the group.
// Item height: To achieve a consistent height for the items, use `uniformAcrossSiblings(estimate:)`.
let itemCount = 3
let itemSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(1.0 / CGFloat(itemCount)),
                                      heightDimension: .uniformAcrossSiblings(estimate: 50))
let item = NSCollectionLayoutItem(layoutSize: itemSize)

// Group width: To use the entire horizontal width of the section, use the full fractional width.
// Group height: To allow the group's height to grow for the items, use `estimated(_:)`.
let groupSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(1.0),
                                       heightDimension: .estimated(50))
let group = NSCollectionLayoutGroup.horizontal(layoutSize: groupSize,
                                               repeatingSubitem: item,
                                               count: itemCount)

let section = NSCollectionLayoutSection(group: group)
```

> **Important**

>  If you use a [uniformAcrossSiblings(estimate:)](uniformacrosssiblings%28estimate_%29.md) dimension on the outermost group in a section, the size of the largest item in that group applies across the entire section, including nested groups.

Only use this dimension in layouts where the number of items is relatively small. To compute the size for this type of dimension, the layout needs to retrieve attributes for all siblings in the parent group, so the performance is linear to the number of items in the group.

> **Related sessions from WWDC23**

>  Session 10055: [What’s new in UIKit](https://developer.apple.com/videos/play/wwdc2023/10055/)

## See Also

### Creating a dimension

- [absolute(\_:)](absolute%28__%29.md): Creates a dimension with an absolute point value.
- [estimated(\_:)](estimated%28__%29.md): Creates a dimension with an estimated point value.
- [fractionalHeight(\_:)](fractionalheight%28__%29.md): Creates a dimension that is computed as a fraction of the height of the containing group.
- [fractionalWidth(\_:)](fractionalwidth%28__%29.md): Creates a dimension that is computed as a fraction of the width of the containing group.

# uniformAcrossSiblingsWithEstimate: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a dimension in which each item receives as much room as it requires and grows to match the dimension of its largest sibling.

## Declaration

```objectivec
+ (instancetype) uniformAcrossSiblingsWithEstimate:(CGFloat) estimatedDimension;
```

<a id="Discussion"></a>

## Discussion

Use the [uniformAcrossSiblingsWithEstimate:](uniformacrosssiblings%28estimate_%29.md) dimension to ensure that self-sizing items have a consistent size across their group. This dimension provides an alternative to using the [estimatedDimension:](estimated%28__%29.md) dimension, which might not result in a uniform layout for items that vary in size.

![Two diagrams that each show a horizontal layout group with three items. The left diagram is labeled “Estimated,” and its items vary in size according to their content. The right diagram is labeled “Uniform across siblings,” and its items match the size of the largest item.](https://developer.apple.com/images/com.apple.uikit/media-4278490@2x.png)

Items with this dimension receive at least as much room as they require, and they increase in size to match the dimension of the largest self-sizing sibling in their parent group. The parent group’s dimension needs to be [estimatedDimension:](estimated%28__%29.md) on the axis where items specify this dimension so the group can grow to fit the items.

For example, items using this dimension in a horizontal [NSCollectionLayoutGroup](../nscollectionlayoutgroup.md) all have a height equal to the tallest item in that group. That group’s [heightDimension](../nscollectionlayoutsize/heightdimension.md) is [estimatedDimension:](estimated%28__%29.md) to allow for it to grow to fit the tallest item. The following code shows an example of this layout.

```swift
// Item width: To lay out 3 items horizontally, use 1/3 of the width of the group.
// Item height: To achieve a consistent height for the items, use `uniformAcrossSiblings(estimate:)`.
let itemCount = 3
let itemSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(1.0 / CGFloat(itemCount)),
                                      heightDimension: .uniformAcrossSiblings(estimate: 50))
let item = NSCollectionLayoutItem(layoutSize: itemSize)

// Group width: To use the entire horizontal width of the section, use the full fractional width.
// Group height: To allow the group's height to grow for the items, use `estimated(_:)`.
let groupSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(1.0),
                                       heightDimension: .estimated(50))
let group = NSCollectionLayoutGroup.horizontal(layoutSize: groupSize,
                                               repeatingSubitem: item,
                                               count: itemCount)

let section = NSCollectionLayoutSection(group: group)
```

> **Important**

>  If you use a [uniformAcrossSiblingsWithEstimate:](uniformacrosssiblings%28estimate_%29.md) dimension on the outermost group in a section, the size of the largest item in that group applies across the entire section, including nested groups.

Only use this dimension in layouts where the number of items is relatively small. To compute the size for this type of dimension, the layout needs to retrieve attributes for all siblings in the parent group, so the performance is linear to the number of items in the group.

> **Related sessions from WWDC23**

>  Session 10055: [What’s new in UIKit](https://developer.apple.com/videos/play/wwdc2023/10055/)

## See Also

### Creating a dimension

- [absoluteDimension:](absolute%28__%29.md): Creates a dimension with an absolute point value.
- [estimatedDimension:](estimated%28__%29.md): Creates a dimension with an estimated point value.
- [fractionalHeightDimension:](fractionalheight%28__%29.md): Creates a dimension that is computed as a fraction of the height of the containing group.
- [fractionalWidthDimension:](fractionalwidth%28__%29.md): Creates a dimension that is computed as a fraction of the width of the containing group.
