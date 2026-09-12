> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_properties_get_tracking_areas_max_value](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_properties_get_tracking_areas_max_value)

# cp_layer_renderer_properties_get_tracking_areas_max_value

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns the max render value for tracking areas’ render values.

## Declaration

```objectivec
cp_tracking_area_render_value cp_layer_renderer_properties_get_tracking_areas_max_value(cp_layer_renderer_properties_t properties);
```

<a id="return-value"></a>

## Return Value

The max render value for the tracking areas render values.

<a id="discussion"></a>

## Discussion

The layer’s configuration determines the total number of available tracking areas. This will be the max render value available, based on [cp_layer_renderer_configuration_get_tracking_areas_format](cp_layer_renderer_configuration_get_tracking_areas_format.md) function.
