> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd3/init(_:)-3f00q](https://developer.apple.com/documentation/swift/simd3/init(_:)-3f00q)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a vector from the given sequence.

## Declaration

```swift
init<S>(_ scalars: S) where S : Sequence, Self.Scalar == S.Element
```

## Parameters

- `scalars`: The elements to use in the vector.

<a id="discussion"></a>

## Discussion

> **Precondition**

> `scalars` must have the same number of elements as the vector type.
