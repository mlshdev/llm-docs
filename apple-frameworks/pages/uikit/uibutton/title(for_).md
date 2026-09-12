> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/title(for:)](https://developer.apple.com/documentation/uikit/uibutton/title(for:))

# title(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the title associated with the specified state.

## Declaration

```swift
func title(for state: UIControl.State) -> String?
```

## Parameters

- `state`: The state that uses the title. The possible values are described in [UIControl.State](../uicontrol/state-swift.struct.md).

<a id="return-value"></a>

## Return Value

The title for the specified state. If no title has been set for the specific state, this method returns the title associated with the [normal](../uicontrol/state-swift.struct/normal.md) state.

## See Also

### Managing the title

- [titleLabel](titlelabel.md): A view that displays the value of the `currentTitle` property for a button.
- [setTitle(\_:for:)](settitle%28__for_%29.md): Sets the title to use for the specified state.
- [attributedTitle(for:)](attributedtitle%28for_%29.md): Returns the styled title associated with the specified state.
- [setAttributedTitle(\_:for:)](setattributedtitle%28__for_%29.md): Sets the styled title to use for the specified state.
- [titleColor(for:)](titlecolor%28for_%29.md): Returns the title color used for a state.
- [setTitleColor(\_:for:)](settitlecolor%28__for_%29.md): Sets the color of the title to use for the specified state.
- [titleShadowColor(for:)](titleshadowcolor%28for_%29.md): Returns the shadow color of the title used for a state.
- [setTitleShadowColor(\_:for:)](settitleshadowcolor%28__for_%29.md): Sets the color of the title shadow to use for the specified state.

# titleForState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the title associated with the specified state.

## Declaration

```objectivec
- (NSString *) titleForState:(UIControlState) state;
```

## Parameters

- `state`: The state that uses the title. The possible values are described in [UIControlState](../uicontrol/state-swift.struct.md).

<a id="return-value"></a>

## Return Value

The title for the specified state. If no title has been set for the specific state, this method returns the title associated with the [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md) state.

## See Also

### Managing the title

- [titleLabel](titlelabel.md): A view that displays the value of the `currentTitle` property for a button.
- [setTitle:forState:](settitle%28__for_%29.md): Sets the title to use for the specified state.
- [attributedTitleForState:](attributedtitle%28for_%29.md): Returns the styled title associated with the specified state.
- [setAttributedTitle:forState:](setattributedtitle%28__for_%29.md): Sets the styled title to use for the specified state.
- [titleColorForState:](titlecolor%28for_%29.md): Returns the title color used for a state.
- [setTitleColor:forState:](settitlecolor%28__for_%29.md): Sets the color of the title to use for the specified state.
- [titleShadowColorForState:](titleshadowcolor%28for_%29.md): Returns the shadow color of the title used for a state.
- [setTitleShadowColor:forState:](settitleshadowcolor%28__for_%29.md): Sets the color of the title shadow to use for the specified state.
