> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/abs(_:)](https://developer.apple.com/documentation/swift/abs(_:))

# abs(\_:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the absolute value of the given number.

## Declaration

```swift
func abs<T>(_ x: T) -> T where T : Comparable, T : SignedNumeric
```

## Parameters

- `x`: A signed number.

<a id="return-value"></a>

## Return Value

The absolute value of `x`.

<a id="discussion"></a>

## Discussion

The absolute value of `x` must be representable in the same type. In particular, the absolute value of a signed, fixed-width integer type’s minimum cannot be represented.

```swift
let x = Int8.min
// x == -128
let y = abs(x)
// Overflow error
```

## See Also

### Finding the Sign and Magnitude

- [magnitude](int/magnitude-swift.property.md): The magnitude of this value.
- [Int.Magnitude](int/magnitude-swift.typealias.md): A type that can represent the absolute value of any possible value of this type.
- [signum()](int/signum%28%29.md): Returns `-1` if this value is negative and `1` if it’s positive; otherwise, `0`.
