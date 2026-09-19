> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/sortdescriptor/init(_:comparator:)-16bsg

# init(\_:comparator:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
init(_ keyPath: any KeyPath<Compared, String?> & Sendable, comparator: String.StandardComparator = .localizedStandard)
```
