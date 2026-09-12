> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacelabel/settextcolor(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacelabel/settextcolor(_:))

# setTextColor(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the color to apply to plain text strings.

## Declaration

```swift
func setTextColor(_ color: UIColor?)
```

## Parameters

- `color`: The custom color to be applied to the label’s text. Specifying `nil` removes the custom color and returns the text to the color specified in the storyboard file. The default label color is white.

## Mentioned In

- [Connecting Your User Interface to Your Code](../connecting-your-user-interface-to-your-code.md)

<a id="Discussion"></a>

## Discussion

The value set by this method represents the default color applied to text. This color is used unless you explicitly override it in an attributed string using the [NSForegroundColorAttributeName](https://developer.apple.com/documentation/uikit/nsforegroundcolorattributename) attribute.

## See Also

### Setting the Label Text

- [setText(\_:)](settext%28__%29.md): Sets the label text to the specified string.
- [setAttributedText(\_:)](setattributedtext%28__%29.md): Sets the label text to the specified attributed string.

# setTextColor: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the color to apply to plain text strings.

## Declaration

```objectivec
- (void) setTextColor:(UIColor *) color;
```

## Parameters

- `color`: The custom color to be applied to the label’s text. Specifying `nil` removes the custom color and returns the text to the color specified in the storyboard file. The default label color is white.

## Mentioned In

- [Connecting Your User Interface to Your Code](../connecting-your-user-interface-to-your-code.md)

<a id="Discussion"></a>

## Discussion

The value set by this method represents the default color applied to text. This color is used unless you explicitly override it in an attributed string using the [NSForegroundColorAttributeName](https://developer.apple.com/documentation/uikit/nsforegroundcolorattributename) attribute.

## See Also

### Setting the Label Text

- [setText:](settext%28__%29.md): Sets the label text to the specified string.
- [setAttributedText:](setattributedtext%28__%29.md): Sets the label text to the specified attributed string.
