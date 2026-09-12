> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstokenfieldcelldelegate/tokenfieldcell(_:displaystringforrepresentedobject:)](https://developer.apple.com/documentation/appkit/nstokenfieldcelldelegate/tokenfieldcell(_:displaystringforrepresentedobject:))

# tokenFieldCell(\_:displayStringForRepresentedObject:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to provide a string to be displayed as a proxy for the represented object.

## Declaration

```swift
@MainActor optional func tokenFieldCell(_ tokenFieldCell: NSTokenFieldCell, displayStringForRepresentedObject representedObject: Any) -> String?
```

## Parameters

- `tokenFieldCell`: The token field cell that sent the message.
- `representedObject`: A represented object of the token field cell.

<a id="return-value"></a>

## Return Value

The string to be used as a proxy for `representedObject`. If you return `nil` or do not implement this method, then `representedObject` is displayed as the string.

## See Also

### Related Documentation

- [tokenField(\_:displayStringForRepresentedObject:)](../nstokenfielddelegate/tokenfield%28__displaystringforrepresentedobject_%29.md): Allows the delegate to provide a string to be displayed as a proxy for the given represented object.

### Displaying Tokenized Strings

- [tokenFieldCell(\_:styleForRepresentedObject:)](tokenfieldcell%28__styleforrepresentedobject_%29.md): Allows the delegate to return the token style for editing the specified represented object.

# tokenFieldCell:displayStringForRepresentedObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to provide a string to be displayed as a proxy for the represented object.

## Declaration

```objectivec
- (NSString *) tokenFieldCell:(NSTokenFieldCell *) tokenFieldCell displayStringForRepresentedObject:(id) representedObject;
```

## Parameters

- `tokenFieldCell`: The token field cell that sent the message.
- `representedObject`: A represented object of the token field cell.

<a id="return-value"></a>

## Return Value

The string to be used as a proxy for `representedObject`. If you return `nil` or do not implement this method, then `representedObject` is displayed as the string.

## See Also

### Related Documentation

- [tokenField:displayStringForRepresentedObject:](../nstokenfielddelegate/tokenfield%28__displaystringforrepresentedobject_%29.md): Allows the delegate to provide a string to be displayed as a proxy for the given represented object.

### Displaying Tokenized Strings

- [tokenFieldCell:styleForRepresentedObject:](tokenfieldcell%28__styleforrepresentedobject_%29.md): Allows the delegate to return the token style for editing the specified represented object.
