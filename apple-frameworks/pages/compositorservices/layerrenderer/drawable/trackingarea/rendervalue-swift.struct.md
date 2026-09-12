> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/trackingarea/rendervalue-swift.struct](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/trackingarea/rendervalue-swift.struct)

# LayerRenderer.Drawable.TrackingArea.RenderValue (Swift)

**Framework:** Compositor Services  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 26.0+

A value used when rendering a tracking area.

## Declaration

```swift
struct RenderValue
```

<a id="overview"></a>

## Overview

When rendering to [cp_drawable_get_tracking_areas_texture](../../../cp_drawable_get_tracking_areas_texture.md) use this value to write the pixel value. Upper bound limit is based on pixel format set by [cp_layer_renderer_configuration_get_tracking_areas_format](../../../cp_layer_renderer_configuration_get_tracking_areas_format.md) Can change per-frame for the same rendered mesh/object. A value of 0 is reserved to represent the absence of a tracking area.

## Topics

### Initializers

- [init(\_:)](rendervalue-swift.struct/init%28__%29.md)
- [init(rawValue:)](rendervalue-swift.struct/init%28rawvalue_%29.md)

### Type Properties

- [invalid](rendervalue-swift.struct/invalid.md): Render value reserved as invalid.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# cp_tracking_area_render_value (Objective-C)

**Framework:** Compositor Services  
**Kind:** Type Alias  
**Availability:** macOS 26.0+ · visionOS 26.0+

A value used when rendering a tracking area.

## Declaration

```objectivec
typedef uint16_t cp_tracking_area_render_value;
```

<a id="overview"></a>

## Overview

When rendering to [cp_drawable_get_tracking_areas_texture](../../../cp_drawable_get_tracking_areas_texture.md) use this value to write the pixel value. Upper bound limit is based on pixel format set by [cp_layer_renderer_configuration_get_tracking_areas_format](../../../cp_layer_renderer_configuration_get_tracking_areas_format.md) Can change per-frame for the same rendered mesh/object. A value of 0 is reserved to represent the absence of a tracking area.
