> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextelementprovider/replacecontents(in:with:)](https://developer.apple.com/documentation/uikit/nstextelementprovider/replacecontents(in:with:))

# replaceContents(in:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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
