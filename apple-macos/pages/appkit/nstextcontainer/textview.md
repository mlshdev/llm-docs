> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontainer/textview](https://developer.apple.com/documentation/appkit/nstextcontainer/textview)

# textView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The text container’s text view.

## Declaration

```swift
weak var textView: NSTextView? { get set }
```

<a id="Discussion"></a>

## Discussion

A text container doesn’t need a text view to calculate line fragment rectangles, but must have one to display text.

You can use this property to disconnect a text view from a group of text system objects by sending this message to its text container and passing `nil` as `aTextView`.

## See Also

### Managing text components

- [layoutManager](layoutmanager.md): The text container’s layout manager.
- [textLayoutManager](textlayoutmanager.md)
- [replaceLayoutManager(\_:)](replacelayoutmanager%28__%29.md): Replaces the layout manager for the group of text system objects that contains the text container.

# textView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The text container’s text view.

## Declaration

```objectivec
@property (weak, nullable) NSTextView * textView;
```

<a id="Discussion"></a>

## Discussion

A text container doesn’t need a text view to calculate line fragment rectangles, but must have one to display text.

You can use this property to disconnect a text view from a group of text system objects by sending this message to its text container and passing `nil` as `aTextView`.

## See Also

### Managing text components

- [layoutManager](layoutmanager.md): The text container’s layout manager.
- [textLayoutManager](textlayoutmanager.md)
- [replaceLayoutManager:](replacelayoutmanager%28__%29.md): Replaces the layout manager for the group of text system objects that contains the text container.
