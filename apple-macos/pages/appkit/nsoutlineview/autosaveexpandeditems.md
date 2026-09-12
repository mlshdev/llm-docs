> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/autosaveexpandeditems](https://developer.apple.com/documentation/appkit/nsoutlineview/autosaveexpandeditems)

# autosaveExpandedItems (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the expanded items are automatically saved across launches of the app.

## Declaration

```swift
var autosaveExpandedItems: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the outline view saves the state of its expanded items and restores that state the next time the user launches the app. (If the outline view’s [autosaveName](../nstableview/autosavename-swift.property.md) property is `nil`, or if you have not implemented the [outlineView(\_:itemForPersistentObject:)](../nsoutlineviewdatasource/outlineview%28__itemforpersistentobject_%29.md) and [outlineView(\_:persistentObjectForItem:)](../nsoutlineviewdatasource/outlineview%28__persistentobjectforitem_%29.md) delegate methods, this setting is ignored and outline information is not saved.) The configuration data is saved separately for each user and for each app. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

You can have separate settings for the [autosaveExpandedItems](autosaveexpandeditems.md) and [autosaveTableColumns](../nstableview/autosavetablecolumns.md) properties, so you could, for example, save expanded item information, but not table column positions.

## See Also

### Related Documentation

- [autosaveTableColumns](../nstableview/autosavetablecolumns.md): A Boolean value indicating whether the order and width of the table view’s columns are automatically saved.
- [autosaveName](../nstableview/autosavename-swift.property.md): The name under which table information is automatically saved.

# autosaveExpandedItems (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the expanded items are automatically saved across launches of the app.

## Declaration

```objectivec
@property BOOL autosaveExpandedItems;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the outline view saves the state of its expanded items and restores that state the next time the user launches the app. (If the outline view’s [autosaveName](../nstableview/autosavename-swift.property.md) property is `nil`, or if you have not implemented the [outlineView:itemForPersistentObject:](../nsoutlineviewdatasource/outlineview%28__itemforpersistentobject_%29.md) and [outlineView:persistentObjectForItem:](../nsoutlineviewdatasource/outlineview%28__persistentobjectforitem_%29.md) delegate methods, this setting is ignored and outline information is not saved.) The configuration data is saved separately for each user and for each app. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

You can have separate settings for the [autosaveExpandedItems](autosaveexpandeditems.md) and [autosaveTableColumns](../nstableview/autosavetablecolumns.md) properties, so you could, for example, save expanded item information, but not table column positions.

## See Also

### Related Documentation

- [autosaveTableColumns](../nstableview/autosavetablecolumns.md): A Boolean value indicating whether the order and width of the table view’s columns are automatically saved.
- [autosaveName](../nstableview/autosavename-swift.property.md): The name under which table information is automatically saved.
