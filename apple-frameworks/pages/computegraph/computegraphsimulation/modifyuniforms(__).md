> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/computegraphsimulation/modifyuniforms(_:)

# modifyUniforms(\_:)

**Framework:** Compute Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Provides read/write access to the entire uniforms buffer for CPU access.

## Declaration

```swift
final func modifyUniforms<E, R>(_ body: (UnsafeMutableRawBufferPointer) throws(E) -> R) throws(E) -> R where E : Error, R : ~Copyable
```

<a id="discussion"></a>

## Discussion

ComputeGraph will upload the changes to the GPU before the next simulation.
