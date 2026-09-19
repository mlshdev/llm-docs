> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/hasanchoring/anchoridentifier

# anchorIdentifier

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The identifier of the AR anchor with which the anchor entity is associated, or `nil` if it isn’t currently anchored.

## Declaration

```swift
@MainActor @preconcurrency var anchorIdentifier: UUID? { get }
```
