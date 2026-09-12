> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobox/indexofselecteditem](https://developer.apple.com/documentation/appkit/nscombobox/indexofselecteditem)

# indexOfSelectedItem (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the last item selected from the pop-up list.

## Declaration

```swift
var indexOfSelectedItem: Int { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `-1` if no item is selected; otherwise, it is the index of the selected item. Nothing is selected in a newly initialized combo box.

## See Also

### Manipulating the Selection

- [deselectItem(at:)](deselectitem%28at_%29.md): Deselects the pop-up list item at the specified index if it’s selected.
- [objectValueOfSelectedItem](objectvalueofselecteditem.md): The object corresponding to the last item selected from the pop-up list.
- [selectItem(at:)](selectitem%28at_%29.md): Selects the pop-up list row at the given index.
- [selectItem(withObjectValue:)](selectitem%28withobjectvalue_%29.md): Selects the first pop-up list item that corresponds to the given object.

# indexOfSelectedItem (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the last item selected from the pop-up list.

## Declaration

```objectivec
@property (readonly) NSInteger indexOfSelectedItem;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `-1` if no item is selected; otherwise, it is the index of the selected item. Nothing is selected in a newly initialized combo box.

## See Also

### Manipulating the Selection

- [deselectItemAtIndex:](deselectitem%28at_%29.md): Deselects the pop-up list item at the specified index if it’s selected.
- [objectValueOfSelectedItem](objectvalueofselecteditem.md): The object corresponding to the last item selected from the pop-up list.
- [selectItemAtIndex:](selectitem%28at_%29.md): Selects the pop-up list row at the given index.
- [selectItemWithObjectValue:](selectitem%28withobjectvalue_%29.md): Selects the first pop-up list item that corresponds to the given object.
