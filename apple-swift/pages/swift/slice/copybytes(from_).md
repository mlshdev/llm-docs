> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/slice/copybytes(from:)](https://developer.apple.com/documentation/swift/slice/copybytes(from:))

# copyBytes(from:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies from a collection of `UInt8` into this buffer slice’s memory.

## Declaration

```swift
func copyBytes<C>(from source: C) where C : Collection, C.Element == UInt8
```

## Parameters

- `source`: A collection of `UInt8` elements. `source.count` must be less than or equal to this buffer slice’s `count`.

<a id="discussion"></a>

## Discussion

If the first `source.count` bytes of memory referenced by this buffer slice are bound to a type `T`, then `T` must be a trivial type, the underlying pointer must be properly aligned for accessing `T`, and `source.count` must be a multiple of `MemoryLayout<T>.stride`.

After calling `copyBytes(from:)`, the first `source.count` bytes of memory referenced by this buffer slice are initialized to raw bytes. If the memory is bound to type `T`, then it contains values of type `T`.
