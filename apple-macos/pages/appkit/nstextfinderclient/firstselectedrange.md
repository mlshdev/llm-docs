> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinderclient/firstselectedrange](https://developer.apple.com/documentation/appkit/nstextfinderclient/firstselectedrange)

# firstSelectedRange (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the currently selected range.

## Declaration

```swift
optional var firstSelectedRange: NSRange { get }
```

<a id="Discussion"></a>

## Discussion

This property is required for the next match, previous match, replace, replace and find and set search string actions. The client should return its first selected range, or {index, 0} to indicate the location of the insertion point if there is no selection.

## See Also

### Selection Information

- [isSelectable](isselectable.md): Returns whether the text is selectable.
- [allowsMultipleSelection](allowsmultipleselection.md): Returns whether multiple items can be selected.
- [selectedRanges](selectedranges.md): Returns an array of selected ranges.

# firstSelectedRange (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the currently selected range.

## Declaration

```objectivec
@property (readonly) NSRange firstSelectedRange;
```

<a id="Discussion"></a>

## Discussion

This property is required for the next match, previous match, replace, replace and find and set search string actions. The client should return its first selected range, or {index, 0} to indicate the location of the insertion point if there is no selection.

## See Also

### Selection Information

- [selectable](isselectable.md): Returns whether the text is selectable.
- [allowsMultipleSelection](allowsmultipleselection.md): Returns whether multiple items can be selected.
- [selectedRanges](selectedranges.md): Returns an array of selected ranges.
