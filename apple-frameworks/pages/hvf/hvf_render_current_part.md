> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf/hvf_render_current_part](https://developer.apple.com/documentation/hvf/hvf_render_current_part)

# HVF_render_current_part

**Interface language:** Objective-C

**Framework:** hvf  
**Kind:** Function  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Render the current part using the supplied callback.

## Declaration

```objectivec
int HVF_render_current_part(HVFPartRenderer *renderer, HVFRenderContext context, void *caller_data);
```

<a id="discussion"></a>

## Discussion

The `caller_data` pointer is passed through to the callback.

The return value is 0 for success, nonzero for failure.
