> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/objectvalue](https://developer.apple.com/documentation/appkit/nscell/objectvalue)

# objectValue (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell’s value as an Objective-C object.

## Declaration

```swift
var objectValue: Any? { get set }
```

<a id="Discussion"></a>

## Discussion

To be valid object value, the cell must have a formatter capable of converting the object to and from its textual representation. The value of this property is `nil` if an object has not been assigned to the cell.

## See Also

### Managing Cell Values

- [hasValidObjectValue](hasvalidobjectvalue.md): A Boolean value that indicates whether the cell has a valid object value.
- [intValue](intvalue.md): The cell’s value as an integer.
- [integerValue](integervalue.md): The cell’s value as an integer value.
- [stringValue](stringvalue.md): The cell’s value as a string.
- [doubleValue](doublevalue.md): The cell’s value as a double-precision floating-point number.
- [floatValue](floatvalue.md): The cell’s value as a single-precision floating-point number.

# objectValue (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell’s value as an Objective-C object.

## Declaration

```objectivec
@property (copy, nullable) id objectValue;
```

<a id="Discussion"></a>

## Discussion

To be valid object value, the cell must have a formatter capable of converting the object to and from its textual representation. The value of this property is `nil` if an object has not been assigned to the cell.

## See Also

### Managing Cell Values

- [hasValidObjectValue](hasvalidobjectvalue.md): A Boolean value that indicates whether the cell has a valid object value.
- [intValue](intvalue.md): The cell’s value as an integer.
- [integerValue](integervalue.md): The cell’s value as an integer value.
- [stringValue](stringvalue.md): The cell’s value as a string.
- [doubleValue](doublevalue.md): The cell’s value as a double-precision floating-point number.
- [floatValue](floatvalue.md): The cell’s value as a single-precision floating-point number.
