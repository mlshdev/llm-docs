> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelinstancedata/init(instancecount:instancecapacity:)

# init(instanceCount:instanceCapacity:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a low-level instance data object with an instance count and capacity.

## Declaration

```swift
init(instanceCount: Int, instanceCapacity: Int) throws
```

## Parameters

- `instanceCount`: The number of instances this low-level instance data.
- `instanceCapacity`: The maximum number of instances this low-level instance data can hold.
