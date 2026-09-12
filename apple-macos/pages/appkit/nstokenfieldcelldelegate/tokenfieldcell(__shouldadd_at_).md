> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstokenfieldcelldelegate/tokenfieldcell(_:shouldadd:at:)](https://developer.apple.com/documentation/appkit/nstokenfieldcelldelegate/tokenfieldcell(_:shouldadd:at:))

# tokenFieldCell(\_:shouldAdd:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to validate the tokens to be added to the receiver at a given index.

## Declaration

```swift
@MainActor optional func tokenFieldCell(_ tokenFieldCell: NSTokenFieldCell, shouldAdd tokens: [Any], at index: Int) -> [Any]
```

## Parameters

- `tokenFieldCell`: The token field cell that sent the message.
- `tokens`: An array of tokens to be inserted in the receiver at `index`.
- `index`: The index of the receiver in which the array of tokens to be validated (`tokens`) will be inserted.

<a id="return-value"></a>

## Return Value

An array of validated tokens.

<a id="Discussion"></a>

## Discussion

The delegate can return the array unchanged or return a modified array of tokens. To reject the add completely, return an empty array. Returning `nil` causes an error.

## See Also

### Editing a Tokenized Strings

- [tokenFieldCell(\_:completionsForSubstring:indexOfToken:indexOfSelectedItem:)](tokenfieldcell%28__completionsforsubstring_indexoftoken_indexofselecteditem_%29.md): Allows the delegate to provide an array of appropriate completions for the contents of the receiver.
- [tokenFieldCell(\_:editingStringForRepresentedObject:)](tokenfieldcell%28__editingstringforrepresentedobject_%29.md): Allows the delegate to provide a string to be edited as a proxy for the represented object.
- [tokenFieldCell(\_:representedObjectForEditing:)](tokenfieldcell%28__representedobjectforediting_%29.md): Allows the delegate to provide a represented object for the string being edited.

# tokenFieldCell:shouldAddObjects:atIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to validate the tokens to be added to the receiver at a given index.

## Declaration

```objectivec
- (NSArray *) tokenFieldCell:(NSTokenFieldCell *) tokenFieldCell shouldAddObjects:(NSArray *) tokens atIndex:(NSUInteger) index;
```

## Parameters

- `tokenFieldCell`: The token field cell that sent the message.
- `tokens`: An array of tokens to be inserted in the receiver at `index`.
- `index`: The index of the receiver in which the array of tokens to be validated (`tokens`) will be inserted.

<a id="return-value"></a>

## Return Value

An array of validated tokens.

<a id="Discussion"></a>

## Discussion

The delegate can return the array unchanged or return a modified array of tokens. To reject the add completely, return an empty array. Returning `nil` causes an error.

## See Also

### Editing a Tokenized Strings

- [tokenFieldCell:completionsForSubstring:indexOfToken:indexOfSelectedItem:](tokenfieldcell%28__completionsforsubstring_indexoftoken_indexofselecteditem_%29.md): Allows the delegate to provide an array of appropriate completions for the contents of the receiver.
- [tokenFieldCell:editingStringForRepresentedObject:](tokenfieldcell%28__editingstringforrepresentedobject_%29.md): Allows the delegate to provide a string to be edited as a proxy for the represented object.
- [tokenFieldCell:representedObjectForEditingString:](tokenfieldcell%28__representedobjectforediting_%29.md): Allows the delegate to provide a represented object for the string being edited.
