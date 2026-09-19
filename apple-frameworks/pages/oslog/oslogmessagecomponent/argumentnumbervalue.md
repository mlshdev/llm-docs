> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/oslog/oslogmessagecomponent/argumentnumbervalue

# argumentNumberValue (Swift)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The argument formatted as a number.

## Declaration

```swift
var argumentNumberValue: NSNumber? { get }
```

<a id="Discussion"></a>

## Discussion

The `argumentNumberValue` property can be `nil` if the argument can’t be decoded. For example, redacted arguments and the last component can’t be decoded.

## See Also

### Accessing the Argument

- [argumentDataValue](argumentdatavalue.md): The argument formatted as a sequence of bytes.
- [argumentDoubleValue](argumentdoublevalue.md): The argument formatted as a double.
- [argumentInt64Value](argumentint64value.md): The argument formatted as a signed 64-bit integer.
- [argumentStringValue](argumentstringvalue.md): The argument formatted as a string.
- [argumentUInt64Value](argumentuint64value.md): The argument formatted as an unsigned 64-bit integer.

# argumentNumberValue (Objective-C)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The argument formatted as a number.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSNumber * argumentNumberValue;
```

<a id="Discussion"></a>

## Discussion

The `argumentNumberValue` property can be `nil` if the argument can’t be decoded. For example, redacted arguments and the last component can’t be decoded.

## See Also

### Accessing the Argument

- [argumentDataValue](argumentdatavalue.md): The argument formatted as a sequence of bytes.
- [argumentDoubleValue](argumentdoublevalue.md): The argument formatted as a double.
- [argumentInt64Value](argumentint64value.md): The argument formatted as a signed 64-bit integer.
- [argumentStringValue](argumentstringvalue.md): The argument formatted as a string.
- [argumentUInt64Value](argumentuint64value.md): The argument formatted as an unsigned 64-bit integer.
