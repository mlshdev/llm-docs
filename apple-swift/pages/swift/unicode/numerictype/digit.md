> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/numerictype/digit](https://developer.apple.com/documentation/swift/unicode/numerictype/digit)

# Unicode.NumericType.digit

**Framework:** Swift  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A digit that does not meet the requirements of the `decimal` numeric type.

## Declaration

```swift
case digit
```

<a id="discussion"></a>

## Discussion

Scalars with this numeric type are often those that represent a decimal digit but would not typically be used to write a base-10 number, such as “④” (U+2463 CIRCLED DIGIT FOUR).

As of Unicode 6.3, any new scalars that represent numbers but do not meet the requirements of `decimal` will have numeric type `numeric`, and programs can treat `digit` and `numeric` equivalently.
