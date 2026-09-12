> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/imageview](https://developer.apple.com/documentation/uikit/uibutton/imageview)

# imageView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The button’s image view.

## Declaration

```swift
var imageView: UIImageView? { get }
```

<a id="Discussion"></a>

## Discussion

Although this property is read-only, its own properties are read/write. Use these properties to configure the appearance and behavior of the button’s view. For example:

```objc
UIButton *button                   = [UIButton buttonWithType: UIButtonTypeSystem];
button.imageView.exclusiveTouch    = YES;
```

The `imageView` property returns a value even if the button has not been displayed yet. The value of the property is `nil` for system buttons.

## See Also

### Getting the current state

- [buttonType](buttontype-swift.property.md): The button type.
- [currentTitle](currenttitle.md): The current title that is displayed on the button.
- [currentAttributedTitle](currentattributedtitle.md): The current styled title that is displayed on the button.
- [currentTitleColor](currenttitlecolor.md): The color used to display the title.
- [currentTitleShadowColor](currenttitleshadowcolor.md): The color of the title’s shadow.
- [currentImage](currentimage.md): The current image displayed on the button.
- [currentBackgroundImage](currentbackgroundimage.md): The current background image displayed on the button.
- [currentPreferredSymbolConfiguration](currentpreferredsymbolconfiguration.md): The current symbol size, style, and weight.
- [subtitleLabel](subtitlelabel.md): The label that displays the text of the subtitle.

# imageView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The button’s image view.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIImageView * imageView;
```

<a id="Discussion"></a>

## Discussion

Although this property is read-only, its own properties are read/write. Use these properties to configure the appearance and behavior of the button’s view. For example:

```objc
UIButton *button                   = [UIButton buttonWithType: UIButtonTypeSystem];
button.imageView.exclusiveTouch    = YES;
```

The `imageView` property returns a value even if the button has not been displayed yet. The value of the property is `nil` for system buttons.

## See Also

### Getting the current state

- [buttonType](buttontype-swift.property.md): The button type.
- [currentTitle](currenttitle.md): The current title that is displayed on the button.
- [currentAttributedTitle](currentattributedtitle.md): The current styled title that is displayed on the button.
- [currentTitleColor](currenttitlecolor.md): The color used to display the title.
- [currentTitleShadowColor](currenttitleshadowcolor.md): The color of the title’s shadow.
- [currentImage](currentimage.md): The current image displayed on the button.
- [currentBackgroundImage](currentbackgroundimage.md): The current background image displayed on the button.
- [currentPreferredSymbolConfiguration](currentpreferredsymbolconfiguration.md): The current symbol size, style, and weight.
- [subtitleLabel](subtitlelabel.md): The label that displays the text of the subtitle.
