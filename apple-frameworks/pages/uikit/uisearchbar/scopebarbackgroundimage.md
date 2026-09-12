> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbar/scopebarbackgroundimage](https://developer.apple.com/documentation/uikit/uisearchbar/scopebarbackgroundimage)

# scopeBarBackgroundImage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The background image for the scope bar.

## Declaration

```swift
var scopeBarBackgroundImage: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

Images that are 1 point wide or stretchable images are stretched, otherwise the image is tiled.

## See Also

### Related Documentation

- [backgroundImage](backgroundimage.md): The background image for the search bar.

### Customizing the scope bar appearance

- [scopeBarButtonBackgroundImage(for:)](scopebarbuttonbackgroundimage%28for_%29.md): Returns the background image for the scope bar button in a given state.
- [setScopeBarButtonBackgroundImage(\_:for:)](setscopebarbuttonbackgroundimage%28__for_%29.md): Sets the background image for the scope bar button in a given state.
- [scopeBarButtonDividerImage(forLeftSegmentState:rightSegmentState:)](scopebarbuttondividerimage%28forleftsegmentstate_rightsegmentstate_%29.md): Returns the divider image to use for a given combination of left and right segment states.
- [setScopeBarButtonDividerImage(\_:forLeftSegmentState:rightSegmentState:)](setscopebarbuttondividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the divider image to use for a given combination of left and right segment states.
- [scopeBarButtonTitleTextAttributes(for:)](scopebarbuttontitletextattributes%28for_%29.md): Returns the text attributes for the search bar’s button’s title string for a given state.
- [setScopeBarButtonTitleTextAttributes(\_:for:)](setscopebarbuttontitletextattributes%28__for_%29.md): Sets the text attributes for the search bar’ button’s title string for a given state.

# scopeBarBackgroundImage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The background image for the scope bar.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * scopeBarBackgroundImage;
```

<a id="Discussion"></a>

## Discussion

Images that are 1 point wide or stretchable images are stretched, otherwise the image is tiled.

## See Also

### Related Documentation

- [backgroundImage](backgroundimage.md): The background image for the search bar.

### Customizing the scope bar appearance

- [scopeBarButtonBackgroundImageForState:](scopebarbuttonbackgroundimage%28for_%29.md): Returns the background image for the scope bar button in a given state.
- [setScopeBarButtonBackgroundImage:forState:](setscopebarbuttonbackgroundimage%28__for_%29.md): Sets the background image for the scope bar button in a given state.
- [scopeBarButtonDividerImageForLeftSegmentState:rightSegmentState:](scopebarbuttondividerimage%28forleftsegmentstate_rightsegmentstate_%29.md): Returns the divider image to use for a given combination of left and right segment states.
- [setScopeBarButtonDividerImage:forLeftSegmentState:rightSegmentState:](setscopebarbuttondividerimage%28__forleftsegmentstate_rightsegmentstate_%29.md): Sets the divider image to use for a given combination of left and right segment states.
- [scopeBarButtonTitleTextAttributesForState:](scopebarbuttontitletextattributes%28for_%29.md): Returns the text attributes for the search bar’s button’s title string for a given state.
- [setScopeBarButtonTitleTextAttributes:forState:](setscopebarbuttontitletextattributes%28__for_%29.md): Sets the text attributes for the search bar’ button’s title string for a given state.
