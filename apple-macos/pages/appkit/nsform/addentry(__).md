> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsform/addentry(_:)](https://developer.apple.com/documentation/appkit/nsform/addentry(_:))

# addEntry(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Adds a new entry to the end of the receiver and gives it the specified title.

> Use NSTextField directly instead, and consider NSStackView for layout assistance

## Declaration

```swift
func addEntry(_ title: String) -> NSFormCell
```

## Parameters

- `title`: The title for the new form entry.

<a id="return-value"></a>

## Return Value

The form cell object that was created for the entry.

<a id="Discussion"></a>

## Discussion

The new entry has no tag, target, or action, but is enabled and editable.

## See Also

### Related Documentation

- [action](../nsactioncell/action.md): Returns the receiver’s action-message selector.
- [target](../nsactioncell/target.md): Returns the receiver’s target object.
- [isEnabled](../nscell/isenabled.md): A Boolean value indicating whether the cell is currently enabled.
- [isEditable](../nscell/iseditable.md): A Boolean value indicating whether the cell is editable.
- [tag](../nsactioncell/tag.md): Returns the receiver’s tag.
- [Form Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Form/Form.html#//apple_ref/doc/uid/10000021i)

### Adding and Removing Entries

- [insertEntry(\_:at:)](insertentry%28__at_%29.md): Deprecated. Inserts an entry with the specified title into the receiver.
- [removeEntry(at:)](removeentry%28at_%29.md): Deprecated. Removes and releases the entry at the specified index.

# addEntry: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Adds a new entry to the end of the receiver and gives it the specified title.

> Use NSTextField directly instead, and consider NSStackView for layout assistance

## Declaration

```objectivec
- (NSFormCell *) addEntry:(NSString *) title;
```

## Parameters

- `title`: The title for the new form entry.

<a id="return-value"></a>

## Return Value

The form cell object that was created for the entry.

<a id="Discussion"></a>

## Discussion

The new entry has no tag, target, or action, but is enabled and editable.

## See Also

### Related Documentation

- [action](../nsactioncell/action.md): Returns the receiver’s action-message selector.
- [target](../nsactioncell/target.md): Returns the receiver’s target object.
- [enabled](../nscell/isenabled.md): A Boolean value indicating whether the cell is currently enabled.
- [editable](../nscell/iseditable.md): A Boolean value indicating whether the cell is editable.
- [tag](../nsactioncell/tag.md): Returns the receiver’s tag.
- [Form Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Form/Form.html#//apple_ref/doc/uid/10000021i)

### Adding and Removing Entries

- [insertEntry:atIndex:](insertentry%28__at_%29.md): Deprecated. Inserts an entry with the specified title into the receiver.
- [removeEntryAtIndex:](removeentry%28at_%29.md): Deprecated. Removes and releases the entry at the specified index.
