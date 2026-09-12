> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontroltexteditingdelegate/control(_:didfailtovalidatepartialstring:errordescription:)](https://developer.apple.com/documentation/appkit/nscontroltexteditingdelegate/control(_:didfailtovalidatepartialstring:errordescription:))

# control(\_:didFailToValidatePartialString:errorDescription:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the formatter for the cell belonging to `control` (or selected cell) rejects a partial string a user is typing into the cell.

## Declaration

```swift
@MainActor optional func control(_ control: NSControl, didFailToValidatePartialString string: String, errorDescription error: String?)
```

## Parameters

- `control`: The control whose cell rejected the string.
- `string`: The string that includes the character that caused the rejection.
- `error`: A localized, user-presentable string that explains why the string was rejected.

<a id="Discussion"></a>

## Discussion

You can implement this method to display a warning message or perform a similar action when the user enters improperly formatted text.

## See Also

### Related Documentation

- [isPartialStringValid(\_:newEditingString:errorDescription:)](https://developer.apple.com/documentation/foundation/formatter/ispartialstringvalid%28_:neweditingstring:errordescription:%29): Returns a Boolean value that indicates whether a partial string is valid.

### Validating a Control’s Value

- [control(\_:isValidObject:)](control%28__isvalidobject_%29.md): Invoked when the insertion point leaves a cell belonging to the specified control, but before the value of the cell’s object is displayed.

# control:didFailToValidatePartialString:errorDescription: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the formatter for the cell belonging to `control` (or selected cell) rejects a partial string a user is typing into the cell.

## Declaration

```objectivec
- (void) control:(NSControl *) control didFailToValidatePartialString:(NSString *) string errorDescription:(NSString *) error;
```

## Parameters

- `control`: The control whose cell rejected the string.
- `string`: The string that includes the character that caused the rejection.
- `error`: A localized, user-presentable string that explains why the string was rejected.

<a id="Discussion"></a>

## Discussion

You can implement this method to display a warning message or perform a similar action when the user enters improperly formatted text.

## See Also

### Related Documentation

- [isPartialStringValid:newEditingString:errorDescription:](https://developer.apple.com/documentation/foundation/formatter/ispartialstringvalid%28_:neweditingstring:errordescription:%29): Returns a Boolean value that indicates whether a partial string is valid.

### Validating a Control’s Value

- [control:isValidObject:](control%28__isvalidobject_%29.md): Invoked when the insertion point leaves a cell belonging to the specified control, but before the value of the cell’s object is displayed.
