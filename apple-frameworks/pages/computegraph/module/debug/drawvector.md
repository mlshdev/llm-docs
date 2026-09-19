> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/module/debug/drawvector

# module::debug::drawVector

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Draws a debug vector at the current element’s position.

## Declaration

```swift
void module::debug::drawVector(float3 vector, float scale, half4 color)
```

## Parameters

- `vector`: Direction of vector
- `scale`: Length of vector. Minimum is 0.01, which corresponds to 10cm.
- `color`: Color of line

<a id="discussion"></a>

## Discussion

Debug Lines are not enabled by default. You enable them in your editor or by setting `LinkOptions/debugDraw` to true when compiling your pipelines, and assigning a `DebugLinesProvider` to your ComputeGraphSimulation.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/module__debug__drawVector.svg)
