> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstokenfielddelegate/tokenfield(_:completionsforsubstring:indexoftoken:indexofselecteditem:)](https://developer.apple.com/documentation/appkit/nstokenfielddelegate/tokenfield(_:completionsforsubstring:indexoftoken:indexofselecteditem:))

# tokenField(\_:completionsForSubstring:indexOfToken:indexOfSelectedItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to provide an array of appropriate completions for the contents of the receiver.

## Declaration

```swift
@MainActor optional func tokenField(_ tokenField: NSTokenField, completionsForSubstring substring: String, indexOfToken tokenIndex: Int, indexOfSelectedItem selectedIndex: UnsafeMutablePointer<Int>?) -> [Any]?
```

## Parameters

- `tokenField`: The token field where editing is occurring.
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

- [tokenField(\_:editingStringForRepresentedObject:)](tokenfield%28__editingstringforrepresentedobject_%29.md): Allows the delegate to provide a string to be edited as a proxy for a represented object.
- [tokenField(\_:representedObjectForEditing:)](tokenfield%28__representedobjectforediting_%29.md): Allows the delegate to provide a represented object for the given editing string.
- [tokenField(\_:shouldAdd:at:)](tokenfield%28__shouldadd_at_%29.md): Allows the delegate to validate the tokens to be added to the receiver at a particular location.

# tokenField:completionsForSubstring:indexOfToken:indexOfSelectedItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to provide an array of appropriate completions for the contents of the receiver.

## Declaration

```objectivec
- (NSArray *) tokenField:(NSTokenField *) tokenField completionsForSubstring:(NSString *) substring indexOfToken:(NSInteger) tokenIndex indexOfSelectedItem:(NSInteger *) selectedIndex;
```

## Parameters

- `tokenField`: The token field where editing is occurring.
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

- [tokenField:editingStringForRepresentedObject:](tokenfield%28__editingstringforrepresentedobject_%29.md): Allows the delegate to provide a string to be edited as a proxy for a represented object.
- [tokenField:representedObjectForEditingString:](tokenfield%28__representedobjectforediting_%29.md): Allows the delegate to provide a represented object for the given editing string.
- [tokenField:shouldAddObjects:atIndex:](tokenfield%28__shouldadd_at_%29.md): Allows the delegate to validate the tokens to be added to the receiver at a particular location.
