> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/settitle(_:for:)](https://developer.apple.com/documentation/uikit/uibutton/settitle(_:for:))

# setTitle(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the title to use for the specified state.

## Declaration

```swift
func setTitle(_ title: String?, for state: UIControl.State)
```

## Parameters

- `title`: The title to use for the specified state.
- `state`: The state that uses the specified title. [UIControl.State](../uicontrol/state-swift.struct.md) describes the possible values.

<a id="Discussion"></a>

## Discussion

Use this method to set the title for the button. The title you specify derives its formatting from the button’s associated label object. If you set both a title and an attributed title for the button, the button prefers the use of the attributed title over this one.

At a minimum, set the value for the [normal](../uicontrol/state-swift.struct/normal.md) state. If you don’t specify a title for the other states, the button uses the title associated with the [normal](../uicontrol/state-swift.struct/normal.md) state. If you don’t set the value for [normal](../uicontrol/state-swift.struct/normal.md), then the property defaults to a system value.

> **Important**

>  When the user interface idiom is [UIUserInterfaceIdiom.mac](../uiuserinterfaceidiom/mac.md) and [behavioralStyle](behavioralstyle.md) is [UIBehavioralStyle.mac](../uibehavioralstyle/mac.md), your app throws an exception if you use this method to set the title for any state other than [normal](../uicontrol/state-swift.struct/normal.md).

## See Also

### Managing the title

- [titleLabel](titlelabel.md): A view that displays the value of the `currentTitle` property for a button.
- [title(for:)](title%28for_%29.md): Returns the title associated with the specified state.
- [attributedTitle(for:)](attributedtitle%28for_%29.md): Returns the styled title associated with the specified state.
- [setAttributedTitle(\_:for:)](setattributedtitle%28__for_%29.md): Sets the styled title to use for the specified state.
- [titleColor(for:)](titlecolor%28for_%29.md): Returns the title color used for a state.
- [setTitleColor(\_:for:)](settitlecolor%28__for_%29.md): Sets the color of the title to use for the specified state.
- [titleShadowColor(for:)](titleshadowcolor%28for_%29.md): Returns the shadow color of the title used for a state.
- [setTitleShadowColor(\_:for:)](settitleshadowcolor%28__for_%29.md): Sets the color of the title shadow to use for the specified state.

# setTitle:forState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the title to use for the specified state.

## Declaration

```objectivec
- (void) setTitle:(NSString *) title forState:(UIControlState) state;
```

## Parameters

- `title`: The title to use for the specified state.
- `state`: The state that uses the specified title. [UIControlState](../uicontrol/state-swift.struct.md) describes the possible values.

<a id="Discussion"></a>

## Discussion

Use this method to set the title for the button. The title you specify derives its formatting from the button’s associated label object. If you set both a title and an attributed title for the button, the button prefers the use of the attributed title over this one.

At a minimum, set the value for the [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md) state. If you don’t specify a title for the other states, the button uses the title associated with the [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md) state. If you don’t set the value for [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md), then the property defaults to a system value.

> **Important**

>  When the user interface idiom is [UIUserInterfaceIdiomMac](../uiuserinterfaceidiom/mac.md) and [behavioralStyle](behavioralstyle.md) is [UIBehavioralStyleMac](../uibehavioralstyle/mac.md), your app throws an exception if you use this method to set the title for any state other than [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md).

## See Also

### Managing the title

- [titleLabel](titlelabel.md): A view that displays the value of the `currentTitle` property for a button.
- [titleForState:](title%28for_%29.md): Returns the title associated with the specified state.
- [attributedTitleForState:](attributedtitle%28for_%29.md): Returns the styled title associated with the specified state.
- [setAttributedTitle:forState:](setattributedtitle%28__for_%29.md): Sets the styled title to use for the specified state.
- [titleColorForState:](titlecolor%28for_%29.md): Returns the title color used for a state.
- [setTitleColor:forState:](settitlecolor%28__for_%29.md): Sets the color of the title to use for the specified state.
- [titleShadowColorForState:](titleshadowcolor%28for_%29.md): Returns the shadow color of the title used for a state.
- [setTitleShadowColor:forState:](settitleshadowcolor%28__for_%29.md): Sets the color of the title shadow to use for the specified state.
