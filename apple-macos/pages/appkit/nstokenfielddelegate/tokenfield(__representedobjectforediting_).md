> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstokenfielddelegate/tokenfield(_:representedobjectforediting:)](https://developer.apple.com/documentation/appkit/nstokenfielddelegate/tokenfield(_:representedobjectforediting:))

# tokenField(\_:representedObjectForEditing:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to provide a represented object for the given editing string.

## Declaration

```swift
@MainActor optional func tokenField(_ tokenField: NSTokenField, representedObjectForEditing editingString: String) -> Any?
```

## Parameters

- `tokenField`: The token field that sent the message.
- `editingString`: The edited string representation of a represented object.

<a id="return-value"></a>

## Return Value

A represented object that is displayed rather than the editing string.

<a id="Discussion"></a>

## Discussion

If your application uses some object other than an `NSString` for their represented objects, you should return a new, autoreleased instance of that object from this method.

> **Note**

>  In OS X v10.4, `NSTokenField` trims whitespace around tokens but it does not trim whitespace in macOS versions 10.5.0 and 10.5.1. In OS X v10.5.2, you get whitespace-trimming behavior by either linking against the v10.4 binary or linking against the v10.5 binary and *not* implementing the this method. If you do not want the whitespace-trimming behavior, link against the v10.5 binary and implement this method, returning the editing string if you have no represented object.

## See Also

### Editing a Tokenized Strings

- [tokenField(\_:completionsForSubstring:indexOfToken:indexOfSelectedItem:)](tokenfield%28__completionsforsubstring_indexoftoken_indexofselecteditem_%29.md): Allows the delegate to provide an array of appropriate completions for the contents of the receiver.
- [tokenField(\_:editingStringForRepresentedObject:)](tokenfield%28__editingstringforrepresentedobject_%29.md): Allows the delegate to provide a string to be edited as a proxy for a represented object.
- [tokenField(\_:shouldAdd:at:)](tokenfield%28__shouldadd_at_%29.md): Allows the delegate to validate the tokens to be added to the receiver at a particular location.

# tokenField:representedObjectForEditingString: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to provide a represented object for the given editing string.

## Declaration

```objectivec
- (id) tokenField:(NSTokenField *) tokenField representedObjectForEditingString:(NSString *) editingString;
```

## Parameters

- `tokenField`: The token field that sent the message.
- `editingString`: The edited string representation of a represented object.

<a id="return-value"></a>

## Return Value

A represented object that is displayed rather than the editing string.

<a id="Discussion"></a>

## Discussion

If your application uses some object other than an `NSString` for their represented objects, you should return a new, autoreleased instance of that object from this method.

> **Note**

>  In OS X v10.4, `NSTokenField` trims whitespace around tokens but it does not trim whitespace in macOS versions 10.5.0 and 10.5.1. In OS X v10.5.2, you get whitespace-trimming behavior by either linking against the v10.4 binary or linking against the v10.5 binary and *not* implementing the this method. If you do not want the whitespace-trimming behavior, link against the v10.5 binary and implement this method, returning the editing string if you have no represented object.

## See Also

### Editing a Tokenized Strings

- [tokenField:completionsForSubstring:indexOfToken:indexOfSelectedItem:](tokenfield%28__completionsforsubstring_indexoftoken_indexofselecteditem_%29.md): Allows the delegate to provide an array of appropriate completions for the contents of the receiver.
- [tokenField:editingStringForRepresentedObject:](tokenfield%28__editingstringforrepresentedobject_%29.md): Allows the delegate to provide a string to be edited as a proxy for a represented object.
- [tokenField:shouldAddObjects:atIndex:](tokenfield%28__shouldadd_at_%29.md): Allows the delegate to validate the tokens to be added to the receiver at a particular location.
