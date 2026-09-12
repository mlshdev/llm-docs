> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointeraccessoryposition](https://developer.apple.com/documentation/uikit/uipointeraccessoryposition)

# UIPointerAccessoryPosition

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A structure that specifies the position of the accessory relative to the primary pointer.

## Declaration

```objectivec
typedef struct { ... } UIPointerAccessoryPosition;
```

## Topics

### Getting an accessory position

- [UIPointerAccessoryPositionTop](uipointeraccessorypositiontop.md): An accessory position at the top of the primary pointer.
- [UIPointerAccessoryPositionTopRight](uipointeraccessorypositiontopright.md): An accessory position at the top-right of the primary pointer.
- [UIPointerAccessoryPositionRight](uipointeraccessorypositionright.md): An accessory position at the right of the primary pointer.
- [UIPointerAccessoryPositionBottomRight](uipointeraccessorypositionbottomright.md): An accessory position at the bottom-right of the primary pointer.
- [UIPointerAccessoryPositionBottom](uipointeraccessorypositionbottom.md): An accessory position at the bottom of the primary pointer.
- [UIPointerAccessoryPositionBottomLeft](uipointeraccessorypositionbottomleft.md): An accessory position at the bottom-left of the primary pointer.
- [UIPointerAccessoryPositionLeft](uipointeraccessorypositionleft.md): An accessory position at the left of the primary pointer.
- [UIPointerAccessoryPositionTopLeft](uipointeraccessorypositiontopleft.md): An accessory position at the top-left of the primary pointer.

### Creating a custom accessory position

- [UIPointerAccessoryPositionMake](uipointeraccessorypositionmake.md): Creates a custom accessory position with the specified offset and angle.
- [angle](uipointeraccessoryposition/angle.md): The angle of the accessory’s position, measured in radians clockwise from the top of the primary pointer.
- [offset](uipointeraccessoryposition/offset.md): The offset of the accessory from the primary pointer.

## See Also

### Getting the position

- [position](uipointeraccessory/position-swift.property.md): The position of the accessory relative to the primary pointer.
