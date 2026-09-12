> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/localizationvalue/placeholder/double](https://developer.apple.com/documentation/swift/string/localizationvalue/placeholder/double)

# String.LocalizationValue.Placeholder.double

**Framework:** Swift  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The double-precision floating-point type, as used for replacement values with the localized string placeholder syntax.

## Declaration

```swift
case double
```

<a id="discussion"></a>

## Discussion

To insert a `double` into a placeholder, use the syntax `\(placeholder: .double)`.

The various `String(localized:)` initializers apply a locale-appropriate `FormatStyle` to the numeric value, based on the `locale:` parameter or the `LocalizedStringResource`.

## See Also

### Placeholder types

- [String.LocalizationValue.Placeholder.int](int.md): The signed integer type, as used for replacement values with the localized string placeholder syntax.
- [String.LocalizationValue.Placeholder.uint](uint.md): The unsigned integer type, as used for replacement values with the localized string placeholder syntax.
- [String.LocalizationValue.Placeholder.float](float.md): The single-precision floating-point type, as used for replacement values with the localized string placeholder syntax.
- [String.LocalizationValue.Placeholder.object](object.md): The object type, as used for replacement values with the localized string placeholder syntax.
