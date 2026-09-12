> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/currenttitle](https://developer.apple.com/documentation/uikit/uibutton/currenttitle)

# currentTitle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The current title that is displayed on the button.

## Declaration

```swift
var currentTitle: String? { get }
```

<a id="Discussion"></a>

## Discussion

The value for this property is set automatically whenever the button state changes. For states that do not have a custom title string associated with them, this method returns the title that is currently displayed, which is typically the one associated with the [normal](../uicontrol/state-swift.struct/normal.md) state. The value may be `nil`.

## See Also

### Related Documentation

- [titleLabel](titlelabel.md): A view that displays the value of the `currentTitle` property for a button.
- [setTitle(\_:for:)](settitle%28__for_%29.md): Sets the title to use for the specified state.

### Getting the current state

- [buttonType](buttontype-swift.property.md): The button type.
- [currentAttributedTitle](currentattributedtitle.md): The current styled title that is displayed on the button.
- [currentTitleColor](currenttitlecolor.md): The color used to display the title.
- [currentTitleShadowColor](currenttitleshadowcolor.md): The color of the title’s shadow.
- [currentImage](currentimage.md): The current image displayed on the button.
- [currentBackgroundImage](currentbackgroundimage.md): The current background image displayed on the button.
- [currentPreferredSymbolConfiguration](currentpreferredsymbolconfiguration.md): The current symbol size, style, and weight.
- [imageView](imageview.md): The button’s image view.
- [subtitleLabel](subtitlelabel.md): The label that displays the text of the subtitle.

# currentTitle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The current title that is displayed on the button.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSString * currentTitle;
```

<a id="Discussion"></a>

## Discussion

The value for this property is set automatically whenever the button state changes. For states that do not have a custom title string associated with them, this method returns the title that is currently displayed, which is typically the one associated with the [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md) state. The value may be `nil`.

## See Also

### Related Documentation

- [titleLabel](titlelabel.md): A view that displays the value of the `currentTitle` property for a button.
- [setTitle:forState:](settitle%28__for_%29.md): Sets the title to use for the specified state.

### Getting the current state

- [buttonType](buttontype-swift.property.md): The button type.
- [currentAttributedTitle](currentattributedtitle.md): The current styled title that is displayed on the button.
- [currentTitleColor](currenttitlecolor.md): The color used to display the title.
- [currentTitleShadowColor](currenttitleshadowcolor.md): The color of the title’s shadow.
- [currentImage](currentimage.md): The current image displayed on the button.
- [currentBackgroundImage](currentbackgroundimage.md): The current background image displayed on the button.
- [currentPreferredSymbolConfiguration](currentpreferredsymbolconfiguration.md): The current symbol size, style, and weight.
- [imageView](imageview.md): The button’s image view.
- [subtitleLabel](subtitlelabel.md): The label that displays the text of the subtitle.
