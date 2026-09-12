> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinderclient/selectedranges](https://developer.apple.com/documentation/appkit/nstextfinderclient/selectedranges)

# selectedRanges (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns an array of selected ranges.

## Declaration

```swift
optional var selectedRanges: [NSValue] { get set }
```

<a id="Discussion"></a>

## Discussion

This property is required for the replace all in selection, select all, and select all in selection actions. The returned `NSArray` object should contain `NSRanges` wrapped by `NSValues`.

## See Also

### Selection Information

- [isSelectable](isselectable.md): Returns whether the text is selectable.
- [allowsMultipleSelection](allowsmultipleselection.md): Returns whether multiple items can be selected.
- [firstSelectedRange](firstselectedrange.md): Returns the currently selected range.

# selectedRanges (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns an array of selected ranges.

## Declaration

```objectivec
@property (copy) NSArray<NSValue *> * selectedRanges;
```

<a id="Discussion"></a>

## Discussion

This property is required for the replace all in selection, select all, and select all in selection actions. The returned `NSArray` object should contain `NSRanges` wrapped by `NSValues`.

## See Also

### Selection Information

- [selectable](isselectable.md): Returns whether the text is selectable.
- [allowsMultipleSelection](allowsmultipleselection.md): Returns whether multiple items can be selected.
- [firstSelectedRange](firstselectedrange.md): Returns the currently selected range.
