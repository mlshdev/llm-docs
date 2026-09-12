> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpvolumeview/volumewarningsliderimage](https://developer.apple.com/documentation/mediaplayer/mpvolumeview/volumewarningsliderimage)

# volumeWarningSliderImage (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 17.0) · iPadOS 7.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · tvOS  (deprecated in 17.0)

The image used to designate the European Union volume limit.

> This is no longer supported

## Declaration

```swift
var volumeWarningSliderImage: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

The system displays the image contained by this property on top of the [maximumVolumeSliderImage(for:)](maximumvolumesliderimage%28for_%29.md). The image must be visually distinct from the `maximumVolumeSliderImage` and use a color similar to the default in order to convey a sense of warning to the user.

For testing purposes, set the EU Volume Limit setting in the Developer menu of the Settings app to always enable the volume limit.

## See Also

### Deprecated

- [showsRouteButton](showsroutebutton.md): Deprecated. A Boolean value that indicates whether the route button is visible in the volume view.
- [areWirelessRoutesAvailable](arewirelessroutesavailable.md): Deprecated. A Boolean value indicating wireless routes are available.
- [isWirelessRouteActive](iswirelessrouteactive.md): Deprecated. A Boolean value that indicates whether the wireless route is active.
- [routeButtonImage(for:)](routebuttonimage%28for_%29.md): Deprecated. Returns the button image associated with the specified control state.
- [routeButtonRect(forBounds:)](routebuttonrect%28forbounds_%29.md): Deprecated. Returns the drawing rectangle for the route button.
- [setRouteButtonImage(\_:for:)](setroutebuttonimage%28__for_%29.md): Deprecated. Assigns a button image to the specified control states.

# volumeWarningSliderImage (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 17.0) · iPadOS 7.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · tvOS  (deprecated in 17.0)

The image used to designate the European Union volume limit.

> This is no longer supported

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * volumeWarningSliderImage;
```

<a id="Discussion"></a>

## Discussion

The system displays the image contained by this property on top of the [maximumVolumeSliderImageForState:](maximumvolumesliderimage%28for_%29.md). The image must be visually distinct from the `maximumVolumeSliderImage` and use a color similar to the default in order to convey a sense of warning to the user.

For testing purposes, set the EU Volume Limit setting in the Developer menu of the Settings app to always enable the volume limit.

## See Also

### Deprecated

- [showsRouteButton](showsroutebutton.md): Deprecated. A Boolean value that indicates whether the route button is visible in the volume view.
- [wirelessRoutesAvailable](arewirelessroutesavailable.md): Deprecated. A Boolean value indicating wireless routes are available.
- [wirelessRouteActive](iswirelessrouteactive.md): Deprecated. A Boolean value that indicates whether the wireless route is active.
- [routeButtonImageForState:](routebuttonimage%28for_%29.md): Deprecated. Returns the button image associated with the specified control state.
- [routeButtonRectForBounds:](routebuttonrect%28forbounds_%29.md): Deprecated. Returns the drawing rectangle for the route button.
- [setRouteButtonImage:forState:](setroutebuttonimage%28__for_%29.md): Deprecated. Assigns a button image to the specified control states.
