> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/setattributedtitle(_:for:)](https://developer.apple.com/documentation/uikit/uibutton/setattributedtitle(_:for:))

# setAttributedTitle(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the styled title to use for the specified state.

## Declaration

```swift
func setAttributedTitle(_ title: NSAttributedString?, for state: UIControl.State)
```

## Parameters

- `title`: The styled text string so use for the title.
- `state`: The state that uses the specified title. The possible values are described in [UIControl.State](../uicontrol/state-swift.struct.md).

<a id="Discussion"></a>

## Discussion

Use this method to set the title of the button, including any relevant formatting information. If you set both a title and an attributed title for the button, the button prefers the use of the attributed title.

At a minimum, you should set the value for the normal state. If a title is not specified for a state, the default behavior is to use the title associated with the [normal](../uicontrol/state-swift.struct/normal.md) state. If the value for [normal](../uicontrol/state-swift.struct/normal.md) is not set, then the property defaults to a system value.

## See Also

### Managing the title

- [titleLabel](titlelabel.md): A view that displays the value of the `currentTitle` property for a button.
- [title(for:)](title%28for_%29.md): Returns the title associated with the specified state.
- [setTitle(\_:for:)](settitle%28__for_%29.md): Sets the title to use for the specified state.
- [attributedTitle(for:)](attributedtitle%28for_%29.md): Returns the styled title associated with the specified state.
- [titleColor(for:)](titlecolor%28for_%29.md): Returns the title color used for a state.
- [setTitleColor(\_:for:)](settitlecolor%28__for_%29.md): Sets the color of the title to use for the specified state.
- [titleShadowColor(for:)](titleshadowcolor%28for_%29.md): Returns the shadow color of the title used for a state.
- [setTitleShadowColor(\_:for:)](settitleshadowcolor%28__for_%29.md): Sets the color of the title shadow to use for the specified state.

# setAttributedTitle:forState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the styled title to use for the specified state.

## Declaration

```objectivec
- (void) setAttributedTitle:(NSAttributedString *) title forState:(UIControlState) state;
```

## Parameters

- `title`: The styled text string so use for the title.
- `state`: The state that uses the specified title. The possible values are described in [UIControlState](../uicontrol/state-swift.struct.md).

<a id="Discussion"></a>

## Discussion

Use this method to set the title of the button, including any relevant formatting information. If you set both a title and an attributed title for the button, the button prefers the use of the attributed title.

At a minimum, you should set the value for the normal state. If a title is not specified for a state, the default behavior is to use the title associated with the [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md) state. If the value for [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md) is not set, then the property defaults to a system value.

## See Also

### Managing the title

- [titleLabel](titlelabel.md): A view that displays the value of the `currentTitle` property for a button.
- [titleForState:](title%28for_%29.md): Returns the title associated with the specified state.
- [setTitle:forState:](settitle%28__for_%29.md): Sets the title to use for the specified state.
- [attributedTitleForState:](attributedtitle%28for_%29.md): Returns the styled title associated with the specified state.
- [titleColorForState:](titlecolor%28for_%29.md): Returns the title color used for a state.
- [setTitleColor:forState:](settitlecolor%28__for_%29.md): Sets the color of the title to use for the specified state.
- [titleShadowColorForState:](titleshadowcolor%28for_%29.md): Returns the shadow color of the title used for a state.
- [setTitleShadowColor:forState:](settitleshadowcolor%28__for_%29.md): Sets the color of the title shadow to use for the specified state.
