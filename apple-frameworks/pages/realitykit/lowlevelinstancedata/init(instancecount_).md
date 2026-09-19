> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelinstancedata/init(instancecount:)

# init(instanceCount:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a low-level instance data object with an instance count.

## Declaration

```swift
convenience init(instanceCount: Int) throws
```

## Parameters

- `instanceCount`: The number of instances in this instance data object.

<a id="discussion"></a>

## Discussion

This initializer also applies the instance count to [instanceCapacity](instancecapacity.md).
