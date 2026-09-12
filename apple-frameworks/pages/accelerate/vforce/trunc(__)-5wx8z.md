> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vforce/trunc(_:)-5wx8z](https://developer.apple.com/documentation/accelerate/vforce/trunc(_:)-5wx8z)

# trunc(\_:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns the integer truncation of each element in a vector of single-precision values.

## Declaration

```swift
static func trunc<U>(_ vector: U) -> [Float] where U : AccelerateBuffer, U.Element == Float
```

## See Also

### Array-Oriented Arithmetic and Auxiliary Functions

- [ceil(\_:)](ceil%28__%29-9dsdt.md): Returns the ceiling of each element in a vector of double-precision values.
- [ceil(\_:)](ceil%28__%29-57grr.md): Returns the ceiling of each element in a vector of single-precision values.
- [ceil(\_:result:)](ceil%28__result_%29-4wev4.md): Calculates the ceiling of each element in a vector of double-precision values.
- [ceil(\_:result:)](ceil%28__result_%29-6zm3u.md): Calculates the ceiling of each element in a vector of single-precision values.
- [copysign(magnitudes:signs:)](copysign%28magnitudes_signs_%29-s0r3.md): Returns each single-precision element in the magnitudes vector, setting its sign to the corresponding elements in the signs vector.
- [copysign(magnitudes:signs:)](copysign%28magnitudes_signs_%29-3jhf0.md): Returns each single-precision element in the magnitudes vector, setting its sign to the corresponding elements in the signs vector.
- [copysign(magnitudes:signs:result:)](copysign%28magnitudes_signs_result_%29-3zoya.md): Calculates each double-precision element in the magnitudes vector, setting its sign to the corresponding elements in the signs vector.
- [copysign(magnitudes:signs:result:)](copysign%28magnitudes_signs_result_%29-5umya.md): Calculates each single-precision element in the magnitudes vector, setting its sign to the corresponding elements in the signs vector.
- [floor(\_:)](floor%28__%29-64hyu.md): Returns the floor of each element in a vector of double-precision values.
- [floor(\_:)](floor%28__%29-5awna.md): Returns the floor of each element in a vector of single-precision values.
- [floor(\_:result:)](floor%28__result_%29-61veb.md): Calculates the floor of each element in a vector of double-precision values.
- [floor(\_:result:)](floor%28__result_%29-4mf4q.md): Calculates the floor of each element in a vector of single-precision values.
- [nearestInteger(\_:)](nearestinteger%28__%29-5mppu.md): Returns the nearest integer to each element in a vector of double-precision values.
- [nearestInteger(\_:)](nearestinteger%28__%29-386dx.md): Returns the nearest integer to each element in a vector of single-precision values.
- [nearestInteger(\_:result:)](nearestinteger%28__result_%29-bbtt.md): Calculates the nearest integer to each element in a vector of double-precision values.
