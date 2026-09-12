> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessoryposition](https://developer.apple.com/documentation/uikit/uicellaccessoryposition)

# UICellAccessoryPosition

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The index position of the cell accessory in relation to the other accessories in the specified array.

## Declaration

```objectivec
typedef unsigned long (^)(NSArray<__kindof UICellAccessory *> *) UICellAccessoryPosition;
```

## See Also

### Customizing layout and placement

- [reservedLayoutWidth](uicellaccessory-c.class/reservedlayoutwidth.md): The layout width that the system reserves for the accessory and then centers the accessory within.
- [UICellAccessoryStandardDimension](uicellaccessorystandarddimension.md): The system standard layout dimension for accessories.
- [UICellAccessoryPlacement](uicellaccessoryplacement.md): Constants that describe the placement of the accessory within the cell.
- [UICellAccessoryPositionAfterAccessoryOfClass](uicellaccessorypositionafteraccessoryofclass.md): Provides a position after the accessory that matches the specified class, or at the end if there’s no matching class.
- [UICellAccessoryPositionBeforeAccessoryOfClass](uicellaccessorypositionbeforeaccessoryofclass.md): Provides a position before the accessory that matches the specified class, or at the beginning if there’s no matching class.
