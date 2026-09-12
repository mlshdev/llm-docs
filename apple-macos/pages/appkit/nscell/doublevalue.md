> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/doublevalue](https://developer.apple.com/documentation/appkit/nscell/doublevalue)

# doubleValue (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell’s value as a double-precision floating-point number.

## Declaration

```swift
var doubleValue: Double { get set }
```

<a id="Discussion"></a>

## Discussion

This property uses the [objectValue](objectvalue.md) property to access the actual value. If the cell is not a text-type cell or the cell’s value is not scannable, this property contains the value `0`.

## See Also

### Managing Cell Values

- [objectValue](objectvalue.md): The cell’s value as an Objective-C object.
- [hasValidObjectValue](hasvalidobjectvalue.md): A Boolean value that indicates whether the cell has a valid object value.
- [intValue](intvalue.md): The cell’s value as an integer.
- [integerValue](integervalue.md): The cell’s value as an integer value.
- [stringValue](stringvalue.md): The cell’s value as a string.
- [floatValue](floatvalue.md): The cell’s value as a single-precision floating-point number.

# doubleValue (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell’s value as a double-precision floating-point number.

## Declaration

```objectivec
@property double doubleValue;
```

<a id="Discussion"></a>

## Discussion

This property uses the [objectValue](objectvalue.md) property to access the actual value. If the cell is not a text-type cell or the cell’s value is not scannable, this property contains the value `0`.

## See Also

### Managing Cell Values

- [objectValue](objectvalue.md): The cell’s value as an Objective-C object.
- [hasValidObjectValue](hasvalidobjectvalue.md): A Boolean value that indicates whether the cell has a valid object value.
- [intValue](intvalue.md): The cell’s value as an integer.
- [integerValue](integervalue.md): The cell’s value as an integer value.
- [stringValue](stringvalue.md): The cell’s value as a string.
- [floatValue](floatvalue.md): The cell’s value as a single-precision floating-point number.
