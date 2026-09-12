> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscollectionlayoutsection/contentinsetsreference](https://developer.apple.com/documentation/uikit/nscollectionlayoutsection/contentinsetsreference)

# contentInsetsReference (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The boundary to reference when defining content insets.

## Declaration

```swift
var contentInsetsReference: UIContentInsetsReference { get set }
```

<a id="Discussion"></a>

## Discussion

This property represents the reference point to use when defining [contentInsets](contentinsets.md).

The default value of this property is [UIContentInsetsReference.automatic](../uicontentinsetsreference/automatic.md), which means the section follows the layout configuration’s [contentInsetsReference](../uicollectionviewcompositionallayoutconfiguration/contentinsetsreference.md).

## See Also

### Configuring section spacing

- [interGroupSpacing](intergroupspacing.md): The amount of space between the groups in the section.
- [contentInsets](contentinsets.md): The amount of space between the content of the section and its boundaries.
- [supplementaryContentInsetsReference](supplementarycontentinsetsreference.md): The reference boundary for content insets on boundary supplementary items.
- [UIContentInsetsReference](../uicontentinsetsreference.md): Constants that describe the reference point of the content insets.

# contentInsetsReference (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The boundary to reference when defining content insets.

## Declaration

```objectivec
@property (nonatomic) UIContentInsetsReference contentInsetsReference;
```

<a id="Discussion"></a>

## Discussion

This property represents the reference point to use when defining [contentInsets](contentinsets.md).

The default value of this property is [UIContentInsetsReferenceAutomatic](../uicontentinsetsreference/automatic.md), which means the section follows the layout configuration’s [contentInsetsReference](../uicollectionviewcompositionallayoutconfiguration/contentinsetsreference.md).

## See Also

### Configuring section spacing

- [interGroupSpacing](intergroupspacing.md): The amount of space between the groups in the section.
- [contentInsets](contentinsets.md): The amount of space between the content of the section and its boundaries.
- [supplementaryContentInsetsReference](supplementarycontentinsetsreference.md): The reference boundary for content insets on boundary supplementary items.
- [UIContentInsetsReference](../uicontentinsetsreference.md): Constants that describe the reference point of the content insets.
