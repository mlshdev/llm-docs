> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxcell/objectvalueofselecteditem](https://developer.apple.com/documentation/appkit/nscomboboxcell/objectvalueofselecteditem)

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

The value of this property is the object from the combo box’s internal item list corresponding to the last item selected from the pop-up list, or `nil` if no item is selected.

Note that nothing is initially selected in a newly initialized combo box cell. Accessing this property logs a warning if [usesDataSource](usesdatasource.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Manipulating the Selection

- [deselectItem(at:)](deselectitem%28at_%29.md): Deselects the pop-up list item at the given index if it’s selected.
- [indexOfSelectedItem](indexofselecteditem.md): The index of the last item selected from the pop-up list.
- [selectItem(at:)](selectitem%28at_%29.md): Selects the pop-up list row at the given index.
- [selectItem(withObjectValue:)](selectitem%28withobjectvalue_%29.md): Selects the first pop-up list item that corresponds to the specified object.

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

The value of this property is the object from the combo box’s internal item list corresponding to the last item selected from the pop-up list, or `nil` if no item is selected.

Note that nothing is initially selected in a newly initialized combo box cell. Accessing this property logs a warning if [usesDataSource](usesdatasource.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Manipulating the Selection

- [deselectItemAtIndex:](deselectitem%28at_%29.md): Deselects the pop-up list item at the given index if it’s selected.
- [indexOfSelectedItem](indexofselecteditem.md): The index of the last item selected from the pop-up list.
- [selectItemAtIndex:](selectitem%28at_%29.md): Selects the pop-up list row at the given index.
- [selectItemWithObjectValue:](selectitem%28withobjectvalue_%29.md): Selects the first pop-up list item that corresponds to the specified object.
