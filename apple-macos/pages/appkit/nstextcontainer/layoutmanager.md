> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontainer/layoutmanager](https://developer.apple.com/documentation/appkit/nstextcontainer/layoutmanager)

# layoutManager (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The text container’s layout manager.

## Declaration

```swift
unowned(unsafe) var layoutManager: NSLayoutManager? { get set }
```

<a id="Discussion"></a>

## Discussion

Avoid assigning a layout manager directly through this property. Instead, use the [replaceLayoutManager(\_:)](replacelayoutmanager%28__%29.md) method when you want to replace the layout manager. The framework sets the value of this property automatically when you add a text container to your layout manager using the [addTextContainer(\_:)](../nslayoutmanager/addtextcontainer%28__%29.md) method.

## See Also

### Managing text components

- [textLayoutManager](textlayoutmanager.md)
- [replaceLayoutManager(\_:)](replacelayoutmanager%28__%29.md): Replaces the layout manager for the group of text system objects that contains the text container.
- [textView](textview.md): The text container’s text view.

# layoutManager (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The text container’s layout manager.

## Declaration

```objectivec
@property (assign, nullable) NSLayoutManager * layoutManager;
```

<a id="Discussion"></a>

## Discussion

Avoid assigning a layout manager directly through this property. Instead, use the [replaceLayoutManager:](replacelayoutmanager%28__%29.md) method when you want to replace the layout manager. The framework sets the value of this property automatically when you add a text container to your layout manager using the [addTextContainer:](../nslayoutmanager/addtextcontainer%28__%29.md) method.

## See Also

### Managing text components

- [textLayoutManager](textlayoutmanager.md)
- [replaceLayoutManager:](replacelayoutmanager%28__%29.md): Replaces the layout manager for the group of text system objects that contains the text container.
- [textView](textview.md): The text container’s text view.
