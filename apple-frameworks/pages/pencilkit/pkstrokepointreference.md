> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokepointreference](https://developer.apple.com/documentation/pencilkit/pkstrokepointreference)

# PKStrokePointReference (Swift)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A class that represents the properties of a specific point along a stroke’s path.

## Declaration

```swift
class PKStrokePointReference
```

## Topics

### Creating a stroke point object

- [init(location:timeOffset:size:opacity:force:azimuth:altitude:)](pkstrokepointreference/init%28location_timeoffset_size_opacity_force_azimuth_altitude_%29.md): Creates a new point with the provided properties.
- [init(location:timeOffset:size:opacity:force:azimuth:altitude:secondaryScale:)](pkstrokepointreference/init%28location_timeoffset_size_opacity_force_azimuth_altitude_secondaryscale_%29.md)

### Getting the point’s location

- [location](pkstrokepointreference/location.md): The location of this point.
- [timeOffset](pkstrokepointreference/timeoffset.md): The time offset since the start of the stroke path in seconds.

### Getting the point’s touch data

- [altitude](pkstrokepointreference/altitude.md): The altitude of this point in radians.
- [azimuth](pkstrokepointreference/azimuth.md): The azimuth of this point in radians.
- [force](pkstrokepointreference/force.md): The amount of force applied by the touch.

### Getting the point’s drawing data

- [size](pkstrokepointreference/size.md): The size of the point.
- [opacity](pkstrokepointreference/opacity.md): Opacity of the point.
- [secondaryScale](pkstrokepointreference/secondaryscale.md)

### Initializers

- [init(location:timeOffset:size:opacity:force:azimuth:altitude:secondaryScale:threshold:)](pkstrokepointreference/init%28location_timeoffset_size_opacity_force_azimuth_altitude_secondaryscale_threshold_%29.md): Creates a stroke point with the specified properties, including a rendering threshold.
- [init(location:timeOffset:size:opacity:force:azimuth:altitude:secondaryScale:threshold:lateralJitter:)](pkstrokepointreference/init%28location_timeoffset_size_opacity_force_azimuth_altitude_secondaryscale_threshold_lateraljitter_%29.md): Creates a stroke point with the specified properties, including lateral jitter.

### Instance Properties

- [lateralJitter](pkstrokepointreference/lateraljitter.md): The amount of lateral particle jitter at the stroke edge for supported inks.
- [threshold](pkstrokepointreference/threshold.md): The alpha threshold for clipping the stroke rendering for supported inks.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# PKStrokePoint (Objective-C)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A class that represents the properties of a specific point along a stroke’s path.

## Declaration

```objectivec
@interface PKStrokePoint : NSObject
```

## Topics

### Creating a stroke point object

- [initWithLocation:timeOffset:size:opacity:force:azimuth:altitude:](pkstrokepointreference/init%28location_timeoffset_size_opacity_force_azimuth_altitude_%29.md): Creates a new point with the provided properties.
- [initWithLocation:timeOffset:size:opacity:force:azimuth:altitude:secondaryScale:](pkstrokepointreference/init%28location_timeoffset_size_opacity_force_azimuth_altitude_secondaryscale_%29.md)

### Getting the point’s location

- [location](pkstrokepointreference/location.md): The location of this point.
- [timeOffset](pkstrokepointreference/timeoffset.md): The time offset since the start of the stroke path in seconds.

### Getting the point’s touch data

- [altitude](pkstrokepointreference/altitude.md): The altitude of this point in radians.
- [azimuth](pkstrokepointreference/azimuth.md): The azimuth of this point in radians.
- [force](pkstrokepointreference/force.md): The amount of force applied by the touch.

### Getting the point’s drawing data

- [size](pkstrokepointreference/size.md): The size of the point.
- [opacity](pkstrokepointreference/opacity.md): Opacity of the point.
- [secondaryScale](pkstrokepointreference/secondaryscale.md)

### Instance Properties

- [lateralJitter](pkstrokepointreference/lateraljitter.md): The amount of lateral particle jitter at the stroke edge for supported inks.
- [threshold](pkstrokepointreference/threshold.md): The alpha threshold for clipping the stroke rendering for supported inks.

### Instance Methods

- [initWithLocation:timeOffset:size:opacity:force:azimuth:altitude:secondaryScale:threshold:](pkstrokepointreference/init%28location_timeoffset_size_opacity_force_azimuth_altitude_secondaryscale_threshold_%29.md): Creates a stroke point with the specified properties, including a rendering threshold.
- [initWithLocation:timeOffset:size:opacity:force:azimuth:altitude:secondaryScale:threshold:lateralJitter:](pkstrokepointreference/init%28location_timeoffset_size_opacity_force_azimuth_altitude_secondaryscale_threshold_lateraljitter_%29.md): Creates a stroke point with the specified properties, including lateral jitter.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Canvas

- [Drawing with PencilKit](drawing-with-pencilkit.md): Add expressive, low-latency drawing to your app using PencilKit.
- [Customizing Scribble with Interactions](customizing-scribble-with-interactions.md): Enable writing on a non-text-input view by adding interactions.
- [Inspecting, Modifying, and Constructing PencilKit Drawings](inspecting-modifying-and-constructing-pencilkit-drawings.md): Score users’ ability to match PencilKit drawings generated from text, by accessing the strokes and points inside PencilKit drawings.
- [Importing Bézier path data into PencilKit](importing-external-drawing-data-into-pencilkit.md): Convert existing Bézier-based stroke data into PencilKit drawing strokes.
- [Controlling stroke rendering for animation and editing](controlling-stroke-rendering-for-animation-and-editing.md): Slice, animate, and blend PencilKit strokes in code, while keeping grain texture and wet ink intact.
- [PKCanvasView](pkcanvasview.md): A view that captures Apple Pencil input and displays the rendered results in an iOS app.
- [PKDrawing](pkdrawingreference.md): A data structure that contains the drawing information captured by a canvas view.
- [PKStroke](pkstrokereference.md): A class that represents the paths, boundaries and other properties of a stroke drawn on a canvas.
- [PKStrokePath](pkstrokepathreference.md): A class that captures the components of a stroke and provides methods to find and interpolate points along the stroke’s path.
- [PKInk](pkinkreference.md): Provides a description of the creation and rendering of marks on a canvas.
- [PKStrokeRenderState](pkstrokerenderstatereference.md): An object that captures the render-time state of a stroke, such as grain texture position.
- [PKConvertedBezierPoint](pkconvertedbezierpointreference.md): An object that provides information about a B-spline control point converted from a Bézier path.
- [PKFloatRange](pkfloatrange.md): A utility class that represents range components of a stroke.
- [PKInkTypeReed](pkinktypereed.md)
