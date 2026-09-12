> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbar/setsearchfieldbackgroundimage(_:for:)](https://developer.apple.com/documentation/uikit/uisearchbar/setsearchfieldbackgroundimage(_:for:))

# setSearchFieldBackgroundImage(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the search text field image for a given state.

## Declaration

```swift
func setSearchFieldBackgroundImage(_ backgroundImage: UIImage?, for state: UIControl.State)
```

## Parameters

- `backgroundImage`: The search text field image to use for `state`.
- `state`: A control state.

  Valid states are [normal](../uicontrol/state-swift.struct/normal.md) and [disabled](../uicontrol/state-swift.struct/disabled.md).

## See Also

### Customizing the search bar appearance

- [backgroundImage](backgroundimage.md): The background image for the search bar.
- [backgroundImage(for:barMetrics:)](backgroundimage%28for_barmetrics_%29.md): Returns the image used for the background in a given position and with given metrics.
- [setBackgroundImage(\_:for:barMetrics:)](setbackgroundimage%28__for_barmetrics_%29.md): Sets the image to use for the background in a given position and with given metrics.
- [image(for:state:)](image%28for_state_%29.md): Returns the image for a given search bar icon type and control state.
- [setImage(\_:for:state:)](setimage%28__for_state_%29.md): Sets the image for a given search bar icon type and control state.
- [positionAdjustment(for:)](positionadjustment%28for_%29.md): Returns the position adjustment for a given icon.
- [setPositionAdjustment(\_:for:)](setpositionadjustment%28__for_%29.md): Returns the position adjustment for a given icon.
- [inputAccessoryView](inputaccessoryview.md): A custom input accessory view for the keyboard of the search bar.
- [searchFieldBackgroundImage(for:)](searchfieldbackgroundimage%28for_%29.md): Returns the search text field image for a given state.
- [searchFieldBackgroundPositionAdjustment](searchfieldbackgroundpositionadjustment.md): The offset of the search text field background in the search bar.
- [searchTextPositionAdjustment](searchtextpositionadjustment.md): The offset of the text within the search text field background.

# setSearchFieldBackgroundImage:forState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the search text field image for a given state.

## Declaration

```objectivec
- (void) setSearchFieldBackgroundImage:(UIImage *) backgroundImage forState:(UIControlState) state;
```

## Parameters

- `backgroundImage`: The search text field image to use for `state`.
- `state`: A control state.

  Valid states are [UIControlStateNormal](../uicontrol/state-swift.struct/normal.md) and [UIControlStateDisabled](../uicontrol/state-swift.struct/disabled.md).

## See Also

### Customizing the search bar appearance

- [backgroundImage](backgroundimage.md): The background image for the search bar.
- [backgroundImageForBarPosition:barMetrics:](backgroundimage%28for_barmetrics_%29.md): Returns the image used for the background in a given position and with given metrics.
- [setBackgroundImage:forBarPosition:barMetrics:](setbackgroundimage%28__for_barmetrics_%29.md): Sets the image to use for the background in a given position and with given metrics.
- [imageForSearchBarIcon:state:](image%28for_state_%29.md): Returns the image for a given search bar icon type and control state.
- [setImage:forSearchBarIcon:state:](setimage%28__for_state_%29.md): Sets the image for a given search bar icon type and control state.
- [positionAdjustmentForSearchBarIcon:](positionadjustment%28for_%29.md): Returns the position adjustment for a given icon.
- [setPositionAdjustment:forSearchBarIcon:](setpositionadjustment%28__for_%29.md): Returns the position adjustment for a given icon.
- [inputAccessoryView](inputaccessoryview.md): A custom input accessory view for the keyboard of the search bar.
- [searchFieldBackgroundImageForState:](searchfieldbackgroundimage%28for_%29.md): Returns the search text field image for a given state.
- [searchFieldBackgroundPositionAdjustment](searchfieldbackgroundpositionadjustment.md): The offset of the search text field background in the search bar.
- [searchTextPositionAdjustment](searchtextpositionadjustment.md): The offset of the text within the search text field background.
