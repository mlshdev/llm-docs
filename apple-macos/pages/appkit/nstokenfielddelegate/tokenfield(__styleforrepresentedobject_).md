> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstokenfielddelegate/tokenfield(_:styleforrepresentedobject:)](https://developer.apple.com/documentation/appkit/nstokenfielddelegate/tokenfield(_:styleforrepresentedobject:))

# tokenField(\_:styleForRepresentedObject:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to return the token style for editing the specified represented object.

## Declaration

```swift
@MainActor optional func tokenField(_ tokenField: NSTokenField, styleForRepresentedObject representedObject: Any) -> NSTokenField.TokenStyle
```

## Parameters

- `tokenField`: The token field that sent the message.
- `representedObject`: A represented object of the token field.

<a id="return-value"></a>

## Return Value

The style that should be used to display the representedObject. Possible values are shown in NSTokenStyle Values.

<a id="Discussion"></a>

## Discussion

If the delegate implements this method and returns an [NSTokenField.TokenStyle](../nstokenfield/tokenstyle-swift.enum.md) that differs from the style set by [tokenStyle](../nstokenfield/tokenstyle-swift.property.md), the value the delegate returns is preferred.

If the delegate does not implement this method, the token field’s [tokenStyle](../nstokenfield/tokenstyle-swift.property.md) is used.

## See Also

### Displaying Tokenized Strings

- [tokenField(\_:displayStringForRepresentedObject:)](tokenfield%28__displaystringforrepresentedobject_%29.md): Allows the delegate to provide a string to be displayed as a proxy for the given represented object.

# tokenField:styleForRepresentedObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to return the token style for editing the specified represented object.

## Declaration

```objectivec
- (NSTokenStyle) tokenField:(NSTokenField *) tokenField styleForRepresentedObject:(id) representedObject;
```

## Parameters

- `tokenField`: The token field that sent the message.
- `representedObject`: A represented object of the token field.

<a id="return-value"></a>

## Return Value

The style that should be used to display the representedObject. Possible values are shown in NSTokenStyle Values.

<a id="Discussion"></a>

## Discussion

If the delegate implements this method and returns an [NSTokenStyle](../nstokenfield/tokenstyle-swift.enum.md) that differs from the style set by [tokenStyle](../nstokenfield/tokenstyle-swift.property.md), the value the delegate returns is preferred.

If the delegate does not implement this method, the token field’s [tokenStyle](../nstokenfield/tokenstyle-swift.property.md) is used.

## See Also

### Displaying Tokenized Strings

- [tokenField:displayStringForRepresentedObject:](tokenfield%28__displaystringforrepresentedobject_%29.md): Allows the delegate to provide a string to be displayed as a proxy for the given represented object.
