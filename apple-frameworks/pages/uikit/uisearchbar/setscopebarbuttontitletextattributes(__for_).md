> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbar/setscopebarbuttontitletextattributes(_:for:)](https://developer.apple.com/documentation/uikit/uisearchbar/setscopebarbuttontitletextattributes(_:for:))

# setScopeBarButtonTitleTextAttributes(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the text attributes for the search bar’ button’s title string for a given state.

## Declaration

```swift
func setScopeBarButtonTitleTextAttributes(_ attributes: [NSAttributedString.Key : Any]?, for state: UIControl.State)
```

## Parameters

- `attributes`: A dictionary containing key-value pairs specifying the text attributes to use for `state`.

  You may specify the font, text color, text shadow color, and text shadow offset, using the keys found in NSString UIKit Additions Reference.
- `state`: A control state.

## See Also

### Customizing the scope bar appearance

- [scopeBarBackgroundImage](scopebarbackgroundimage.md): The background image for the scope bar.
- [scopeBarButtonBackgroundImage(for:)](scopebarbuttonbackgroundimage%28for_%29.md): Returns the background image for the scope bar button in a given state.
- [setScopeBarButtonBackgroundImage(\_:for:)](setscopebarbuttonbackgroundimage%28__for_%29.md): Sets the background image for the scope bar button in a given state.
- [scopeBarButtonDividerImage(forLeftSegmentState:rightSegmentState:)](scopebarbuttondividerimage%28forleftsegmentstate_rightsegmentstate_%29.md): Returns the divider image to use for a given combination of left and right segment states.
- [setScopeBarButtonDividerImage(\_:forLeftSegmentState:rightSegmentState:)](setscopebarbuttondividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the divider image to use for a given combination of left and right segment states.
- [scopeBarButtonTitleTextAttributes(for:)](scopebarbuttontitletextattributes%28for_%29.md): Returns the text attributes for the search bar’s button’s title string for a given state.

# setScopeBarButtonTitleTextAttributes:forState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the text attributes for the search bar’ button’s title string for a given state.

## Declaration

```objectivec
- (void) setScopeBarButtonTitleTextAttributes:(NSDictionary<NSString *,id> *) attributes forState:(UIControlState) state;
```

## Parameters

- `attributes`: A dictionary containing key-value pairs specifying the text attributes to use for `state`.

  You may specify the font, text color, text shadow color, and text shadow offset, using the keys found in NSString UIKit Additions Reference.
- `state`: A control state.

## See Also

### Customizing the scope bar appearance

- [scopeBarBackgroundImage](scopebarbackgroundimage.md): The background image for the scope bar.
- [scopeBarButtonBackgroundImageForState:](scopebarbuttonbackgroundimage%28for_%29.md): Returns the background image for the scope bar button in a given state.
- [setScopeBarButtonBackgroundImage:forState:](setscopebarbuttonbackgroundimage%28__for_%29.md): Sets the background image for the scope bar button in a given state.
- [scopeBarButtonDividerImageForLeftSegmentState:rightSegmentState:](scopebarbuttondividerimage%28forleftsegmentstate_rightsegmentstate_%29.md): Returns the divider image to use for a given combination of left and right segment states.
- [setScopeBarButtonDividerImage:forLeftSegmentState:rightSegmentState:](setscopebarbuttondividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the divider image to use for a given combination of left and right segment states.
- [scopeBarButtonTitleTextAttributesForState:](scopebarbuttontitletextattributes%28for_%29.md): Returns the text attributes for the search bar’s button’s title string for a given state.
