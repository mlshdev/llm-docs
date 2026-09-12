> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivepreviewrenderer/init(device:venuedescriptor:depthpixelformat:colorpixelformat:)](https://developer.apple.com/documentation/immersivemediasupport/immersivepreviewrenderer/init(device:venuedescriptor:depthpixelformat:colorpixelformat:))

# init(device:venueDescriptor:depthPixelFormat:colorPixelFormat:)

**Framework:** Immersive Media Support  
**Kind:** Initializer  
**Availability:** macOS 27.0+ · visionOS 27.0+

Creates an immersive preview renderer.

## Declaration

```swift
@MainActor init(device: (any MTLDevice)? = nil, venueDescriptor: VenueDescriptor? = nil, depthPixelFormat: MTLPixelFormat? = nil, colorPixelFormat: MTLPixelFormat? = nil)
```

## Parameters

- `device`: The `MTLDevice` to use.
- `venueDescriptor`: The `VenueDescriptor` to use to render the `ImmersiveVideoFrame`.
- `depthPixelFormat`: The depth pixel format to use.
- `colorPixelFormat`: The pixel format of the color attachment.

<a id="discussion"></a>

## Discussion

The renderer is initialized with optional Metal device and pixel format configurations. If you don’t provide a device, the renderer uses the system default Metal device. You can set the venue descriptor during initialization or update it later through the [venueDescriptor](venuedescriptor.md) property.
