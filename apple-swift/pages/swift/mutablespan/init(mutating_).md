> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mutablespan/init(mutating:)](https://developer.apple.com/documentation/swift/mutablespan/init(mutating:))

# init(mutating:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Mutate untyped memory as a typed span.

## Declaration

```swift
init(mutating mutableBytes: inout MutableRawSpan)
```

## Parameters

- `mutableBytes`: A raw span to reinterpret as typed elements.

<a id="discussion"></a>

## Discussion

The `byteCount` of `mutableBytes` must be a multiple of `Element`’s stride, and the starting address of `mutableBytes` must be well-aligned for the type of `Element`. If either of these requirements is not met, this initializer will trap at runtime.
