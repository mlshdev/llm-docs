> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/linearinterpolate(lookuptable:withoffsets:scale:baseoffset:result:)-4ownc](https://developer.apple.com/documentation/accelerate/vdsp/linearinterpolate(lookuptable:withoffsets:scale:baseoffset:result:)-4ownc)

# linearInterpolate(lookupTable:withOffsets:scale:baseOffset:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Computes the single-precision linearly interpolated values of a lookup table from the specified offsets.

## Declaration

```swift
static func linearInterpolate<T, U, V>(lookupTable: T, withOffsets offsets: U, scale: Float = 1, baseOffset: Float = 0, result: inout V) where T : AccelerateBuffer, U : AccelerateBuffer, V : AccelerateMutableBuffer, T.Element == Float, U.Element == Float, V.Element == Float
```

## Parameters

- `lookupTable`: The lookup table.
- `offsets`: The offsets into the lookup table.
- `scale`: The scale factor for the offsets.
- `baseOffset`: The base offset for the offsets.
- `result`: The destination vector that receives the result.

<a id="Discussion"></a>

## Discussion

The following code shows the result of linearly interpolating a lookup table that contains the values `[-10, 0, 100]` using the offsets `[0, 0.5, 1, 1.5, 2]`.  The integer offsets, `0`, `1`, and `2`, return the corresponding values in the lookup table, `-10`, `0`, and `2`. The noninteger offsets, `0.5` and `1.5`, return the linearly interpolated values between the lookup table values, `-5` and `50`.

```swift
let lookupTable: [Float] = [-10, 0, 100]
let offsets: [Float] = [0, 0.5, 1, 1.5, 2]

let count = offsets.count

let result = [Float](unsafeUninitializedCapacity: count) {
    buffer, initializedCount in
    
    vDSP.linearInterpolate(lookupTable: lookupTable,
                                        withOffsets: offsets,
                                        result: &buffer)
    
    initializedCount = count
}

// Prints "[-10.0, -5.0, 0.0, 50.0, 100.0]".
print(result)
```

## See Also

### Type Methods

- [absolute(\_:)](absolute%28__%29-9c3ge.md): Returns the absolute value of each element in the supplied double-precision vector.
- [absolute(\_:)](absolute%28__%29-5ehc1.md): Returns the absolute value of each element in the supplied single-precision vector.
- [absolute(\_:result:)](absolute%28__result_%29-9x5jn.md): Calculates the absolute value of each element in the supplied single-precision complex vector.
- [absolute(\_:result:)](absolute%28__result_%29-1wu9x.md): Calculates the absolute value of each element in the supplied double-precision complex vector.
- [absolute(\_:result:)](absolute%28__result_%29-657bd.md): Calculates the absolute value of each element in the supplied double-precision vector.
- [absolute(\_:result:)](absolute%28__result_%29-4pigo.md): Calculates the absolute value of each element in the supplied single-precision vector.
- [add(\_:\_:)](add%28____%29-9mv1a.md): Returns the double-precision element-wise sum of a vector and a scalar value.
- [add(\_:\_:)](add%28____%29-2ftxc.md): Returns the double-precision element-wise sum of two vectors.
- [add(\_:\_:)](add%28____%29-53nh9.md): Returns the single-precision element-wise sum of a vector and a scalar value.
- [add(\_:\_:)](add%28____%29-7swvf.md): Returns the single-precision element-wise sum of two vectors.
- [add(\_:\_:result:)](add%28____result_%29-2531u.md): Calculates the single-precision element-wise sum of a vector and a scalar value.
- [add(\_:\_:result:)](add%28____result_%29-2w0o9.md): Calculates the single-precision element-wise sum of a vector and a scalar value.
- [add(\_:\_:result:)](add%28____result_%29-338hl.md): Calculates the double-precision element-wise sum of two vectors.
- [add(\_:\_:result:)](add%28____result_%29-3vzwi.md): Calculates the single-precision element-wise sum of two vectors.
- [add(\_:to:count:result:)](add%28__to_count_result_%29-g1dk.md): Calculates the single-precision element-wise sum of the supplied complex vectors.
