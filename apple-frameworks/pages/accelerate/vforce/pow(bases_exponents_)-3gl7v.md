> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vforce/pow(bases:exponents:)-3gl7v](https://developer.apple.com/documentation/accelerate/vforce/pow(bases:exponents:)-3gl7v)

# pow(bases:exponents:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns each single-precision element in the bases vector, raised to the power of the corresponding element in the exponents vector.

## Declaration

```swift
static func pow<U, V>(bases: U, exponents: V) -> [Float] where U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == Float, V.Element == Float
```

## See Also

### Array-Oriented Power Functions

- [pow(bases:exponents:)](pow%28bases_exponents_%29-94dha.md): Returns each double-precision element in the bases vector, raised to the power of the corresponding element in the exponents vector.
- [pow(bases:exponents:result:)](pow%28bases_exponents_result_%29-4bso.md): Calculates each double-precision element in the bases vector, raised to the power of the corresponding element in the exponents vector.
- [pow(bases:exponents:result:)](pow%28bases_exponents_result_%29-6pffz.md): Calculates each single-precision element in the bases vector, raised to the power of the corresponding element in the exponents vector.
- [vvpow(\_:\_:\_:\_:)](../vvpow%28________%29.md): Raises each element in an array to the power of the corresponding element in a second array of double-precision values.
- [vvpowf(\_:\_:\_:\_:)](../vvpowf%28________%29.md): Raises each element in an array to the power of the corresponding element in a second array of single-precision values.
