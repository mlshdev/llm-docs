> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/init(exactly:)-7ol5e](https://developer.apple.com/documentation/swift/float80/init(exactly:)-7ol5e)

# init(exactly:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** macOS 10.10+

Creates a new instance initialized to the given value, if it can be represented without rounding.

## Declaration

```swift
init?(exactly other: Float80)
```

## Parameters

- `other`: The value to use for the new instance.

<a id="discussion"></a>

## Discussion

If `other` can’t be represented as an instance of `Float80` without rounding, the result of this initializer is `nil`. In particular, passing NaN as `other` always results in `nil`.

```swift
let x: Float80 = 21.25
let y = Float80(exactly: x)
// y == Optional.some(21.25)

let z = Float80(exactly: Float80.nan)
// z == nil
```
