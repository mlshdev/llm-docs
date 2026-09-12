> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessory-c.class/reservedlayoutwidth](https://developer.apple.com/documentation/uikit/uicellaccessory-c.class/reservedlayoutwidth)

# reservedLayoutWidth

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The layout width that the system reserves for the accessory and then centers the accessory within.

## Declaration

```objectivec
@property (nonatomic) CGFloat reservedLayoutWidth;
```

<a id="Discussion"></a>

## Discussion

Use this property to ensure consistent horizontal alignment from both system and custom accessories to your content, even when the accessories vary in size.

The reserved layout width only affects the amount of space for the accessory, and its positioning within that space. It doesn’t affect the size of the accessory.

![Diagram of three cells, each of which contains one accessory on the leading side. The accessories vary in width, but use the same reserved layout width to achieve consistent alignment. Annotations running the height of the diagram illustrate the static width.](https://developer.apple.com/images/com.apple.uikit/media-3680733@2x.png)

## See Also

### Customizing layout and placement

- [UICellAccessoryStandardDimension](../uicellaccessorystandarddimension.md): The system standard layout dimension for accessories.
- [UICellAccessoryPlacement](../uicellaccessoryplacement.md): Constants that describe the placement of the accessory within the cell.
- [UICellAccessoryPosition](../uicellaccessoryposition.md): The index position of the cell accessory in relation to the other accessories in the specified array.
- [UICellAccessoryPositionAfterAccessoryOfClass](../uicellaccessorypositionafteraccessoryofclass.md): Provides a position after the accessory that matches the specified class, or at the end if there’s no matching class.
- [UICellAccessoryPositionBeforeAccessoryOfClass](../uicellaccessorypositionbeforeaccessoryofclass.md): Provides a position before the accessory that matches the specified class, or at the beginning if there’s no matching class.
