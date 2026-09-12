> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/currentattributedtitle](https://developer.apple.com/documentation/uikit/uibutton/currentattributedtitle)

# currentAttributedTitle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The current styled title that is displayed on the button.

## Declaration

```swift
var currentAttributedTitle: NSAttributedString? { get }
```

<a id="Discussion"></a>

## Discussion

The value for this property reflects the title associated with the control’s current state. For states that do not have a custom title string associated with them, this method returns the attributed title that is currently displayed, which is typically the one associated with the [normal](../uicontrol/state-swift.struct/normal.md) state.

## See Also

### Getting the current state

- [buttonType](buttontype-swift.property.md): The button type.
- [currentTitle](currenttitle.md): The current title that is displayed on the button.
- [currentTitleColor](currenttitlecolor.md): The color used to display the title.
- [currentTitleShadowColor](currenttitleshadowcolor.md): The color of the title’s shadow.
- [currentImage](currentimage.md): The current image displayed on the button.
- [currentBackgroundImage](currentbackgroundimage.md): The current background image displayed on the button.
- [currentPreferredSymbolConfiguration](currentpreferredsymbolconfiguration.md): The current symbol size, style, and weight.
- [imageView](imageview.md): The button’s image view.
- [subtitleLabel](subtitlelabel.md): The label that displays the text of the subtitle.

# currentAttributedTitle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The current styled title that is displayed on the button.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSAttributedString * currentAttributedTitle;
```

<a id="Discussion"></a>

## Discussion

The value for this property reflects the title associated with the control’s current state. For states that do not have a custom title string associated with them, this method returns the attributed title that is currently displayed, which is typically the one associated with the [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md) state.

## See Also

### Getting the current state

- [buttonType](buttontype-swift.property.md): The button type.
- [currentTitle](currenttitle.md): The current title that is displayed on the button.
- [currentTitleColor](currenttitlecolor.md): The color used to display the title.
- [currentTitleShadowColor](currenttitleshadowcolor.md): The color of the title’s shadow.
- [currentImage](currentimage.md): The current image displayed on the button.
- [currentBackgroundImage](currentbackgroundimage.md): The current background image displayed on the button.
- [currentPreferredSymbolConfiguration](currentpreferredsymbolconfiguration.md): The current symbol size, style, and weight.
- [imageView](imageview.md): The button’s image view.
- [subtitleLabel](subtitlelabel.md): The label that displays the text of the subtitle.
