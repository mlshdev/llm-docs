> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/selectedtag](https://developer.apple.com/documentation/appkit/nspopupbutton/selectedtag)

# selectedTag

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The tag of the menu item that was last selected by the user.

## Declaration

```objectivec
@property (readonly) NSInteger selectedTag;
```

<a id="Discussion"></a>

## Discussion

Tags are integers that you assign to items to identify them in your code. Tags are not used by AppKit.

If no menu item is selected, the value in this property is `-1`.

## See Also

### Getting the user’s selection

- [selectedItem](selecteditem.md): The menu item that was last selected by the user.
- [titleOfSelectedItem](titleofselecteditem.md): The title of the item that was last selected by the user.
- [indexOfSelectedItem](indexofselecteditem.md): The index of the item that was last selected by the user.
