> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscollectionlayoutsection/supplementarycontentinsetsreference](https://developer.apple.com/documentation/uikit/nscollectionlayoutsection/supplementarycontentinsetsreference)

# supplementaryContentInsetsReference (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

The reference boundary for content insets on boundary supplementary items.

## Declaration

```swift
var supplementaryContentInsetsReference: UIContentInsetsReference { get set }
```

<a id="Discussion"></a>

## Discussion

This property represents the reference boundary to use when defining [contentInsets](../nscollectionlayoutitem/contentinsets.md) on [NSCollectionLayoutBoundarySupplementaryItem](../nscollectionlayoutboundarysupplementaryitem.md) objects.

The default value of this property is [UIContentInsetsReference.automatic](../uicontentinsetsreference/automatic.md), which means any insets specified on a [NSCollectionLayoutBoundarySupplementaryItem](../nscollectionlayoutboundarysupplementaryitem.md) follow the layout configuration’s [contentInsetsReference](../uicollectionviewcompositionallayoutconfiguration/contentinsetsreference.md).

## See Also

### Configuring section spacing

- [interGroupSpacing](intergroupspacing.md): The amount of space between the groups in the section.
- [contentInsets](contentinsets.md): The amount of space between the content of the section and its boundaries.
- [contentInsetsReference](contentinsetsreference.md): The boundary to reference when defining content insets.
- [UIContentInsetsReference](../uicontentinsetsreference.md): Constants that describe the reference point of the content insets.

# supplementaryContentInsetsReference (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

The reference boundary for content insets on boundary supplementary items.

## Declaration

```objectivec
@property (nonatomic) UIContentInsetsReference supplementaryContentInsetsReference;
```

<a id="Discussion"></a>

## Discussion

This property represents the reference boundary to use when defining [contentInsets](../nscollectionlayoutitem/contentinsets.md) on [NSCollectionLayoutBoundarySupplementaryItem](../nscollectionlayoutboundarysupplementaryitem.md) objects.

The default value of this property is [UIContentInsetsReferenceAutomatic](../uicontentinsetsreference/automatic.md), which means any insets specified on a [NSCollectionLayoutBoundarySupplementaryItem](../nscollectionlayoutboundarysupplementaryitem.md) follow the layout configuration’s [contentInsetsReference](../uicollectionviewcompositionallayoutconfiguration/contentinsetsreference.md).

## See Also

### Configuring section spacing

- [interGroupSpacing](intergroupspacing.md): The amount of space between the groups in the section.
- [contentInsets](contentinsets.md): The amount of space between the content of the section and its boundaries.
- [contentInsetsReference](contentinsetsreference.md): The boundary to reference when defining content insets.
- [UIContentInsetsReference](../uicontentinsetsreference.md): Constants that describe the reference point of the content insets.
