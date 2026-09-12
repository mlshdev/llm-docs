> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbar/scopebarbuttondividerimage(forleftsegmentstate:rightsegmentstate:)](https://developer.apple.com/documentation/uikit/uisearchbar/scopebarbuttondividerimage(forleftsegmentstate:rightsegmentstate:))

# scopeBarButtonDividerImage(forLeftSegmentState:rightSegmentState:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the divider image to use for a given combination of left and right segment states.

## Declaration

```swift
func scopeBarButtonDividerImage(forLeftSegmentState leftState: UIControl.State, rightSegmentState rightState: UIControl.State) -> UIImage?
```

## Parameters

- `leftState`: The state of the left segment for which to provide the divider image.

  The state may be [normal](../uicontrol/state-swift.struct/normal.md) or [selected](../uicontrol/state-swift.struct/selected.md).
- `rightState`: The state of the right segment for which to provide the divider image.

  The state may be [normal](../uicontrol/state-swift.struct/normal.md) or [selected](../uicontrol/state-swift.struct/selected.md).

<a id="return-value"></a>

## Return Value

The divider image to use for the combination of `leftState` and `rightState`.

<a id="Discussion"></a>

## Discussion

For more details, see [setScopeBarButtonDividerImage(\_:forLeftSegmentState:rightSegmentState:)](setscopebarbuttondividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md)

## See Also

### Customizing the scope bar appearance

- [scopeBarBackgroundImage](scopebarbackgroundimage.md): The background image for the scope bar.
- [scopeBarButtonBackgroundImage(for:)](scopebarbuttonbackgroundimage%28for_%29.md): Returns the background image for the scope bar button in a given state.
- [setScopeBarButtonBackgroundImage(\_:for:)](setscopebarbuttonbackgroundimage%28__for_%29.md): Sets the background image for the scope bar button in a given state.
- [setScopeBarButtonDividerImage(\_:forLeftSegmentState:rightSegmentState:)](setscopebarbuttondividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the divider image to use for a given combination of left and right segment states.
- [scopeBarButtonTitleTextAttributes(for:)](scopebarbuttontitletextattributes%28for_%29.md): Returns the text attributes for the search bar’s button’s title string for a given state.
- [setScopeBarButtonTitleTextAttributes(\_:for:)](setscopebarbuttontitletextattributes%28__for_%29.md): Sets the text attributes for the search bar’ button’s title string for a given state.

# scopeBarButtonDividerImageForLeftSegmentState:rightSegmentState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the divider image to use for a given combination of left and right segment states.

## Declaration

```objectivec
- (UIImage *) scopeBarButtonDividerImageForLeftSegmentState:(UIControlState) leftState rightSegmentState:(UIControlState) rightState;
```

## Parameters

- `leftState`: The state of the left segment for which to provide the divider image.

  The state may be [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md) or [UIControlStateSelected](../uicontrol/state-swift.struct/selected.md).
- `rightState`: The state of the right segment for which to provide the divider image.

  The state may be [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md) or [UIControlStateSelected](../uicontrol/state-swift.struct/selected.md).

<a id="return-value"></a>

## Return Value

The divider image to use for the combination of `leftState` and `rightState`.

<a id="Discussion"></a>

## Discussion

For more details, see [setScopeBarButtonDividerImage:forLeftSegmentState:rightSegmentState:](setscopebarbuttondividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md)

## See Also

### Customizing the scope bar appearance

- [scopeBarBackgroundImage](scopebarbackgroundimage.md): The background image for the scope bar.
- [scopeBarButtonBackgroundImageForState:](scopebarbuttonbackgroundimage%28for_%29.md): Returns the background image for the scope bar button in a given state.
- [setScopeBarButtonBackgroundImage:forState:](setscopebarbuttonbackgroundimage%28__for_%29.md): Sets the background image for the scope bar button in a given state.
- [setScopeBarButtonDividerImage:forLeftSegmentState:rightSegmentState:](setscopebarbuttondividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the divider image to use for a given combination of left and right segment states.
- [scopeBarButtonTitleTextAttributesForState:](scopebarbuttontitletextattributes%28for_%29.md): Returns the text attributes for the search bar’s button’s title string for a given state.
- [setScopeBarButtonTitleTextAttributes:forState:](setscopebarbuttontitletextattributes%28__for_%29.md): Sets the text attributes for the search bar’ button’s title string for a given state.
