> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextelementprovider/replacecontents(in:with:)](https://developer.apple.com/documentation/appkit/nstextelementprovider/replacecontents(in:with:))

# replaceContents(in:with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Replaces the characters specified by range with the text elements you provide.

## Declaration

```swift
func replaceContents(in range: NSTextRange, with textElements: [NSTextElement]?)
```

## Parameters

- `range`: An [NSTextRange](../nstextrange.md).
- `textElements`: The elements to replace that characters at `range`.

<a id="Discussion"></a>

## Discussion

If the edges of `range` aren’t at existing element range boundaries, the method either splits the element if it allows the operation (for example, [NSTextParagraph](../nstextparagraph.md)), or the adjusts the replacement range.

> **Note**

>  This method is for use by [NSTextLayoutManager](../nstextlayoutmanager.md).

## See Also

### Accessing and updating the text

- [enumerateTextElements(from:options:using:)](enumeratetextelements%28from_options_using_%29.md): Enumerates text elements starting at the text location you provide.
- [NSTextLayoutFragment.EnumerationOptions](../nstextlayoutfragment/enumerationoptions.md): Values that describe options for enumerating text layout fragments.
- [location(\_:offsetBy:)](location%28__offsetby_%29.md): Returns a new location from location with offset you provide.

# replaceContentsInRange:withTextElements: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Replaces the characters specified by range with the text elements you provide.

## Declaration

```objectivec
- (void) replaceContentsInRange:(NSTextRange *) range withTextElements:(NSArray<NSTextElement *> *) textElements;
```

## Parameters

- `range`: An [NSTextRange](../nstextrange.md).
- `textElements`: The elements to replace that characters at `range`.

<a id="Discussion"></a>

## Discussion

If the edges of `range` aren’t at existing element range boundaries, the method either splits the element if it allows the operation (for example, [NSTextParagraph](../nstextparagraph.md)), or the adjusts the replacement range.

> **Note**

>  This method is for use by [NSTextLayoutManager](../nstextlayoutmanager.md).

## See Also

### Accessing and updating the text

- [enumerateTextElementsFromLocation:options:usingBlock:](enumeratetextelements%28from_options_using_%29.md): Enumerates text elements starting at the text location you provide.
- [NSTextLayoutFragmentEnumerationOptions](../nstextlayoutfragment/enumerationoptions.md): Values that describe options for enumerating text layout fragments.
- [locationFromLocation:withOffset:](location%28__offsetby_%29.md): Returns a new location from location with offset you provide.
