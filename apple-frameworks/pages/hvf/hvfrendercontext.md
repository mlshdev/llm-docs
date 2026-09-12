> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf/hvfrendercontext](https://developer.apple.com/documentation/hvf/hvfrendercontext)

# HVFRenderContext

**Interface language:** Objective-C

**Framework:** hvf  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The type of the callback passed to `HVF_render_current_part()`.

## Declaration

```objectivec
typedef enum HVFPartRenderAction (*)(enum HVFPartRenderInstruction, const union HVFPartRenderParameters *, void *) HVFRenderContext;
```

<a id="discussion"></a>

## Discussion

The scaler will call the supplied function to pass rendering instructions. The value of `caller_data` passed to `HVF_render_current_part()` will be passed to the callback via the last parameter.
