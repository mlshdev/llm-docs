> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uipointeraccessory/arrowaccessorywithposition:

# arrowAccessoryWithPosition:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Creates a pointer accessory at the specified position.

## Declaration

```objectivec
+ (instancetype) arrowAccessoryWithPosition:(UIPointerAccessoryPosition) position;
```

## Parameters

- `position`: One of the available [UIPointerAccessory.Position](position-swift.struct.md) positions.

## See Also

### Creating a pointer accessory

- [accessoryWithShape:position:](accessorywithshape_position_.md): Creates a pointer accessory with the specified shape and position.
