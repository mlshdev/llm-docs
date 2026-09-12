> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/converttodevicespace(_:)-91x5g](https://developer.apple.com/documentation/coregraphics/cgcontext/converttodevicespace(_:)-91x5g)

# convertToDeviceSpace(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a rectangle that is transformed from user space coordinate to device space coordinates.

## Declaration

```swift
func convertToDeviceSpace(_ rect: CGRect) -> CGRect
```

## Parameters

- `rect`: The rectangle, in user space coordinates, to transform.

<a id="return-value"></a>

## Return Value

The rectangle in device space coordinates.

<a id="Discussion"></a>

## Discussion

In general affine transforms do not preserve rectangles. As a result, this function returns the smallest rectangle that contains the transformed corner points of the rectangle.

## See Also

### Converting Between Coordinate Spaces

- [userSpaceToDeviceSpaceTransform](userspacetodevicespacetransform.md): Returns an affine transform that maps user space coordinates to device space coordinates.
- [convertToDeviceSpace(\_:)](converttodevicespace%28__%29-53m7u.md): Returns a point that is transformed from user space coordinates to device space coordinates.
- [convertToUserSpace(\_:)](converttouserspace%28__%29-3mtg3.md): Returns a point that is transformed from device space coordinates to user space coordinates.
- [convertToUserSpace(\_:)](converttouserspace%28__%29-1hk5r.md): Returns a rectangle that is transformed from device space coordinate to user space coordinates.
- [convertToDeviceSpace(\_:)](converttodevicespace%28__%29-224h2.md): Returns a size that is transformed from user space coordinates to device space coordinates.
- [convertToUserSpace(\_:)](converttouserspace%28__%29-693ur.md): Returns a size that is transformed from device space coordinates to user space coordinates.

# CGContextConvertRectToDeviceSpace (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a rectangle that is transformed from user space coordinate to device space coordinates.

## Declaration

```objectivec
extern CGRect CGContextConvertRectToDeviceSpace(CGContextRef c, CGRect rect);
```

## Parameters

- `c`: A graphics context.
- `rect`: The rectangle, in user space coordinates, to transform.

<a id="return-value"></a>

## Return Value

The rectangle in device space coordinates.

<a id="Discussion"></a>

## Discussion

In general affine transforms do not preserve rectangles. As a result, this function returns the smallest rectangle that contains the transformed corner points of the rectangle.

## See Also

### Converting Between Coordinate Spaces

- [CGContextGetUserSpaceToDeviceSpaceTransform](userspacetodevicespacetransform.md): Returns an affine transform that maps user space coordinates to device space coordinates.
- [CGContextConvertPointToDeviceSpace](converttodevicespace%28__%29-53m7u.md): Returns a point that is transformed from user space coordinates to device space coordinates.
- [CGContextConvertPointToUserSpace](converttouserspace%28__%29-3mtg3.md): Returns a point that is transformed from device space coordinates to user space coordinates.
- [CGContextConvertRectToUserSpace](converttouserspace%28__%29-1hk5r.md): Returns a rectangle that is transformed from device space coordinate to user space coordinates.
- [CGContextConvertSizeToDeviceSpace](converttodevicespace%28__%29-224h2.md): Returns a size that is transformed from user space coordinates to device space coordinates.
- [CGContextConvertSizeToUserSpace](converttouserspace%28__%29-693ur.md): Returns a size that is transformed from device space coordinates to user space coordinates.
