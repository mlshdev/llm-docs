> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/listformatstyle/locale(_:)](https://developer.apple.com/documentation/foundation/listformatstyle/locale(_:))

# locale(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the list format style to use the specified locale.

## Declaration

```swift
func locale(_ locale: Locale) -> ListFormatStyle<Style, Base>
```

## Parameters

- `locale`: The locale to use when formatting items in the list.

<a id="return-value"></a>

## Return Value

A list format style with the provided locale.

## See Also

### Modifying a list format style

- [width](width-swift.property.md): The size of the list.
- [ListFormatStyle.Width](width-swift.enum.md): The type representing the width of a list.
- [listType](listtype-swift.property.md): The type of the list.
- [ListFormatStyle.ListType](listtype-swift.enum.md): A type that describes whether the returned list contains cumulative or alternative elements.
- [locale](locale.md): The locale to use when formatting items in the list.
