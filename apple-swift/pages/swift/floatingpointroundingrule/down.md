> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/floatingpointroundingrule/down](https://developer.apple.com/documentation/swift/floatingpointroundingrule/down)

# FloatingPointRoundingRule.down

**Framework:** Swift  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Round to the closest allowed value that is less than or equal to the source.

## Declaration

```swift
case down
```

<a id="discussion"></a>

## Discussion

The following example shows the results of rounding numbers using this rule:

```swift
(5.2).rounded(.down)
// 5.0
(5.5).rounded(.down)
// 5.0
(-5.2).rounded(.down)
// -6.0
(-5.5).rounded(.down)
// -6.0
```

This rule is equivalent to the C `floor` function and implements the `roundToIntegralTowardNegative` operation defined by the [IEEE 754 specification](http://ieeexplore.ieee.org/servlet/opac?punumber=4610933).
