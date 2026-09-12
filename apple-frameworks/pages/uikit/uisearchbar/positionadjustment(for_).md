> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbar/positionadjustment(for:)](https://developer.apple.com/documentation/uikit/uisearchbar/positionadjustment(for:))

# positionAdjustment(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the position adjustment for a given icon.

## Declaration

```swift
func positionAdjustment(for icon: UISearchBar.Icon) -> UIOffset
```

## Parameters

- `icon`: An icon identifier constant.

<a id="return-value"></a>

## Return Value

The position adjustment for the icon identified by `icon`.

<a id="Discussion"></a>

## Discussion

The offset is used to adjust the position of an icon within the search text field.

## See Also

### Customizing the search bar appearance

- [backgroundImage](backgroundimage.md): The background image for the search bar.
- [backgroundImage(for:barMetrics:)](backgroundimage%28for_barmetrics_%29.md): Returns the image used for the background in a given position and with given metrics.
- [setBackgroundImage(\_:for:barMetrics:)](setbackgroundimage%28__for_barmetrics_%29.md): Sets the image to use for the background in a given position and with given metrics.
- [image(for:state:)](image%28for_state_%29.md): Returns the image for a given search bar icon type and control state.
- [setImage(\_:for:state:)](setimage%28__for_state_%29.md): Sets the image for a given search bar icon type and control state.
- [setPositionAdjustment(\_:for:)](setpositionadjustment%28__for_%29.md): Returns the position adjustment for a given icon.
- [inputAccessoryView](inputaccessoryview.md): A custom input accessory view for the keyboard of the search bar.
- [searchFieldBackgroundImage(for:)](searchfieldbackgroundimage%28for_%29.md): Returns the search text field image for a given state.
- [setSearchFieldBackgroundImage(\_:for:)](setsearchfieldbackgroundimage%28__for_%29.md): Sets the search text field image for a given state.
- [searchFieldBackgroundPositionAdjustment](searchfieldbackgroundpositionadjustment.md): The offset of the search text field background in the search bar.
- [searchTextPositionAdjustment](searchtextpositionadjustment.md): The offset of the text within the search text field background.

# positionAdjustmentForSearchBarIcon: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the position adjustment for a given icon.

## Declaration

```objectivec
- (UIOffset) positionAdjustmentForSearchBarIcon:(UISearchBarIcon) icon;
```

## Parameters

- `icon`: An icon identifier constant.

<a id="return-value"></a>

## Return Value

The position adjustment for the icon identified by `icon`.

<a id="Discussion"></a>

## Discussion

The offset is used to adjust the position of an icon within the search text field.

## See Also

### Customizing the search bar appearance

- [backgroundImage](backgroundimage.md): The background image for the search bar.
- [backgroundImageForBarPosition:barMetrics:](backgroundimage%28for_barmetrics_%29.md): Returns the image used for the background in a given position and with given metrics.
- [setBackgroundImage:forBarPosition:barMetrics:](setbackgroundimage%28__for_barmetrics_%29.md): Sets the image to use for the background in a given position and with given metrics.
- [imageForSearchBarIcon:state:](image%28for_state_%29.md): Returns the image for a given search bar icon type and control state.
- [setImage:forSearchBarIcon:state:](setimage%28__for_state_%29.md): Sets the image for a given search bar icon type and control state.
- [setPositionAdjustment:forSearchBarIcon:](setpositionadjustment%28__for_%29.md): Returns the position adjustment for a given icon.
- [inputAccessoryView](inputaccessoryview.md): A custom input accessory view for the keyboard of the search bar.
- [searchFieldBackgroundImageForState:](searchfieldbackgroundimage%28for_%29.md): Returns the search text field image for a given state.
- [setSearchFieldBackgroundImage:forState:](setsearchfieldbackgroundimage%28__for_%29.md): Sets the search text field image for a given state.
- [searchFieldBackgroundPositionAdjustment](searchfieldbackgroundpositionadjustment.md): The offset of the search text field background in the search bar.
- [searchTextPositionAdjustment](searchtextpositionadjustment.md): The offset of the text within the search text field background.
