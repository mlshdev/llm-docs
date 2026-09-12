> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpvolumeview/setroutebuttonimage(_:for:)](https://developer.apple.com/documentation/mediaplayer/mpvolumeview/setroutebuttonimage(_:for:))

# setRouteButtonImage(\_:for:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 13.0) · iPadOS 6.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Assigns a button image to the specified control states.

> Use AVRoutePickerView.routePickerButtonStyle instead.

## Declaration

```swift
func setRouteButtonImage(_ image: UIImage?, for state: UIControl.State)
```

## Parameters

- `image`: The image to associate with the specified states.
- `state`: The control state with which to associate the image.

<a id="Discussion"></a>

## Discussion

Use this to customize the appearance of the route button for various states such as enabled, disabled, and highlighted.

## See Also

### Deprecated

- [volumeWarningSliderImage](volumewarningsliderimage.md): Deprecated. The image used to designate the European Union volume limit.
- [showsRouteButton](showsroutebutton.md): Deprecated. A Boolean value that indicates whether the route button is visible in the volume view.
- [areWirelessRoutesAvailable](arewirelessroutesavailable.md): Deprecated. A Boolean value indicating wireless routes are available.
- [isWirelessRouteActive](iswirelessrouteactive.md): Deprecated. A Boolean value that indicates whether the wireless route is active.
- [routeButtonImage(for:)](routebuttonimage%28for_%29.md): Deprecated. Returns the button image associated with the specified control state.
- [routeButtonRect(forBounds:)](routebuttonrect%28forbounds_%29.md): Deprecated. Returns the drawing rectangle for the route button.

# setRouteButtonImage:forState: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 13.0) · iPadOS 6.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Assigns a button image to the specified control states.

> Use AVRoutePickerView.routePickerButtonStyle instead.

## Declaration

```objectivec
- (void) setRouteButtonImage:(UIImage *) image forState:(UIControlState) state;
```

## Parameters

- `image`: The image to associate with the specified states.
- `state`: The control state with which to associate the image.

<a id="Discussion"></a>

## Discussion

Use this to customize the appearance of the route button for various states such as enabled, disabled, and highlighted.

## See Also

### Deprecated

- [volumeWarningSliderImage](volumewarningsliderimage.md): Deprecated. The image used to designate the European Union volume limit.
- [showsRouteButton](showsroutebutton.md): Deprecated. A Boolean value that indicates whether the route button is visible in the volume view.
- [wirelessRoutesAvailable](arewirelessroutesavailable.md): Deprecated. A Boolean value indicating wireless routes are available.
- [wirelessRouteActive](iswirelessrouteactive.md): Deprecated. A Boolean value that indicates whether the wireless route is active.
- [routeButtonImageForState:](routebuttonimage%28for_%29.md): Deprecated. Returns the button image associated with the specified control state.
- [routeButtonRectForBounds:](routebuttonrect%28forbounds_%29.md): Deprecated. Returns the drawing rectangle for the route button.
