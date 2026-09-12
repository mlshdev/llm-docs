> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uint/init(exactly:)-8zm2w](https://developer.apple.com/documentation/swift/uint/init(exactly:)-8zm2w)

# init(exactly:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** macOS 10.10+

Creates an integer from the given floating-point value, if it can be represented exactly.

## Declaration

```swift
init?(exactly source: Float80)
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
