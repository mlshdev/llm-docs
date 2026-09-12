> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/userspacetodevicespacetransform](https://developer.apple.com/documentation/coregraphics/cgcontext/userspacetodevicespacetransform)

# userSpaceToDeviceSpaceTransform (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an affine transform that maps user space coordinates to device space coordinates.

## Declaration

```swift
var userSpaceToDeviceSpaceTransform: CGAffineTransform { get }
```

## See Also

### Converting Between Coordinate Spaces

- [convertToDeviceSpace(\_:)](converttodevicespace%28__%29-53m7u.md): Returns a point that is transformed from user space coordinates to device space coordinates.
- [convertToUserSpace(\_:)](converttouserspace%28__%29-3mtg3.md): Returns a point that is transformed from device space coordinates to user space coordinates.
- [convertToDeviceSpace(\_:)](converttodevicespace%28__%29-91x5g.md): Returns a rectangle that is transformed from user space coordinate to device space coordinates.
- [convertToUserSpace(\_:)](converttouserspace%28__%29-1hk5r.md): Returns a rectangle that is transformed from device space coordinate to user space coordinates.
- [convertToDeviceSpace(\_:)](converttodevicespace%28__%29-224h2.md): Returns a size that is transformed from user space coordinates to device space coordinates.
- [convertToUserSpace(\_:)](converttouserspace%28__%29-693ur.md): Returns a size that is transformed from device space coordinates to user space coordinates.

# CGContextGetUserSpaceToDeviceSpaceTransform (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an affine transform that maps user space coordinates to device space coordinates.

## Declaration

```objectivec
extern CGAffineTransform CGContextGetUserSpaceToDeviceSpaceTransform(CGContextRef c);
```

## Parameters

- `c`: A graphics context.

<a id="return-value"></a>

## Return Value

The affine transforms that maps the user space of the graphics context to the device space.

## See Also

### Converting Between Coordinate Spaces

- [CGContextConvertPointToDeviceSpace](converttodevicespace%28__%29-53m7u.md): Returns a point that is transformed from user space coordinates to device space coordinates.
- [CGContextConvertPointToUserSpace](converttouserspace%28__%29-3mtg3.md): Returns a point that is transformed from device space coordinates to user space coordinates.
- [CGContextConvertRectToDeviceSpace](converttodevicespace%28__%29-91x5g.md): Returns a rectangle that is transformed from user space coordinate to device space coordinates.
- [CGContextConvertRectToUserSpace](converttouserspace%28__%29-1hk5r.md): Returns a rectangle that is transformed from device space coordinate to user space coordinates.
- [CGContextConvertSizeToDeviceSpace](converttodevicespace%28__%29-224h2.md): Returns a size that is transformed from user space coordinates to device space coordinates.
- [CGContextConvertSizeToUserSpace](converttouserspace%28__%29-693ur.md): Returns a size that is transformed from device space coordinates to user space coordinates.
