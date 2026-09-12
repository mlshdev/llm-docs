> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobox/objectvalueofselecteditem](https://developer.apple.com/documentation/appkit/nscombobox/objectvalueofselecteditem)

# objectValueOfSelectedItem (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The object corresponding to the last item selected from the pop-up list.

## Declaration

```swift
var objectValueOfSelectedItem: Any? { get }
```

<a id="Discussion"></a>

## Discussion

For combo boxes that use their own internally maintained list of items, this property contains the object in that list that is selected. If no item is selected, the value in this property is `nil`. Nothing is selected in a newly initialized combo box. This method logs a warning if the [usesDataSource](usesdatasource.md) property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Manipulating the Selection

- [deselectItem(at:)](deselectitem%28at_%29.md): Deselects the pop-up list item at the specified index if it’s selected.
- [indexOfSelectedItem](indexofselecteditem.md): The index of the last item selected from the pop-up list.
- [selectItem(at:)](selectitem%28at_%29.md): Selects the pop-up list row at the given index.
- [selectItem(withObjectValue:)](selectitem%28withobjectvalue_%29.md): Selects the first pop-up list item that corresponds to the given object.

# objectValueOfSelectedItem (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The object corresponding to the last item selected from the pop-up list.

## Declaration

```objectivec
@property (strong, readonly, nullable) id objectValueOfSelectedItem;
```

<a id="Discussion"></a>

## Discussion

For combo boxes that use their own internally maintained list of items, this property contains the object in that list that is selected. If no item is selected, the value in this property is `nil`. Nothing is selected in a newly initialized combo box. This method logs a warning if the [usesDataSource](usesdatasource.md) property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Manipulating the Selection

- [deselectItemAtIndex:](deselectitem%28at_%29.md): Deselects the pop-up list item at the specified index if it’s selected.
- [indexOfSelectedItem](indexofselecteditem.md): The index of the last item selected from the pop-up list.
- [selectItemAtIndex:](selectitem%28at_%29.md): Selects the pop-up list row at the given index.
- [selectItemWithObjectValue:](selectitem%28withobjectvalue_%29.md): Selects the first pop-up list item that corresponds to the given object.
