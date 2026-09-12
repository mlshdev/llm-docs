> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/floatvalue](https://developer.apple.com/documentation/appkit/nscontrol/floatvalue)

# floatValue (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The value of the receiver’s cell as a single-precision floating-point number.

## Declaration

```swift
var floatValue: Float { get set }
```

<a id="Discussion"></a>

## Discussion

If the control contains many cells (for example, `NSMatrix`), then this property contains the value of the currently selected cell. If the control is in the process of editing the affected cell, then it invokes the  [validateEditing()](validateediting%28%29.md) method before getting the value.

If the cell is being edited, setting this property aborts all editing before setting the value. If the cell does not inherit from `NSActionCell`, setting this property marks the cell’s interior as needing to be redisplayed; `NSActionCell` performs its own updating of cells.

## See Also

### Accessing the Control’s Value

- [doubleValue](doublevalue.md): The value of the receiver’s cell as a double-precision floating-point number.
- [intValue](intvalue.md): The value of the receiver’s cell as an integer.
- [integerValue](integervalue.md): The value of the receiver’s cell as an integer value.
- [objectValue](objectvalue.md): The value of the receiver’s cell as an Objective-C object.
- [stringValue](stringvalue.md): The value of the receiver’s cell as an `NSString` object.
- [attributedStringValue](attributedstringvalue.md): The value of the receiver’s cell as an attributed string.

# floatValue (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The value of the receiver’s cell as a single-precision floating-point number.

## Declaration

```objectivec
@property float floatValue;
```

<a id="Discussion"></a>

## Discussion

If the control contains many cells (for example, `NSMatrix`), then this property contains the value of the currently selected cell. If the control is in the process of editing the affected cell, then it invokes the  [validateEditing](validateediting%28%29.md) method before getting the value.

If the cell is being edited, setting this property aborts all editing before setting the value. If the cell does not inherit from `NSActionCell`, setting this property marks the cell’s interior as needing to be redisplayed; `NSActionCell` performs its own updating of cells.

## See Also

### Accessing the Control’s Value

- [doubleValue](doublevalue.md): The value of the receiver’s cell as a double-precision floating-point number.
- [intValue](intvalue.md): The value of the receiver’s cell as an integer.
- [integerValue](integervalue.md): The value of the receiver’s cell as an integer value.
- [objectValue](objectvalue.md): The value of the receiver’s cell as an Objective-C object.
- [stringValue](stringvalue.md): The value of the receiver’s cell as an `NSString` object.
- [attributedStringValue](attributedstringvalue.md): The value of the receiver’s cell as an attributed string.
