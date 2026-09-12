> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbar/scopebarbuttonbackgroundimage(for:)](https://developer.apple.com/documentation/uikit/uisearchbar/scopebarbuttonbackgroundimage(for:))

# scopeBarButtonBackgroundImage(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the background image for the scope bar button in a given state.

## Declaration

```swift
func scopeBarButtonBackgroundImage(for state: UIControl.State) -> UIImage?
```

## Parameters

- `state`: A control state.

<a id="return-value"></a>

## Return Value

The background image for the scope bar button in `state`.

<a id="Discussion"></a>

## Discussion

If the background image is an image returned from [stretchableImage(withLeftCapWidth:topCapHeight:)](../uiimage/stretchableimage%28withleftcapwidth_topcapheight_%29.md) (`UIImage`), the cap widths are calculated from that information, otherwise, the cap width is calculated by subtracting one from the image’s width then dividing by 2. The cap widths are used as the margins for text placement. To adjust the margin use the margin adjustment methods.

## See Also

### Customizing the scope bar appearance

- [scopeBarBackgroundImage](scopebarbackgroundimage.md): The background image for the scope bar.
- [setScopeBarButtonBackgroundImage(\_:for:)](setscopebarbuttonbackgroundimage%28__for_%29.md): Sets the background image for the scope bar button in a given state.
- [scopeBarButtonDividerImage(forLeftSegmentState:rightSegmentState:)](scopebarbuttondividerimage%28forleftsegmentstate_rightsegmentstate_%29.md): Returns the divider image to use for a given combination of left and right segment states.
- [setScopeBarButtonDividerImage(\_:forLeftSegmentState:rightSegmentState:)](setscopebarbuttondividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the divider image to use for a given combination of left and right segment states.
- [scopeBarButtonTitleTextAttributes(for:)](scopebarbuttontitletextattributes%28for_%29.md): Returns the text attributes for the search bar’s button’s title string for a given state.
- [setScopeBarButtonTitleTextAttributes(\_:for:)](setscopebarbuttontitletextattributes%28__for_%29.md): Sets the text attributes for the search bar’ button’s title string for a given state.

# scopeBarButtonBackgroundImageForState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the background image for the scope bar button in a given state.

## Declaration

```objectivec
- (UIImage *) scopeBarButtonBackgroundImageForState:(UIControlState) state;
```

## Parameters

- `state`: A control state.

<a id="return-value"></a>

## Return Value

The background image for the scope bar button in `state`.

<a id="Discussion"></a>

## Discussion

If the background image is an image returned from [stretchableImageWithLeftCapWidth:topCapHeight:](../uiimage/stretchableimage%28withleftcapwidth_topcapheight_%29.md) (`UIImage`), the cap widths are calculated from that information, otherwise, the cap width is calculated by subtracting one from the image’s width then dividing by 2. The cap widths are used as the margins for text placement. To adjust the margin use the margin adjustment methods.

## See Also

### Customizing the scope bar appearance

- [scopeBarBackgroundImage](scopebarbackgroundimage.md): The background image for the scope bar.
- [setScopeBarButtonBackgroundImage:forState:](setscopebarbuttonbackgroundimage%28__for_%29.md): Sets the background image for the scope bar button in a given state.
- [scopeBarButtonDividerImageForLeftSegmentState:rightSegmentState:](scopebarbuttondividerimage%28forleftsegmentstate_rightsegmentstate_%29.md): Returns the divider image to use for a given combination of left and right segment states.
- [setScopeBarButtonDividerImage:forLeftSegmentState:rightSegmentState:](setscopebarbuttondividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the divider image to use for a given combination of left and right segment states.
- [scopeBarButtonTitleTextAttributesForState:](scopebarbuttontitletextattributes%28for_%29.md): Returns the text attributes for the search bar’s button’s title string for a given state.
- [setScopeBarButtonTitleTextAttributes:forState:](setscopebarbuttontitletextattributes%28__for_%29.md): Sets the text attributes for the search bar’ button’s title string for a given state.
