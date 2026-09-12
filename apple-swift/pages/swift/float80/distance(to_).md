> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/distance(to:)](https://developer.apple.com/documentation/swift/float80/distance(to:))

# distance(to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the distance from this value to the given value, expressed as a stride.

## Declaration

```swift
func distance(to other: Float80) -> Float80
```

## Parameters

- `other`: The value to calculate the distance to.

<a id="return-value"></a>

## Return Value

The distance from this value to `other`.

<a id="discussion"></a>

## Discussion

If this type’s `Stride` type conforms to `BinaryInteger`, then for two values `x` and `y`, and a distance `n = x.distance(to: y)`, `x.advanced(by: n) == y`. Using this method with types that have a noninteger `Stride` may result in an approximation.

> **Complexity**

> O(1)
