> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/double/distance(to:)](https://developer.apple.com/documentation/swift/double/distance(to:))

# distance(to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the distance from this value to the given value, expressed as a stride.

## Declaration

```swift
func distance(to other: Double) -> Double
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

## See Also

### Infrequently Used Functionality

- [init()](init%28%29.md)
- [init(floatLiteral:)](init%28floatliteral_%29.md): Creates an instance initialized to the specified floating-point value.
- [init(integerLiteral:)](init%28integerliteral_%29.md): Creates an instance initialized to the specified integer value.
- [init(integerLiteral:)](init%28integerliteral_%29-6hc7j.md): Conforms when `Self` conforms to `_ExpressibleByBuiltinIntegerLiteral`.
- [Double.FloatLiteralType](floatliteraltype.md): A type that represents a floating-point literal.
- [Double.IntegerLiteralType](integerliteraltype.md): A type that represents an integer literal.
- [advanced(by:)](advanced%28by_%29.md): Returns a value that is offset the specified distance from this value.
- [Double.Stride](stride.md): A type that represents the distance between two values.
- [write(to:)](write%28to_%29.md): Writes a textual representation of this instance into the given output stream.
- [hashValue](hashvalue.md): The hash value.
