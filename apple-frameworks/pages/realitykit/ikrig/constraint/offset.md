> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/ikrig/constraint/offset

# offset

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A constraint target offset.

## Declaration

```swift
var offset: Transform
```

<a id="discussion"></a>

## Discussion

The constraints adds this offset on top of its target. Useful for cases where the target comes from a binding.
