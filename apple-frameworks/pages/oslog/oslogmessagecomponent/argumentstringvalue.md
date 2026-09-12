> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/oslog/oslogmessagecomponent/argumentstringvalue](https://developer.apple.com/documentation/oslog/oslogmessagecomponent/argumentstringvalue)

# argumentStringValue (Swift)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The argument formatted as a string.

## Declaration

```swift
var argumentStringValue: String? { get }
```

<a id="Discussion"></a>

## Discussion

The `argumentStringValue` property can be `nil` if the argument can’t be decoded. For example, redacted arguments or the last component can’t be decoded.

## See Also

### Accessing the Argument

- [argumentDataValue](argumentdatavalue.md): The argument formatted as a sequence of bytes.
- [argumentDoubleValue](argumentdoublevalue.md): The argument formatted as a double.
- [argumentInt64Value](argumentint64value.md): The argument formatted as a signed 64-bit integer.
- [argumentNumberValue](argumentnumbervalue.md): The argument formatted as a number.
- [argumentUInt64Value](argumentuint64value.md): The argument formatted as an unsigned 64-bit integer.

# argumentStringValue (Objective-C)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The argument formatted as a string.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * argumentStringValue;
```

<a id="Discussion"></a>

## Discussion

The `argumentStringValue` property can be `nil` if the argument can’t be decoded. For example, redacted arguments or the last component can’t be decoded.

## See Also

### Accessing the Argument

- [argumentDataValue](argumentdatavalue.md): The argument formatted as a sequence of bytes.
- [argumentDoubleValue](argumentdoublevalue.md): The argument formatted as a double.
- [argumentInt64Value](argumentint64value.md): The argument formatted as a signed 64-bit integer.
- [argumentNumberValue](argumentnumbervalue.md): The argument formatted as a number.
- [argumentUInt64Value](argumentuint64value.md): The argument formatted as an unsigned 64-bit integer.
