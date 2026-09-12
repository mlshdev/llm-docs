> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/gather(_:indices:result:)-7erii](https://developer.apple.com/documentation/accelerate/vdsp/gather(_:indices:result:)-7erii)

# gather(\_:indices:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Gathers the specified single-precision vector using a vector that defines the indices to keep.

## Declaration

```swift
static func gather<T, U, V>(_ vector: T, indices: U, result: inout V) where T : AccelerateBuffer, U : AccelerateBuffer, V : AccelerateMutableBuffer, T.Element == Float, U.Element == UInt, V.Element == Float
```

## Parameters

- `vector`: The source vector that the function gathers.
- `indices`: The vector that contains the one-based indices.
- `result`: The destination vector that receives the result.

<a id="Discussion"></a>

## Discussion

The following code shows an example of gathering the values in `source` using the values in `indices`:

```swift
let source: [Float] = [10, 20,
                        30, 40,
                        50, 60,
                        70, 80]

let indices: [UInt] = [1, 3, 5, 7]

let count = indices.count

let destination = [Float](unsafeUninitializedCapacity: count) {
    buffer, initializedCount in
    
    vDSP.gather(source,
                indices: indices,
                result: &buffer)
    
    initializedCount = count
}

// Prints "[10.0, 30.0, 50.0, 70.0]".
print(destination)
```

## See Also

### Vector gathering functions

- [gather(\_:indices:)](gather%28__indices_%29-4jwvh.md): Returns a gathered copy of the specified single-precision vector using a vector that defines the indices to keep.
- [gather(\_:indices:)](gather%28__indices_%29-4yt3o.md): Returns a gathered copy of the specified double-precision vector using a vector that defines the indices to keep.
- [gather(\_:indices:result:)](gather%28__indices_result_%29-34yzg.md): Gathers the specified double-precision vector using a vector that defines the indices to keep.
