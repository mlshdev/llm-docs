> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/objectcapturesession/updates

# ObjectCaptureSession.Updates

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+

Used to provide an `AsyncSequence` of change events for the observable properties.

## Declaration

```swift
struct Updates<Element> where Element : Sendable
```

## Topics

### Structures

- [ObjectCaptureSession.Updates.Iterator](updates/iterator.md)

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
