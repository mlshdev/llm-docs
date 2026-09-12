> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinderclient](https://developer.apple.com/documentation/appkit/nstextfinderclient)

# NSTextFinderClient (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods implemented by objects that support searching using the [NSTextFinder](nstextfinder.md) class and the in-window text find bar.

## Declaration

```swift
protocol NSTextFinderClient : NSObjectProtocol
```

<a id="overview"></a>

## Overview

See [NSTextFinder](nstextfinder.md) for details.

## Topics

### String Searching

- [string](nstextfinderclient/string.md): Allows the client to specify a single string for searching.
- [string(at:effectiveRange:endsWithSearchBoundary:)](nstextfinderclient/string%28at_effectiverange_endswithsearchboundary_%29.md): Returns the found string that is created by conceptually mapping its content to a single string, which is composed of a concatenation of all its substrings.
- [stringLength()](nstextfinderclient/stringlength%28%29.md): Returns the full length of the conceptually concatenated string return by the `stringAtIndex:effectiveRange:endsWithSearchBoundary:` method.

### Replacing Text

- [shouldReplaceCharacters(inRanges:with:)](nstextfinderclient/shouldreplacecharacters%28inranges_with_%29.md): Returns whether the specified strings should be replaced.
- [replaceCharacters(in:with:)](nstextfinderclient/replacecharacters%28in_with_%29.md): Replaces the text in the specified range with the new string.
- [didReplaceCharacters()](nstextfinderclient/didreplacecharacters%28%29.md): Specifies whether text characters were replaced.

### Selection Information

- [isSelectable](nstextfinderclient/isselectable.md): Returns whether the text is selectable.
- [allowsMultipleSelection](nstextfinderclient/allowsmultipleselection.md): Returns whether multiple items can be selected.
- [firstSelectedRange](nstextfinderclient/firstselectedrange.md): Returns the currently selected range.
- [selectedRanges](nstextfinderclient/selectedranges.md): Returns an array of selected ranges.

### Text Edibility

- [isEditable](nstextfinderclient/iseditable.md): Returns whether the text is editable.

### Determining and Displaying Text Locations

- [contentView(at:effectiveCharacterRange:)](nstextfinderclient/contentview%28at_effectivecharacterrange_%29.md): Returns the view the context is displayed in.
- [rects(forCharacterRange:)](nstextfinderclient/rects%28forcharacterrange_%29.md): An array containing the located text in the content view’s coordinate system.
- [scrollRangeToVisible(\_:)](nstextfinderclient/scrollrangetovisible%28__%29.md): Scrolls the specified range such that it is visible.
- [visibleCharacterRanges](nstextfinderclient/visiblecharacterranges.md): An array of visible character ranges.

### Drawing Glyphs

- [drawCharacters(in:forContentView:)](nstextfinderclient/drawcharacters%28in_forcontentview_%29.md): Draw the glyphs for the requested character range as they are drawn in the given content view.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Search and Replace

- [NSTextFinder](nstextfinder.md): An optional search-and-replace find interface inside a view, usually a scroll view.
- [NSTextFinderBarContainer](nstextfinderbarcontainer.md): A protocol that provides a container in which the find bar is displayed.

# NSTextFinderClient (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods implemented by objects that support searching using the [NSTextFinder](nstextfinder.md) class and the in-window text find bar.

## Declaration

```objectivec
@protocol NSTextFinderClient <NSObject>
```

<a id="overview"></a>

## Overview

See [NSTextFinder](nstextfinder.md) for details.

## Topics

### String Searching

- [string](nstextfinderclient/string.md): Allows the client to specify a single string for searching.
- [stringAtIndex:effectiveRange:endsWithSearchBoundary:](nstextfinderclient/string%28at_effectiverange_endswithsearchboundary_%29.md): Returns the found string that is created by conceptually mapping its content to a single string, which is composed of a concatenation of all its substrings.
- [stringLength](nstextfinderclient/stringlength%28%29.md): Returns the full length of the conceptually concatenated string return by the `stringAtIndex:effectiveRange:endsWithSearchBoundary:` method.

### Replacing Text

- [shouldReplaceCharactersInRanges:withStrings:](nstextfinderclient/shouldreplacecharacters%28inranges_with_%29.md): Returns whether the specified strings should be replaced.
- [replaceCharactersInRange:withString:](nstextfinderclient/replacecharacters%28in_with_%29.md): Replaces the text in the specified range with the new string.
- [didReplaceCharacters](nstextfinderclient/didreplacecharacters%28%29.md): Specifies whether text characters were replaced.

### Selection Information

- [selectable](nstextfinderclient/isselectable.md): Returns whether the text is selectable.
- [allowsMultipleSelection](nstextfinderclient/allowsmultipleselection.md): Returns whether multiple items can be selected.
- [firstSelectedRange](nstextfinderclient/firstselectedrange.md): Returns the currently selected range.
- [selectedRanges](nstextfinderclient/selectedranges.md): Returns an array of selected ranges.

### Text Edibility

- [editable](nstextfinderclient/iseditable.md): Returns whether the text is editable.

### Determining and Displaying Text Locations

- [contentViewAtIndex:effectiveCharacterRange:](nstextfinderclient/contentview%28at_effectivecharacterrange_%29.md): Returns the view the context is displayed in.
- [rectsForCharacterRange:](nstextfinderclient/rects%28forcharacterrange_%29.md): An array containing the located text in the content view’s coordinate system.
- [scrollRangeToVisible:](nstextfinderclient/scrollrangetovisible%28__%29.md): Scrolls the specified range such that it is visible.
- [visibleCharacterRanges](nstextfinderclient/visiblecharacterranges.md): An array of visible character ranges.

### Drawing Glyphs

- [drawCharactersInRange:forContentView:](nstextfinderclient/drawcharacters%28in_forcontentview_%29.md): Draw the glyphs for the requested character range as they are drawn in the given content view.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Search and Replace

- [NSTextFinder](nstextfinder.md): An optional search-and-replace find interface inside a view, usually a scroll view.
- [NSTextFinderBarContainer](nstextfinderbarcontainer.md): A protocol that provides a container in which the find bar is displayed.
