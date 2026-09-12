> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/format](https://developer.apple.com/documentation/foundation/numberformatter/format)

# format (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The receiver’s format.

## Declaration

```swift
var format: String { get set }
```

<a id="Discussion"></a>

## Discussion

The format string uses the format patterns from [Unicode Technical Standard #35](http://www.unicode.org/reports/tr35/tr35-numbers.html#Number_Format_Patterns).  For more information, see  [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i).

## See Also

### Configuring Numeric Formats

- [formattingContext](formattingcontext.md): The capitalization formatting context used when formatting a number.
- [formatWidth](formatwidth.md): The format width used by the receiver.
- [negativeFormat](negativeformat.md): The format the receiver uses to display negative values.
- [positiveFormat](positiveformat.md): The format the receiver uses to display positive values.
- [multiplier](multiplier.md): The multiplier of the receiver.

# format (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The receiver’s format.

## Declaration

```objectivec
@property (copy) NSString * format;
```

<a id="Discussion"></a>

## Discussion

The format string uses the format patterns from [Unicode Technical Standard #35](http://www.unicode.org/reports/tr35/tr35-numbers.html#Number_Format_Patterns).  For more information, see  [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i).

## See Also

### Configuring Numeric Formats

- [formattingContext](formattingcontext.md): The capitalization formatting context used when formatting a number.
- [formatWidth](formatwidth.md): The format width used by the receiver.
- [negativeFormat](negativeformat.md): The format the receiver uses to display negative values.
- [positiveFormat](positiveformat.md): The format the receiver uses to display positive values.
- [multiplier](multiplier.md): The multiplier of the receiver.
