> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/tryallsatisfy/predicate

# predicate

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A closure that evaluates each received element.

## Declaration

```swift
let predicate: (Upstream.Output) throws -> Bool
```

<a id="discussion"></a>

## Discussion

Return `true` to continue, or `false` to cancel the upstream and complete. The closure may throw, in which case the publisher cancels the upstream publisher and fails with the thrown error.

## See Also

### Inspecting publisher properties

- [upstream](upstream.md): The publisher from which this publisher receives elements.
