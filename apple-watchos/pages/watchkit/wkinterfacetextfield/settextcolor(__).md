> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacetextfield/settextcolor(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacetextfield/settextcolor(_:))

# setTextColor(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Sets the text’s color.

## Declaration

```swift
func setTextColor(_ color: UIColor?)
```

## Parameters

- `color`: The color to be applied to the text field’s text. Specifying `nil` removes the color and returns the text to the color specified in the storyboard file. The default color is white.

<a id="Discussion"></a>

## Discussion

This method defines the default color of the entire string. The text field uses this color unless you explicitly override it in an attributed string using the [NSForegroundColorAttributeName](https://developer.apple.com/documentation/uikit/nsforegroundcolorattributename) attribute.

## See Also

### Setting the Text

- [setText(\_:)](settext%28__%29.md): Sets the text displayed by the text field.
- [setAttributedText(\_:)](setattributedtext%28__%29.md): Sets the styled text displayed by the text field.

# setTextColor: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Sets the text’s color.

## Declaration

```objectivec
- (void) setTextColor:(UIColor *) color;
```

## Parameters

- `color`: The color to be applied to the text field’s text. Specifying `nil` removes the color and returns the text to the color specified in the storyboard file. The default color is white.

<a id="Discussion"></a>

## Discussion

This method defines the default color of the entire string. The text field uses this color unless you explicitly override it in an attributed string using the [NSForegroundColorAttributeName](https://developer.apple.com/documentation/uikit/nsforegroundcolorattributename) attribute.

## See Also

### Setting the Text

- [setText:](settext%28__%29.md): Sets the text displayed by the text field.
- [setAttributedText:](setattributedtext%28__%29.md): Sets the styled text displayed by the text field.
