> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf/hvf_close_part_renderer](https://developer.apple.com/documentation/hvf/hvf_close_part_renderer)

# HVF_close_part_renderer

**Interface language:** Objective-C

**Framework:** hvf  
**Kind:** Function  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Reclaim any subsidiary storage used by the renderer and destroy it.

## Declaration

```objectivec
int HVF_close_part_renderer(HVFPartRenderer *renderer);
```

<a id="discussion"></a>

## Discussion

The return value is 0 for success, nonzero for failure.
