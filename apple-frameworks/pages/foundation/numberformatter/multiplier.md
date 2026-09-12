> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/multiplier](https://developer.apple.com/documentation/foundation/numberformatter/multiplier)

# multiplier (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The multiplier of the receiver.

## Declaration

```swift
@NSCopying var multiplier: NSNumber? { get set }
```

<a id="Discussion"></a>

## Discussion

A multiplier is a factor used in conversions between numbers and strings (that is, numbers as stored and numbers as displayed). When the input value is a string, the multiplier is used to divide, and when the input value is a number, the multiplier is used to multiply. These operations allow the formatted values to be different from the values that a program manipulates internally.

## See Also

### Configuring Numeric Formats

- [format](format.md): The receiver’s format.
- [formattingContext](formattingcontext.md): The capitalization formatting context used when formatting a number.
- [formatWidth](formatwidth.md): The format width used by the receiver.
- [negativeFormat](negativeformat.md): The format the receiver uses to display negative values.
- [positiveFormat](positiveformat.md): The format the receiver uses to display positive values.

# multiplier (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The multiplier of the receiver.

## Declaration

```objectivec
@property (copy, nullable) NSNumber * multiplier;
```

<a id="Discussion"></a>

## Discussion

A multiplier is a factor used in conversions between numbers and strings (that is, numbers as stored and numbers as displayed). When the input value is a string, the multiplier is used to divide, and when the input value is a number, the multiplier is used to multiply. These operations allow the formatted values to be different from the values that a program manipulates internally.

## See Also

### Configuring Numeric Formats

- [format](format.md): The receiver’s format.
- [formattingContext](formattingcontext.md): The capitalization formatting context used when formatting a number.
- [formatWidth](formatwidth.md): The format width used by the receiver.
- [negativeFormat](negativeformat.md): The format the receiver uses to display negative values.
- [positiveFormat](positiveformat.md): The format the receiver uses to display positive values.
