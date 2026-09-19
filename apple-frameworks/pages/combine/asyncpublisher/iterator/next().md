> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/asyncpublisher/iterator/next()

# next()

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Produces the next element in the prefix sequence.

## Declaration

```swift
mutating func next() async -> P.Output?
```

<a id="return-value"></a>

## Return Value

The next published element, or nil if the publisher finishes normally.
