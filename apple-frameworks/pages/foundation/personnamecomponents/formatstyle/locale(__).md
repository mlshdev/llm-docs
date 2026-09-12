> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/personnamecomponents/formatstyle/locale(_:)](https://developer.apple.com/documentation/foundation/personnamecomponents/formatstyle/locale(_:))

# locale(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the person name components format style to use the specified locale.

## Declaration

```swift
func locale(_ locale: Locale) -> PersonNameComponents.FormatStyle
```

## Parameters

- `locale`: The locale to use when formatting person name components.

<a id="return-value"></a>

## Return Value

A person name components format style with the provided locale.

## See Also

### Modifying a Format Style

- [style](style-swift.property.md): Specifies the style of the formatted result.
- [PersonNameComponents.FormatStyle.Style](style-swift.enum.md): The type that represents the style of the formatted result.
- [locale](locale.md): The locale to use when formatting the person name components.
- [attributed](attributed.md): The style used to create a locale-aware attributed string representation of an instance of person name components.
