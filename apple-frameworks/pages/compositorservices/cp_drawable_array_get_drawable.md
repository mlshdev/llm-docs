> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_drawable_array_get_drawable](https://developer.apple.com/documentation/compositorservices/cp_drawable_array_get_drawable)

# cp_drawable_array_get_drawable

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns the drawable at the specified index in the array.

## Declaration

```objectivec
cp_drawable_tcp_drawable_array_get_drawable(cp_drawable_array_t drawable_array, size_t index);
```

## Parameters

- `drawable_array`: The drawable array for a frame.
- `index`: The index of the drawable you want. The index must be greater than or equal to `0` and less than the value that [cp_drawable_array_get_count](cp_drawable_array_get_count.md) returns.

<a id="return-value"></a>

## Return Value

The drawable available for drawing at the specified index.

<a id="discussion"></a>

## Discussion

The [cp_drawable_t](cp_drawable_t.md) type contains the textures and other information you need to set up your render descriptor in Metal.
