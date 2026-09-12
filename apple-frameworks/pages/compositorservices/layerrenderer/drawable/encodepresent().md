> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/encodepresent()](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/encodepresent())

# encodePresent() (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 26.0+

Encodes a notification event to the specified command buffer to present the drawable’s content onscreen.

## Declaration

```swift
func encodePresent()
```

<a id="discussion"></a>

## Discussion

> **Note**

> Commit the command buffer to the layer queue before calling present.

Call this function as the last step before committing the specified command buffer. Specifically, call it after you finish encoding all the work required to render the frame, and immediately before you call the command buffer’s [commit()](../../../metal/mtlcommandbuffer/commit%28%29.md) method. The function adds a presentation event to the buffer that causes the compositor to display your frame.

# cp_drawable_mtl4_encode_present (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Encodes a notification event to the specified command buffer to present the drawable’s content onscreen.

## Declaration

```objectivec
void cp_drawable_mtl4_encode_present(cp_drawable_t drawable);
```

## Parameters

- `drawable`: The drawable for a frame.

<a id="discussion"></a>

## Discussion

> **Note**

> Commit the command buffer to the layer queue before calling present.

Call this function as the last step before committing the specified command buffer. Specifically, call it after you finish encoding all the work required to render the frame, and immediately before you call the command buffer’s [commit](../../../metal/mtlcommandbuffer/commit%28%29.md) method. The function adds a presentation event to the buffer that causes the compositor to display your frame.
