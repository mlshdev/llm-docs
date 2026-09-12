> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simdstorage/subscript(_:)](https://developer.apple.com/documentation/swift/simdstorage/subscript(_:))

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses the element at the specified index.

## Declaration

```swift
subscript(index: Int) -> Self.Scalar { get set }
```

## Parameters

- `index`: The index of the element to access. `index` must be in the range `0..<scalarCount`.

## Default Implementations

### SIMDStorage Implementations

- [subscript(\_:)](subscript%28__%29-11tl0.md): Extracts the scalars at specified indices to form a SIMD2.
- [subscript(\_:)](subscript%28__%29-4bxif.md): Extracts the scalars at specified indices to form a SIMD64.
- [subscript(\_:)](subscript%28__%29-4wdyq.md): Extracts the scalars at specified indices to form a SIMD4.
- [subscript(\_:)](subscript%28__%29-5dslw.md): Extracts the scalars at specified indices to form a SIMD8.
- [subscript(\_:)](subscript%28__%29-8lp1s.md): Extracts the scalars at specified indices to form a SIMD16.
- [subscript(\_:)](subscript%28__%29-9go95.md): Extracts the scalars at specified indices to form a SIMD32.
- [subscript(\_:)](subscript%28__%29-9ota9.md): Extracts the scalars at specified indices to form a SIMD3.
