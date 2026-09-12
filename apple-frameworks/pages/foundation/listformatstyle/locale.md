> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/listformatstyle/locale](https://developer.apple.com/documentation/foundation/listformatstyle/locale)

# locale

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The locale to use when formatting items in the list.

## Declaration

```swift
var locale: Locale
```

<a id="Discussion"></a>

## Discussion

A [Locale](../locale.md) instance is typically used to provide, format, and interpret information about and according to the user’s customs and preferences.

Examples include ISO region and language codes, currency code, calendar, system of measurement, and decimal separator.

The default value is [autoupdatingCurrent](../locale/autoupdatingcurrent.md). If you set this property to `nil`, the formatter resets to using `autoupdatingCurrent`.

## See Also

### Modifying a list format style

- [width](width-swift.property.md): The size of the list.
- [ListFormatStyle.Width](width-swift.enum.md): The type representing the width of a list.
- [listType](listtype-swift.property.md): The type of the list.
- [ListFormatStyle.ListType](listtype-swift.enum.md): A type that describes whether the returned list contains cumulative or alternative elements.
- [locale(\_:)](locale%28__%29.md): Modifies the list format style to use the specified locale.
