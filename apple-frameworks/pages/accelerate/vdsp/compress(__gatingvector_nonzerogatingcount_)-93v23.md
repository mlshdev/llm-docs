> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/compress(_:gatingvector:nonzerogatingcount:)-93v23](https://developer.apple.com/documentation/accelerate/vdsp/compress(_:gatingvector:nonzerogatingcount:)-93v23)

# compress(\_:gatingVector:nonZeroGatingCount:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Returns a compressed copy of the specified double-precision vector using the nonzero values in a gating vector.

## Declaration

```swift
static func compress<T, U>(_ vector: T, gatingVector: U, nonZeroGatingCount: Int?) -> [Double] where T : AccelerateBuffer, U : AccelerateBuffer, T.Element == Double, U.Element == Double
```

## Parameters

- `vector`: The source vector that the function compresses.
- `gatingVector`: The gating vector.
- `nonZeroGatingCount`: The number of nonzero elements in `gatingVector`. Set to `nil` to have the operation calculate this value for you.

<a id="return-value"></a>

## Return Value

The result of the compression operation.

<a id="Discussion"></a>

## Discussion

The following code shows an example of compressing the values in `source` using the nonzero values in `gatingVector`:

```swift
let source: [Double] = [1, 2,
                        3, 4,
                        5, 6,
                        7, 8]

let gatingVector: [Double] = [-1, 0,
                              1, 0,
                              0.001, 0,
                              10, 0]

let destination = vDSP.compress(source,
                                gatingVector: gatingVector,
                                nonZeroGatingCount: nil)

// Prints "[1.0, 3.0, 5.0, 7.0]".
print(destination)
```

## See Also

### Vector compression

- [compress(\_:gatingVector:nonZeroGatingCount:)](compress%28__gatingvector_nonzerogatingcount_%29-3c7yk.md): Returns a compressed copy of the specified single-precision vector using the nonzero values in a gating vector.
- [compress(\_:gatingVector:result:)](compress%28__gatingvector_result_%29-7fvy9.md): Compresses the specified single-precision vector using the nonzero values in a gating vector.
- [compress(\_:gatingVector:result:)](compress%28__gatingvector_result_%29-2yse4.md): Compresses the specified double-precision vector using the nonzero values in a gating vector.
