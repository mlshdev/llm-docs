> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrasterizationratemap/screencoordinates(physicalcoordinates:layer:)](https://developer.apple.com/documentation/metal/mtlrasterizationratemap/screencoordinates(physicalcoordinates:layer:))

# screenCoordinates(physicalCoordinates:layer:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Converts a point in physical coordinates inside a layer to its corresponding logical viewport coordinates.

## Declaration

```swift
func screenCoordinates(physicalCoordinates: MTLCoordinate2D, layer layerIndex: Int) -> MTLCoordinate2D
```

## Parameters

- `physicalCoordinates`: A point in layer coordinates.
- `layerIndex`: The index of the rate map to use.

<a id="return-value"></a>

## Return Value

A point in the view coordinates corresponding to the source point.

<a id="discussion"></a>

## Discussion

The returned coordinates are always greater than or equal to the input coordinates because the rasterization rate never exceeds 1:1 in any region.

## See Also

### Converting between viewport and physical coordinates

- [physicalCoordinates(screenCoordinates:layer:)](physicalcoordinates%28screencoordinates_layer_%29.md): Converts a point in logical viewport coordinates to the corresponding physical coordinates in a render layer.

# mapPhysicalToScreenCoordinates:forLayer: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Converts a point in physical coordinates inside a layer to its corresponding logical viewport coordinates.

## Declaration

```objectivec
- (MTLCoordinate2D) mapPhysicalToScreenCoordinates:(MTLCoordinate2D) physicalCoordinates forLayer:(NSUInteger) layerIndex;
```

## Parameters

- `physicalCoordinates`: A point in layer coordinates.
- `layerIndex`: The index of the rate map to use.

<a id="return-value"></a>

## Return Value

A point in the view coordinates corresponding to the source point.

<a id="discussion"></a>

## Discussion

The returned coordinates are always greater than or equal to the input coordinates because the rasterization rate never exceeds 1:1 in any region.

## See Also

### Converting between viewport and physical coordinates

- [mapScreenToPhysicalCoordinates:forLayer:](physicalcoordinates%28screencoordinates_layer_%29.md): Converts a point in logical viewport coordinates to the corresponding physical coordinates in a render layer.
