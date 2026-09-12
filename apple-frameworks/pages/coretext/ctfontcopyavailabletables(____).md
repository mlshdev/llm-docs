> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcopyavailabletables(_:_:)](https://developer.apple.com/documentation/coretext/ctfontcopyavailabletables(_:_:))

# CTFontCopyAvailableTables(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of font table tags.

## Declaration

```swift
func CTFontCopyAvailableTables(_ font: CTFont, _ options: CTFontTableOptions) -> CFArray?
```

## Parameters

- `font`: The font reference.
- `options`: The font table options.

<a id="return-value"></a>

## Return Value

An array of [CTFontTableTag](ctfonttabletag.md) values for the given font and the supplied options.

<a id="Discussion"></a>

## Discussion

The returned set will contain unboxed values, which can be extracted like so:

```objc
CTFontTableTag tag = (CTFontTableTag)(uintptr_t)CFArrayGetValueAtIndex(tags, index);
```

## See Also

### Getting Font Table Data

- [CTFontCopyTable(\_:\_:\_:)](ctfontcopytable%28______%29.md): Returns a reference to the font table data.

# CTFontCopyAvailableTables (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of font table tags.

## Declaration

```objectivec
extern CFArrayRefCTFontCopyAvailableTables(CTFontRef font, CTFontTableOptions options);
```

## Parameters

- `font`: The font reference.
- `options`: The font table options.

<a id="return-value"></a>

## Return Value

An array of [CTFontTableTag](ctfonttabletag.md) values for the given font and the supplied options.

<a id="Discussion"></a>

## Discussion

The returned set will contain unboxed values, which can be extracted like so:

```objc
CTFontTableTag tag = (CTFontTableTag)(uintptr_t)CFArrayGetValueAtIndex(tags, index);
```

## See Also

### Getting Font Table Data

- [CTFontCopyTable](ctfontcopytable%28______%29.md): Returns a reference to the font table data.
