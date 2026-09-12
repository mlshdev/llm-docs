> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfont/table(for:)](https://developer.apple.com/documentation/coregraphics/cgfont/table(for:))

# table(for:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the font table that corresponds to the provided tag.

## Declaration

```swift
func table(for tag: UInt32) -> CFData?
```

## Parameters

- `tag`: The tag for the table you want to obtain.

<a id="return-value"></a>

## Return Value

The font table that corresponds to the tag, or `nil` if no such table exists.

## See Also

### Working with Font Tables

- [tableTags](tabletags.md): Returns an array of tags that correspond to the font tables for a font.
- [Font Table Index Values](../font-table-index-values.md): Possible values for an index into a font table.
- [Obsolete Font Table Index Values](../obsolete-font-table-index-values.md): Deprecated values for an index into a font table.

# CGFontCopyTableForTag (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the font table that corresponds to the provided tag.

## Declaration

```objectivec
extern CFDataRefCGFontCopyTableForTag(CGFontRef font, uint32_t tag);
```

## Parameters

- `font`: A font object.
- `tag`: The tag for the table you want to obtain.

<a id="return-value"></a>

## Return Value

The font table that corresponds to the tag, or `nil` if no such table exists.

## See Also

### Working with Font Tables

- [CGFontCopyTableTags](tabletags.md): Returns an array of tags that correspond to the font tables for a font.
- [Font Table Index Values](../font-table-index-values.md): Possible values for an index into a font table.
- [Obsolete Font Table Index Values](../obsolete-font-table-index-values.md): Deprecated values for an index into a font table.
