> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float16/init(_:)-77b3g](https://developer.apple.com/documentation/swift/float16/init(_:)-77b3g)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a new instance initialized to the given value.

## Declaration

```swift
init(_ other: Float16)
```

## Parameters

- `other`: The value to use for the new instance.

<a id="discussion"></a>

## Discussion

The value of `other` is represented exactly by the new instance. A NaN passed as `other` results in another NaN, with a signaling NaN value converted to quiet NaN.

```swift
let x: Float16 = 21.25
let y = Float16(x)
// y == 21.25

let z = Float16(Float16.nan)
// z.isNaN == true
```
