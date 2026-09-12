> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/settitlecolor(_:for:)](https://developer.apple.com/documentation/uikit/uibutton/settitlecolor(_:for:))

# setTitleColor(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the color of the title to use for the specified state.

## Declaration

```swift
func setTitleColor(_ color: UIColor?, for state: UIControl.State)
```

## Parameters

- `color`: The color of the title to use for the specified state.
- `state`: The state that uses the specified color. The possible values are described in [UIControl.State](../uicontrol/state-swift.struct.md).

<a id="Discussion"></a>

## Discussion

In general, if a property is not specified for a state, the default is to use the [normal](../uicontrol/state-swift.struct/normal.md) value. If the [normal](../uicontrol/state-swift.struct/normal.md) value is not set, then the property defaults to a system value. Therefore, at a minimum, you should set the value for the normal state.

## See Also

### Managing the title

- [titleLabel](titlelabel.md): A view that displays the value of the `currentTitle` property for a button.
- [title(for:)](title%28for_%29.md): Returns the title associated with the specified state.
- [setTitle(\_:for:)](settitle%28__for_%29.md): Sets the title to use for the specified state.
- [attributedTitle(for:)](attributedtitle%28for_%29.md): Returns the styled title associated with the specified state.
- [setAttributedTitle(\_:for:)](setattributedtitle%28__for_%29.md): Sets the styled title to use for the specified state.
- [titleColor(for:)](titlecolor%28for_%29.md): Returns the title color used for a state.
- [titleShadowColor(for:)](titleshadowcolor%28for_%29.md): Returns the shadow color of the title used for a state.
- [setTitleShadowColor(\_:for:)](settitleshadowcolor%28__for_%29.md): Sets the color of the title shadow to use for the specified state.

# setTitleColor:forState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the color of the title to use for the specified state.

## Declaration

```objectivec
- (void) setTitleColor:(UIColor *) color forState:(UIControlState) state;
```

## Parameters

- `color`: The color of the title to use for the specified state.
- `state`: The state that uses the specified color. The possible values are described in [UIControlState](../uicontrol/state-swift.struct.md).

<a id="Discussion"></a>

## Discussion

In general, if a property is not specified for a state, the default is to use the [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md) value. If the [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md) value is not set, then the property defaults to a system value. Therefore, at a minimum, you should set the value for the normal state.

## See Also

### Managing the title

- [titleLabel](titlelabel.md): A view that displays the value of the `currentTitle` property for a button.
- [titleForState:](title%28for_%29.md): Returns the title associated with the specified state.
- [setTitle:forState:](settitle%28__for_%29.md): Sets the title to use for the specified state.
- [attributedTitleForState:](attributedtitle%28for_%29.md): Returns the styled title associated with the specified state.
- [setAttributedTitle:forState:](setattributedtitle%28__for_%29.md): Sets the styled title to use for the specified state.
- [titleColorForState:](titlecolor%28for_%29.md): Returns the title color used for a state.
- [titleShadowColorForState:](titleshadowcolor%28for_%29.md): Returns the shadow color of the title used for a state.
- [setTitleShadowColor:forState:](settitleshadowcolor%28__for_%29.md): Sets the color of the title shadow to use for the specified state.
