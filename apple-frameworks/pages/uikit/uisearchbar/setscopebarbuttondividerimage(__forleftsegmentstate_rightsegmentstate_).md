> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbar/setscopebarbuttondividerimage(_:forleftsegmentstate:rightsegmentstate:)](https://developer.apple.com/documentation/uikit/uisearchbar/setscopebarbuttondividerimage(_:forleftsegmentstate:rightsegmentstate:))

# setScopeBarButtonDividerImage(\_:forLeftSegmentState:rightSegmentState:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the divider image to use for a given combination of left and right segment states.

## Declaration

```swift
func setScopeBarButtonDividerImage(_ dividerImage: UIImage?, forLeftSegmentState leftState: UIControl.State, rightSegmentState rightState: UIControl.State)
```

## Parameters

- `dividerImage`: The divider image to use for the combination of `leftState` and `rightState`.
- `leftState`: The state of the left segment for which to set the divider image.

  The state may be [normal](../uicontrol/state-swift.struct/normal.md) or [selected](../uicontrol/state-swift.struct/selected.md).
- `rightState`: The state of the right segment for which to set the divider image.

  The state may be [normal](../uicontrol/state-swift.struct/normal.md) or [selected](../uicontrol/state-swift.struct/selected.md).

<a id="Discussion"></a>

## Discussion

To customize the segmented control appearance you need to provide divider images to go between two unselected segments (`leftSegmentState:UIControlStateNormal rightSegmentState:UIControlStateNormal`), selected on the left and unselected on the right (`leftSegmentState:UIControlStateSelected rightSegmentState:UIControlStateNormal`), and unselected on the left and selected on the right (`leftSegmentState:UIControlStateNormal rightSegmentState:UIControlStateSelected`).

## See Also

### Customizing the scope bar appearance

- [scopeBarBackgroundImage](scopebarbackgroundimage.md): The background image for the scope bar.
- [scopeBarButtonBackgroundImage(for:)](scopebarbuttonbackgroundimage%28for_%29.md): Returns the background image for the scope bar button in a given state.
- [setScopeBarButtonBackgroundImage(\_:for:)](setscopebarbuttonbackgroundimage%28__for_%29.md): Sets the background image for the scope bar button in a given state.
- [scopeBarButtonDividerImage(forLeftSegmentState:rightSegmentState:)](scopebarbuttondividerimage%28forleftsegmentstate_rightsegmentstate_%29.md): Returns the divider image to use for a given combination of left and right segment states.
- [scopeBarButtonTitleTextAttributes(for:)](scopebarbuttontitletextattributes%28for_%29.md): Returns the text attributes for the search bar’s button’s title string for a given state.
- [setScopeBarButtonTitleTextAttributes(\_:for:)](setscopebarbuttontitletextattributes%28__for_%29.md): Sets the text attributes for the search bar’ button’s title string for a given state.

# setScopeBarButtonDividerImage:forLeftSegmentState:rightSegmentState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the divider image to use for a given combination of left and right segment states.

## Declaration

```objectivec
- (void) setScopeBarButtonDividerImage:(UIImage *) dividerImage forLeftSegmentState:(UIControlState) leftState rightSegmentState:(UIControlState) rightState;
```

## Parameters

- `dividerImage`: The divider image to use for the combination of `leftState` and `rightState`.
- `leftState`: The state of the left segment for which to set the divider image.

  The state may be [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md) or [UIControlStateSelected](../uicontrol/state-swift.struct/selected.md).
- `rightState`: The state of the right segment for which to set the divider image.

  The state may be [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md) or [UIControlStateSelected](../uicontrol/state-swift.struct/selected.md).

<a id="Discussion"></a>

## Discussion

To customize the segmented control appearance you need to provide divider images to go between two unselected segments (`leftSegmentState:UIControlStateNormal rightSegmentState:UIControlStateNormal`), selected on the left and unselected on the right (`leftSegmentState:UIControlStateSelected rightSegmentState:UIControlStateNormal`), and unselected on the left and selected on the right (`leftSegmentState:UIControlStateNormal rightSegmentState:UIControlStateSelected`).

## See Also

### Customizing the scope bar appearance

- [scopeBarBackgroundImage](scopebarbackgroundimage.md): The background image for the scope bar.
- [scopeBarButtonBackgroundImageForState:](scopebarbuttonbackgroundimage%28for_%29.md): Returns the background image for the scope bar button in a given state.
- [setScopeBarButtonBackgroundImage:forState:](setscopebarbuttonbackgroundimage%28__for_%29.md): Sets the background image for the scope bar button in a given state.
- [scopeBarButtonDividerImageForLeftSegmentState:rightSegmentState:](scopebarbuttondividerimage%28forleftsegmentstate_rightsegmentstate_%29.md): Returns the divider image to use for a given combination of left and right segment states.
- [scopeBarButtonTitleTextAttributesForState:](scopebarbuttontitletextattributes%28for_%29.md): Returns the text attributes for the search bar’s button’s title string for a given state.
- [setScopeBarButtonTitleTextAttributes:forState:](setscopebarbuttontitletextattributes%28__for_%29.md): Sets the text attributes for the search bar’ button’s title string for a given state.
