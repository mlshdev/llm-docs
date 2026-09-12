> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/integervalue](https://developer.apple.com/documentation/appkit/nscell/integervalue)

# integerValue (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The cell’s value as an integer value.

## Declaration

```swift
var integerValue: Int { get set }
```

<a id="Discussion"></a>

## Discussion

This property uses the [objectValue](objectvalue.md) property to access the actual value. If the cell is not a text-type cell or its contents are not scannable, the value in this property is `0`.

## See Also

### Managing Cell Values

- [objectValue](objectvalue.md): The cell’s value as an Objective-C object.
- [hasValidObjectValue](hasvalidobjectvalue.md): A Boolean value that indicates whether the cell has a valid object value.
- [intValue](intvalue.md): The cell’s value as an integer.
- [stringValue](stringvalue.md): The cell’s value as a string.
- [doubleValue](doublevalue.md): The cell’s value as a double-precision floating-point number.
- [floatValue](floatvalue.md): The cell’s value as a single-precision floating-point number.

# integerValue (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The cell’s value as an integer value.

## Declaration

```objectivec
@property NSInteger integerValue;
```

<a id="Discussion"></a>

## Discussion

This property uses the [objectValue](objectvalue.md) property to access the actual value. If the cell is not a text-type cell or its contents are not scannable, the value in this property is `0`.

## See Also

### Managing Cell Values

- [objectValue](objectvalue.md): The cell’s value as an Objective-C object.
- [hasValidObjectValue](hasvalidobjectvalue.md): A Boolean value that indicates whether the cell has a valid object value.
- [intValue](intvalue.md): The cell’s value as an integer.
- [stringValue](stringvalue.md): The cell’s value as a string.
- [doubleValue](doublevalue.md): The cell’s value as a double-precision floating-point number.
- [floatValue](floatvalue.md): The cell’s value as a single-precision floating-point number.
