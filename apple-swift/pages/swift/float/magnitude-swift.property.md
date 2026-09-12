> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float/magnitude-swift.property](https://developer.apple.com/documentation/swift/float/magnitude-swift.property)

# magnitude

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The magnitude of this value.

## Declaration

```swift
var magnitude: Float { get }
```

<a id="discussion"></a>

## Discussion

For any numeric value `x`, `x.magnitude` is the absolute value of `x`. You can use the `magnitude` property in operations that are simpler to implement in terms of unsigned values, such as printing the value of an integer, which is just printing a ‘-’ character in front of an absolute value.

```swift
let x = -200
// x.magnitude == 200
```

The global `abs(_:)` function provides more familiar syntax when you need to find an absolute value. In addition, because `abs(_:)` always returns a value of the same type, even in a generic context, using the function instead of the `magnitude` property is encouraged.

## See Also

### Finding the Sign and Magnitude

- [sign](sign.md): The sign of the floating-point value.
- [Float.Magnitude](magnitude-swift.typealias.md): A type that can represent the absolute value of any possible value of the conforming type.
