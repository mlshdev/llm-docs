> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/merge4/init(_:_:_:_:)](https://developer.apple.com/documentation/combine/publishers/merge4/init(_:_:_:_:))

# init(\_:\_:\_:\_:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher created by applying the merge function to four upstream publishers.

## Declaration

```swift
init(_ a: A, _ b: B, _ c: C, _ d: D)
```

## Parameters

- `a`: A publisher to merge
- `b`: A second publisher to merge.
- `c`: A third publisher to merge.
- `d`: A fourth publisher to merge.
