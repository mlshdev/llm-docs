> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/double/advanced(by:)](https://developer.apple.com/documentation/swift/double/advanced(by:))

# advanced(by:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a value that is offset the specified distance from this value.

## Declaration

```swift
func advanced(by amount: Double) -> Double
```

<a id="return-value"></a>

## Return Value

A value that is offset from this value by `n`.

<a id="discussion"></a>

## Discussion

Use the `advanced(by:)` method in generic code to offset a value by a specified distance. If you’re working directly with numeric values, use the addition operator (`+`) instead of this method.

```swift
func addOne<T: Strideable>(to x: T) -> T
    where T.Stride: ExpressibleByIntegerLiteral
{
    return x.advanced(by: 1)
}

let x = addOne(to: 5)
// x == 6
let y = addOne(to: 3.5)
// y = 4.5
```

If this type’s `Stride` type conforms to `BinaryInteger`, then for a value `x`, a distance `n`, and a value `y = x.advanced(by: n)`, `x.distance(to: y) == n`. Using this method with types that have a noninteger `Stride` may result in an approximation. If the result of advancing by `n` is not representable as a value of this type, then a runtime error may occur.

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
- [distance(to:)](distance%28to_%29.md): Returns the distance from this value to the given value, expressed as a stride.
- [Double.Stride](stride.md): A type that represents the distance between two values.
- [write(to:)](write%28to_%29.md): Writes a textual representation of this instance into the given output stream.
- [hashValue](hashvalue.md): The hash value.
