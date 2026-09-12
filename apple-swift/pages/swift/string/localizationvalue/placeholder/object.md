> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/localizationvalue/placeholder/object](https://developer.apple.com/documentation/swift/string/localizationvalue/placeholder/object)

# String.LocalizationValue.Placeholder.object

**Framework:** Swift  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The object type, as used for replacement values with the localized string placeholder syntax.

## Declaration

```swift
case object
```

<a id="discussion"></a>

## Discussion

To insert a object into a placeholder, use the syntax `\(placeholder: .object)`.

[String.LocalizationValue](../../localizationvalue.md) supports interpolating `NSObject` instances and Foundation types that bridge to `NSObject` types.

## See Also

### Placeholder types

- [String.LocalizationValue.Placeholder.int](int.md): The signed integer type, as used for replacement values with the localized string placeholder syntax.
- [String.LocalizationValue.Placeholder.uint](uint.md): The unsigned integer type, as used for replacement values with the localized string placeholder syntax.
- [String.LocalizationValue.Placeholder.float](float.md): The single-precision floating-point type, as used for replacement values with the localized string placeholder syntax.
- [String.LocalizationValue.Placeholder.double](double.md): The double-precision floating-point type, as used for replacement values with the localized string placeholder syntax.
