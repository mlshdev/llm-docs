> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilabel/highlightedtextcolor](https://developer.apple.com/documentation/uikit/uilabel/highlightedtextcolor)

# highlightedTextColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The highlight color for the label’s text.

## Declaration

```swift
var highlightedTextColor: UIColor? { get set }
```

<a id="Discussion"></a>

## Discussion

Subclasses that use labels to implement a type of text button can use the value in this property when drawing the pressed state for the button. The label uses this value to display text whenever the [isHighlighted](ishighlighted.md) property is [true](https://developer.apple.com/documentation/swift/true).

The default value of this property is `nil`.

## See Also

### Managing highlight values

- [isHighlighted](ishighlighted.md): A Boolean value that determines whether the label draws its text with a highlight.

# highlightedTextColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The highlight color for the label’s text.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIColor * highlightedTextColor;
```

<a id="Discussion"></a>

## Discussion

Subclasses that use labels to implement a type of text button can use the value in this property when drawing the pressed state for the button. The label uses this value to display text whenever the [highlighted](ishighlighted.md) property is [true](https://developer.apple.com/documentation/swift/true).

The default value of this property is `nil`.

## See Also

### Managing highlight values

- [highlighted](ishighlighted.md): A Boolean value that determines whether the label draws its text with a highlight.
