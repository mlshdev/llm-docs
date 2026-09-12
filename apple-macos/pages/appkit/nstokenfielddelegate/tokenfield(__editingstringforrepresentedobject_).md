> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstokenfielddelegate/tokenfield(_:editingstringforrepresentedobject:)](https://developer.apple.com/documentation/appkit/nstokenfielddelegate/tokenfield(_:editingstringforrepresentedobject:))

# tokenField(\_:editingStringForRepresentedObject:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to provide a string to be edited as a proxy for a represented object.

## Declaration

```swift
@MainActor optional func tokenField(_ tokenField: NSTokenField, editingStringForRepresentedObject representedObject: Any) -> String?
```

## Parameters

- `tokenField`: The token field that sent the message.
- `representedObject`: A represented object of the token field.

<a id="return-value"></a>

## Return Value

A string that’s an editable proxy of the represented object, or `nil` if the token should not be editable.

## See Also

### Editing a Tokenized Strings

- [tokenField(\_:completionsForSubstring:indexOfToken:indexOfSelectedItem:)](tokenfield%28__completionsforsubstring_indexoftoken_indexofselecteditem_%29.md): Allows the delegate to provide an array of appropriate completions for the contents of the receiver.
- [tokenField(\_:representedObjectForEditing:)](tokenfield%28__representedobjectforediting_%29.md): Allows the delegate to provide a represented object for the given editing string.
- [tokenField(\_:shouldAdd:at:)](tokenfield%28__shouldadd_at_%29.md): Allows the delegate to validate the tokens to be added to the receiver at a particular location.

# tokenField:editingStringForRepresentedObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to provide a string to be edited as a proxy for a represented object.

## Declaration

```objectivec
- (NSString *) tokenField:(NSTokenField *) tokenField editingStringForRepresentedObject:(id) representedObject;
```

## Parameters

- `tokenField`: The token field that sent the message.
- `representedObject`: A represented object of the token field.

<a id="return-value"></a>

## Return Value

A string that’s an editable proxy of the represented object, or `nil` if the token should not be editable.

## See Also

### Editing a Tokenized Strings

- [tokenField:completionsForSubstring:indexOfToken:indexOfSelectedItem:](tokenfield%28__completionsforsubstring_indexoftoken_indexofselecteditem_%29.md): Allows the delegate to provide an array of appropriate completions for the contents of the receiver.
- [tokenField:representedObjectForEditingString:](tokenfield%28__representedobjectforediting_%29.md): Allows the delegate to provide a represented object for the given editing string.
- [tokenField:shouldAddObjects:atIndex:](tokenfield%28__shouldadd_at_%29.md): Allows the delegate to validate the tokens to be added to the receiver at a particular location.
