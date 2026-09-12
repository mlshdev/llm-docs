> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbar/setscopebarbuttonbackgroundimage(_:for:)](https://developer.apple.com/documentation/uikit/uisearchbar/setscopebarbuttonbackgroundimage(_:for:))

# setScopeBarButtonBackgroundImage(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the background image for the scope bar button in a given state.

## Declaration

```swift
func setScopeBarButtonBackgroundImage(_ backgroundImage: UIImage?, for state: UIControl.State)
```

## Parameters

- `backgroundImage`: The background image for the scope bar button in `state`.
- `state`: A control state.

<a id="Discussion"></a>

## Discussion

For more details, see [scopeBarButtonBackgroundImage(for:)](scopebarbuttonbackgroundimage%28for_%29.md).

## See Also

### Customizing the scope bar appearance

- [scopeBarBackgroundImage](scopebarbackgroundimage.md): The background image for the scope bar.
- [scopeBarButtonBackgroundImage(for:)](scopebarbuttonbackgroundimage%28for_%29.md): Returns the background image for the scope bar button in a given state.
- [scopeBarButtonDividerImage(forLeftSegmentState:rightSegmentState:)](scopebarbuttondividerimage%28forleftsegmentstate_rightsegmentstate_%29.md): Returns the divider image to use for a given combination of left and right segment states.
- [setScopeBarButtonDividerImage(\_:forLeftSegmentState:rightSegmentState:)](setscopebarbuttondividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the divider image to use for a given combination of left and right segment states.
- [scopeBarButtonTitleTextAttributes(for:)](scopebarbuttontitletextattributes%28for_%29.md): Returns the text attributes for the search bar’s button’s title string for a given state.
- [setScopeBarButtonTitleTextAttributes(\_:for:)](setscopebarbuttontitletextattributes%28__for_%29.md): Sets the text attributes for the search bar’ button’s title string for a given state.

# setScopeBarButtonBackgroundImage:forState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the background image for the scope bar button in a given state.

## Declaration

```objectivec
- (void) setScopeBarButtonBackgroundImage:(UIImage *) backgroundImage forState:(UIControlState) state;
```

## Parameters

- `backgroundImage`: The background image for the scope bar button in `state`.
- `state`: A control state.

<a id="Discussion"></a>

## Discussion

For more details, see [scopeBarButtonBackgroundImageForState:](scopebarbuttonbackgroundimage%28for_%29.md).

## See Also

### Customizing the scope bar appearance

- [scopeBarBackgroundImage](scopebarbackgroundimage.md): The background image for the scope bar.
- [scopeBarButtonBackgroundImageForState:](scopebarbuttonbackgroundimage%28for_%29.md): Returns the background image for the scope bar button in a given state.
- [scopeBarButtonDividerImageForLeftSegmentState:rightSegmentState:](scopebarbuttondividerimage%28forleftsegmentstate_rightsegmentstate_%29.md): Returns the divider image to use for a given combination of left and right segment states.
- [setScopeBarButtonDividerImage:forLeftSegmentState:rightSegmentState:](setscopebarbuttondividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the divider image to use for a given combination of left and right segment states.
- [scopeBarButtonTitleTextAttributesForState:](scopebarbuttontitletextattributes%28for_%29.md): Returns the text attributes for the search bar’s button’s title string for a given state.
- [setScopeBarButtonTitleTextAttributes:forState:](setscopebarbuttontitletextattributes%28__for_%29.md): Sets the text attributes for the search bar’ button’s title string for a given state.
