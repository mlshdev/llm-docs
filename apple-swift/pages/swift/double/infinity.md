> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/double/infinity](https://developer.apple.com/documentation/swift/double/infinity)

# infinity

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Positive infinity.

## Declaration

```swift
static var infinity: Double { get }
```

<a id="discussion"></a>

## Discussion

Infinity compares greater than all finite numbers and equal to other infinite values.

```swift
let x = Double.greatestFiniteMagnitude
let y = x * 2
// y == Double.infinity
// y > x
```

## See Also

### Accessing Numeric Constants

- [pi](pi.md): The mathematical constant pi (π), approximately equal to 3.14159.
- [greatestFiniteMagnitude](greatestfinitemagnitude.md): The greatest finite number representable by this type.
- [nan](nan.md): A quiet NaN (“not a number”).
- [signalingNaN](signalingnan.md): A signaling NaN (“not a number”).
- [ulpOfOne](ulpofone.md): The unit in the last place of 1.0.
- [leastNonzeroMagnitude](leastnonzeromagnitude.md): The least positive number.
- [leastNormalMagnitude](leastnormalmagnitude.md): The least positive normal number.
- [zero](zero.md): Conforms when `Self` conforms to `ExpressibleByIntegerLiteral`. The zero value.
