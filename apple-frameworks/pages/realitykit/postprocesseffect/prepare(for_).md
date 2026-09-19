> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/postprocesseffect/prepare(for:)

# prepare(for:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A method where you can prepare the metal device with initial setup work.

## Declaration

```swift
nonisolated mutating func prepare(for device: any MTLDevice)
```

<a id="discussion"></a>

## Discussion

When you set or update the [customPostProcessing](../realityviewrenderingeffects/custompostprocessing.md) property, RealityKit calls this method once, after it does its setup work, but before rendering the next frame.

Adding long-running tasks in this method may cause rendering hitches.

## Default Implementations

### PostProcessEffect Implementations

- [prepare(for:)](prepare%28for_%29-69w45.md): Default implementation, which does not change the Metal device.
