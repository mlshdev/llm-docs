> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglcpsurfacebackingsize](https://developer.apple.com/documentation/appkit/nsopenglcpsurfacebackingsize)

# NSOpenGLCPSurfaceBackingSize

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Set or get the height and width of the back buffer. You can use this to let the system scale an image automatically on swapping to a variable-size buffer. The back buffer size remains fixed at the size that you set up regardless of whether the image is resized to display larger onscreen.

## Declaration

```objectivec
static const NSOpenGLContextParameter NSOpenGLCPSurfaceBackingSize;
```

## See Also

### Deprecated

- [NSOpenGLCPSwapInterval](nsopenglcpswapinterval.md): Deprecated. Sets or gets the swap interval.
- [NSOpenGLCPSurfaceOrder](nsopenglcpsurfaceorder.md): Deprecated. Get or set the surface order.
- [NSOpenGLCPSurfaceOpacity](nsopenglcpsurfaceopacity.md): Deprecated. Set or get the surface opacity.
- [NSOpenGLCPReclaimResources](nsopenglcpreclaimresources.md): Deprecated. Enable or disable reclaiming resources.
- [NSOpenGLCPCurrentRendererID](nsopenglcpcurrentrendererid.md): Deprecated. The current renderer ID. You can get this setting.
- [NSOpenGLCPGPUVertexProcessing](nsopenglcpgpuvertexprocessing.md): Deprecated. The CPU is currently processing vertices with the GPU. You can get this state.
- [NSOpenGLCPGPUFragmentProcessing](nsopenglcpgpufragmentprocessing.md): Deprecated. The CPU is currently processing fragments with the GPU. You can get this state.
- [NSOpenGLCPHasDrawable](nsopenglcphasdrawable.md): Deprecated. Returns a Boolean that indicates whether a drawable is attached to the context.
- [NSOpenGLCPMPSwapsInFlight](nsopenglcpmpswapsinflight.md): Deprecated. The number of frames that the multithreaded OpenGL engine can process before stalling. The default value is 1. New frames are queued when the application calls the [flushBuffer](nsopenglcontext/flushbuffer%28%29.md) method. A larger number may improve overall performance, but adds latency between when a frame is rendered and when a frame is displayed. Interactive applications should leave this value at the default.
- [NSOpenGLCPSwapRectangle](nsopenglcpswaprectangle.md): Deprecated. Sets or gets the swap rectangle.
- [NSOpenGLCPSwapRectangleEnable](nsopenglcpswaprectangleenable.md): Deprecated. Enables or disables the swap rectangle in the context’s drawable object.
- [NSOpenGLCPRasterizationEnable](nsopenglcprasterizationenable.md): Deprecated. If disabled, all rasterization of 2D and 3D primitives is disabled.
- [NSOpenGLCPStateValidation](nsopenglcpstatevalidation.md): Deprecated. If enabled, OpenGL inspects the context state each time the [update](nsopenglcontext/update%28%29.md) method is called to ensure that it is in an appropriate state for switching between renderers.
- [NSOpenGLCPSurfaceSurfaceVolatile](nsopenglcpsurfacesurfacevolatile.md): Deprecated.
