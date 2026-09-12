> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/compress(_:gatingvector:result:)-7fvy9](https://developer.apple.com/documentation/accelerate/vdsp/compress(_:gatingvector:result:)-7fvy9)

# compress(\_:gatingVector:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Compresses the specified single-precision vector using the nonzero values in a gating vector.

## Declaration

```swift
static func compress<T, U, V>(_ vector: T, gatingVector: U, result: inout V) where T : AccelerateBuffer, U : AccelerateBuffer, V : AccelerateMutableBuffer, T.Element == Float, U.Element == Float, V.Element == Float
```

## Parameters

- `vector`: The source vector that the function compresses.
- `gatingVector`: The gating vector.
- `result`: The destination vector that receives the result.

<a id="Discussion"></a>

## Discussion

The following code shows an example of compressing the values in `source` using the nonzero values in `gatingVector`:

```swift
let source: [Float] = [1, 2,
                       3, 4,
                       5, 6,
                       7, 8]

let gatingVector: [Float] = [-1, 0,
                             1, 0,
                             0.001, 0,
                             10, 0]

let count = gatingVector.filter {
    !$0.isZero
}.count

let destination = [Float](unsafeUninitializedCapacity: count) {
    buffer, initializedCount in
    
    vDSP.compress(source,
                  gatingVector: gatingVector,
                  result: &buffer)
    
    initializedCount = count
}

// Prints "[1.0, 3.0, 5.0, 7.0]".
print(destination)
}
```

## See Also

### Vector compression

- [compress(\_:gatingVector:nonZeroGatingCount:)](compress%28__gatingvector_nonzerogatingcount_%29-3c7yk.md): Returns a compressed copy of the specified single-precision vector using the nonzero values in a gating vector.
- [compress(\_:gatingVector:nonZeroGatingCount:)](compress%28__gatingvector_nonzerogatingcount_%29-93v23.md): Returns a compressed copy of the specified double-precision vector using the nonzero values in a gating vector.
- [compress(\_:gatingVector:result:)](compress%28__gatingvector_result_%29-2yse4.md): Compresses the specified double-precision vector using the nonzero values in a gating vector.
