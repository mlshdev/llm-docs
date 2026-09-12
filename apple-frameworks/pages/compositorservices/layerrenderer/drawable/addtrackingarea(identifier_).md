> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/addtrackingarea(identifier:)](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/addtrackingarea(identifier:))

# addTrackingArea(identifier:) (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns a tracking area which is create on the drawable’s list of tracking areas.

## Declaration

```swift
func addTrackingArea(identifier: LayerRenderer.Drawable.TrackingArea.Identifier) -> LayerRenderer.Drawable.TrackingArea
```

## Parameters

- `identifier`: The unique identifier for the tracking area.

<a id="return-value"></a>

## Return Value

A tracking area that was created.

<a id="discussion"></a>

## Discussion

A tracking area describes a region of a view that interacts with the gaze/cursor. Cannot use [cp_tracking_area_identifier_invalid](../../cp_tracking_area_identifier_invalid.md) as an identifier.

# cp_drawable_add_tracking_area (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns a tracking area which is create on the drawable’s list of tracking areas.

## Declaration

```objectivec
cp_tracking_area_tcp_drawable_add_tracking_area(cp_drawable_t drawable, cp_tracking_area_identifier identifier);
```

## Parameters

- `drawable`: The drawable for a frame.
- `identifier`: The unique identifier for the tracking area.

<a id="return-value"></a>

## Return Value

A tracking area that was created.

<a id="discussion"></a>

## Discussion

A tracking area describes a region of a view that interacts with the gaze/cursor. Cannot use [cp_tracking_area_identifier_invalid](../../cp_tracking_area_identifier_invalid.md) as an identifier.
