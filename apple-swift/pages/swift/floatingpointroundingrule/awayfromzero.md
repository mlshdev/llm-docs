> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/floatingpointroundingrule/awayfromzero

# FloatingPointRoundingRule.awayFromZero

**Framework:** Swift  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Round to the closest allowed value whose magnitude is greater than or equal to that of the source.

## Declaration

```swift
case awayFromZero
```

<a id="discussion"></a>

## Discussion

The following example shows the results of rounding numbers using this rule:

```swift
(5.2).rounded(.awayFromZero)
// 6.0
(5.5).rounded(.awayFromZero)
// 6.0
(-5.2).rounded(.awayFromZero)
// -6.0
(-5.5).rounded(.awayFromZero)
// -6.0
```
