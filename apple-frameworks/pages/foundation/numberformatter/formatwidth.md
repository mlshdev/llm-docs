> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/formatwidth](https://developer.apple.com/documentation/foundation/numberformatter/formatwidth)

# formatWidth (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The format width used by the receiver.

## Declaration

```swift
var formatWidth: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The format width is the number of characters of a formatted number within a string that is either left justified or right justified based on the value contained in  [paddingPosition](paddingposition.md).

## See Also

### Configuring Numeric Formats

- [format](format.md): The receiver’s format.
- [formattingContext](formattingcontext.md): The capitalization formatting context used when formatting a number.
- [negativeFormat](negativeformat.md): The format the receiver uses to display negative values.
- [positiveFormat](positiveformat.md): The format the receiver uses to display positive values.
- [multiplier](multiplier.md): The multiplier of the receiver.

# formatWidth (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The format width used by the receiver.

## Declaration

```objectivec
@property NSUInteger formatWidth;
```

<a id="Discussion"></a>

## Discussion

The format width is the number of characters of a formatted number within a string that is either left justified or right justified based on the value contained in  [paddingPosition](paddingposition.md).

## See Also

### Configuring Numeric Formats

- [format](format.md): The receiver’s format.
- [formattingContext](formattingcontext.md): The capitalization formatting context used when formatting a number.
- [negativeFormat](negativeformat.md): The format the receiver uses to display negative values.
- [positiveFormat](positiveformat.md): The format the receiver uses to display positive values.
- [multiplier](multiplier.md): The multiplier of the receiver.
