> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbar/backgroundimage](https://developer.apple.com/documentation/uikit/uisearchbar/backgroundimage)

# backgroundImage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The background image for the search bar.

## Declaration

```swift
var backgroundImage: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

Images that are 1 point wide or stretchable images are stretched, otherwise the image is tiled.

## See Also

### Customizing the search bar appearance

- [backgroundImage(for:barMetrics:)](backgroundimage%28for_barmetrics_%29.md): Returns the image used for the background in a given position and with given metrics.
- [setBackgroundImage(\_:for:barMetrics:)](setbackgroundimage%28__for_barmetrics_%29.md): Sets the image to use for the background in a given position and with given metrics.
- [image(for:state:)](image%28for_state_%29.md): Returns the image for a given search bar icon type and control state.
- [setImage(\_:for:state:)](setimage%28__for_state_%29.md): Sets the image for a given search bar icon type and control state.
- [positionAdjustment(for:)](positionadjustment%28for_%29.md): Returns the position adjustment for a given icon.
- [setPositionAdjustment(\_:for:)](setpositionadjustment%28__for_%29.md): Returns the position adjustment for a given icon.
- [inputAccessoryView](inputaccessoryview.md): A custom input accessory view for the keyboard of the search bar.
- [searchFieldBackgroundImage(for:)](searchfieldbackgroundimage%28for_%29.md): Returns the search text field image for a given state.
- [setSearchFieldBackgroundImage(\_:for:)](setsearchfieldbackgroundimage%28__for_%29.md): Sets the search text field image for a given state.
- [searchFieldBackgroundPositionAdjustment](searchfieldbackgroundpositionadjustment.md): The offset of the search text field background in the search bar.
- [searchTextPositionAdjustment](searchtextpositionadjustment.md): The offset of the text within the search text field background.

# backgroundImage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The background image for the search bar.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * backgroundImage;
```

<a id="Discussion"></a>

## Discussion

Images that are 1 point wide or stretchable images are stretched, otherwise the image is tiled.

## See Also

### Customizing the search bar appearance

- [backgroundImageForBarPosition:barMetrics:](backgroundimage%28for_barmetrics_%29.md): Returns the image used for the background in a given position and with given metrics.
- [setBackgroundImage:forBarPosition:barMetrics:](setbackgroundimage%28__for_barmetrics_%29.md): Sets the image to use for the background in a given position and with given metrics.
- [imageForSearchBarIcon:state:](image%28for_state_%29.md): Returns the image for a given search bar icon type and control state.
- [setImage:forSearchBarIcon:state:](setimage%28__for_state_%29.md): Sets the image for a given search bar icon type and control state.
- [positionAdjustmentForSearchBarIcon:](positionadjustment%28for_%29.md): Returns the position adjustment for a given icon.
- [setPositionAdjustment:forSearchBarIcon:](setpositionadjustment%28__for_%29.md): Returns the position adjustment for a given icon.
- [inputAccessoryView](inputaccessoryview.md): A custom input accessory view for the keyboard of the search bar.
- [searchFieldBackgroundImageForState:](searchfieldbackgroundimage%28for_%29.md): Returns the search text field image for a given state.
- [setSearchFieldBackgroundImage:forState:](setsearchfieldbackgroundimage%28__for_%29.md): Sets the search text field image for a given state.
- [searchFieldBackgroundPositionAdjustment](searchfieldbackgroundpositionadjustment.md): The offset of the search text field background in the search bar.
- [searchTextPositionAdjustment](searchtextpositionadjustment.md): The offset of the text within the search text field background.
