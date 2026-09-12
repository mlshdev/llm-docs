> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpvolumeview](https://developer.apple.com/documentation/mediaplayer/mpvolumeview)

# MPVolumeView (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A slider control for setting the system audio output volume, and a button for choosing the audio output route.

## Declaration

```swift
class MPVolumeView
```

<a id="overview"></a>

## Overview

Use a volume view to present the user with a slider control for setting the system audio output volume, and a button for choosing the audio output route when the option is available. When first displayed, the slider’s position reflects the current system audio output volume. As the user drags the slider, the changes update the volume view. If the user presses the device volume buttons while sound is playing, the slider moves to reflect the new volume.

If there’s an Apple TV or other AirPlay-enabled device in range, the route button allows the user to choose it. If there’s only one audio output route available, the view doesn’t display the route button. The view also doesn’t display a route button when the app runs in visionOS.

> **Important**

>  You can’t change the volume or choose a route with this class while testing in the Simulator. These abilities only work on a device.

Use this class by embedding an instance of it in your view hierarchy. The following code snippet assumes you’ve placed an instance of the [UIView](../uikit/uiview.md) class on a view using Interface Builder, sizing and positioning it as desired to contain the volume view. Point to the [UIView](../uikit/uiview.md) instance with an outlet variable—named, in the case of this example, `mpVolumeViewParentView`. You’d typically place code like that shown in the following code in your `viewDidLoad` method.

Listing 1. Adding a volume view to your view hierarchy

```swift
parentView.backgroundColor = .clear
let volumeView = MPVolumeView(frame: parentView.bounds)
parentView.addSubview(volumeView)
```

When an audio output route that doesn’t support volume control, such as a car head unit, is active, the system replaces the volume slider with the route name.

To instead display a volume slider as an alert, use the functions described in [Global volume setting methods](global-volume-setting-methods.md).

> **Note**

>  You can’t subclass the MPVolumeView class.

<a id="Customizing-the-volume-sliders-appearance"></a>

### Customizing the volume slider’s appearance

The volume slider is a [UISlider](../uikit/uislider.md) object. Sliders are always displayed as horizontal bars and an indicator, or **thumb**, notes the current value of the slider, which the user can move to change the setting.

Slider controls draw the volume slider track using two distinct images, which are customizable. The system draws the region between the thumb and the end of the track associated with the slider’s minimum value using the **minimum volume slider image**. The system region between the thumb and the end of the track associated with the slider’s maximum value using the **maximum volume slider image**. You can assign different images to customize the appearance of the slider for its various states, such as enabled, disabled, and highlighted.

You can also customize the volume thumb image for the slider.

> **Note**

>  The volume slider control provides a set of default images for both the track and thumb. The system uses the default images if you don’t specify any custom images.

## Topics

### Managing visibility of controls

- [showsVolumeSlider](mpvolumeview/showsvolumeslider.md): A Boolean value that indicates the volume slider is visible in the volume view.

### Customizing the volume slider

- [maximumVolumeSliderImage(for:)](mpvolumeview/maximumvolumesliderimage%28for_%29.md): Returns the maximum volume image associated with the specified control state.
- [minimumVolumeSliderImage(for:)](mpvolumeview/minimumvolumesliderimage%28for_%29.md): Returns the minimum volume image associated with the specified control state.
- [setMaximumVolumeSliderImage(\_:for:)](mpvolumeview/setmaximumvolumesliderimage%28__for_%29.md): Assigns a maximum volume slider image to the specified control states.
- [setMinimumVolumeSliderImage(\_:for:)](mpvolumeview/setminimumvolumesliderimage%28__for_%29.md): Assigns a minimum volume slider image to the specified control states.
- [setVolumeThumbImage(\_:for:)](mpvolumeview/setvolumethumbimage%28__for_%29.md): Assigns a thumb image to the specified control states.
- [volumeSliderRect(forBounds:)](mpvolumeview/volumesliderrect%28forbounds_%29.md): Returns the drawing rectangle for the slider’s track.
- [volumeThumbImage(for:)](mpvolumeview/volumethumbimage%28for_%29.md): Returns the thumb image associated with the specified control state.
- [volumeThumbRect(forBounds:volumeSliderRect:value:)](mpvolumeview/volumethumbrect%28forbounds_volumesliderrect_value_%29.md): Returns the drawing rectangle for the volume slider’s thumb image.

### Deprecated

- [volumeWarningSliderImage](mpvolumeview/volumewarningsliderimage.md): Deprecated. The image used to designate the European Union volume limit.
- [showsRouteButton](mpvolumeview/showsroutebutton.md): Deprecated. A Boolean value that indicates whether the route button is visible in the volume view.
- [areWirelessRoutesAvailable](mpvolumeview/arewirelessroutesavailable.md): Deprecated. A Boolean value indicating wireless routes are available.
- [isWirelessRouteActive](mpvolumeview/iswirelessrouteactive.md): Deprecated. A Boolean value that indicates whether the wireless route is active.
- [routeButtonImage(for:)](mpvolumeview/routebuttonimage%28for_%29.md): Deprecated. Returns the button image associated with the specified control state.
- [routeButtonRect(forBounds:)](mpvolumeview/routebuttonrect%28forbounds_%29.md): Deprecated. Returns the drawing rectangle for the route button.
- [setRouteButtonImage(\_:for:)](mpvolumeview/setroutebuttonimage%28__for_%29.md): Deprecated. Assigns a button image to the specified control states.

## Relationships

### Inherits From

- [UIView](../uikit/uiview.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](../uikit/uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearance](../uikit/uiappearance.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIDynamicItem](../uikit/uidynamicitem.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UILargeContentViewerItem](../uikit/uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](../uikit/uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Media player user interface

- [Displaying a media picker from your app](displaying-a-media-picker-from-your-app.md): Let users choose the music they want to play by displaying a media picker interface from within your app.
- [MPMediaPickerController](mpmediapickercontroller.md): A specialized view controller that provides a graphical interface for selecting media items.

# MPVolumeView (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A slider control for setting the system audio output volume, and a button for choosing the audio output route.

## Declaration

```objectivec
@interface MPVolumeView : UIView
```

<a id="overview"></a>

## Overview

Use a volume view to present the user with a slider control for setting the system audio output volume, and a button for choosing the audio output route when the option is available. When first displayed, the slider’s position reflects the current system audio output volume. As the user drags the slider, the changes update the volume view. If the user presses the device volume buttons while sound is playing, the slider moves to reflect the new volume.

If there’s an Apple TV or other AirPlay-enabled device in range, the route button allows the user to choose it. If there’s only one audio output route available, the view doesn’t display the route button. The view also doesn’t display a route button when the app runs in visionOS.

> **Important**

>  You can’t change the volume or choose a route with this class while testing in the Simulator. These abilities only work on a device.

Use this class by embedding an instance of it in your view hierarchy. The following code snippet assumes you’ve placed an instance of the [UIView](../uikit/uiview.md) class on a view using Interface Builder, sizing and positioning it as desired to contain the volume view. Point to the [UIView](../uikit/uiview.md) instance with an outlet variable—named, in the case of this example, `mpVolumeViewParentView`. You’d typically place code like that shown in the following code in your `viewDidLoad` method.

Listing 1. Adding a volume view to your view hierarchy

```swift
parentView.backgroundColor = .clear
let volumeView = MPVolumeView(frame: parentView.bounds)
parentView.addSubview(volumeView)
```

When an audio output route that doesn’t support volume control, such as a car head unit, is active, the system replaces the volume slider with the route name.

To instead display a volume slider as an alert, use the functions described in [Global volume setting methods](global-volume-setting-methods.md).

> **Note**

>  You can’t subclass the MPVolumeView class.

<a id="Customizing-the-volume-sliders-appearance"></a>

### Customizing the volume slider’s appearance

The volume slider is a [UISlider](../uikit/uislider.md) object. Sliders are always displayed as horizontal bars and an indicator, or **thumb**, notes the current value of the slider, which the user can move to change the setting.

Slider controls draw the volume slider track using two distinct images, which are customizable. The system draws the region between the thumb and the end of the track associated with the slider’s minimum value using the **minimum volume slider image**. The system region between the thumb and the end of the track associated with the slider’s maximum value using the **maximum volume slider image**. You can assign different images to customize the appearance of the slider for its various states, such as enabled, disabled, and highlighted.

You can also customize the volume thumb image for the slider.

> **Note**

>  The volume slider control provides a set of default images for both the track and thumb. The system uses the default images if you don’t specify any custom images.

## Topics

### Managing visibility of controls

- [showsVolumeSlider](mpvolumeview/showsvolumeslider.md): A Boolean value that indicates the volume slider is visible in the volume view.

### Customizing the volume slider

- [maximumVolumeSliderImageForState:](mpvolumeview/maximumvolumesliderimage%28for_%29.md): Returns the maximum volume image associated with the specified control state.
- [minimumVolumeSliderImageForState:](mpvolumeview/minimumvolumesliderimage%28for_%29.md): Returns the minimum volume image associated with the specified control state.
- [setMaximumVolumeSliderImage:forState:](mpvolumeview/setmaximumvolumesliderimage%28__for_%29.md): Assigns a maximum volume slider image to the specified control states.
- [setMinimumVolumeSliderImage:forState:](mpvolumeview/setminimumvolumesliderimage%28__for_%29.md): Assigns a minimum volume slider image to the specified control states.
- [setVolumeThumbImage:forState:](mpvolumeview/setvolumethumbimage%28__for_%29.md): Assigns a thumb image to the specified control states.
- [volumeSliderRectForBounds:](mpvolumeview/volumesliderrect%28forbounds_%29.md): Returns the drawing rectangle for the slider’s track.
- [volumeThumbImageForState:](mpvolumeview/volumethumbimage%28for_%29.md): Returns the thumb image associated with the specified control state.
- [volumeThumbRectForBounds:volumeSliderRect:value:](mpvolumeview/volumethumbrect%28forbounds_volumesliderrect_value_%29.md): Returns the drawing rectangle for the volume slider’s thumb image.

### Deprecated

- [volumeWarningSliderImage](mpvolumeview/volumewarningsliderimage.md): Deprecated. The image used to designate the European Union volume limit.
- [showsRouteButton](mpvolumeview/showsroutebutton.md): Deprecated. A Boolean value that indicates whether the route button is visible in the volume view.
- [wirelessRoutesAvailable](mpvolumeview/arewirelessroutesavailable.md): Deprecated. A Boolean value indicating wireless routes are available.
- [wirelessRouteActive](mpvolumeview/iswirelessrouteactive.md): Deprecated. A Boolean value that indicates whether the wireless route is active.
- [routeButtonImageForState:](mpvolumeview/routebuttonimage%28for_%29.md): Deprecated. Returns the button image associated with the specified control state.
- [routeButtonRectForBounds:](mpvolumeview/routebuttonrect%28forbounds_%29.md): Deprecated. Returns the drawing rectangle for the route button.
- [setRouteButtonImage:forState:](mpvolumeview/setroutebuttonimage%28__for_%29.md): Deprecated. Assigns a button image to the specified control states.

## Relationships

### Inherits From

- [UIView](../uikit/uiview.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)

## See Also

### Media player user interface

- [Displaying a media picker from your app](displaying-a-media-picker-from-your-app.md): Let users choose the music they want to play by displaying a media picker interface from within your app.
- [MPMediaPickerController](mpmediapickercontroller.md): A specialized view controller that provides a graphical interface for selecting media items.
