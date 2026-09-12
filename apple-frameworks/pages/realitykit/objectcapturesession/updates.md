> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/objectcapturesession/updates](https://developer.apple.com/documentation/realitykit/objectcapturesession/updates)

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
