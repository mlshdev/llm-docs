> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hassynchronization/isowner](https://developer.apple.com/documentation/realitykit/hassynchronization/isowner)

# isOwner

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A Boolean that indicates whether the calling process owns the entity.

## Declaration

```swift
@MainActor @preconcurrency var isOwner: Bool { get }
```

<a id="discussion"></a>

## Discussion

The calling process owns the entity if the value is `true`.

## See Also

### Managing ownership

- [requestOwnership(timeout:\_:)](requestownership%28timeout___%29.md): Requests ownership of the entity.
