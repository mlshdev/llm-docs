> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/setcellsize(_:)](https://developer.apple.com/documentation/quartz/ikimagebrowserview/setcellsize(_:))

# setCellSize(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Sets the cell  size.

## Declaration

```swift
func setCellSize(_ size: NSSize)
```

## Parameters

- `size`: The size to set.

<a id="Discussion"></a>

## Discussion

You must use `setCellSize` or [setZoomValue(\_:)](setzoomvalue%28__%29.md), but not both. Setting the zoom value changes the cell size, and vice versa.

## See Also

### Related Documentation

- [setZoomValue(\_:)](setzoomvalue%28__%29.md): Sets the zoom value.

### Setting and Getting Cell Size

- [cellSize()](cellsize%28%29.md): Returns the cell size.

# setCellSize: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Sets the cell  size.

## Declaration

```objectivec
- (void) setCellSize:(NSSize) size;
```

## Parameters

- `size`: The size to set.

<a id="Discussion"></a>

## Discussion

You must use `setCellSize` or [setZoomValue:](setzoomvalue%28__%29.md), but not both. Setting the zoom value changes the cell size, and vice versa.

## See Also

### Related Documentation

- [setZoomValue:](setzoomvalue%28__%29.md): Sets the zoom value.

### Setting and Getting Cell Size

- [cellSize](cellsize%28%29.md): Returns the cell size.
