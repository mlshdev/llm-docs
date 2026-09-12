> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/stringvalue](https://developer.apple.com/documentation/appkit/nscell/stringvalue)

# stringValue (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell’s value as a string.

## Declaration

```swift
var stringValue: String { get set }
```

<a id="Discussion"></a>

## Discussion

This property uses the [objectValue](objectvalue.md) property to access the actual value. If no formatter is assigned to the cell or if the formatter cannot “translate” a new string appropriately, the cell is flagged as having an invalid object. If the cell’s object is not an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object or cannot be converted to one, this property contains an empty string. If the cell is not a text-type cell, this method converts it to one before setting the object value.

If you use a class that has an [attributedStringValue](attributedstringvalue.md) property, the cell gets the string from that property instead of this one.

## See Also

### Managing Cell Values

- [objectValue](objectvalue.md): The cell’s value as an Objective-C object.
- [hasValidObjectValue](hasvalidobjectvalue.md): A Boolean value that indicates whether the cell has a valid object value.
- [intValue](intvalue.md): The cell’s value as an integer.
- [integerValue](integervalue.md): The cell’s value as an integer value.
- [doubleValue](doublevalue.md): The cell’s value as a double-precision floating-point number.
- [floatValue](floatvalue.md): The cell’s value as a single-precision floating-point number.

# stringValue (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell’s value as a string.

## Declaration

```objectivec
@property (copy) NSString * stringValue;
```

<a id="Discussion"></a>

## Discussion

This property uses the [objectValue](objectvalue.md) property to access the actual value. If no formatter is assigned to the cell or if the formatter cannot “translate” a new string appropriately, the cell is flagged as having an invalid object. If the cell’s object is not an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object or cannot be converted to one, this property contains an empty string. If the cell is not a text-type cell, this method converts it to one before setting the object value.

If you use a class that has an [attributedStringValue](attributedstringvalue.md) property, the cell gets the string from that property instead of this one.

## See Also

### Managing Cell Values

- [objectValue](objectvalue.md): The cell’s value as an Objective-C object.
- [hasValidObjectValue](hasvalidobjectvalue.md): A Boolean value that indicates whether the cell has a valid object value.
- [intValue](intvalue.md): The cell’s value as an integer.
- [integerValue](integervalue.md): The cell’s value as an integer value.
- [doubleValue](doublevalue.md): The cell’s value as a double-precision floating-point number.
- [floatValue](floatvalue.md): The cell’s value as a single-precision floating-point number.
