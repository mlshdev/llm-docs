> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/double/sign](https://developer.apple.com/documentation/swift/double/sign)

# sign

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The sign of the floating-point value.

## Declaration

```swift
var sign: FloatingPointSign { get }
```

<a id="discussion"></a>

## Discussion

The `sign` property is `.minus` if the value’s signbit is set, and `.plus` otherwise. For example:

```swift
let x = -33.375
// x.sign == .minus
```

Don’t use this property to check whether a floating point value is negative. For a value `x`, the comparison `x.sign == .minus` is not necessarily the same as `x < 0`. In particular, `x.sign == .minus` if `x` is -0, and while `x < 0` is always `false` if `x` is NaN, `x.sign` could be either `.plus` or `.minus`.

## See Also

### Finding the Sign and Magnitude

- [magnitude](magnitude-swift.property.md): The magnitude of this value.
- [Double.Magnitude](magnitude-swift.typealias.md): A type that can represent the absolute value of any possible value of the conforming type.
