> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/zip/init(_:_:)](https://developer.apple.com/documentation/combine/publishers/zip/init(_:_:))

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
