> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/assertnofailure/init(upstream:prefix:file:line:)](https://developer.apple.com/documentation/combine/publishers/assertnofailure/init(upstream:prefix:file:line:))

# init(upstream:prefix:file:line:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that raises a fatal error upon receiving any failure, and otherwise republishes all received input.

## Declaration

```swift
init(upstream: Upstream, prefix: String, file: StaticString, line: UInt)
```

## Parameters

- `upstream`: The publisher from which this publisher receives elements.
- `prefix`: The string used at the beginning of the fatal error message.
- `file`: The filename used in the error message.
- `line`: The line number used in the error message.
