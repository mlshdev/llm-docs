> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/titlelabel](https://developer.apple.com/documentation/uikit/uibutton/titlelabel)

# titleLabel (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A view that displays the value of the `currentTitle` property for a button.

## Declaration

```swift
var titleLabel: UILabel? { get }
```

<a id="Discussion"></a>

## Discussion

Although this property is read-only, its own properties are read/write. Use these properties primarily to configure the text of the button. For example:

```objc
UIButton *button                  = [UIButton buttonWithType: UIButtonTypeSystem];
button.titleLabel.font            = [UIFont systemFontOfSize: 12];
button.titleLabel.lineBreakMode   = NSLineBreakByTruncatingTail;
```

Do not use the label object to set the text color or the shadow color. Instead, use the [setTitleColor(\_:for:)](settitlecolor%28__for_%29.md) and [setTitleShadowColor(\_:for:)](settitleshadowcolor%28__for_%29.md) methods of this class to make those changes. To set the actual text of the label, use [setTitle(\_:for:)](settitle%28__for_%29.md) (`button.titleLabel.text` does not let you set the text).

The `titleLabel` property returns a value even if the button has not been displayed yet. The value of the property is  `nil` for system buttons.

## See Also

### Related Documentation

- [currentTitle](currenttitle.md): The current title that is displayed on the button.

### Managing the title

- [title(for:)](title%28for_%29.md): Returns the title associated with the specified state.
- [setTitle(\_:for:)](settitle%28__for_%29.md): Sets the title to use for the specified state.
- [attributedTitle(for:)](attributedtitle%28for_%29.md): Returns the styled title associated with the specified state.
- [setAttributedTitle(\_:for:)](setattributedtitle%28__for_%29.md): Sets the styled title to use for the specified state.
- [titleColor(for:)](titlecolor%28for_%29.md): Returns the title color used for a state.
- [setTitleColor(\_:for:)](settitlecolor%28__for_%29.md): Sets the color of the title to use for the specified state.
- [titleShadowColor(for:)](titleshadowcolor%28for_%29.md): Returns the shadow color of the title used for a state.
- [setTitleShadowColor(\_:for:)](settitleshadowcolor%28__for_%29.md): Sets the color of the title shadow to use for the specified state.

# titleLabel (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A view that displays the value of the `currentTitle` property for a button.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UILabel * titleLabel;
```

<a id="Discussion"></a>

## Discussion

Although this property is read-only, its own properties are read/write. Use these properties primarily to configure the text of the button. For example:

```objc
UIButton *button                  = [UIButton buttonWithType: UIButtonTypeSystem];
button.titleLabel.font            = [UIFont systemFontOfSize: 12];
button.titleLabel.lineBreakMode   = NSLineBreakByTruncatingTail;
```

Do not use the label object to set the text color or the shadow color. Instead, use the [setTitleColor:forState:](settitlecolor%28__for_%29.md) and [setTitleShadowColor:forState:](settitleshadowcolor%28__for_%29.md) methods of this class to make those changes. To set the actual text of the label, use [setTitle:forState:](settitle%28__for_%29.md) (`button.titleLabel.text` does not let you set the text).

The `titleLabel` property returns a value even if the button has not been displayed yet. The value of the property is  `nil` for system buttons.

## See Also

### Related Documentation

- [currentTitle](currenttitle.md): The current title that is displayed on the button.

### Managing the title

- [titleForState:](title%28for_%29.md): Returns the title associated with the specified state.
- [setTitle:forState:](settitle%28__for_%29.md): Sets the title to use for the specified state.
- [attributedTitleForState:](attributedtitle%28for_%29.md): Returns the styled title associated with the specified state.
- [setAttributedTitle:forState:](setattributedtitle%28__for_%29.md): Sets the styled title to use for the specified state.
- [titleColorForState:](titlecolor%28for_%29.md): Returns the title color used for a state.
- [setTitleColor:forState:](settitlecolor%28__for_%29.md): Sets the color of the title to use for the specified state.
- [titleShadowColorForState:](titleshadowcolor%28for_%29.md): Returns the shadow color of the title used for a state.
- [setTitleShadowColor:forState:](settitleshadowcolor%28__for_%29.md): Sets the color of the title shadow to use for the specified state.
