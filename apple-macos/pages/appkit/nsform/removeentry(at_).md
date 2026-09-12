> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsform/removeentry(at:)](https://developer.apple.com/documentation/appkit/nsform/removeentry(at:))

# removeEntry(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Removes and releases the entry at the specified index.

> Use NSTextField directly instead, and consider NSStackView for layout assistance

## Declaration

```swift
func removeEntry(at index: Int)
```

## Parameters

- `index`: The zero-based index identifying the desired entry.

<a id="Discussion"></a>

## Discussion

If the specified index is invalid, this method does nothing.

## See Also

### Adding and Removing Entries

- [addEntry(\_:)](addentry%28__%29.md): Deprecated. Adds a new entry to the end of the receiver and gives it the specified title.
- [insertEntry(\_:at:)](insertentry%28__at_%29.md): Deprecated. Inserts an entry with the specified title into the receiver.

# removeEntryAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Removes and releases the entry at the specified index.

> Use NSTextField directly instead, and consider NSStackView for layout assistance

## Declaration

```objectivec
- (void) removeEntryAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The zero-based index identifying the desired entry.

<a id="Discussion"></a>

## Discussion

If the specified index is invalid, this method does nothing.

## See Also

### Adding and Removing Entries

- [addEntry:](addentry%28__%29.md): Deprecated. Adds a new entry to the end of the receiver and gives it the specified title.
- [insertEntry:atIndex:](insertentry%28__at_%29.md): Deprecated. Inserts an entry with the specified title into the receiver.
