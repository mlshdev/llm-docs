> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vforce/exp(_:)-5iaun](https://developer.apple.com/documentation/accelerate/vforce/exp(_:)-5iaun)

# exp(\_:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns the *e*, raised to the power of each element in a vector of single-precision values.

## Declaration

```swift
static func exp<U>(_ vector: U) -> [Float] where U : AccelerateBuffer, U.Element == Float
```

## See Also

### Array-Oriented Exponential and Logarithmic Functions

- [exp(\_:)](exp%28__%29-76nrd.md): Returns the *e*, raised to the power of each element in a vector of double-precision values.
- [exp(\_:result:)](exp%28__result_%29-34nxw.md): Calculates the *e*, raised to the power of each element in a vector of double-precision values.
- [exp(\_:result:)](exp%28__result_%29-4k85n.md): Calculates the *e*, raised to the power of each element in a vector of single-precision values.
- [exp2(\_:)](exp2%28__%29-2m5q.md): Returns the 2, raised to the power of each element in a vector of double-precision values.
- [exp2(\_:)](exp2%28__%29-4mm9y.md): Returns the 2, raised to the power of each element in a vector of single-precision values.
- [exp2(\_:result:)](exp2%28__result_%29-6ru6m.md): Calculates the 2, raised to the power of each element in a vector of double-precision values.
- [exp2(\_:result:)](exp2%28__result_%29-8m564.md): Calculates the 2, raised to the power of each element in a vector of single-precision values.
- [expm1(\_:)](expm1%28__%29-xkzx.md): Returns the *eˣ-1* for each element in a vector of double-precision values.
- [expm1(\_:)](expm1%28__%29-mfq5.md): Returns the *eˣ-1* for each element in a vector of single-precision values.
- [expm1(\_:result:)](expm1%28__result_%29-4dpl4.md): Calculates the *eˣ-1* for each element in a vector of double-precision values.
- [expm1(\_:result:)](expm1%28__result_%29-2yhs3.md): Calculates the *eˣ-1* for each element in a vector of single-precision values.
- [log10(\_:)](log10%28__%29-9wr68.md): Returns the base 10 logarithm of each element in a vector of double-precision values.
- [log(\_:)](log%28__%29-2gh9a.md): Returns the natural logarithm for each element in a vector of double-precision values.
- [log(\_:)](log%28__%29-5ffby.md): Returns the natural logarithm for each element in a vector of single-precision values.
- [log(\_:result:)](log%28__result_%29-84hv7.md): Calculates the natural logarithm for each element in a vector of double-precision values.
