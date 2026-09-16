> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/rotationgesture

# RotationGesture

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.0+ (deprecated in 27.2) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

A gesture that recognizes a rotation motion and tracks the angle of the rotation.

> Use [RotateGesture](rotategesture.md) instead.

## Declaration

```swift
nonisolated struct RotationGesture
```

## Topics

### Creating the gesture

- [init(minimumAngleDelta:)](rotationgesture/init%28minimumangledelta_%29.md): Deprecated. Creates a rotation gesture with a minimum delta for the gesture to start.
- [minimumAngleDelta](rotationgesture/minimumangledelta.md): Deprecated. The minimum delta required before the gesture succeeds.

## Relationships

### Conforms To

- [Gesture](gesture.md)

## See Also

### Deprecated gestures

- [MagnificationGesture](magnificationgesture.md): Deprecated. A gesture that recognizes a magnification motion and tracks the amount of magnification.
