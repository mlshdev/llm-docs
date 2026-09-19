> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_capabilities_get_default_render_quality

# cp_layer_renderer_capabilities_get_default_render_quality

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns default render quality for drawing on this platform.

## Declaration

```objectivec
cp_render_quality_t cp_layer_renderer_capabilities_get_default_render_quality(cp_layer_renderer_capabilities_t layer_capabilities);
```

## Parameters

- `layer_capabilities`: The layer capabilities to query.

<a id="return-value"></a>

## Return Value

The default render quality allowed for drawing.

<a id="discussion"></a>

## Discussion

This should be used as a base value for the platform quality for drawing.

for usage.
