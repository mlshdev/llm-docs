> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbar/setbackgroundimage(_:for:barmetrics:)](https://developer.apple.com/documentation/uikit/uisearchbar/setbackgroundimage(_:for:barmetrics:))

# setBackgroundImage(\_:for:barMetrics:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the image to use for the background in a given position and with given metrics.

## Declaration

```swift
func setBackgroundImage(_ backgroundImage: UIImage?, for barPosition: UIBarPosition, barMetrics: UIBarMetrics)
```

## Parameters

- `backgroundImage`: The image to use for the search bar background in the position specified by `barPosition` and with the metrics specified by `barMetrics`.
- `barPosition`: A bar position constant.
- `barMetrics`: A bar metrics constant.

## See Also

### Customizing the search bar appearance

- [backgroundImage](backgroundimage.md): The background image for the search bar.
- [backgroundImage(for:barMetrics:)](backgroundimage%28for_barmetrics_%29.md): Returns the image used for the background in a given position and with given metrics.
- [image(for:state:)](image%28for_state_%29.md): Returns the image for a given search bar icon type and control state.
- [setImage(\_:for:state:)](setimage%28__for_state_%29.md): Sets the image for a given search bar icon type and control state.
- [positionAdjustment(for:)](positionadjustment%28for_%29.md): Returns the position adjustment for a given icon.
- [setPositionAdjustment(\_:for:)](setpositionadjustment%28__for_%29.md): Returns the position adjustment for a given icon.
- [inputAccessoryView](inputaccessoryview.md): A custom input accessory view for the keyboard of the search bar.
- [searchFieldBackgroundImage(for:)](searchfieldbackgroundimage%28for_%29.md): Returns the search text field image for a given state.
- [setSearchFieldBackgroundImage(\_:for:)](setsearchfieldbackgroundimage%28__for_%29.md): Sets the search text field image for a given state.
- [searchFieldBackgroundPositionAdjustment](searchfieldbackgroundpositionadjustment.md): The offset of the search text field background in the search bar.
- [searchTextPositionAdjustment](searchtextpositionadjustment.md): The offset of the text within the search text field background.

# setBackgroundImage:forBarPosition:barMetrics: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the image to use for the background in a given position and with given metrics.

## Declaration

```objectivec
- (void) setBackgroundImage:(UIImage *) backgroundImage forBarPosition:(UIBarPosition) barPosition barMetrics:(UIBarMetrics) barMetrics;
```

## Parameters

- `backgroundImage`: The image to use for the search bar background in the position specified by `barPosition` and with the metrics specified by `barMetrics`.
- `barPosition`: A bar position constant.
- `barMetrics`: A bar metrics constant.

## See Also

### Customizing the search bar appearance

- [backgroundImage](backgroundimage.md): The background image for the search bar.
- [backgroundImageForBarPosition:barMetrics:](backgroundimage%28for_barmetrics_%29.md): Returns the image used for the background in a given position and with given metrics.
- [imageForSearchBarIcon:state:](image%28for_state_%29.md): Returns the image for a given search bar icon type and control state.
- [setImage:forSearchBarIcon:state:](setimage%28__for_state_%29.md): Sets the image for a given search bar icon type and control state.
- [positionAdjustmentForSearchBarIcon:](positionadjustment%28for_%29.md): Returns the position adjustment for a given icon.
- [setPositionAdjustment:forSearchBarIcon:](setpositionadjustment%28__for_%29.md): Returns the position adjustment for a given icon.
- [inputAccessoryView](inputaccessoryview.md): A custom input accessory view for the keyboard of the search bar.
- [searchFieldBackgroundImageForState:](searchfieldbackgroundimage%28for_%29.md): Returns the search text field image for a given state.
- [setSearchFieldBackgroundImage:forState:](setsearchfieldbackgroundimage%28__for_%29.md): Sets the search text field image for a given state.
- [searchFieldBackgroundPositionAdjustment](searchfieldbackgroundpositionadjustment.md): The offset of the search text field background in the search bar.
- [searchTextPositionAdjustment](searchtextpositionadjustment.md): The offset of the text within the search text field background.
