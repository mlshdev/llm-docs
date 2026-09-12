> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessorypositionafteraccessoryofclass](https://developer.apple.com/documentation/uikit/uicellaccessorypositionafteraccessoryofclass)

# UICellAccessoryPositionAfterAccessoryOfClass

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Provides a position after the accessory that matches the specified class, or at the end if there’s no matching class.

## Declaration

```objectivec
extern UICellAccessoryPosition UICellAccessoryPositionAfterAccessoryOfClass(Class accessoryClass);
```

## See Also

### Customizing layout and placement

- [reservedLayoutWidth](uicellaccessory-c.class/reservedlayoutwidth.md): The layout width that the system reserves for the accessory and then centers the accessory within.
- [UICellAccessoryStandardDimension](uicellaccessorystandarddimension.md): The system standard layout dimension for accessories.
- [UICellAccessoryPlacement](uicellaccessoryplacement.md): Constants that describe the placement of the accessory within the cell.
- [UICellAccessoryPosition](uicellaccessoryposition.md): The index position of the cell accessory in relation to the other accessories in the specified array.
- [UICellAccessoryPositionBeforeAccessoryOfClass](uicellaccessorypositionbeforeaccessoryofclass.md): Provides a position before the accessory that matches the specified class, or at the beginning if there’s no matching class.
