> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/module/debug/drawline

# module::debug::drawLine

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Draws a debug line

## Declaration

```swift
void module::debug::drawLine(float3 from, float3 to, half4 color)
```

## Parameters

- `from`: Start of line
- `to`: End of line
- `color`: Color of line

<a id="discussion"></a>

## Discussion

Debug Lines are not enabled by default. You enable them in your editor or by setting `LinkOptions/debugDraw` to true when compiling your pipelines, and assigning a `DebugLinesProvider` to your ComputeGraphSimulation.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/module__debug__drawLine.svg)
