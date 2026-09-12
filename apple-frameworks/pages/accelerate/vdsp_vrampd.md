> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vrampd](https://developer.apple.com/documentation/accelerate/vdsp_vrampd)

# vDSP_vrampD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Generates a double-precision vector with monotonically incrementing or decrementing values using an initial value and increment.

## Declaration

```objectivec
extern void vDSP_vrampD(const double *__A, const double *__B, double *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: The initial value of the ramp.
- `__B`: The increment, or decrement if negative, between each generated element.
- `__C`: The output vector.
- `__IC`: The distance between the elements in the output vector.
- `__N`: The number of elements that the function processes.

<a id="Discussion"></a>

## Discussion

Use this function to generate and return a vector populated with ramped values.

The following code generates a ramped vector with values in the range `0 ... 7`:

```swift
    let n = 8
    let stride = 1
    
    var initialValue: Double = 0
    var increment: Double = 1
    
    let ramp = [Double](unsafeUninitializedCapacity: n) {
        buffer, initializedCount in
        
        vDSP_vrampD(&initialValue,
                   &increment,
                   buffer.baseAddress!,
                   stride,
                   vDSP_Length(n))
        
        initializedCount = n
    }
    
    // Prints "[0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0]".
    print(ramp)
```

## See Also

### Vector generation with ramps using an initial value and increment

- [vDSP_vramp](vdsp_vramp.md): Generates a single-precision vector with monotonically incrementing or decrementing values using an initial value and increment.
