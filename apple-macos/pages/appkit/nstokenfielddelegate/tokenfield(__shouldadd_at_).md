> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstokenfielddelegate/tokenfield(_:shouldadd:at:)](https://developer.apple.com/documentation/appkit/nstokenfielddelegate/tokenfield(_:shouldadd:at:))

# tokenField(\_:shouldAdd:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to validate the tokens to be added to the receiver at a particular location.

## Declaration

```swift
@MainActor optional func tokenField(_ tokenField: NSTokenField, shouldAdd tokens: [Any], at index: Int) -> [Any]
```

## Parameters

- `tokenField`: The token field that sent the message.
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

- [tokenField(\_:completionsForSubstring:indexOfToken:indexOfSelectedItem:)](tokenfield%28__completionsforsubstring_indexoftoken_indexofselecteditem_%29.md): Allows the delegate to provide an array of appropriate completions for the contents of the receiver.
- [tokenField(\_:editingStringForRepresentedObject:)](tokenfield%28__editingstringforrepresentedobject_%29.md): Allows the delegate to provide a string to be edited as a proxy for a represented object.
- [tokenField(\_:representedObjectForEditing:)](tokenfield%28__representedobjectforediting_%29.md): Allows the delegate to provide a represented object for the given editing string.

# tokenField:shouldAddObjects:atIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to validate the tokens to be added to the receiver at a particular location.

## Declaration

```objectivec
- (NSArray *) tokenField:(NSTokenField *) tokenField shouldAddObjects:(NSArray *) tokens atIndex:(NSUInteger) index;
```

## Parameters

- `tokenField`: The token field that sent the message.
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

- [tokenField:completionsForSubstring:indexOfToken:indexOfSelectedItem:](tokenfield%28__completionsforsubstring_indexoftoken_indexofselecteditem_%29.md): Allows the delegate to provide an array of appropriate completions for the contents of the receiver.
- [tokenField:editingStringForRepresentedObject:](tokenfield%28__editingstringforrepresentedobject_%29.md): Allows the delegate to provide a string to be edited as a proxy for a represented object.
- [tokenField:representedObjectForEditingString:](tokenfield%28__representedobjectforediting_%29.md): Allows the delegate to provide a represented object for the given editing string.
