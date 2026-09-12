> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/trycatch/handler](https://developer.apple.com/documentation/combine/publishers/trycatch/handler)

# handler

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A closure that accepts the upstream failure as input and either returns a publisher to replace the upstream publisher or throws an error.

## Declaration

```swift
let handler: (Upstream.Failure) throws -> NewPublisher
```

## See Also

### Inspecting publisher properties

- [upstream](upstream.md): The publisher from which this publisher receives its elements.
