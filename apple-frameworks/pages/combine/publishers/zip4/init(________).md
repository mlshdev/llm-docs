> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/zip4/init(_:_:_:_:)

# init(\_:\_:\_:\_:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher created by applying the zip function to four upstream publishers.

## Declaration

```swift
init(_ a: A, _ b: B, _ c: C, _ d: D)
```

## Parameters

- `a`: A publisher to zip.
- `b`: A second publisher to zip.
- `c`: A third publisher to zip.
- `d`: A fourth publisher to zip.
