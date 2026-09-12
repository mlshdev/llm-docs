> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpvolumeview/arewirelessroutesavailable](https://developer.apple.com/documentation/mediaplayer/mpvolumeview/arewirelessroutesavailable)

# areWirelessRoutesAvailable (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

A Boolean value indicating wireless routes are available.

> Use AVRouteDetector.multipleRoutesDetected instead.

## Declaration

```swift
var areWirelessRoutesAvailable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), a wireless route is available for user selection. Some types of wireless routes are only discovered when the view is present in the window hierarchy.

## See Also

### Deprecated

- [volumeWarningSliderImage](volumewarningsliderimage.md): Deprecated. The image used to designate the European Union volume limit.
- [showsRouteButton](showsroutebutton.md): Deprecated. A Boolean value that indicates whether the route button is visible in the volume view.
- [isWirelessRouteActive](iswirelessrouteactive.md): Deprecated. A Boolean value that indicates whether the wireless route is active.
- [routeButtonImage(for:)](routebuttonimage%28for_%29.md): Deprecated. Returns the button image associated with the specified control state.
- [routeButtonRect(forBounds:)](routebuttonrect%28forbounds_%29.md): Deprecated. Returns the drawing rectangle for the route button.
- [setRouteButtonImage(\_:for:)](setroutebuttonimage%28__for_%29.md): Deprecated. Assigns a button image to the specified control states.

# wirelessRoutesAvailable (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

A Boolean value indicating wireless routes are available.

> Use AVRouteDetector.multipleRoutesDetected instead.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=areWirelessRoutesAvailable) BOOL wirelessRoutesAvailable;
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), a wireless route is available for user selection. Some types of wireless routes are only discovered when the view is present in the window hierarchy.

## See Also

### Deprecated

- [volumeWarningSliderImage](volumewarningsliderimage.md): Deprecated. The image used to designate the European Union volume limit.
- [showsRouteButton](showsroutebutton.md): Deprecated. A Boolean value that indicates whether the route button is visible in the volume view.
- [wirelessRouteActive](iswirelessrouteactive.md): Deprecated. A Boolean value that indicates whether the wireless route is active.
- [routeButtonImageForState:](routebuttonimage%28for_%29.md): Deprecated. Returns the button image associated with the specified control state.
- [routeButtonRectForBounds:](routebuttonrect%28forbounds_%29.md): Deprecated. Returns the drawing rectangle for the route button.
- [setRouteButtonImage:forState:](setroutebuttonimage%28__for_%29.md): Deprecated. Assigns a button image to the specified control states.
