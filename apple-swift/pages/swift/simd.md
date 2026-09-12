> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd](https://developer.apple.com/documentation/swift/simd)

# SIMD

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A SIMD vector of a fixed number of elements.

## Declaration

```swift
protocol SIMD<Scalar> : CustomStringConvertible, Decodable, Encodable, ExpressibleByArrayLiteral, Hashable, SIMDStorage
```

## Topics

### Operators

- [&(\_:\_:)](simd/&%28____%29-7euv2.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&(\_:\_:)](simd/&%28____%29-9iwe1.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&(\_:\_:)](simd/&%28____%29-hube.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&\*(\_:\_:)](simd/&_%28____%29-6dnx3.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&\*(\_:\_:)](simd/&_%28____%29-6q9r4.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&\*(\_:\_:)](simd/&_%28____%29-96x3e.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&\*=(\_:\_:)](simd/&_=%28____%29-2nncu.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&\*=(\_:\_:)](simd/&_=%28____%29-7upvw.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&+(\_:\_:)](simd/&+%28____%29-11ezq.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&+(\_:\_:)](simd/&+%28____%29-2dwe6.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&+(\_:\_:)](simd/&+%28____%29-7atvo.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&+=(\_:\_:)](simd/&+=%28____%29-4nb37.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&+=(\_:\_:)](simd/&+=%28____%29-6bl8h.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&-(\_:\_:)](simd/&-%28____%29-18r5t.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&-(\_:\_:)](simd/&-%28____%29-3k78n.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&-(\_:\_:)](simd/&-%28____%29-8sti5.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&-=(\_:\_:)](simd/&-=%28____%29-8wqjs.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&-=(\_:\_:)](simd/&-=%28____%29-9uxv2.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&=(\_:\_:)](simd/&=%28____%29-8ruc4.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&=(\_:\_:)](simd/&=%28____%29-9p2uz.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&\>\>(\_:\_:)](simd/&__%28____%29-4zcvd.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&\>\>(\_:\_:)](simd/&__%28____%29-5ccr.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&\<\<(\_:\_:)](simd/&__%28____%29-5zfif.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&\<\<(\_:\_:)](simd/&__%28____%29-6vdh9.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&\>\>(\_:\_:)](simd/&__%28____%29-8f94f.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&\<\<(\_:\_:)](simd/&__%28____%29-9p0g4.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&\<\<=(\_:\_:)](simd/&__=%28____%29-2r7mx.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&\>\>=(\_:\_:)](simd/&__=%28____%29-66i5n.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&\>\>=(\_:\_:)](simd/&__=%28____%29-8yrf.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [&\<\<=(\_:\_:)](simd/&__=%28____%29-94hft.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [\*(\_:\_:)](simd/_%28____%29-33k6i.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [\*(\_:\_:)](simd/_%28____%29-4fl9b.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [\*(\_:\_:)](simd/_%28____%29-4wltm.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [\*=(\_:\_:)](simd/_=%28____%29-33czt.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [\*=(\_:\_:)](simd/_=%28____%29-jal7.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [+(\_:\_:)](simd/+%28____%29-48zcp.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [+(\_:\_:)](simd/+%28____%29-64jan.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [+(\_:\_:)](simd/+%28____%29-68uuk.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [+=(\_:\_:)](simd/+=%28____%29-14pp9.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [+=(\_:\_:)](simd/+=%28____%29-3jf1j.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [+=(\_:\_:)](simd/+=%28____%29-9f7e0.md): Conforms when `Self` conforms to `AdditiveArithmetic` and `Scalar` conforms to `FloatingPoint`.
- [-(\_:)](simd/-%28__%29-7asi6.md): Deprecated. Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [-(\_:)](simd/-%28__%29-9ukvl.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [-(\_:\_:)](simd/-%28____%29-2ad59.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [-(\_:\_:)](simd/-%28____%29-3lx2i.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [-(\_:\_:)](simd/-%28____%29-oego.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [-=(\_:\_:)](simd/-=%28____%29-4uwnp.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [-=(\_:\_:)](simd/-=%28____%29-6dwmc.md): Conforms when `Self` conforms to `AdditiveArithmetic` and `Scalar` conforms to `FloatingPoint`.
- [-=(\_:\_:)](simd/-=%28____%29-6ejxe.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [.!=(\_:\_:)](simd/'.!=%28____%29-3m98p.md): A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd/'.!=%28____%29-402ba.md): Returns a vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd/'.!=%28____%29-8undu.md): Returns a vector mask with the result of a pointwise inequality comparison.
- [.==(\_:\_:)](simd/'.==%28____%29-1nb4h.md): A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd/'.==%28____%29-5akc8.md): Returns a vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd/'.==%28____%29-8utr5.md): Returns a vector mask with the result of a pointwise equality comparison.
- [.\>(\_:\_:)](simd/'._%28____%29-2bb66.md): Conforms when `Scalar` conforms to `Comparable`. Returns a vector mask with the result of a pointwise greater than comparison.
- [.\<(\_:\_:)](simd/'._%28____%29-2g6i2.md): Conforms when `Scalar` conforms to `Comparable`. Returns a vector mask with the result of a pointwise less than comparison.
- [.\>(\_:\_:)](simd/'._%28____%29-6kr63.md): Conforms when `Scalar` conforms to `Comparable`. Returns a vector mask with the result of a pointwise greater than comparison.
- [.\>(\_:\_:)](simd/'._%28____%29-7ad36.md): Conforms when `Scalar` conforms to `Comparable`. Returns a vector mask with the result of a pointwise greater than comparison.
- [.\<(\_:\_:)](simd/'._%28____%29-8bwmo.md): Conforms when `Scalar` conforms to `Comparable`. Returns a vector mask with the result of a pointwise less than comparison.
- [.\<(\_:\_:)](simd/'._%28____%29-935pf.md): Conforms when `Scalar` conforms to `Comparable`. Returns a vector mask with the result of a pointwise less than comparison.
- [.\>=(\_:\_:)](simd/'._=%28____%29-1grcf.md): Conforms when `Scalar` conforms to `Comparable`. Returns a vector mask with the result of a pointwise greater than or equal comparison.
- [.\>=(\_:\_:)](simd/'._=%28____%29-4poyx.md): Conforms when `Scalar` conforms to `Comparable`. Returns a vector mask with the result of a pointwise greater than or equal comparison.
- [.\<=(\_:\_:)](simd/'._=%28____%29-7ulie.md): Conforms when `Scalar` conforms to `Comparable`. Returns a vector mask with the result of a pointwise less than or equal comparison.
- [.\<=(\_:\_:)](simd/'._=%28____%29-8vgvo.md): Conforms when `Scalar` conforms to `Comparable`. Returns a vector mask with the result of a pointwise less than or equal comparison.
- [.\>=(\_:\_:)](simd/'._=%28____%29-d7g2.md): Conforms when `Scalar` conforms to `Comparable`. Returns a vector mask with the result of a pointwise greater than or equal comparison.
- [.\<=(\_:\_:)](simd/'._=%28____%29-iulp.md): Conforms when `Scalar` conforms to `Comparable`. Returns a vector mask with the result of a pointwise less than or equal comparison.
- [%(\_:\_:)](simd/_%28____%29-1qdv9.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [/(\_:\_:)](simd/_%28____%29-1rb4.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [|(\_:\_:)](simd/_%28____%29-225ln.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [/(\_:\_:)](simd/_%28____%29-2hi2t.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [/(\_:\_:)](simd/_%28____%29-2om3p.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [|(\_:\_:)](simd/_%28____%29-3ge91.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [%(\_:\_:)](simd/_%28____%29-3scvv.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [%(\_:\_:)](simd/_%28____%29-4djx9.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [|(\_:\_:)](simd/_%28____%29-5f3rz.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [^(\_:\_:)](simd/_%28____%29-620ag.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [^(\_:\_:)](simd/_%28____%29-6ryjr.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [/(\_:\_:)](simd/_%28____%29-6tba5.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [^(\_:\_:)](simd/_%28____%29-73syd.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [/(\_:\_:)](simd/_%28____%29-80bu5.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [/(\_:\_:)](simd/_%28____%29-8gl48.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [%=(\_:\_:)](simd/_=%28____%29-17fvb.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [|=(\_:\_:)](simd/_=%28____%29-1olgw.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [/=(\_:\_:)](simd/_=%28____%29-1xum3.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [/=(\_:\_:)](simd/_=%28____%29-2i5w5.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [^=(\_:\_:)](simd/_=%28____%29-5qmfn.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [|=(\_:\_:)](simd/_=%28____%29-7q26h.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [/=(\_:\_:)](simd/_=%28____%29-9rh2.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [^=(\_:\_:)](simd/_=%28____%29-9yqbl.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [/=(\_:\_:)](simd/_=%28____%29-dtaz.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [%=(\_:\_:)](simd/_=%28____%29-eq5q.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [~(\_:)](simd/~%28__%29.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.

### Associated Types

- [MaskStorage](simd/maskstorage.md): The mask type resulting from pointwise comparisons of this vector type.

### Initializers

- [init(\_:)](simd/init%28__%29-18uy8.md): Creates a vector from the given sequence.
- [init(\_:)](simd/init%28__%29-4h623.md): Deprecated.
- [init(repeating:)](simd/init%28repeating_%29.md): A vector with the specified scalar in all lanes.

### Instance Properties

- [indices](simd/indices.md): The valid indices for subscripting the vector.
- [leadingZeroBitCount](simd/leadingzerobitcount.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [nonzeroBitCount](simd/nonzerobitcount.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.
- [trailingZeroBitCount](simd/trailingzerobitcount.md): Conforms when `Scalar` conforms to `FixedWidthInteger`.

### Instance Methods

- [addProduct(\_:\_:)](simd/addproduct%28____%29-256j6.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [addProduct(\_:\_:)](simd/addproduct%28____%29-3mvjt.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [addProduct(\_:\_:)](simd/addproduct%28____%29-i1fp.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [addingProduct(\_:\_:)](simd/addingproduct%28____%29-4h4k3.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [addingProduct(\_:\_:)](simd/addingproduct%28____%29-59qn8.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [addingProduct(\_:\_:)](simd/addingproduct%28____%29-kk15.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [clamp(lowerBound:upperBound:)](simd/clamp%28lowerbound_upperbound_%29-3tdwm.md): Conforms when `Scalar` conforms to `Comparable`.
- [clamp(lowerBound:upperBound:)](simd/clamp%28lowerbound_upperbound_%29-yh51.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [clamped(lowerBound:upperBound:)](simd/clamped%28lowerbound_upperbound_%29-4k4gy.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [clamped(lowerBound:upperBound:)](simd/clamped%28lowerbound_upperbound_%29-9hl58.md): Conforms when `Scalar` conforms to `Comparable`.
- [formSquareRoot()](simd/formsquareroot%28%29.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [max()](simd/max%28%29-7j0po.md): Conforms when `Scalar` conforms to `FloatingPoint`. The greatest scalar in the vector.
- [max()](simd/max%28%29-l6ds.md): Conforms when `Scalar` conforms to `Comparable`. The greatest element in the vector.
- [min()](simd/min%28%29-7pa71.md): Conforms when `Scalar` conforms to `FloatingPoint`. The least scalar in the vector.
- [min()](simd/min%28%29-9z12h.md): Conforms when `Scalar` conforms to `Comparable`. The least element in the vector.
- [replace(with:where:)](simd/replace%28with_where_%29-6if0p.md): Replaces elements of this vector with `other` in the lanes where `mask` is `true`.
- [replace(with:where:)](simd/replace%28with_where_%29-91tn3.md): Replaces elements of this vector with elements of `other` in the lanes where `mask` is `true`.
- [replacing(with:where:)](simd/replacing%28with_where_%29-1nga6.md): Returns a copy of this vector, with elements replaced by elements of `other` in the lanes where `mask` is `true`.
- [replacing(with:where:)](simd/replacing%28with_where_%29-8vzk.md): Returns a copy of this vector, with elements `other` in the lanes where `mask` is `true`.
- [round(\_:)](simd/round%28__%29.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [rounded(\_:)](simd/rounded%28__%29.md): Conforms when `Scalar` conforms to `FloatingPoint`. A vector formed by rounding each lane of the source vector to an integral value according to the specified rounding `rule`.
- [squareRoot()](simd/squareroot%28%29.md): Conforms when `Scalar` conforms to `FloatingPoint`.
- [sum()](simd/sum%28%29.md): Conforms when `Scalar` conforms to `FloatingPoint`. The sum of the scalars in the vector.
- [wrappedSum()](simd/wrappedsum%28%29.md): Conforms when `Scalar` conforms to `FixedWidthInteger`. Returns the sum of the scalars in the vector, computed with wrapping addition.

### Type Properties

- [one](simd/one-428b1.md): Conforms when `Scalar` conforms to `FloatingPoint`. A vector with one in all lanes.
- [one](simd/one-6bgr9.md): Conforms when `Scalar` conforms to `FixedWidthInteger`. A vector with one in all lanes.
- [zero](simd/zero-6gnz.md): Conforms when `Scalar` conforms to `FixedWidthInteger`. A vector with zero in all lanes.
- [zero](simd/zero-8n566.md): Conforms when `Scalar` conforms to `FloatingPoint`. A vector with zero in all lanes.

### Type Methods

- [random(in:)](simd/random%28in_%29-13ruo.md): Conforms when `Scalar` conforms to `BinaryFloatingPoint` and `Scalar.RawSignificand` conforms to `FixedWidthInteger`. Returns a vector with random values from within the specified range in all lanes.
- [random(in:)](simd/random%28in_%29-3meec.md): Conforms when `Scalar` conforms to `BinaryFloatingPoint` and `Scalar.RawSignificand` conforms to `FixedWidthInteger`. Returns a vector with random values from within the specified range in all lanes.
- [random(in:)](simd/random%28in_%29-4rat4.md): Conforms when `Scalar` conforms to `FixedWidthInteger`. Returns a vector with random values from within the specified range in all lanes.
- [random(in:)](simd/random%28in_%29-5ur5a.md): Conforms when `Scalar` conforms to `FixedWidthInteger`. Returns a vector with random values from within the specified range in all lanes.
- [random(in:using:)](simd/random%28in_using_%29-5uz8w.md): Conforms when `Scalar` conforms to `FixedWidthInteger`. Returns a vector with random values from within the specified range in all lanes, using the given generator as a source for randomness.
- [random(in:using:)](simd/random%28in_using_%29-86tab.md): Conforms when `Scalar` conforms to `BinaryFloatingPoint` and `Scalar.RawSignificand` conforms to `FixedWidthInteger`. Returns a vector with random values from within the specified range in all lanes, using the given generator as a source for randomness.
- [random(in:using:)](simd/random%28in_using_%29-8bcnv.md): Conforms when `Scalar` conforms to `FixedWidthInteger`. Returns a vector with random values from within the specified range in all lanes, using the given generator as a source for randomness.
- [random(in:using:)](simd/random%28in_using_%29-8yt59.md): Conforms when `Scalar` conforms to `BinaryFloatingPoint` and `Scalar.RawSignificand` conforms to `FixedWidthInteger`. Returns a vector with random values from within the specified range in all lanes, using the given generator as a source for randomness.

## Relationships

### Inherits From

- [CustomStringConvertible](customstringconvertible.md)
- [Decodable](decodable.md)
- [Encodable](encodable.md)
- [Equatable](equatable.md)
- [ExpressibleByArrayLiteral](expressiblebyarrayliteral.md)
- [Hashable](hashable.md)
- [SIMDStorage](simdstorage.md)

### Conforming Types

- [SIMD16](simd16.md)
- [SIMD2](simd2.md)
- [SIMD3](simd3.md)
- [SIMD32](simd32.md)
- [SIMD4](simd4.md)
- [SIMD64](simd64.md)
- [SIMD8](simd8.md)
- [SIMDMask](simdmask.md)

## See Also

### Supporting Types

- [SIMDScalar](simdscalar.md): A type that can be used as an element in a SIMD vector.
- [SIMDStorage](simdstorage.md): A type that can function as storage for a SIMD vector type.
- [SIMDMask](simdmask.md)
