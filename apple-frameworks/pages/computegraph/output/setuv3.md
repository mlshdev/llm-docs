> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/output/setuv3](https://developer.apple.com/documentation/computegraph/output/setuv3)

# output::setUV3

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Sets the third UV coordinate set for the rendered output mesh.

## Declaration

```swift
void output::setUV3(float4 value)
```

## Parameters

- `value`: The UV coordinate value to assign to all vertices in the output range.

<a id="discussion"></a>

## Discussion

This function assigns a custom UV coordinate to the third texture coordinate channel of the output mesh. If the mesh doesn’t already have a UV3 channel, it will be created. This enables multi-texturing and advanced shader effects.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/output__setUV3.svg)

> **Note**

> Reads and writes to output attribute `float4 uv3`
