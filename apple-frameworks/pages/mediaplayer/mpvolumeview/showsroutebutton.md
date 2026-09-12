> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpvolumeview/showsroutebutton](https://developer.apple.com/documentation/mediaplayer/mpvolumeview/showsroutebutton)

# showsRouteButton (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ (deprecated in 13.0) · iPadOS 4.2+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

A Boolean value that indicates whether the route button is visible in the volume view.

> Use AVRoutePickerView instead.

## Declaration

```swift
var showsRouteButton: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The route button is visible by default when there’s more than one audio output route available. To hide the route button, set this property’s value to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Deprecated

- [volumeWarningSliderImage](volumewarningsliderimage.md): Deprecated. The image used to designate the European Union volume limit.
- [areWirelessRoutesAvailable](arewirelessroutesavailable.md): Deprecated. A Boolean value indicating wireless routes are available.
- [isWirelessRouteActive](iswirelessrouteactive.md): Deprecated. A Boolean value that indicates whether the wireless route is active.
- [routeButtonImage(for:)](routebuttonimage%28for_%29.md): Deprecated. Returns the button image associated with the specified control state.
- [routeButtonRect(forBounds:)](routebuttonrect%28forbounds_%29.md): Deprecated. Returns the drawing rectangle for the route button.
- [setRouteButtonImage(\_:for:)](setroutebuttonimage%28__for_%29.md): Deprecated. Assigns a button image to the specified control states.

# showsRouteButton (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ (deprecated in 13.0) · iPadOS 4.2+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

A Boolean value that indicates whether the route button is visible in the volume view.

> Use AVRoutePickerView instead.

## Declaration

```objectivec
@property (nonatomic) BOOL showsRouteButton;
```

<a id="Discussion"></a>

## Discussion

The route button is visible by default when there’s more than one audio output route available. To hide the route button, set this property’s value to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Deprecated

- [volumeWarningSliderImage](volumewarningsliderimage.md): Deprecated. The image used to designate the European Union volume limit.
- [wirelessRoutesAvailable](arewirelessroutesavailable.md): Deprecated. A Boolean value indicating wireless routes are available.
- [wirelessRouteActive](iswirelessrouteactive.md): Deprecated. A Boolean value that indicates whether the wireless route is active.
- [routeButtonImageForState:](routebuttonimage%28for_%29.md): Deprecated. Returns the button image associated with the specified control state.
- [routeButtonRectForBounds:](routebuttonrect%28forbounds_%29.md): Deprecated. Returns the drawing rectangle for the route button.
- [setRouteButtonImage:forState:](setroutebuttonimage%28__for_%29.md): Deprecated. Assigns a button image to the specified control states.
