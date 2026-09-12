> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/negativeabsolute(_:result:)-85gj0](https://developer.apple.com/documentation/accelerate/vdsp/negativeabsolute(_:result:)-85gj0)

# negativeAbsolute(\_:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Calculates the negative absolute value of each element in the supplied single-precision vector.

## Declaration

```swift
static func negativeAbsolute<U, V>(_ vector: U, result: inout V) where U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == Float, V.Element == Float
```

## Parameters

- `vector`: The source vector.
- `result`: On output, the negative absolute values of the elements in the source vector.

<a id="Discussion"></a>

## Discussion

For example, the following code calculates the negative absolute values of the elements of an array:

```swift
    let values: [Float] = [-1, 2, -3, 4, -5, 6, -7, 8]
    
    let negativeAbsoluteValues = [Float](unsafeUninitializedCapacity: values.count) {
        buffer, initializedCount in
        
        vDSP.negativeAbsolute(values, result: &buffer)
        
        initializedCount = values.count
    }
    
    // Prints "[-1.0, -2.0, -3.0, -4.0, -5.0, -6.0, -7.0, -8.0]".
    print(negativeAbsoluteValues)
```

## See Also

### Vector negative absolute functions

- [negativeAbsolute(\_:)](negativeabsolute%28__%29-66a7a.md): Returns the negative absolute value of each element in the supplied single-precision vector.
- [negativeAbsolute(\_:)](negativeabsolute%28__%29-1b5m6.md): Returns the negative absolute value of each element in the supplied double-precision vector.
- [negativeAbsolute(\_:result:)](negativeabsolute%28__result_%29-1gpcy.md): Calculates the negative absolute value of each element in the supplied double-precision vector.
