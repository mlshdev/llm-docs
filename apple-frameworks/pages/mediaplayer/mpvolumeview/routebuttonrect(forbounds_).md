> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpvolumeview/routebuttonrect(forbounds:)](https://developer.apple.com/documentation/mediaplayer/mpvolumeview/routebuttonrect(forbounds:))

# routeButtonRect(forBounds:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 13.0) · iPadOS 6.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Returns the drawing rectangle for the route button.

> See AVRoutePickerView for possible replacements.

## Declaration

```swift
func routeButtonRect(forBounds bounds: CGRect) -> CGRect
```

## Parameters

- `bounds`: The bounding rectangle of the receiver.

<a id="return-value"></a>

## Return Value

The computed drawing rectangle for the route button.

<a id="Discussion"></a>

## Discussion

Use this method to retrieve the bounding rectangle for the route button.

## See Also

### Deprecated

- [volumeWarningSliderImage](volumewarningsliderimage.md): Deprecated. The image used to designate the European Union volume limit.
- [showsRouteButton](showsroutebutton.md): Deprecated. A Boolean value that indicates whether the route button is visible in the volume view.
- [areWirelessRoutesAvailable](arewirelessroutesavailable.md): Deprecated. A Boolean value indicating wireless routes are available.
- [isWirelessRouteActive](iswirelessrouteactive.md): Deprecated. A Boolean value that indicates whether the wireless route is active.
- [routeButtonImage(for:)](routebuttonimage%28for_%29.md): Deprecated. Returns the button image associated with the specified control state.
- [setRouteButtonImage(\_:for:)](setroutebuttonimage%28__for_%29.md): Deprecated. Assigns a button image to the specified control states.

# routeButtonRectForBounds: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 13.0) · iPadOS 6.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Returns the drawing rectangle for the route button.

> See AVRoutePickerView for possible replacements.

## Declaration

```objectivec
- (CGRect) routeButtonRectForBounds:(CGRect) bounds;
```

## Parameters

- `bounds`: The bounding rectangle of the receiver.

<a id="return-value"></a>

## Return Value

The computed drawing rectangle for the route button.

<a id="Discussion"></a>

## Discussion

Use this method to retrieve the bounding rectangle for the route button.

## See Also

### Deprecated

- [volumeWarningSliderImage](volumewarningsliderimage.md): Deprecated. The image used to designate the European Union volume limit.
- [showsRouteButton](showsroutebutton.md): Deprecated. A Boolean value that indicates whether the route button is visible in the volume view.
- [wirelessRoutesAvailable](arewirelessroutesavailable.md): Deprecated. A Boolean value indicating wireless routes are available.
- [wirelessRouteActive](iswirelessrouteactive.md): Deprecated. A Boolean value that indicates whether the wireless route is active.
- [routeButtonImageForState:](routebuttonimage%28for_%29.md): Deprecated. Returns the button image associated with the specified control state.
- [setRouteButtonImage:forState:](setroutebuttonimage%28__for_%29.md): Deprecated. Assigns a button image to the specified control states.
