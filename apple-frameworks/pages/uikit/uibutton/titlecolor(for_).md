> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/titlecolor(for:)](https://developer.apple.com/documentation/uikit/uibutton/titlecolor(for:))

# titleColor(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the title color used for a state.

## Declaration

```swift
func titleColor(for state: UIControl.State) -> UIColor?
```

## Parameters

- `state`: The state that uses the title color. The possible values are described in [UIControl.State](../uicontrol/state-swift.struct.md).

<a id="return-value"></a>

## Return Value

The color of the title for the specified state.

## See Also

### Managing the title

- [titleLabel](titlelabel.md): A view that displays the value of the `currentTitle` property for a button.
- [title(for:)](title%28for_%29.md): Returns the title associated with the specified state.
- [setTitle(\_:for:)](settitle%28__for_%29.md): Sets the title to use for the specified state.
- [attributedTitle(for:)](attributedtitle%28for_%29.md): Returns the styled title associated with the specified state.
- [setAttributedTitle(\_:for:)](setattributedtitle%28__for_%29.md): Sets the styled title to use for the specified state.
- [setTitleColor(\_:for:)](settitlecolor%28__for_%29.md): Sets the color of the title to use for the specified state.
- [titleShadowColor(for:)](titleshadowcolor%28for_%29.md): Returns the shadow color of the title used for a state.
- [setTitleShadowColor(\_:for:)](settitleshadowcolor%28__for_%29.md): Sets the color of the title shadow to use for the specified state.

# titleColorForState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the title color used for a state.

## Declaration

```objectivec
- (UIColor *) titleColorForState:(UIControlState) state;
```

## Parameters

- `state`: The state that uses the title color. The possible values are described in [UIControlState](../uicontrol/state-swift.struct.md).

<a id="return-value"></a>

## Return Value

The color of the title for the specified state.

## See Also

### Managing the title

- [titleLabel](titlelabel.md): A view that displays the value of the `currentTitle` property for a button.
- [titleForState:](title%28for_%29.md): Returns the title associated with the specified state.
- [setTitle:forState:](settitle%28__for_%29.md): Sets the title to use for the specified state.
- [attributedTitleForState:](attributedtitle%28for_%29.md): Returns the styled title associated with the specified state.
- [setAttributedTitle:forState:](setattributedtitle%28__for_%29.md): Sets the styled title to use for the specified state.
- [setTitleColor:forState:](settitlecolor%28__for_%29.md): Sets the color of the title to use for the specified state.
- [titleShadowColorForState:](titleshadowcolor%28for_%29.md): Returns the shadow color of the title used for a state.
- [setTitleShadowColor:forState:](settitleshadowcolor%28__for_%29.md): Sets the color of the title shadow to use for the specified state.
