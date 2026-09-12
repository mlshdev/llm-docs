> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/double/description](https://developer.apple.com/documentation/swift/double/description)

# description

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A textual representation of the value.

## Declaration

```swift
var description: String { get }
```

<a id="discussion"></a>

## Discussion

For any finite value, this property provides a string that can be converted back to an instance of `Double` without rounding errors.  That is, if `x` is an instance of `Double`, then `Double(x.description) == x` is always true.  For any NaN value, the property’s value is “nan”, and for positive and negative infinity its value is “inf” and “-inf”.

## See Also

### Describing a Double

- [debugDescription](debugdescription.md): A textual representation of the value, suitable for debugging.
- [customMirror](custommirror.md): A mirror that reflects the `Double` instance.
- [hash(into:)](hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.
