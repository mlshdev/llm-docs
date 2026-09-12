> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchtextfield/textualrange](https://developer.apple.com/documentation/uikit/uisearchtextfield/textualrange)

# textualRange (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The range of the field’s text content.

## Declaration

```swift
var textualRange: UITextRange { get }
```

<a id="Discussion"></a>

## Discussion

Both tokens and text are included in the range from [beginningOfDocument](../uitextinput/beginningofdocument.md) to [endOfDocument](../uitextinput/endofdocument.md). This property provides convenient access to just the text.

## See Also

### Converting text into tokens

- [replaceTextualPortion(of:with:at:)](replacetextualportion%28of_with_at_%29.md): Converts text in a search field into a search token.

# textualRange (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The range of the field’s text content.

## Declaration

```objectivec
@property (nonatomic, readonly) UITextRange * textualRange;
```

<a id="Discussion"></a>

## Discussion

Both tokens and text are included in the range from [beginningOfDocument](../uitextinput/beginningofdocument.md) to [endOfDocument](../uitextinput/endofdocument.md). This property provides convenient access to just the text.

## See Also

### Converting text into tokens

- [replaceTextualPortionOfRange:withToken:atIndex:](replacetextualportion%28of_with_at_%29.md): Converts text in a search field into a search token.
