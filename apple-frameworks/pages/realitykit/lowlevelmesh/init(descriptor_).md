> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelmesh/init(descriptor:)

# init(descriptor:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Constructs a low-level mesh from a descriptor.

## Declaration

```swift
@MainActor init(descriptor: LowLevelMesh.Descriptor) throws
```

## Parameters

- `descriptor`: An object that defines the structure of the low-level mesh.

<a id="discussion"></a>

## Discussion

> **Throws**

> If the descriptor is invalid or if you do not successfully allocate its memory.
