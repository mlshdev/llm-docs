> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int128/magnitude-swift.property](https://developer.apple.com/documentation/swift/int128/magnitude-swift.property)

# magnitude

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The magnitude of this value.

## Declaration

```swift
var magnitude: Int128.Magnitude { get }
```

<a id="discussion"></a>

## Discussion

For any numeric value `x`, `x.magnitude` is the absolute value of `x`. You can use the `magnitude` property in operations that are simpler to implement in terms of unsigned values, such as printing the value of an integer, which is just printing a ‘-’ character in front of an absolute value.

```swift
let x = -200
// x.magnitude == 200
```

The global `abs(_:)` function provides more familiar syntax when you need to find an absolute value. In addition, because `abs(_:)` always returns a value of the same type, even in a generic context, using the function instead of the `magnitude` property is encouraged.
