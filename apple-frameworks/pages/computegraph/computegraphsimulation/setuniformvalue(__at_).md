> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computegraphsimulation/setuniformvalue(_:at:)](https://developer.apple.com/documentation/computegraph/computegraphsimulation/setuniformvalue(_:at:))

# setUniformValue(\_:at:)

**Framework:** Compute Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Copies the contents of `value` into the location specified by `relocation`

## Declaration

```swift
final func setUniformValue<V>(_ value: V, at location: ComputeNodeGraph.Assembly.Location) where V : BitwiseCopyable
```
