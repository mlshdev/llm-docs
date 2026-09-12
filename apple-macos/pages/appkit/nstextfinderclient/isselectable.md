> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinderclient/isselectable](https://developer.apple.com/documentation/appkit/nstextfinderclient/isselectable)

# isSelectable (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns whether the text is selectable.

## Declaration

```swift
optional var isSelectable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If this properties is not implemented, the text finder will act as if they returned [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Selection Information

- [allowsMultipleSelection](allowsmultipleselection.md): Returns whether multiple items can be selected.
- [firstSelectedRange](firstselectedrange.md): Returns the currently selected range.
- [selectedRanges](selectedranges.md): Returns an array of selected ranges.

# selectable (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns whether the text is selectable.

## Declaration

```objectivec
@property (readonly, getter=isSelectable) BOOL selectable;
```

<a id="Discussion"></a>

## Discussion

If this properties is not implemented, the text finder will act as if they returned [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Selection Information

- [allowsMultipleSelection](allowsmultipleselection.md): Returns whether multiple items can be selected.
- [firstSelectedRange](firstselectedrange.md): Returns the currently selected range.
- [selectedRanges](selectedranges.md): Returns an array of selected ranges.
