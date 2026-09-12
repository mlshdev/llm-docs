> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrasterizationratemap/physicalcoordinates(screencoordinates:layer:)](https://developer.apple.com/documentation/metal/mtlrasterizationratemap/physicalcoordinates(screencoordinates:layer:))

# physicalCoordinates(screenCoordinates:layer:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Converts a point in logical viewport coordinates to the corresponding physical coordinates in a render layer.

## Declaration

```swift
func physicalCoordinates(screenCoordinates: MTLCoordinate2D, layer layerIndex: Int) -> MTLCoordinate2D
```

## Parameters

- `screenCoordinates`: A point in viewport coordinates.
- `layerIndex`: The index of the rate map to use.

<a id="return-value"></a>

## Return Value

A point in the layer’s physical coordinate system corresponding to the source point.

<a id="discussion"></a>

## Discussion

The returned coordinates are always less than or equal to the input coordinates because the rasterization rate never exceeds 1:1 in any region.

## See Also

### Converting between viewport and physical coordinates

- [screenCoordinates(physicalCoordinates:layer:)](screencoordinates%28physicalcoordinates_layer_%29.md): Converts a point in physical coordinates inside a layer to its corresponding logical viewport coordinates.

# mapScreenToPhysicalCoordinates:forLayer: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Converts a point in logical viewport coordinates to the corresponding physical coordinates in a render layer.

## Declaration

```objectivec
- (MTLCoordinate2D) mapScreenToPhysicalCoordinates:(MTLCoordinate2D) screenCoordinates forLayer:(NSUInteger) layerIndex;
```

## Parameters

- `screenCoordinates`: A point in viewport coordinates.
- `layerIndex`: The index of the rate map to use.

<a id="return-value"></a>

## Return Value

A point in the layer’s physical coordinate system corresponding to the source point.

<a id="discussion"></a>

## Discussion

The returned coordinates are always less than or equal to the input coordinates because the rasterization rate never exceeds 1:1 in any region.

## See Also

### Converting between viewport and physical coordinates

- [mapPhysicalToScreenCoordinates:forLayer:](screencoordinates%28physicalcoordinates_layer_%29.md): Converts a point in physical coordinates inside a layer to its corresponding logical viewport coordinates.
