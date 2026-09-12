> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uint32/init(exactly:)-8qhoe](https://developer.apple.com/documentation/swift/uint32/init(exactly:)-8qhoe)

# init(exactly:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates an integer from the given floating-point value, if it can be represented exactly.

## Declaration

```swift
init?(exactly source: Float16)
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
