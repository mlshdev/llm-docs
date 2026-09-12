> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/trackingarea/identifier-swift.property](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/trackingarea/identifier-swift.property)

# identifier (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns the identifier for the tracking area.

## Declaration

```swift
var identifier: LayerRenderer.Drawable.TrackingArea.Identifier { get }
```

# cp_tracking_area_get_identifier (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns the identifier for the tracking area.

## Declaration

```objectivec
cp_tracking_area_identifier cp_tracking_area_get_identifier(cp_tracking_area_t tracking_area);
```

## Parameters

- `tracking_area`: The tracking area for a frame.

<a id="return-value"></a>

## Return Value

The identifier for the tracking area. This should be a unique value for this tracking area and consistent for the rendered mesh/object across frames.
