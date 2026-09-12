> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointeraccessory/accessorywithshape:position:](https://developer.apple.com/documentation/uikit/uipointeraccessory/accessorywithshape:position:)

# accessoryWithShape:position:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Creates a pointer accessory with the specified shape and position.

## Declaration

```objectivec
+ (instancetype) accessoryWithShape:(UIPointerShape *) shape position:(UIPointerAccessoryPosition) position;
```

## Parameters

- `shape`: One of the available [UIPointerShape](../uipointershape-swift.enum.md) shapes.
- `position`: One of the available [UIPointerAccessory.Position](position-swift.struct.md) positions.

## See Also

### Creating a pointer accessory

- [arrowAccessoryWithPosition:](arrowaccessorywithposition_.md): Creates a pointer accessory at the specified position.
