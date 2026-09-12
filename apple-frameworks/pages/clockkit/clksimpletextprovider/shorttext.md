> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clksimpletextprovider/shorttext](https://developer.apple.com/documentation/clockkit/clksimpletextprovider/shorttext)

# shortText (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A shorter version of the text.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
var shortText: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The text provider uses this string before attempting to truncate the long version of your text. In this string, you might use abbreviations instead of full words or include only the most important word or characters.

## See Also

### Getting the Text

- [text](text.md): Deprecated. The long version of text that you want to display.

# shortText (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A shorter version of the text.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * shortText;
```

<a id="Discussion"></a>

## Discussion

The text provider uses this string before attempting to truncate the long version of your text. In this string, you might use abbreviations instead of full words or include only the most important word or characters.

## See Also

### Getting the Text

- [text](text.md): Deprecated. The long version of text that you want to display.
