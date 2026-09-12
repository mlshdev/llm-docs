> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/negative(_:)-24oe4](https://developer.apple.com/documentation/accelerate/vdsp/negative(_:)-24oe4)

# negative(\_:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns the negative value of each element in the supplied double-precision vector.

## Declaration

```swift
static func negative<U>(_ vector: U) -> [Double] where U : AccelerateBuffer, U.Element == Double
```

## Parameters

- `vector`: The source vector.

<a id="Discussion"></a>

## Discussion

For example, the following code calculates the negative values of the elements of an array:

```swift
    let values: [Double] = [-1, 2, -3, 4, -5, 6, -7, 8]
    
    let negativeValues = vDSP.negative(values)
    
    // Prints "[1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0]".
    print(negativeValues)
```

## See Also

### Vector negation functions

- [negative(\_:)](negative%28__%29-8mo1p.md): Returns the negative value of each element in the supplied single-precision vector.
- [negative(\_:result:)](negative%28__result_%29-92caw.md): Calculates the negative value of each element in the supplied single-precision vector.
- [negative(\_:result:)](negative%28__result_%29-5bwqv.md): Calculates the negative value of each element in the supplied double-precision vector.
