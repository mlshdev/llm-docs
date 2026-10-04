> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/zip/init(_:_:)

# init(\_:\_:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that applies the zip function to two upstream publishers.

## Declaration

```swift
init(_ a: A, _ b: B)
```

## Parameters

- `a`: A publisher to zip.
- `b`: Another publisher to zip.
