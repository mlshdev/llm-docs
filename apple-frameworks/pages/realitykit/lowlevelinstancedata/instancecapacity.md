> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelinstancedata/instancecapacity

# instanceCapacity

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The maximum number of instances this low-level instance data draws when set on a mesh instances component.

## Declaration

```swift
final var instanceCapacity: Int { get }
```

<a id="discussion"></a>

## Discussion

[instanceCount](instancecount.md) must be less than or equal to the `instanceCapacity` determined on initialization.
