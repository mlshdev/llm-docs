> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacepicker/setselecteditemindex(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacepicker/setselecteditemindex(_:))

# setSelectedItemIndex(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Selects the specified item in the list.

## Declaration

```swift
func setSelectedItemIndex(_ itemIndex: Int)
```

## Parameters

- `itemIndex`: The index of the item to select. This index represents the index into the array of items you set using the [setItems(\_:)](setitems%28__%29.md) method.

<a id="Discussion"></a>

## Discussion

If the value in `itemIndex` exceeds the number of items in the array, the picker selects the last item. If `itemIndex` is negative, the picker selects the first item in the array.

## See Also

### Managing the Picker Contents

- [setItems(\_:)](setitems%28__%29.md): Sets the list of items displayed by the picker.
- [WKPickerItem](../wkpickeritem.md): A single item in a picker interface.
- [setCoordinatedAnimations(\_:)](setcoordinatedanimations%28__%29.md): Sets the interface objects that should coordinate their own animations with the picker.

# setSelectedItemIndex: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Selects the specified item in the list.

## Declaration

```objectivec
- (void) setSelectedItemIndex:(NSInteger) itemIndex;
```

## Parameters

- `itemIndex`: The index of the item to select. This index represents the index into the array of items you set using the [setItems:](setitems%28__%29.md) method.

<a id="Discussion"></a>

## Discussion

If the value in `itemIndex` exceeds the number of items in the array, the picker selects the last item. If `itemIndex` is negative, the picker selects the first item in the array.

## See Also

### Managing the Picker Contents

- [setItems:](setitems%28__%29.md): Sets the list of items displayed by the picker.
- [WKPickerItem](../wkpickeritem.md): A single item in a picker interface.
- [setCoordinatedAnimations:](setcoordinatedanimations%28__%29.md): Sets the interface objects that should coordinate their own animations with the picker.
