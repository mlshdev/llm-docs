> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfont/tabletags](https://developer.apple.com/documentation/coregraphics/cgfont/tabletags)

# tableTags (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an array of tags that correspond to the font tables for a font.

## Declaration

```swift
var tableTags: CFArray? { get }
```

<a id="Discussion"></a>

## Discussion

Each entry in the returned array is a four-byte value that represents a single TrueType or OpenType font table tag. To obtain a tag at index `k` in a manner that is appropriate for 32-bit and 64-bit architectures, you need to use code similar to the following:

```objc
tag = (uint32_t)(uintptr_t)CFArrayGetValue(table, k);
```

## See Also

### Working with Font Tables

- [table(for:)](table%28for_%29.md): Returns the font table that corresponds to the provided tag.
- [Font Table Index Values](../font-table-index-values.md): Possible values for an index into a font table.
- [Obsolete Font Table Index Values](../obsolete-font-table-index-values.md): Deprecated values for an index into a font table.

# CGFontCopyTableTags (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an array of tags that correspond to the font tables for a font.

## Declaration

```objectivec
extern CFArrayRefCGFontCopyTableTags(CGFontRef font);
```

## Parameters

- `font`: A CGFont object.

<a id="return-value"></a>

## Return Value

An array of font table tags.

<a id="Discussion"></a>

## Discussion

Each entry in the returned array is a four-byte value that represents a single TrueType or OpenType font table tag. To obtain a tag at index `k` in a manner that is appropriate for 32-bit and 64-bit architectures, you need to use code similar to the following:

```objc
tag = (uint32_t)(uintptr_t)CFArrayGetValue(table, k);
```

## See Also

### Working with Font Tables

- [CGFontCopyTableForTag](table%28for_%29.md): Returns the font table that corresponds to the provided tag.
- [Font Table Index Values](../font-table-index-values.md): Possible values for an index into a font table.
- [Obsolete Font Table Index Values](../obsolete-font-table-index-values.md): Deprecated values for an index into a font table.
