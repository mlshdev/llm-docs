> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstokenfieldcelldelegate/tokenfieldcell(_:editingstringforrepresentedobject:)](https://developer.apple.com/documentation/appkit/nstokenfieldcelldelegate/tokenfieldcell(_:editingstringforrepresentedobject:))

# tokenFieldCell(\_:editingStringForRepresentedObject:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to provide a string to be edited as a proxy for the represented object.

## Declaration

```swift
@MainActor optional func tokenFieldCell(_ tokenFieldCell: NSTokenFieldCell, editingStringForRepresentedObject representedObject: Any) -> String?
```

## Parameters

- `tokenFieldCell`: The token field cell that sent the message.
- `representedObject`: A represented object of the token field.

<a id="return-value"></a>

## Return Value

A string that’s an editable proxy of the represented object, or `nil` if the token should not be editable.

## See Also

### Editing a Tokenized Strings

- [tokenFieldCell(\_:completionsForSubstring:indexOfToken:indexOfSelectedItem:)](tokenfieldcell%28__completionsforsubstring_indexoftoken_indexofselecteditem_%29.md): Allows the delegate to provide an array of appropriate completions for the contents of the receiver.
- [tokenFieldCell(\_:representedObjectForEditing:)](tokenfieldcell%28__representedobjectforediting_%29.md): Allows the delegate to provide a represented object for the string being edited.
- [tokenFieldCell(\_:shouldAdd:at:)](tokenfieldcell%28__shouldadd_at_%29.md): Allows the delegate to validate the tokens to be added to the receiver at a given index.

# tokenFieldCell:editingStringForRepresentedObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to provide a string to be edited as a proxy for the represented object.

## Declaration

```objectivec
- (NSString *) tokenFieldCell:(NSTokenFieldCell *) tokenFieldCell editingStringForRepresentedObject:(id) representedObject;
```

## Parameters

- `tokenFieldCell`: The token field cell that sent the message.
- `representedObject`: A represented object of the token field.

<a id="return-value"></a>

## Return Value

A string that’s an editable proxy of the represented object, or `nil` if the token should not be editable.

## See Also

### Editing a Tokenized Strings

- [tokenFieldCell:completionsForSubstring:indexOfToken:indexOfSelectedItem:](tokenfieldcell%28__completionsforsubstring_indexoftoken_indexofselecteditem_%29.md): Allows the delegate to provide an array of appropriate completions for the contents of the receiver.
- [tokenFieldCell:representedObjectForEditingString:](tokenfieldcell%28__representedobjectforediting_%29.md): Allows the delegate to provide a represented object for the string being edited.
- [tokenFieldCell:shouldAddObjects:atIndex:](tokenfieldcell%28__shouldadd_at_%29.md): Allows the delegate to validate the tokens to be added to the receiver at a given index.
