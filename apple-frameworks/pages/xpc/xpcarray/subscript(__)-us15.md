> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xpc/xpcarray/subscript(_:)-us15

# subscript(\_:)

**Framework:** XPC  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Get or set a value in this array as data.

## Declaration

```swift
subscript(index: Int) -> RawSpan? { get set }
```

## Parameters

- `index`: The index at which to get or set the data.

<a id="return-value"></a>

## Return Value

A RawSpan of the data or `nil` if no such value was found.
