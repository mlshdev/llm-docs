> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/double/simd8storage/subscript(_:)](https://developer.apple.com/documentation/swift/double/simd8storage/subscript(_:))

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses the element at the specified index.

## Declaration

```swift
subscript(index: Int) -> Double { get set }
```

## Parameters

- `index`: The index of the element to access. `index` must be in the range `0..<scalarCount`.
