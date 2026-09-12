> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/objectvalue](https://developer.apple.com/documentation/appkit/nscontrol/objectvalue)

# objectValue (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The value of the receiver’s cell as an Objective-C object.

## Declaration

```swift
var objectValue: Any? { get set }
```

<a id="Discussion"></a>

## Discussion

If the control contains many cells (for example, `NSMatrix`), then this property contains the value of the currently selected cell. If the control is in the process of editing the affected cell, then it invokes the  [validateEditing()](validateediting%28%29.md) method before getting the value.

If the cell is being edited, setting this property aborts all editing before setting the value. If the cell does not inherit from `NSActionCell`, setting this property marks the cell’s interior as needing to be redisplayed; `NSActionCell` performs its own updating of cells.

## See Also

### Accessing the Control’s Value

- [doubleValue](doublevalue.md): The value of the receiver’s cell as a double-precision floating-point number.
- [floatValue](floatvalue.md): The value of the receiver’s cell as a single-precision floating-point number.
- [intValue](intvalue.md): The value of the receiver’s cell as an integer.
- [integerValue](integervalue.md): The value of the receiver’s cell as an integer value.
- [stringValue](stringvalue.md): The value of the receiver’s cell as an `NSString` object.
- [attributedStringValue](attributedstringvalue.md): The value of the receiver’s cell as an attributed string.

# objectValue (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The value of the receiver’s cell as an Objective-C object.

## Declaration

```objectivec
@property (copy, nullable) id objectValue;
```

<a id="Discussion"></a>

## Discussion

If the control contains many cells (for example, `NSMatrix`), then this property contains the value of the currently selected cell. If the control is in the process of editing the affected cell, then it invokes the  [validateEditing](validateediting%28%29.md) method before getting the value.

If the cell is being edited, setting this property aborts all editing before setting the value. If the cell does not inherit from `NSActionCell`, setting this property marks the cell’s interior as needing to be redisplayed; `NSActionCell` performs its own updating of cells.

## See Also

### Accessing the Control’s Value

- [doubleValue](doublevalue.md): The value of the receiver’s cell as a double-precision floating-point number.
- [floatValue](floatvalue.md): The value of the receiver’s cell as a single-precision floating-point number.
- [intValue](intvalue.md): The value of the receiver’s cell as an integer.
- [integerValue](integervalue.md): The value of the receiver’s cell as an integer value.
- [stringValue](stringvalue.md): The value of the receiver’s cell as an `NSString` object.
- [attributedStringValue](attributedstringvalue.md): The value of the receiver’s cell as an attributed string.
