> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/trymap/transform](https://developer.apple.com/documentation/combine/publishers/trymap/transform)

# transform

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The error-throwing closure that transforms elements from the upstream publisher.

## Declaration

```swift
let transform: (Upstream.Output) throws -> Output
```

## See Also

### Inspecting publisher properties

- [upstream](upstream.md): The publisher from which this publisher receives elements.
