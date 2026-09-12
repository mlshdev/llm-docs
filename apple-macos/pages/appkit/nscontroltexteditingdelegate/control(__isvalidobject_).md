> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontroltexteditingdelegate/control(_:isvalidobject:)](https://developer.apple.com/documentation/appkit/nscontroltexteditingdelegate/control(_:isvalidobject:))

# control(\_:isValidObject:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the insertion point leaves a cell belonging to the specified control, but before the value of the cell’s object is displayed.

## Declaration

```swift
@MainActor optional func control(_ control: NSControl, isValidObject obj: Any?) -> Bool
```

## Parameters

- `control`: The control whose object value needs to be validated.
- `obj`: The object value to validate.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you want to allow the control to display the specified value; otherwise, [false](https://developer.apple.com/documentation/swift/false) to reject the value and return the cursor to the control’s cell.

<a id="Discussion"></a>

## Discussion

This method gives the delegate the opportunity to validate the contents of the control’s cell (or selected cell). In validating, the delegate should check the value in the `object` parameter and determine if it falls within a permissible range, has required attributes, accords with a given context, and so on. Examples of objects subject to such evaluations are an `NSDate` object that should not represent a future date or a monetary amount (represented by an `NSNumber` object) that exceeds a predetermined limit.

## See Also

### Related Documentation

- [NSControlTextEditingDelegate](../nscontroltexteditingdelegate.md): A set of optional methods implemented by delegates of [NSControl](../nscontrol.md) subclasses to respond to editing actions.

### Validating a Control’s Value

- [control(\_:didFailToValidatePartialString:errorDescription:)](control%28__didfailtovalidatepartialstring_errordescription_%29.md): Invoked when the formatter for the cell belonging to `control` (or selected cell) rejects a partial string a user is typing into the cell.

# control:isValidObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the insertion point leaves a cell belonging to the specified control, but before the value of the cell’s object is displayed.

## Declaration

```objectivec
- (BOOL) control:(NSControl *) control isValidObject:(id) obj;
```

## Parameters

- `control`: The control whose object value needs to be validated.
- `obj`: The object value to validate.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you want to allow the control to display the specified value; otherwise, [false](https://developer.apple.com/documentation/swift/false) to reject the value and return the cursor to the control’s cell.

<a id="Discussion"></a>

## Discussion

This method gives the delegate the opportunity to validate the contents of the control’s cell (or selected cell). In validating, the delegate should check the value in the `object` parameter and determine if it falls within a permissible range, has required attributes, accords with a given context, and so on. Examples of objects subject to such evaluations are an `NSDate` object that should not represent a future date or a monetary amount (represented by an `NSNumber` object) that exceeds a predetermined limit.

## See Also

### Related Documentation

- [NSControlTextEditingDelegate](../nscontroltexteditingdelegate.md): A set of optional methods implemented by delegates of [NSControl](../nscontrol.md) subclasses to respond to editing actions.

### Validating a Control’s Value

- [control:didFailToValidatePartialString:errorDescription:](control%28__didfailtovalidatepartialstring_errordescription_%29.md): Invoked when the formatter for the cell belonging to `control` (or selected cell) rejects a partial string a user is typing into the cell.
