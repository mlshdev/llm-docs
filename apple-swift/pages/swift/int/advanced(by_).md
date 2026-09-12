> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int/advanced(by:)](https://developer.apple.com/documentation/swift/int/advanced(by:))

# advanced(by:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a value that is offset the specified distance from this value.

## Declaration

```swift
func advanced(by n: Int) -> Int
```

## Parameters

- `n`: The distance to advance this value.

<a id="return-value"></a>

## Return Value

A value that is offset from this value by `n`.

<a id="discussion"></a>

## Discussion

Use the `advanced(by:)` method in generic code to offset a value by a specified distance. If you’re working directly with numeric values, use the addition operator (`+`) instead of this method.

For a value `x`, a distance `n`, and a value `y = x.advanced(by: n)`, `x.distance(to: y) == n`.

## See Also

### Infrequently Used Functionality

- [init()](init%28%29.md): Creates a new value equal to zero.
- [init(integerLiteral:)](init%28integerliteral_%29.md): Conforms when `Self` conforms to `_ExpressibleByBuiltinIntegerLiteral`.
- [Int.IntegerLiteralType](integerliteraltype.md): A type that represents an integer literal.
- [distance(to:)](distance%28to_%29.md): Returns the distance from this value to the given value, expressed as a stride.
- [Int.Stride](stride.md): A type that represents the distance between two values.
- [hashValue](hashvalue.md): The hash value.
