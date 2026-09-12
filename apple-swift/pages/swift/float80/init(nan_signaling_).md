> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/init(nan:signaling:)](https://developer.apple.com/documentation/swift/float80/init(nan:signaling:))

# init(nan:signaling:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** macOS 10.10+

Creates a NaN (“not a number”) value with the specified payload.

## Declaration

```swift
init(nan payload: Float80.RawSignificand, signaling: Bool)
```

## Parameters

- `payload`: The payload to use for the new NaN value.
- `signaling`: Pass `true` to create a signaling NaN or `false` to create a quiet NaN.

<a id="discussion"></a>

## Discussion

NaN values compare not equal to every value, including themselves. Most operations with a NaN operand produce a NaN result. Don’t use the equal-to operator (`==`) to test whether a value is NaN. Instead, use the value’s `isNaN` property.

```swift
let x = Float80(nan: 0, signaling: false)
print(x == .nan)
// Prints "false"
print(x.isNaN)
// Prints "true"
```
