> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/numerictype/numeric](https://developer.apple.com/documentation/swift/unicode/numerictype/numeric)

# Unicode.NumericType.numeric

**Framework:** Swift  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A digit that does not meet the requirements of the `decimal` numeric type or a non-digit numeric value.

## Declaration

```swift
case numeric
```

<a id="discussion"></a>

## Discussion

This numeric type includes fractions such as “⅕” (U+2155 VULGAR FRACTION ONE FIFTH), numerical CJK ideographs like “兆” (U+5146 CJK UNIFIED IDEOGRAPH-5146), and other scalars that are not decimal digits used positionally in the writing of base-10 numbers.

As of Unicode 6.3, any new scalars that represent numbers but do not meet the requirements of `decimal` will have numeric type `numeric`, and programs can treat `digit` and `numeric` equivalently.
