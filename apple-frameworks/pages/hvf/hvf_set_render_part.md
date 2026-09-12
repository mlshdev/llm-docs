> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf/hvf_set_render_part](https://developer.apple.com/documentation/hvf/hvf_set_render_part)

# HVF_set_render_part

**Interface language:** Objective-C

**Framework:** hvf  
**Kind:** Function  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Set the renderer to render the part indicated by the part index.

## Declaration

```objectivec
int HVF_set_render_part(HVFPartRenderer *renderer, HVFPartIndex partIndex);
```

<a id="discussion"></a>

## Discussion

This call resets the axis values to the default value of 0.0.

The return value is 0 for success, nonzero for failure.
