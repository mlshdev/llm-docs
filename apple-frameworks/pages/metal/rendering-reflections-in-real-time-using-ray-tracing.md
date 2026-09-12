> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/rendering-reflections-in-real-time-using-ray-tracing](https://developer.apple.com/documentation/metal/rendering-reflections-in-real-time-using-ray-tracing)

# Rendering reflections in real time using ray tracing

**Interface languages:** Swift, Objective-C

**Framework:** Metal  
**Kind:** Sample Code  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · Xcode 26.3+

Implement realistic real-time lighting by dynamically generating reflection maps by encoding a ray-tracing compute pass.

<a id="overview"></a>

## Overview

This sample code project relates to multiple WWDC sessions, including:

- [10089: Bring your advanced games to Apple platforms](https://developer.apple.com/wwdc24/10089/)
- [10101: Go bindless with Metal 3](https://developer.apple.com/wwdc22/10101/)
- [10286: Explore bindless rendering in Metal](https://developer.apple.com/wwdc21/10286/)
- [10150: Explore hybrid rendering with Metal ray tracing](https://developer.apple.com/wwdc21/10150/)

<a id="Configure-the-sample-code-project"></a>

### Configure the sample code project

To run this sample app, you need the following:

- A Mac with macOS 13 or later, and Xcode 15.3 or later
- An iOS device with iOS 16 or later

> **Note**

> This sample doesn’t support running in Simulator.

## See Also

### Ray tracing

- [Accelerating ray tracing using Metal](accelerating-ray-tracing-using-metal.md): Implement ray-traced rendering using GPU-based parallel processing.
- [Control the ray tracing process using intersection queries](control-the-ray-tracing-process-using-intersection-queries.md): Explicitly enumerate a ray’s intersections with acceleration structures by creating an intersection query object.
- [Accelerating ray tracing and motion blur using Metal](accelerating-ray-tracing-and-motion-blur-using-metal.md): Generate ray-traced images with motion blur using GPU-based parallel processing.
- [Rendering a curve primitive in a ray tracing scene](rendering-a-curve-primitive-in-a-ray-tracing-scene.md): Implement ray traced rendering using GPU-based parallel processing.
