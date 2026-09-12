> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float16/description](https://developer.apple.com/documentation/swift/float16/description)

# description

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A textual representation of the value.

## Declaration

```swift
var description: String { get }
```

<a id="discussion"></a>

## Discussion

For any finite value, this property provides a string that can be converted back to an instance of `Float16` without rounding errors.  That is, if `x` is an instance of `Float16`, then `Float16(x.description) == x` is always true.  For any NaN value, the property’s value is “nan”, and for positive and negative infinity its value is “inf” and “-inf”.
