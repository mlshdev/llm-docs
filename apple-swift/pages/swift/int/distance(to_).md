> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int/distance(to:)](https://developer.apple.com/documentation/swift/int/distance(to:))

# distance(to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the distance from this value to the given value, expressed as a stride.

## Declaration

```swift
func distance(to other: Int) -> Int
```

## Parameters

- `other`: The value to calculate the distance to.

<a id="return-value"></a>

## Return Value

The distance from this value to `other`.

<a id="discussion"></a>

## Discussion

For two values `x` and `y`, and a distance `n = x.distance(to: y)`, `x.advanced(by: n) == y`.

## See Also

### Infrequently Used Functionality

- [init()](init%28%29.md): Creates a new value equal to zero.
- [init(integerLiteral:)](init%28integerliteral_%29.md): Conforms when `Self` conforms to `_ExpressibleByBuiltinIntegerLiteral`.
- [Int.IntegerLiteralType](integerliteraltype.md): A type that represents an integer literal.
- [advanced(by:)](advanced%28by_%29.md): Returns a value that is offset the specified distance from this value.
- [Int.Stride](stride.md): A type that represents the distance between two values.
- [hashValue](hashvalue.md): The hash value.
