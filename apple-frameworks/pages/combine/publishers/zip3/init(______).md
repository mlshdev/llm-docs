> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/zip3/init(_:_:_:)](https://developer.apple.com/documentation/combine/publishers/zip3/init(_:_:_:))

# init(\_:\_:\_:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that applies the zip function to three upstream publishers.

## Declaration

```swift
init(_ a: A, _ b: B, _ c: C)
```

## Parameters

- `a`: A publisher to zip.
- `b`: A second publisher to zip.
- `c`: A third publisher to zip.
