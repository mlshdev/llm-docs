> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbar/scopebarbuttontitletextattributes(for:)](https://developer.apple.com/documentation/uikit/uisearchbar/scopebarbuttontitletextattributes(for:))

# scopeBarButtonTitleTextAttributes(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the text attributes for the search bar’s button’s title string for a given state.

## Declaration

```swift
func scopeBarButtonTitleTextAttributes(for state: UIControl.State) -> [NSAttributedString.Key : Any]?
```

## Parameters

- `state`: A control state.

<a id="return-value"></a>

## Return Value

The text attributes for the search bar’ button’s title string for `state`.

The attributes may specify the font, text color, text shadow color, and text shadow offset, using the keys found in NSString UIKit Additions Reference.

## See Also

### Customizing the scope bar appearance

- [scopeBarBackgroundImage](scopebarbackgroundimage.md): The background image for the scope bar.
- [scopeBarButtonBackgroundImage(for:)](scopebarbuttonbackgroundimage%28for_%29.md): Returns the background image for the scope bar button in a given state.
- [setScopeBarButtonBackgroundImage(\_:for:)](setscopebarbuttonbackgroundimage%28__for_%29.md): Sets the background image for the scope bar button in a given state.
- [scopeBarButtonDividerImage(forLeftSegmentState:rightSegmentState:)](scopebarbuttondividerimage%28forleftsegmentstate_rightsegmentstate_%29.md): Returns the divider image to use for a given combination of left and right segment states.
- [setScopeBarButtonDividerImage(\_:forLeftSegmentState:rightSegmentState:)](setscopebarbuttondividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the divider image to use for a given combination of left and right segment states.
- [setScopeBarButtonTitleTextAttributes(\_:for:)](setscopebarbuttontitletextattributes%28__for_%29.md): Sets the text attributes for the search bar’ button’s title string for a given state.

# scopeBarButtonTitleTextAttributesForState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the text attributes for the search bar’s button’s title string for a given state.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) scopeBarButtonTitleTextAttributesForState:(UIControlState) state;
```

## Parameters

- `state`: A control state.

<a id="return-value"></a>

## Return Value

The text attributes for the search bar’ button’s title string for `state`.

The attributes may specify the font, text color, text shadow color, and text shadow offset, using the keys found in NSString UIKit Additions Reference.

## See Also

### Customizing the scope bar appearance

- [scopeBarBackgroundImage](scopebarbackgroundimage.md): The background image for the scope bar.
- [scopeBarButtonBackgroundImageForState:](scopebarbuttonbackgroundimage%28for_%29.md): Returns the background image for the scope bar button in a given state.
- [setScopeBarButtonBackgroundImage:forState:](setscopebarbuttonbackgroundimage%28__for_%29.md): Sets the background image for the scope bar button in a given state.
- [scopeBarButtonDividerImageForLeftSegmentState:rightSegmentState:](scopebarbuttondividerimage%28forleftsegmentstate_rightsegmentstate_%29.md): Returns the divider image to use for a given combination of left and right segment states.
- [setScopeBarButtonDividerImage:forLeftSegmentState:rightSegmentState:](setscopebarbuttondividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the divider image to use for a given combination of left and right segment states.
- [setScopeBarButtonTitleTextAttributes:forState:](setscopebarbuttontitletextattributes%28__for_%29.md): Sets the text attributes for the search bar’ button’s title string for a given state.
