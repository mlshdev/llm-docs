> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstokenfieldcelldelegate/tokenfieldcell(_:completionsforsubstring:indexoftoken:indexofselecteditem:)](https://developer.apple.com/documentation/appkit/nstokenfieldcelldelegate/tokenfieldcell(_:completionsforsubstring:indexoftoken:indexofselecteditem:))

# tokenFieldCell(\_:completionsForSubstring:indexOfToken:indexOfSelectedItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to provide an array of appropriate completions for the contents of the receiver.

## Declaration

```swift
@MainActor optional func tokenFieldCell(_ tokenFieldCell: NSTokenFieldCell, completionsForSubstring substring: String, indexOfToken tokenIndex: Int, indexOfSelectedItem selectedIndex: UnsafeMutablePointer<Int>) -> [Any]
```

## Parameters

- `tokenFieldCell`: The token field cell that sent the message.
- `substring`: The partial string that is to be completed.
- `tokenIndex`: The index of the token being edited.
- `selectedIndex`: Optionally, you can return by-reference an index into the returned array that specifies which of the completions should be initially selected. If none are to be selected, return by reference `-1`.

<a id="return-value"></a>

## Return Value

An array of strings that are possible completions.

<a id="Discussion"></a>

## Discussion

If the delegate does not implement this method, no completions are provided.

## See Also

### Editing a Tokenized Strings

- [tokenFieldCell(\_:editingStringForRepresentedObject:)](tokenfieldcell%28__editingstringforrepresentedobject_%29.md): Allows the delegate to provide a string to be edited as a proxy for the represented object.
- [tokenFieldCell(\_:representedObjectForEditing:)](tokenfieldcell%28__representedobjectforediting_%29.md): Allows the delegate to provide a represented object for the string being edited.
- [tokenFieldCell(\_:shouldAdd:at:)](tokenfieldcell%28__shouldadd_at_%29.md): Allows the delegate to validate the tokens to be added to the receiver at a given index.

# tokenFieldCell:completionsForSubstring:indexOfToken:indexOfSelectedItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to provide an array of appropriate completions for the contents of the receiver.

## Declaration

```objectivec
- (NSArray *) tokenFieldCell:(NSTokenFieldCell *) tokenFieldCell completionsForSubstring:(NSString *) substring indexOfToken:(NSInteger) tokenIndex indexOfSelectedItem:(NSInteger *) selectedIndex;
```

## Parameters

- `tokenFieldCell`: The token field cell that sent the message.
- `substring`: The partial string that is to be completed.
- `tokenIndex`: The index of the token being edited.
- `selectedIndex`: Optionally, you can return by-reference an index into the returned array that specifies which of the completions should be initially selected. If none are to be selected, return by reference `-1`.

<a id="return-value"></a>

## Return Value

An array of strings that are possible completions.

<a id="Discussion"></a>

## Discussion

If the delegate does not implement this method, no completions are provided.

## See Also

### Editing a Tokenized Strings

- [tokenFieldCell:editingStringForRepresentedObject:](tokenfieldcell%28__editingstringforrepresentedobject_%29.md): Allows the delegate to provide a string to be edited as a proxy for the represented object.
- [tokenFieldCell:representedObjectForEditingString:](tokenfieldcell%28__representedobjectforediting_%29.md): Allows the delegate to provide a represented object for the string being edited.
- [tokenFieldCell:shouldAddObjects:atIndex:](tokenfieldcell%28__shouldadd_at_%29.md): Allows the delegate to validate the tokens to be added to the receiver at a given index.
