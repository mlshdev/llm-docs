> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/trycatch/upstream

# upstream

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The publisher from which this publisher receives its elements.

## Declaration

```swift
let upstream: Upstream
```

## See Also

### Inspecting publisher properties

- [handler](handler.md): A closure that accepts the upstream failure as input and either returns a publisher to replace the upstream publisher or throws an error.
