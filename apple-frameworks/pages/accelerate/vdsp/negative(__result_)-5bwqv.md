> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/negative(_:result:)-5bwqv](https://developer.apple.com/documentation/accelerate/vdsp/negative(_:result:)-5bwqv)

# negative(\_:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Calculates the negative value of each element in the supplied double-precision vector.

## Declaration

```swift
static func negative<U, V>(_ vector: U, result: inout V) where U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == Double, V.Element == Double
```

## Parameters

- `vector`: The source vector.
- `result`: On output, the negative values of the elements in the source vector.

<a id="Discussion"></a>

## Discussion

For example, the following code calculates the negative values of the elements of an array:

```swift
    let values: [Double] = [-1, 2, -3, 4, -5, 6, -7, 8]
    
    let negativeValues = [Double](unsafeUninitializedCapacity: values.count) {
        buffer, initializedCount in
        
        vDSP.negative(values, result: &buffer)
        
        initializedCount = values.count
    }
    
    // Prints "[1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0]".
    print(negativeValues)
```

## See Also

### Vector negation functions

- [negative(\_:)](negative%28__%29-8mo1p.md): Returns the negative value of each element in the supplied single-precision vector.
- [negative(\_:)](negative%28__%29-24oe4.md): Returns the negative value of each element in the supplied double-precision vector.
- [negative(\_:result:)](negative%28__result_%29-92caw.md): Calculates the negative value of each element in the supplied single-precision vector.
