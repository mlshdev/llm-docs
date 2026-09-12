> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simdstorage/subscript(_:)-5dslw](https://developer.apple.com/documentation/swift/simdstorage/subscript(_:)-5dslw)

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Extracts the scalars at specified indices to form a SIMD8.

## Declaration

```swift
subscript<Index>(index: SIMD8<Index>) -> SIMD8<Self.Scalar> where Index : FixedWidthInteger, Index : SIMDScalar, Self.Scalar : SIMDScalar { get }
```

<a id="overview"></a>

## Overview

The elements of the index vector are wrapped modulo the count of elements in this vector. Because of this, the index is always in-range and no trap can occur.
