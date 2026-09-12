> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/hasvalidobjectvalue](https://developer.apple.com/documentation/appkit/nscell/hasvalidobjectvalue)

# hasValidObjectValue (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the cell has a valid object value.

## Declaration

```swift
var hasValidObjectValue: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the cell has a valid object value or [false](https://developer.apple.com/documentation/swift/false) if it does not. A valid object value is one that the cell’s formatter can “understand.” Objects are always assumed to be valid unless they are rejected by the formatter. Invalid objects can still be accepted by the delegate of the cell’s [NSControl](../nscontrol.md) object (using the [control(\_:didFailToFormatString:errorDescription:)](../nscontroltexteditingdelegate/control%28__didfailtoformatstring_errordescription_%29.md) delegate method).

## See Also

### Managing Cell Values

- [objectValue](objectvalue.md): The cell’s value as an Objective-C object.
- [intValue](intvalue.md): The cell’s value as an integer.
- [integerValue](integervalue.md): The cell’s value as an integer value.
- [stringValue](stringvalue.md): The cell’s value as a string.
- [doubleValue](doublevalue.md): The cell’s value as a double-precision floating-point number.
- [floatValue](floatvalue.md): The cell’s value as a single-precision floating-point number.

# hasValidObjectValue (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the cell has a valid object value.

## Declaration

```objectivec
@property (readonly) BOOL hasValidObjectValue;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the cell has a valid object value or [false](https://developer.apple.com/documentation/swift/false) if it does not. A valid object value is one that the cell’s formatter can “understand.” Objects are always assumed to be valid unless they are rejected by the formatter. Invalid objects can still be accepted by the delegate of the cell’s [NSControl](../nscontrol.md) object (using the [control:didFailToFormatString:errorDescription:](../nscontroltexteditingdelegate/control%28__didfailtoformatstring_errordescription_%29.md) delegate method).

## See Also

### Managing Cell Values

- [objectValue](objectvalue.md): The cell’s value as an Objective-C object.
- [intValue](intvalue.md): The cell’s value as an integer.
- [integerValue](integervalue.md): The cell’s value as an integer value.
- [stringValue](stringvalue.md): The cell’s value as a string.
- [doubleValue](doublevalue.md): The cell’s value as a double-precision floating-point number.
- [floatValue](floatvalue.md): The cell’s value as a single-precision floating-point number.
