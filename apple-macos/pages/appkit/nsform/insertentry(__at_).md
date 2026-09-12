> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsform/insertentry(_:at:)](https://developer.apple.com/documentation/appkit/nsform/insertentry(_:at:))

# insertEntry(\_:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Inserts an entry with the specified title into the receiver.

> Use NSTextField directly instead, and consider NSStackView for layout assistance

## Declaration

```swift
func insertEntry(_ title: String, at index: Int) -> NSFormCell!
```

## Parameters

- `title`: The title for the new form entry.
- `index`: The zero-based index at which to insert the entry.

<a id="return-value"></a>

## Return Value

The form cell object that was created for the entry.

<a id="Discussion"></a>

## Discussion

The new entry has no tag, target, or action, but is enabled and editable.

## See Also

### Adding and Removing Entries

- [addEntry(\_:)](addentry%28__%29.md): Deprecated. Adds a new entry to the end of the receiver and gives it the specified title.
- [removeEntry(at:)](removeentry%28at_%29.md): Deprecated. Removes and releases the entry at the specified index.

# insertEntry:atIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Inserts an entry with the specified title into the receiver.

> Use NSTextField directly instead, and consider NSStackView for layout assistance

## Declaration

```objectivec
- (NSFormCell *) insertEntry:(NSString *) title atIndex:(NSInteger) index;
```

## Parameters

- `title`: The title for the new form entry.
- `index`: The zero-based index at which to insert the entry.

<a id="return-value"></a>

## Return Value

The form cell object that was created for the entry.

<a id="Discussion"></a>

## Discussion

The new entry has no tag, target, or action, but is enabled and editable.

## See Also

### Adding and Removing Entries

- [addEntry:](addentry%28__%29.md): Deprecated. Adds a new entry to the end of the receiver and gives it the specified title.
- [removeEntryAtIndex:](removeentry%28at_%29.md): Deprecated. Removes and releases the entry at the specified index.
