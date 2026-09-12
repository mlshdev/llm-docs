> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/magnificationgesture](https://developer.apple.com/documentation/swiftui/magnificationgesture)

# MagnificationGesture

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A gesture that recognizes a magnification motion and tracks the amount of magnification.

> Use [MagnifyGesture](magnifygesture.md) instead.

## Declaration

```swift
nonisolated struct MagnificationGesture
```

## Topics

### Creating the gesture

- [init(minimumScaleDelta:)](magnificationgesture/init%28minimumscaledelta_%29.md): Deprecated. Creates a magnification gesture with a given minimum delta for the gesture to start.
- [minimumScaleDelta](magnificationgesture/minimumscaledelta.md): Deprecated. The minimum required delta before the gesture starts.

## Relationships

### Conforms To

- [Gesture](gesture.md)

## See Also

### Deprecated gestures

- [RotationGesture](rotationgesture.md): Deprecated. A gesture that recognizes a rotation motion and tracks the angle of the rotation.
