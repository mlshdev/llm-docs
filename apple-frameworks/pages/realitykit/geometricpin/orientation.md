> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/geometricpin/orientation

# orientation

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Calculates and returns the current orientation of the pin relative to the pin’s owning entity, adjusted by the optional offset orientation.

## Declaration

```swift
@MainActor var orientation: simd_quatf? { get }
```

<a id="discussion"></a>

## Discussion

If the pin is on a skeletal joint but there is no skeletal joint matching the given skeletal joint name, this property returns `nil`.
