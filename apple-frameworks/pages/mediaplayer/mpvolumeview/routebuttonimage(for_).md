> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpvolumeview/routebuttonimage(for:)](https://developer.apple.com/documentation/mediaplayer/mpvolumeview/routebuttonimage(for:))

# routeButtonImage(for:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 13.0) · iPadOS 6.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Returns the button image associated with the specified control state.

> See AVRoutePickerView for possible replacements.

## Declaration

```swift
func routeButtonImage(for state: UIControl.State) -> UIImage?
```

## Parameters

- `state`: The control state whose thumb image you want. You should specify only one control state value for this parameter.

<a id="return-value"></a>

## Return Value

The button image associated with the specified state, or [nil](../../objectivec/nil-227m0.md) if an appropriate image could not be retrieved. This method might return [nil](../../objectivec/nil-227m0.md) if you specify multiple control states in the state parameter.

<a id="Discussion"></a>

## Discussion

Use this method to retrieve the corresponding button image for a specific state.

## See Also

### Deprecated

- [volumeWarningSliderImage](volumewarningsliderimage.md): Deprecated. The image used to designate the European Union volume limit.
- [showsRouteButton](showsroutebutton.md): Deprecated. A Boolean value that indicates whether the route button is visible in the volume view.
- [areWirelessRoutesAvailable](arewirelessroutesavailable.md): Deprecated. A Boolean value indicating wireless routes are available.
- [isWirelessRouteActive](iswirelessrouteactive.md): Deprecated. A Boolean value that indicates whether the wireless route is active.
- [routeButtonRect(forBounds:)](routebuttonrect%28forbounds_%29.md): Deprecated. Returns the drawing rectangle for the route button.
- [setRouteButtonImage(\_:for:)](setroutebuttonimage%28__for_%29.md): Deprecated. Assigns a button image to the specified control states.

# routeButtonImageForState: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 13.0) · iPadOS 6.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Returns the button image associated with the specified control state.

> See AVRoutePickerView for possible replacements.

## Declaration

```objectivec
- (UIImage *) routeButtonImageForState:(UIControlState) state;
```

## Parameters

- `state`: The control state whose thumb image you want. You should specify only one control state value for this parameter.

<a id="return-value"></a>

## Return Value

The button image associated with the specified state, or [nil](../../objectivec/nil-227m0.md) if an appropriate image could not be retrieved. This method might return [nil](../../objectivec/nil-227m0.md) if you specify multiple control states in the state parameter.

<a id="Discussion"></a>

## Discussion

Use this method to retrieve the corresponding button image for a specific state.

## See Also

### Deprecated

- [volumeWarningSliderImage](volumewarningsliderimage.md): Deprecated. The image used to designate the European Union volume limit.
- [showsRouteButton](showsroutebutton.md): Deprecated. A Boolean value that indicates whether the route button is visible in the volume view.
- [wirelessRoutesAvailable](arewirelessroutesavailable.md): Deprecated. A Boolean value indicating wireless routes are available.
- [wirelessRouteActive](iswirelessrouteactive.md): Deprecated. A Boolean value that indicates whether the wireless route is active.
- [routeButtonRectForBounds:](routebuttonrect%28forbounds_%29.md): Deprecated. Returns the drawing rectangle for the route button.
- [setRouteButtonImage:forState:](setroutebuttonimage%28__for_%29.md): Deprecated. Assigns a button image to the specified control states.
