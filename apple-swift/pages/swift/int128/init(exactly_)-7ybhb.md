> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int128/init(exactly:)-7ybhb](https://developer.apple.com/documentation/swift/int128/init(exactly:)-7ybhb)

# init(exactly:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates an integer from the given floating-point value, if it can be represented exactly.

## Declaration

```swift
init?<T>(exactly source: T) where T : BinaryFloatingPoint
```

## Parameters

- `source`: A floating-point value to convert to an integer.

<a id="discussion"></a>

## Discussion

If the value passed as `source` is not representable exactly, the result is `nil`. In the following example, the constant `x` is successfully created from a value of `21.0`, while the attempt to initialize the constant `y` from `21.5` fails:

```swift
let x = Int(exactly: 21.0)
// x == Optional(21)
let y = Int(exactly: 21.5)
// y == nil
```
