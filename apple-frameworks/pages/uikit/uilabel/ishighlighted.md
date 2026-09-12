> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilabel/ishighlighted](https://developer.apple.com/documentation/uikit/uilabel/ishighlighted)

# isHighlighted (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether the label draws its text with a highlight.

## Declaration

```swift
var isHighlighted: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property causes the label to redraw with the appropriate highlight state. A subclass implementing a text button might set this property to [true](https://developer.apple.com/documentation/swift/true) when the user presses the button and set it to [false](https://developer.apple.com/documentation/swift/false) at other times. In order for the label to draw the highlight, the [highlightedTextColor](highlightedtextcolor.md) property must contain a non-`nil` value.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing highlight values

- [highlightedTextColor](highlightedtextcolor.md): The highlight color for the label’s text.

# highlighted (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether the label draws its text with a highlight.

## Declaration

```objectivec
@property (nonatomic, getter=isHighlighted) BOOL highlighted;
```

<a id="Discussion"></a>

## Discussion

Setting this property causes the label to redraw with the appropriate highlight state. A subclass implementing a text button might set this property to [true](https://developer.apple.com/documentation/swift/true) when the user presses the button and set it to [false](https://developer.apple.com/documentation/swift/false) at other times. In order for the label to draw the highlight, the [highlightedTextColor](highlightedtextcolor.md) property must contain a non-`nil` value.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing highlight values

- [highlightedTextColor](highlightedtextcolor.md): The highlight color for the label’s text.
