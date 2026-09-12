> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/structuredefinition/typename](https://developer.apple.com/documentation/computegraph/computenodegraph/structuredefinition/typename)

# typeName

**Framework:** Compute Graph  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

The name used to refer to the structure type.

## Declaration

```swift
var typeName: String
```

<a id="discussion"></a>

## Discussion

This is the identifier that appears in generated Metal source and in graph serialization, for example `"Particle"` or `"EmitterUniforms"`.
