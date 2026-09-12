> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/floatingpointroundingrule/towardzero](https://developer.apple.com/documentation/swift/floatingpointroundingrule/towardzero)

# FloatingPointRoundingRule.towardZero

**Framework:** Swift  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Round to the closest allowed value whose magnitude is less than or equal to that of the source.

## Declaration

```swift
case towardZero
```

<a id="discussion"></a>

## Discussion

The following example shows the results of rounding numbers using this rule:

```swift
(5.2).rounded(.towardZero)
// 5.0
(5.5).rounded(.towardZero)
// 5.0
(-5.2).rounded(.towardZero)
// -5.0
(-5.5).rounded(.towardZero)
// -5.0
```

This rule is equivalent to the C `trunc` function and implements the `roundToIntegralTowardZero` operation defined by the [IEEE 754 specification](http://ieeexplore.ieee.org/servlet/opac?punumber=4610933).
