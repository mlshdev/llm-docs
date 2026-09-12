> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/tryprefixwhile/predicate](https://developer.apple.com/documentation/combine/publishers/tryprefixwhile/predicate)

# predicate

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The error-throwing closure that determines whether publishing should continue.

## Declaration

```swift
let predicate: (Publishers.TryPrefixWhile<Upstream>.Output) throws -> Bool
```

## See Also

### Inspecting publisher properties

- [upstream](upstream.md): The publisher from which this publisher receives elements.
