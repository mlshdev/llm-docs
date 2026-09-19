> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnboundsprediction-swift.struct

# CNBoundsPrediction

**Framework:** Cinematic  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

A structure representing the bounds of the predicted subject.

## Declaration

```swift
struct CNBoundsPrediction
```

## Topics

### Instance Properties

- [confidence](cnboundsprediction-swift.struct/confidence.md): A number between 0.0 and 1.0 representing the probability that a defined object is within the bounds.
- [normalizedBounds](cnboundsprediction-swift.struct/normalizedbounds.md): The bounds of the detected object in normalized coordinates where (0.0, 0.0) is the upper-left corner, and (1.0, 1.0) is the lower-right.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Custom Object Tracking

- [CNObjectTracker](cnobjecttracker-1n598.md): An object that converts a normalized point or rectangle into a detection track that tracks an object over time.
