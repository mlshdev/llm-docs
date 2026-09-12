> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computegraphsimulation/graphuniforms](https://developer.apple.com/documentation/computegraph/computegraphsimulation/graphuniforms)

# graphUniforms

**Framework:** Compute Graph  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Returns a read-only copy of the uniforms buffer.

## Declaration

```swift
final var graphUniforms: any MTLBuffer { get }
```

<a id="discussion"></a>

## Discussion

Use `modifyUniforms(_:)` to make modifications.
