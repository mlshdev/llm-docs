> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstokenfielddelegate/tokenfield(_:displaystringforrepresentedobject:)](https://developer.apple.com/documentation/appkit/nstokenfielddelegate/tokenfield(_:displaystringforrepresentedobject:))

# tokenField(\_:displayStringForRepresentedObject:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to provide a string to be displayed as a proxy for the given represented object.

## Declaration

```swift
@MainActor optional func tokenField(_ tokenField: NSTokenField, displayStringForRepresentedObject representedObject: Any) -> String?
```

## Parameters

- `tokenField`: The token field that sent the message.
- `representedObject`: A represented object of the token field.

<a id="return-value"></a>

## Return Value

The string to be used as a proxy for `representedObject`. If you return `nil` or do not implement this method, then `representedObject` is displayed as the string.

## See Also

### Related Documentation

- [tokenFieldCell(\_:displayStringForRepresentedObject:)](../nstokenfieldcelldelegate/tokenfieldcell%28__displaystringforrepresentedobject_%29.md): Allows the delegate to provide a string to be displayed as a proxy for the represented object.

### Displaying Tokenized Strings

- [tokenField(\_:styleForRepresentedObject:)](tokenfield%28__styleforrepresentedobject_%29.md): Allows the delegate to return the token style for editing the specified represented object.

# tokenField:displayStringForRepresentedObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to provide a string to be displayed as a proxy for the given represented object.

## Declaration

```objectivec
- (NSString *) tokenField:(NSTokenField *) tokenField displayStringForRepresentedObject:(id) representedObject;
```

## Parameters

- `tokenField`: The token field that sent the message.
- `representedObject`: A represented object of the token field.

<a id="return-value"></a>

## Return Value

The string to be used as a proxy for `representedObject`. If you return `nil` or do not implement this method, then `representedObject` is displayed as the string.

## See Also

### Related Documentation

- [tokenFieldCell:displayStringForRepresentedObject:](../nstokenfieldcelldelegate/tokenfieldcell%28__displaystringforrepresentedobject_%29.md): Allows the delegate to provide a string to be displayed as a proxy for the represented object.

### Displaying Tokenized Strings

- [tokenField:styleForRepresentedObject:](tokenfield%28__styleforrepresentedobject_%29.md): Allows the delegate to return the token style for editing the specified represented object.
