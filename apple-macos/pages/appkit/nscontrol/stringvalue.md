> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/stringvalue](https://developer.apple.com/documentation/appkit/nscontrol/stringvalue)

# stringValue (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The value of the receiver’s cell as an `NSString` object.

## Declaration

```swift
var stringValue: String { get set }
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
- [objectValue](objectvalue.md): The value of the receiver’s cell as an Objective-C object.
- [attributedStringValue](attributedstringvalue.md): The value of the receiver’s cell as an attributed string.

# stringValue (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The value of the receiver’s cell as an `NSString` object.

## Declaration

```objectivec
@property (copy) NSString * stringValue;
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
- [objectValue](objectvalue.md): The value of the receiver’s cell as an Objective-C object.
- [attributedStringValue](attributedstringvalue.md): The value of the receiver’s cell as an attributed string.
