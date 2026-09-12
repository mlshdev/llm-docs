> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacepicker/setitems(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacepicker/setitems(_:))

# setItems(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the list of items displayed by the picker.

## Declaration

```swift
func setItems(_ items: [WKPickerItem]?)
```

## Parameters

- `items`: An array of [WKPickerItem](../wkpickeritem.md) objects. Each item in the array represents a single selectable item.

<a id="Discussion"></a>

## Discussion

The items you specify must be configured appropriate for the picker style. For example, items displayed using the list style must contain a title. The picker displays items in the order they appear in the `items` array. When a selection occurs, the picker reports the index of the selected item to its associated action method.

This method displays the new items in the picker right away. If the previously specified selection index exceeds the number of items in the new array, the picker selects the last item in the array.

## See Also

### Managing the Picker Contents

- [WKPickerItem](../wkpickeritem.md): A single item in a picker interface.
- [setSelectedItemIndex(\_:)](setselecteditemindex%28__%29.md): Selects the specified item in the list.
- [setCoordinatedAnimations(\_:)](setcoordinatedanimations%28__%29.md): Sets the interface objects that should coordinate their own animations with the picker.

# setItems: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the list of items displayed by the picker.

## Declaration

```objectivec
- (void) setItems:(NSArray<WKPickerItem *> *) items;
```

## Parameters

- `items`: An array of [WKPickerItem](../wkpickeritem.md) objects. Each item in the array represents a single selectable item.

<a id="Discussion"></a>

## Discussion

The items you specify must be configured appropriate for the picker style. For example, items displayed using the list style must contain a title. The picker displays items in the order they appear in the `items` array. When a selection occurs, the picker reports the index of the selected item to its associated action method.

This method displays the new items in the picker right away. If the previously specified selection index exceeds the number of items in the new array, the picker selects the last item in the array.

## See Also

### Managing the Picker Contents

- [WKPickerItem](../wkpickeritem.md): A single item in a picker interface.
- [setSelectedItemIndex:](setselecteditemindex%28__%29.md): Selects the specified item in the list.
- [setCoordinatedAnimations:](setcoordinatedanimations%28__%29.md): Sets the interface objects that should coordinate their own animations with the picker.
