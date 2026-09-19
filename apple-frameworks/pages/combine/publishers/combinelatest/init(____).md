> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/combinelatest/init(_:_:)

# init(\_:\_:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that receives and combines the latest elements from two publishers.

## Declaration

```swift
init(_ a: A, _ b: B)
```

## Parameters

- `a`: The first upstream publisher.
- `b`: The second upstream publisher.
