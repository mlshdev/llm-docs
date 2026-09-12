> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/init(_:)-6dyii](https://developer.apple.com/documentation/swift/float80/init(_:)-6dyii)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** macOS 10.10+

Creates a new instance initialized to the given value.

## Declaration

```swift
init(_ other: Float80)
```

## Parameters

- `other`: The value to use for the new instance.

<a id="discussion"></a>

## Discussion

The value of `other` is represented exactly by the new instance. A NaN passed as `other` results in another NaN, with a signaling NaN value converted to quiet NaN.

```swift
let x: Float80 = 21.25
let y = Float80(x)
// y == 21.25

let z = Float80(Float80.nan)
// z.isNaN == true
```
