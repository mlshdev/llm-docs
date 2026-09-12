> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/listformatstyle/width-swift.property](https://developer.apple.com/documentation/foundation/listformatstyle/width-swift.property)

# width

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The size of the list.

## Declaration

```swift
var width: ListFormatStyle<Style, Base>.Width
```

<a id="Discussion"></a>

## Discussion

The `width` property controls the size of the list. The [locale](locale.md) determines the formatting and abbreviation of the string for the given `width`.

For example, for English:

```swift
["One", "Two", "Three"].formatted(.list(type: .and, width: .standard))
// “One, Two, and Three”

["One", "Two", "Three"].formatted(.list(type: .and, width: .short))
// “One, Two, & Three” 

["One", "Two", "Three"].formatted(.list(type: .and, width: .narrow))
// “One, Two, Three” 
```

The default value is [ListFormatStyle.Width.standard](width-swift.enum/standard.md).

## See Also

### Modifying a list format style

- [ListFormatStyle.Width](width-swift.enum.md): The type representing the width of a list.
- [listType](listtype-swift.property.md): The type of the list.
- [ListFormatStyle.ListType](listtype-swift.enum.md): A type that describes whether the returned list contains cumulative or alternative elements.
- [locale](locale.md): The locale to use when formatting items in the list.
- [locale(\_:)](locale%28__%29.md): Modifies the list format style to use the specified locale.
