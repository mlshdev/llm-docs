> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/ikresource/init(rig:)

# init(rig:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a new resource instance for a single solver using the given rig and an automatic solver identifier.

## Declaration

```swift
convenience init(rig: IKRig) throws
```

## Parameters

- `rig`: The inverse kinematics rig to be serialised into the resource.

<a id="discussion"></a>

## Discussion

> **Throws**

> Validation errors for the given rig structure.
