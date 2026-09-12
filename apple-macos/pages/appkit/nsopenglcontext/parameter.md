> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglcontext/parameter](https://developer.apple.com/documentation/appkit/nsopenglcontext/parameter)

# NSOpenGLContext.Parameter (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Constants that specify context parameters.

> OpenGL API deprecated; please use Metal and MetalKit.  (Define GL_SILENCE_DEPRECATION to silence these warnings.)

## Declaration

```swift
enum Parameter
```

<a id="overview"></a>

## Overview

These attribute names are used by [setValues(\_:for:)](setvalues%28__for_%29.md) and [getValues(\_:for:)](getvalues%28__for_%29.md).

## Topics

### Parameters

- [NSOpenGLContext.Parameter.swapInterval](parameter/swapinterval.md): Deprecated. Set or get the swap interval.
- [NSOpenGLContext.Parameter.surfaceOrder](parameter/surfaceorder.md): Deprecated. Set or get the surface order.
- [NSOpenGLContext.Parameter.surfaceOpacity](parameter/surfaceopacity.md): Deprecated. Set or get the surface opacity.
- [NSOpenGLContext.Parameter.surfaceBackingSize](parameter/surfacebackingsize.md): Deprecated. Set or get the height and width of the back buffer.
- [NSOpenGLContext.Parameter.reclaimResources](parameter/reclaimresources.md): Deprecated. Enable or disable reclaiming resources.
- [NSOpenGLContext.Parameter.currentRendererID](parameter/currentrendererid.md): Deprecated. Get the current renderer ID.
- [NSOpenGLContext.Parameter.gpuVertexProcessing](parameter/gpuvertexprocessing.md): Deprecated. Get whether the CPU is currently processing vertices with the GPU.
- [NSOpenGLContext.Parameter.gpuFragmentProcessing](parameter/gpufragmentprocessing.md): Deprecated. Get whether the CPU is currently processing fragments with the GPU.
- [NSOpenGLContext.Parameter.hasDrawable](parameter/hasdrawable.md): Deprecated. Returns a Boolean that indicates whether a drawable is attached to the context.
- [NSOpenGLContext.Parameter.mpSwapsInFlight](parameter/mpswapsinflight.md): Deprecated. The number of frames that the multithreaded OpenGL engine can process before stalling.
- [NSOpenGLContext.Parameter.swapRectangle](parameter/swaprectangle.md): Deprecated. Sets or gets the swap rectangle.
- [NSOpenGLContext.Parameter.swapRectangleEnable](parameter/swaprectangleenable.md): Deprecated. Enables or disables the swap rectangle in the context’s drawable object.
- [NSOpenGLContext.Parameter.rasterizationEnable](parameter/rasterizationenable.md): Deprecated. If disabled, all rasterization of 2D and 3D primitives is disabled.
- [NSOpenGLContext.Parameter.stateValidation](parameter/statevalidation.md): Deprecated. If enabled, OpenGL inspects the context state each time the update method is called to ensure that it is in an appropriate state for switching between renderers.
- [NSOpenGLContext.Parameter.surfaceSurfaceVolatile](parameter/surfacesurfacevolatile.md): Deprecated.

### Initializers

- [init(rawValue:)](parameter/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSOpenGLContextParameter (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Constants that specify context parameters.

> OpenGL API deprecated; please use Metal and MetalKit.  (Define GL_SILENCE_DEPRECATION to silence these warnings.)

## Declaration

```objectivec
enum NSOpenGLContextParameter : NSInteger;
```

<a id="overview"></a>

## Overview

These attribute names are used by [setValues:forParameter:](setvalues%28__for_%29.md) and [getValues:forParameter:](getvalues%28__for_%29.md).

## Topics

### Parameters

- [NSOpenGLContextParameterSwapInterval](parameter/swapinterval.md): Deprecated. Set or get the swap interval.
- [NSOpenGLContextParameterSurfaceOrder](parameter/surfaceorder.md): Deprecated. Set or get the surface order.
- [NSOpenGLContextParameterSurfaceOpacity](parameter/surfaceopacity.md): Deprecated. Set or get the surface opacity.
- [NSOpenGLContextParameterSurfaceBackingSize](parameter/surfacebackingsize.md): Deprecated. Set or get the height and width of the back buffer.
- [NSOpenGLContextParameterReclaimResources](parameter/reclaimresources.md): Deprecated. Enable or disable reclaiming resources.
- [NSOpenGLContextParameterCurrentRendererID](parameter/currentrendererid.md): Deprecated. Get the current renderer ID.
- [NSOpenGLContextParameterGPUVertexProcessing](parameter/gpuvertexprocessing.md): Deprecated. Get whether the CPU is currently processing vertices with the GPU.
- [NSOpenGLContextParameterGPUFragmentProcessing](parameter/gpufragmentprocessing.md): Deprecated. Get whether the CPU is currently processing fragments with the GPU.
- [NSOpenGLContextParameterHasDrawable](parameter/hasdrawable.md): Deprecated. Returns a Boolean that indicates whether a drawable is attached to the context.
- [NSOpenGLContextParameterMPSwapsInFlight](parameter/mpswapsinflight.md): Deprecated. The number of frames that the multithreaded OpenGL engine can process before stalling.
- [NSOpenGLContextParameterSwapRectangle](parameter/swaprectangle.md): Deprecated. Sets or gets the swap rectangle.
- [NSOpenGLContextParameterSwapRectangleEnable](parameter/swaprectangleenable.md): Deprecated. Enables or disables the swap rectangle in the context’s drawable object.
- [NSOpenGLContextParameterRasterizationEnable](parameter/rasterizationenable.md): Deprecated. If disabled, all rasterization of 2D and 3D primitives is disabled.
- [NSOpenGLContextParameterStateValidation](parameter/statevalidation.md): Deprecated. If enabled, OpenGL inspects the context state each time the update method is called to ensure that it is in an appropriate state for switching between renderers.
- [NSOpenGLContextParameterSurfaceSurfaceVolatile](parameter/surfacesurfacevolatile.md): Deprecated.

### Deprecated

- [NSOpenGLCPSwapInterval](../nsopenglcpswapinterval.md): Deprecated. Sets or gets the swap interval.
- [NSOpenGLCPSurfaceOrder](../nsopenglcpsurfaceorder.md): Deprecated. Get or set the surface order.
- [NSOpenGLCPSurfaceOpacity](../nsopenglcpsurfaceopacity.md): Deprecated. Set or get the surface opacity.
- [NSOpenGLCPSurfaceBackingSize](../nsopenglcpsurfacebackingsize.md): Deprecated. Set or get the height and width of the back buffer. You can use this to let the system scale an image automatically on swapping to a variable-size buffer. The back buffer size remains fixed at the size that you set up regardless of whether the image is resized to display larger onscreen.
- [NSOpenGLCPReclaimResources](../nsopenglcpreclaimresources.md): Deprecated. Enable or disable reclaiming resources.
- [NSOpenGLCPCurrentRendererID](../nsopenglcpcurrentrendererid.md): Deprecated. The current renderer ID. You can get this setting.
- [NSOpenGLCPGPUVertexProcessing](../nsopenglcpgpuvertexprocessing.md): Deprecated. The CPU is currently processing vertices with the GPU. You can get this state.
- [NSOpenGLCPGPUFragmentProcessing](../nsopenglcpgpufragmentprocessing.md): Deprecated. The CPU is currently processing fragments with the GPU. You can get this state.
- [NSOpenGLCPHasDrawable](../nsopenglcphasdrawable.md): Deprecated. Returns a Boolean that indicates whether a drawable is attached to the context.
- [NSOpenGLCPMPSwapsInFlight](../nsopenglcpmpswapsinflight.md): Deprecated. The number of frames that the multithreaded OpenGL engine can process before stalling. The default value is 1. New frames are queued when the application calls the [flushBuffer](flushbuffer%28%29.md) method. A larger number may improve overall performance, but adds latency between when a frame is rendered and when a frame is displayed. Interactive applications should leave this value at the default.
- [NSOpenGLCPSwapRectangle](../nsopenglcpswaprectangle.md): Deprecated. Sets or gets the swap rectangle.
- [NSOpenGLCPSwapRectangleEnable](../nsopenglcpswaprectangleenable.md): Deprecated. Enables or disables the swap rectangle in the context’s drawable object.
- [NSOpenGLCPRasterizationEnable](../nsopenglcprasterizationenable.md): Deprecated. If disabled, all rasterization of 2D and 3D primitives is disabled.
- [NSOpenGLCPStateValidation](../nsopenglcpstatevalidation.md): Deprecated. If enabled, OpenGL inspects the context state each time the [update](update%28%29.md) method is called to ensure that it is in an appropriate state for switching between renderers.
- [NSOpenGLCPSurfaceSurfaceVolatile](../nsopenglcpsurfacesurfacevolatile.md): Deprecated.
