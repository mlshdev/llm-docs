> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/absolute(_:)-9c3ge](https://developer.apple.com/documentation/accelerate/vdsp/absolute(_:)-9c3ge)

# absolute(\_:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns the absolute value of each element in the supplied double-precision vector.

## Declaration

```swift
static func absolute<U>(_ vector: U) -> [Double] where U : AccelerateBuffer, U.Element == Double
```

## Parameters

- `vector`: The source vector.

<a id="Discussion"></a>

## Discussion

For example, the following code calculates the absolute values of the elements of an array:

```swift
    let values: [Double] = [-1, 2, -3, 4, -5, 6, -7, 8]
    
    let absoluteValues = vDSP.absolute(values)
    
    // Prints "[1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0]".
    print(absoluteValues)
```

## See Also

### Vector absolute functions

- [absolute(\_:)](absolute%28__%29-5ehc1.md): Returns the absolute value of each element in the supplied single-precision vector.
- [absolute(\_:result:)](absolute%28__result_%29-4pigo.md): Calculates the absolute value of each element in the supplied single-precision vector.
- [absolute(\_:result:)](absolute%28__result_%29-657bd.md): Calculates the absolute value of each element in the supplied double-precision vector.
