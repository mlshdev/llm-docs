> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/floatingpointroundingrule/tonearestoreven](https://developer.apple.com/documentation/swift/floatingpointroundingrule/tonearestoreven)

# FloatingPointRoundingRule.toNearestOrEven

**Framework:** Swift  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Round to the closest allowed value; if two values are equally close, the even one is chosen.

## Declaration

```swift
case toNearestOrEven
```

<a id="discussion"></a>

## Discussion

This rounding rule is also known as “bankers rounding,” and is the default IEEE 754 rounding mode for arithmetic. The following example shows the results of rounding numbers using this rule:

```swift
(5.2).rounded(.toNearestOrEven)
// 5.0
(5.5).rounded(.toNearestOrEven)
// 6.0
(4.5).rounded(.toNearestOrEven)
// 4.0
```

This rule implements the `roundToIntegralTiesToEven` operation defined by the [IEEE 754 specification](http://ieeexplore.ieee.org/servlet/opac?punumber=4610933).
