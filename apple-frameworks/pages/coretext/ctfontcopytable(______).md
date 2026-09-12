> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcopytable(_:_:_:)](https://developer.apple.com/documentation/coretext/ctfontcopytable(_:_:_:))

# CTFontCopyTable(\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a reference to the font table data.

## Declaration

```swift
func CTFontCopyTable(_ font: CTFont, _ table: CTFontTableTag, _ options: CTFontTableOptions) -> CFData?
```

## Parameters

- `font`: The font reference.
- `table`: The font table identifier as a [CTFontTableTag](ctfonttabletag.md) constant. See [CTFontTableTag](ctfonttabletag.md) for possible values.
- `options`: The font table options.

<a id="return-value"></a>

## Return Value

A retained reference to the font table data as a [CFData](../corefoundation/cfdata.md) object. The table data is not actually copied; however, the data reference must be released.

## See Also

### Getting Font Table Data

- [CTFontCopyAvailableTables(\_:\_:)](ctfontcopyavailabletables%28____%29.md): Returns an array of font table tags.

# CTFontCopyTable (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a reference to the font table data.

## Declaration

```objectivec
extern CFDataRefCTFontCopyTable(CTFontRef font, CTFontTableTag table, CTFontTableOptions options);
```

## Parameters

- `font`: The font reference.
- `table`: The font table identifier as a [CTFontTableTag](ctfonttabletag.md) constant. See [CTFontTableTag](ctfonttabletag.md) for possible values.
- `options`: The font table options.

<a id="return-value"></a>

## Return Value

A retained reference to the font table data as a [CFDataRef](../corefoundation/cfdata.md) object. The table data is not actually copied; however, the data reference must be released.

## See Also

### Getting Font Table Data

- [CTFontCopyAvailableTables](ctfontcopyavailabletables%28____%29.md): Returns an array of font table tags.
