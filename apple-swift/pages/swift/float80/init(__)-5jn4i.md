> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/init(_:)-5jn4i](https://developer.apple.com/documentation/swift/float80/init(_:)-5jn4i)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** macOS 10.10+

Creates a new instance that approximates the given value.

## Declaration

```swift
init(_ other: Float)
```

## Parameters

- `other`: The value to use for the new instance.

<a id="discussion"></a>

## Discussion

The value of `other` is rounded to a representable value, if necessary. A NaN passed as `other` results in another NaN, with a signaling NaN value converted to quiet NaN.

```swift
let x: Float = 21.25
let y = Float80(x)
// y == 21.25

let z = Float80(Float.nan)
// z.isNaN == true
```
