> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/anchorupdatesequence/iterator

# AnchorUpdateSequence.Iterator

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

## Declaration

```swift
struct Iterator<TypeOfAnchor> where TypeOfAnchor : Anchor
```

## Topics

### Instance Methods

- [next()](iterator/next%28%29.md): Asynchronously retrieve the next anchor update.

## Relationships

### Conforms To

- [AsyncIteratorProtocol](https://developer.apple.com/documentation/swift/asynciteratorprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
