> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/currentpreferredsymbolconfiguration](https://developer.apple.com/documentation/uikit/uibutton/currentpreferredsymbolconfiguration)

# currentPreferredSymbolConfiguration (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The current symbol size, style, and weight.

## Declaration

```swift
var currentPreferredSymbolConfiguration: UIImage.SymbolConfiguration? { get }
```

<a id="Discussion"></a>

## Discussion

This can be `nil` or `unspecifiedConfiguration`, which is essentially the same as `nil` but more explicit.

## See Also

### Getting the current state

- [buttonType](buttontype-swift.property.md): The button type.
- [currentTitle](currenttitle.md): The current title that is displayed on the button.
- [currentAttributedTitle](currentattributedtitle.md): The current styled title that is displayed on the button.
- [currentTitleColor](currenttitlecolor.md): The color used to display the title.
- [currentTitleShadowColor](currenttitleshadowcolor.md): The color of the title’s shadow.
- [currentImage](currentimage.md): The current image displayed on the button.
- [currentBackgroundImage](currentbackgroundimage.md): The current background image displayed on the button.
- [imageView](imageview.md): The button’s image view.
- [subtitleLabel](subtitlelabel.md): The label that displays the text of the subtitle.

# currentPreferredSymbolConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The current symbol size, style, and weight.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIImageSymbolConfiguration * currentPreferredSymbolConfiguration;
```

<a id="Discussion"></a>

## Discussion

This can be `nil` or `unspecifiedConfiguration`, which is essentially the same as `nil` but more explicit.

## See Also

### Getting the current state

- [buttonType](buttontype-swift.property.md): The button type.
- [currentTitle](currenttitle.md): The current title that is displayed on the button.
- [currentAttributedTitle](currentattributedtitle.md): The current styled title that is displayed on the button.
- [currentTitleColor](currenttitlecolor.md): The color used to display the title.
- [currentTitleShadowColor](currenttitleshadowcolor.md): The color of the title’s shadow.
- [currentImage](currentimage.md): The current image displayed on the button.
- [currentBackgroundImage](currentbackgroundimage.md): The current background image displayed on the button.
- [imageView](imageview.md): The button’s image view.
- [subtitleLabel](subtitlelabel.md): The label that displays the text of the subtitle.
