> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uipointeraccessoryposition/offset

# offset

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The offset of the accessory from the primary pointer.

## Declaration

```objectivec
CGFloat offset;
```

<a id="Discussion"></a>

## Discussion

This property only supports positive values.

## See Also

### Creating a custom accessory position

- [UIPointerAccessoryPositionMake](../uipointeraccessorypositionmake.md): Creates a custom accessory position with the specified offset and angle.
- [angle](angle.md): The angle of the accessory’s position, measured in radians clockwise from the top of the primary pointer.
