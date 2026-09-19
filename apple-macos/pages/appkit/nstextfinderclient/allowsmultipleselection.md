> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextfinderclient/allowsmultipleselection

# allowsMultipleSelection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns whether multiple items can be selected.

## Declaration

```swift
optional var allowsMultipleSelection: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If this properties is not implemented, the text finder will act as if they returned [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Selection Information

- [isSelectable](isselectable.md): Returns whether the text is selectable.
- [firstSelectedRange](firstselectedrange.md): Returns the currently selected range.
- [selectedRanges](selectedranges.md): Returns an array of selected ranges.

# allowsMultipleSelection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns whether multiple items can be selected.

## Declaration

```objectivec
@property (readonly) BOOL allowsMultipleSelection;
```

<a id="Discussion"></a>

## Discussion

If this properties is not implemented, the text finder will act as if they returned [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Selection Information

- [selectable](isselectable.md): Returns whether the text is selectable.
- [firstSelectedRange](firstselectedrange.md): Returns the currently selected range.
- [selectedRanges](selectedranges.md): Returns an array of selected ranges.
