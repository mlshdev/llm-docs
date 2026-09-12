> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsarraycontroller/addselectedobjects(_:)](https://developer.apple.com/documentation/appkit/nsarraycontroller/addselectedobjects(_:))

# addSelectedObjects(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds the specified objects from the receiver’s content array to the current selection.

## Declaration

```swift
func addSelectedObjects(_ objects: [Any]) -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the selection was changed.

<a id="Discussion"></a>

## Discussion

Attempting to change the selection may cause a [commitEditing()](../nscontroller/commitediting%28%29.md) message which fails, thus denying the selection change.

## See Also

### Managing selections

- [selectionIndex](selectionindex.md): The index of the first object in the receiver’s selection
- [setSelectionIndex(\_:)](setselectionindex%28__%29.md): Sets the receiver’s selection to the given index, and returns a Boolean value that indicates whether the selection was changed.
- [selectsInsertedObjects](selectsinsertedobjects.md): A Boolean value that indicates whether the receiver automatically selects inserted objects
- [setSelectionIndexes(\_:)](setselectionindexes%28__%29.md): Sets the receiver’s selection indexes and returns a Boolean value that indicates whether the selection changed.
- [selectionIndexes](selectionindexes.md): An index set containing the indexes of the receiver’s currently selected objects in the content array
- [addSelectionIndexes(\_:)](addselectionindexes%28__%29.md): Adds the objects at the specified indexes in the receiver’s content array to the current selection.
- [removeSelectionIndexes(\_:)](removeselectionindexes%28__%29.md): Removes the object as the specified indexes from the receiver’s current selection.
- [setSelectedObjects(\_:)](setselectedobjects%28__%29.md): Sets the specified objects as the receiver’s current selection.
- [selectedObjects](selectedobjects.md): An array containing the receiver’s selected objects
- [removeSelectedObjects(\_:)](removeselectedobjects%28__%29.md): Removes the specified objects from the receiver’s current selection.
- [selectNext(\_:)](selectnext%28__%29.md): Selects the next object, relative to the current selection, in the receiver’s arranged content.
- [canSelectNext](canselectnext.md): A Boolean value indicating whether the next object, relative to the current selection, in the receiver’s content array can be selected
- [selectPrevious(\_:)](selectprevious%28__%29.md): Selects the previous object, relative to the current selection, in the receiver’s arranged content.
- [canSelectPrevious](canselectprevious.md): A Boolean value indicating whether the previous object, relative to the current selection, in the receiver’s content array can be selected

# addSelectedObjects: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds the specified objects from the receiver’s content array to the current selection.

## Declaration

```objectivec
- (BOOL) addSelectedObjects:(NSArray *) objects;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the selection was changed.

<a id="Discussion"></a>

## Discussion

Attempting to change the selection may cause a [commitEditing](../nscontroller/commitediting%28%29.md) message which fails, thus denying the selection change.

## See Also

### Managing selections

- [selectionIndex](selectionindex.md): The index of the first object in the receiver’s selection
- [setSelectionIndex:](setselectionindex%28__%29.md): Sets the receiver’s selection to the given index, and returns a Boolean value that indicates whether the selection was changed.
- [selectsInsertedObjects](selectsinsertedobjects.md): A Boolean value that indicates whether the receiver automatically selects inserted objects
- [setSelectionIndexes:](setselectionindexes%28__%29.md): Sets the receiver’s selection indexes and returns a Boolean value that indicates whether the selection changed.
- [selectionIndexes](selectionindexes.md): An index set containing the indexes of the receiver’s currently selected objects in the content array
- [addSelectionIndexes:](addselectionindexes%28__%29.md): Adds the objects at the specified indexes in the receiver’s content array to the current selection.
- [removeSelectionIndexes:](removeselectionindexes%28__%29.md): Removes the object as the specified indexes from the receiver’s current selection.
- [setSelectedObjects:](setselectedobjects%28__%29.md): Sets the specified objects as the receiver’s current selection.
- [selectedObjects](selectedobjects.md): An array containing the receiver’s selected objects
- [removeSelectedObjects:](removeselectedobjects%28__%29.md): Removes the specified objects from the receiver’s current selection.
- [selectNext:](selectnext%28__%29.md): Selects the next object, relative to the current selection, in the receiver’s arranged content.
- [canSelectNext](canselectnext.md): A Boolean value indicating whether the next object, relative to the current selection, in the receiver’s content array can be selected
- [selectPrevious:](selectprevious%28__%29.md): Selects the previous object, relative to the current selection, in the receiver’s arranged content.
- [canSelectPrevious](canselectprevious.md): A Boolean value indicating whether the previous object, relative to the current selection, in the receiver’s content array can be selected
