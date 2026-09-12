> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokepoint-swift.struct](https://developer.apple.com/documentation/pencilkit/pkstrokepoint-swift.struct)

# PKStrokePoint

**Framework:** PencilKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A structure that represents the properties of a specific point along a stroke’s path.

## Declaration

```swift
struct PKStrokePoint
```

## Mentioned In

- [Importing Bézier path data into PencilKit](importing-external-drawing-data-into-pencilkit.md)

## Topics

### Creating a stroke point object

- [init(location:timeOffset:size:opacity:force:azimuth:altitude:)](pkstrokepoint-swift.struct/init%28location_timeoffset_size_opacity_force_azimuth_altitude_%29.md): Creates a new point with the provided properties.
- [init(location:timeOffset:size:opacity:force:azimuth:altitude:secondaryScale:)](pkstrokepoint-swift.struct/init%28location_timeoffset_size_opacity_force_azimuth_altitude_secondaryscale_%29.md)
- [init(location:timeOffset:size:opacity:force:azimuth:altitude:secondaryScale:threshold:)](pkstrokepoint-swift.struct/init%28location_timeoffset_size_opacity_force_azimuth_altitude_secondaryscale_threshold_%29.md): Creates a stroke point with the specified properties, including a rendering threshold.
- [init(location:timeOffset:size:opacity:force:azimuth:altitude:secondaryScale:threshold:lateralJitter:)](pkstrokepoint-swift.struct/init%28location_timeoffset_size_opacity_force_azimuth_altitude_secondaryscale_threshold_lateraljitter_%29.md): Creates a stroke point with the specified properties, including lateral jitter.

### Getting the point’s location

- [location](pkstrokepoint-swift.struct/location.md): The location of this point.
- [timeOffset](pkstrokepoint-swift.struct/timeoffset.md): The time offset since the start of the stroke path in seconds.

### Getting the point’s touch data

- [altitude](pkstrokepoint-swift.struct/altitude.md): The altitude of this point in radians.
- [azimuth](pkstrokepoint-swift.struct/azimuth.md): The azimuth of this point in radians.
- [force](pkstrokepoint-swift.struct/force.md): The amount of force applied by the touch.

### Getting the point’s drawing data

- [size](pkstrokepoint-swift.struct/size.md): The size of this point.
- [opacity](pkstrokepoint-swift.struct/opacity.md): Opacity of the point.
- [secondaryScale](pkstrokepoint-swift.struct/secondaryscale.md)
- [threshold](pkstrokepoint-swift.struct/threshold.md): The alpha threshold for clipping the stroke rendering for supported inks.
- [lateralJitter](pkstrokepoint-swift.struct/lateraljitter.md): The amount of lateral particle jitter at the stroke edge for supported inks.

### Using reference types

- [PKStrokePointReference](pkstrokepointreference.md): A class that represents the properties of a specific point along a stroke’s path.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Canvas

- [Drawing with PencilKit](drawing-with-pencilkit.md): Add expressive, low-latency drawing to your app using PencilKit.
- [Customizing Scribble with Interactions](customizing-scribble-with-interactions.md): Enable writing on a non-text-input view by adding interactions.
- [Inspecting, Modifying, and Constructing PencilKit Drawings](inspecting-modifying-and-constructing-pencilkit-drawings.md): Score users’ ability to match PencilKit drawings generated from text, by accessing the strokes and points inside PencilKit drawings.
- [Importing Bézier path data into PencilKit](importing-external-drawing-data-into-pencilkit.md): Convert existing Bézier-based stroke data into PencilKit drawing strokes.
- [Controlling stroke rendering for animation and editing](controlling-stroke-rendering-for-animation-and-editing.md): Slice, animate, and blend PencilKit strokes in code, while keeping grain texture and wet ink intact.
- [PKCanvasView](pkcanvasview.md): A view that captures Apple Pencil input and displays the rendered results in an iOS app.
- [PKDrawing](pkdrawing-swift.struct.md): A structure representing the drawing information captured by a canvas view.
- [PKStroke](pkstroke-swift.struct.md): A structure that represents the paths, boundaries, and other properties of a stroke drawn on a canvas.
- [PKStrokePath](pkstrokepath-swift.struct.md): A structure that captures the components of a stroke and provides methods to find and interpolate points along the stroke’s path.
- [PKInk](pkink-swift.struct.md): A structure that represents an ink that specifies its type, color, and width.
