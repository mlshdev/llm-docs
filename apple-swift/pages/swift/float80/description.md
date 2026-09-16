> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/float80/description

# description

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A textual representation of the value.

## Declaration

```swift
var description: String { get }
```

<a id="discussion"></a>

## Discussion

For any finite value, this property provides a string that can be converted back to an instance of `Float80` without rounding errors.  That is, if `x` is an instance of `Float80`, then `Float80(x.description) == x` is always true.  For any NaN value, the property’s value is “nan”, and for positive and negative infinity its value is “inf” and “-inf”.
