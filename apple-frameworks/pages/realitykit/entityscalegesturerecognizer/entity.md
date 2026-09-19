> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/entityscalegesturerecognizer/entity

# entity

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

The entity the receiver is associated with

## Declaration

```swift
@MainActor @preconcurrency var entity: (any HasCollision)? { get set }
```

## See Also

### Using the recognizer

- [canPrevent(\_:)](canprevent%28__%29.md)
- [touchesBegan(\_:with:)](touchesbegan%28__with_%29.md): Sent to the gesture recognizer when one or more fingers touch down on the associated entity.
