> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/compositorservices/cp_drawable_array_get_count

# cp_drawable_array_get_count

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns the number of drawables in the array.

## Declaration

```objectivec
size_t cp_drawable_array_get_count(cp_drawable_array_t drawable_array);
```

## Parameters

- `drawable_array`: The drawable array for a frame.

<a id="return-value"></a>

## Return Value

The number of drawables available for drawing. For example, a return value of `2` indicates there are two drawables for this frame.

<a id="discussion"></a>

## Discussion

Use the returned value as the maximum number of textures to retrieve from the [cp_drawable_array_get_drawable](cp_drawable_array_get_drawable.md) functions.
