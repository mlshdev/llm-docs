> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/merge/init(_:_:)

# init(\_:\_:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher created by applying the merge function to two upstream publishers.

## Declaration

```swift
init(_ a: A, _ b: B)
```

## Parameters

- `a`: A publisher to merge
- `b`: A second publisher to merge.
