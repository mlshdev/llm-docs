> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscreen](https://developer.apple.com/documentation/appkit/nsscreen)

# NSScreen (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that describes the attributes of a computer’s monitor or screen.

## Declaration

```swift
class NSScreen
```

<a id="overview"></a>

## Overview

An app may use an [NSScreen](nsscreen.md) object to retrieve information about a screen and use this information to decide what to display on that screen. For example, an app may use the [deepest](nsscreen/deepest.md) method to find out which of the available screens can best represent color and then might choose to display all of its windows on that screen.

Create the application object before you use the methods in this class, so that the application object can make the necessary connection to the window system. You can make sure the application object exists by invoking the [shared](nsapplication/shared.md) method of [NSApplication](nsapplication.md). If you created your app with Xcode, the application object is automatically created for you during initialization.

> **Note**

>  The [NSScreen](nsscreen.md) class is only for getting information about the available displays. If you need additional information or want to change the attributes relating to a display, you must use Quartz Services. For more information, see [Quartz Display Services](https://developer.apple.com/documentation/coregraphics/quartz-display-services).

## Topics

### Getting Screen Objects

- [main](nsscreen/main.md): Returns the screen object containing the window with the keyboard focus.
- [deepest](nsscreen/deepest.md): Returns a screen object representing the screen that can best represent color.
- [screens](nsscreen/screens.md): Returns an array of screen objects representing all of the screens available on the system.

### Getting Screen Information

- [depth](nsscreen/depth.md): The current bit depth and colorspace information of the screen.
- [frame](nsscreen/frame.md): The dimensions and location of the screen.
- [supportedWindowDepths](nsscreen/supportedwindowdepths.md): A zero-terminated array of the window depths supported by the screen.
- [deviceDescription](nsscreen/devicedescription.md): The device dictionary for the screen.
- [NSDeviceDescriptionKey](nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [colorSpace](nsscreen/colorspace.md): The color space of the screen.
- [localizedName](nsscreen/localizedname.md): The localized name of the display.
- [canRepresent(\_:)](nsscreen/canrepresent%28__%29.md): A Boolean value indicating whether the color space of the screen is capable of representing the specified display gamut.
- [NSDisplayGamut](nsdisplaygamut.md)
- [screensHaveSeparateSpaces](nsscreen/screenshaveseparatespaces.md): Returns a Boolean value indicating whether each screen can have its own set of spaces.

### Converting Between Screen and Backing Coordinates

- [backingAlignedRect(\_:options:)](nsscreen/backingalignedrect%28__options_%29.md): Converts a rectangle in global screen coordinates to a pixel aligned rectangle.
- [backingScaleFactor](nsscreen/backingscalefactor.md): The backing store pixel scale factor for the screen.
- [convertRectFromBacking(\_:)](nsscreen/convertrectfrombacking%28__%29.md): Converts the rectangle from the device pixel aligned coordinates system of a screen.
- [convertRectToBacking(\_:)](nsscreen/convertrecttobacking%28__%29.md): Converts the rectangle to the device pixel aligned coordinates system of a screen.

### Getting the Visible Portion of the Screen

- [visibleFrame](nsscreen/visibleframe.md): The current location and dimensions of the visible screen.
- [safeAreaInsets](nsscreen/safeareainsets.md): The distances from the screen’s edges at which content isn’t obscured.
- [auxiliaryTopLeftArea](nsscreen/auxiliarytopleftarea-uglc.md): The unobscured portion of the top-left corner of the screen.
- [auxiliaryTopRightArea](nsscreen/auxiliarytoprightarea-gr2n.md): The unobscured portion of the top-right corner of the screen.

### Getting Extended Dynamic Range Details

- [maximumPotentialExtendedDynamicRangeColorComponentValue](nsscreen/maximumpotentialextendeddynamicrangecolorcomponentvalue.md): The maximum possible color component value for the screen when it’s in extended dynamic range (EDR) mode.
- [maximumExtendedDynamicRangeColorComponentValue](nsscreen/maximumextendeddynamicrangecolorcomponentvalue.md): The current maximum color component value for the screen.
- [maximumReferenceExtendedDynamicRangeColorComponentValue](nsscreen/maximumreferenceextendeddynamicrangecolorcomponentvalue.md): The current maximum color component value for reference rendering to the screen.

### Getting Variable Refresh Rate Details

- [maximumFramesPerSecond](nsscreen/maximumframespersecond.md): The maximum number of frames per second that the screen supports.
- [minimumRefreshInterval](nsscreen/minimumrefreshinterval.md): The shortest refresh interval that the screen supports.
- [maximumRefreshInterval](nsscreen/maximumrefreshinterval.md): The largest refresh interval that the screen supports.
- [displayUpdateGranularity](nsscreen/displayupdategranularity.md): The number of seconds between the screen’s supported update rates, for screens that support fixed update rates.
- [lastDisplayUpdateTimestamp](nsscreen/lastdisplayupdatetimestamp.md): The time of the last framebuffer update, expressed as the number of seconds since system startup.

### Receiving Screen-Related Notifications

- [colorSpaceDidChangeNotification](nsscreen/colorspacedidchangenotification.md): Posted when the color space of the screen has changed.

### Getting touch capabilities

- [NSScreen.TouchCapabilities](nsscreen/touchcapabilities-swift.struct.md)

### Synchronizing with the display’s refresh rate

- [displayLink(target:selector:)](nsscreen/displaylink%28target_selector_%29.md): Returns a new display link whose callback will be invoked in-sync with the display the screen is on.

### Structures

- [NSScreen.ColorSpaceDidChangeMessage](nsscreen/colorspacedidchangemessage.md)

### Instance Properties

- [cgDirectDisplayID](nsscreen/cgdirectdisplayid-8ph5i.md): The CGDirectDisplayID for this screen. This will return nil if there isn’t one and will never return kCGNullDirectDisplay.
- [touchCapabilities](nsscreen/touchcapabilities-swift.property.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# NSScreen (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that describes the attributes of a computer’s monitor or screen.

## Declaration

```objectivec
@interface NSScreen : NSObject
```

<a id="overview"></a>

## Overview

An app may use an [NSScreen](nsscreen.md) object to retrieve information about a screen and use this information to decide what to display on that screen. For example, an app may use the [deepestScreen](nsscreen/deepest.md) method to find out which of the available screens can best represent color and then might choose to display all of its windows on that screen.

Create the application object before you use the methods in this class, so that the application object can make the necessary connection to the window system. You can make sure the application object exists by invoking the [sharedApplication](nsapplication/shared.md) method of [NSApplication](nsapplication.md). If you created your app with Xcode, the application object is automatically created for you during initialization.

> **Note**

>  The [NSScreen](nsscreen.md) class is only for getting information about the available displays. If you need additional information or want to change the attributes relating to a display, you must use Quartz Services. For more information, see [Quartz Display Services](https://developer.apple.com/documentation/coregraphics/quartz-display-services).

## Topics

### Getting Screen Objects

- [mainScreen](nsscreen/main.md): Returns the screen object containing the window with the keyboard focus.
- [deepestScreen](nsscreen/deepest.md): Returns a screen object representing the screen that can best represent color.
- [screens](nsscreen/screens.md): Returns an array of screen objects representing all of the screens available on the system.

### Getting Screen Information

- [depth](nsscreen/depth.md): The current bit depth and colorspace information of the screen.
- [frame](nsscreen/frame.md): The dimensions and location of the screen.
- [supportedWindowDepths](nsscreen/supportedwindowdepths.md): A zero-terminated array of the window depths supported by the screen.
- [deviceDescription](nsscreen/devicedescription.md): The device dictionary for the screen.
- [NSDeviceDescriptionKey](nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [userSpaceScaleFactor](nsscreen/userspacescalefactor.md): Deprecated. Returns the scaling factor from user space to device space on the screen.
- [colorSpace](nsscreen/colorspace.md): The color space of the screen.
- [localizedName](nsscreen/localizedname.md): The localized name of the display.
- [canRepresentDisplayGamut:](nsscreen/canrepresent%28__%29.md): A Boolean value indicating whether the color space of the screen is capable of representing the specified display gamut.
- [NSDisplayGamut](nsdisplaygamut.md)
- [screensHaveSeparateSpaces](nsscreen/screenshaveseparatespaces.md): Returns a Boolean value indicating whether each screen can have its own set of spaces.

### Converting Between Screen and Backing Coordinates

- [backingAlignedRect:options:](nsscreen/backingalignedrect%28__options_%29.md): Converts a rectangle in global screen coordinates to a pixel aligned rectangle.
- [backingScaleFactor](nsscreen/backingscalefactor.md): The backing store pixel scale factor for the screen.
- [convertRectFromBacking:](nsscreen/convertrectfrombacking%28__%29.md): Converts the rectangle from the device pixel aligned coordinates system of a screen.
- [convertRectToBacking:](nsscreen/convertrecttobacking%28__%29.md): Converts the rectangle to the device pixel aligned coordinates system of a screen.

### Getting the Visible Portion of the Screen

- [visibleFrame](nsscreen/visibleframe.md): The current location and dimensions of the visible screen.
- [safeAreaInsets](nsscreen/safeareainsets.md): The distances from the screen’s edges at which content isn’t obscured.

### Getting Extended Dynamic Range Details

- [maximumPotentialExtendedDynamicRangeColorComponentValue](nsscreen/maximumpotentialextendeddynamicrangecolorcomponentvalue.md): The maximum possible color component value for the screen when it’s in extended dynamic range (EDR) mode.
- [maximumExtendedDynamicRangeColorComponentValue](nsscreen/maximumextendeddynamicrangecolorcomponentvalue.md): The current maximum color component value for the screen.
- [maximumReferenceExtendedDynamicRangeColorComponentValue](nsscreen/maximumreferenceextendeddynamicrangecolorcomponentvalue.md): The current maximum color component value for reference rendering to the screen.

### Getting Variable Refresh Rate Details

- [maximumFramesPerSecond](nsscreen/maximumframespersecond.md): The maximum number of frames per second that the screen supports.
- [minimumRefreshInterval](nsscreen/minimumrefreshinterval.md): The shortest refresh interval that the screen supports.
- [maximumRefreshInterval](nsscreen/maximumrefreshinterval.md): The largest refresh interval that the screen supports.
- [displayUpdateGranularity](nsscreen/displayupdategranularity.md): The number of seconds between the screen’s supported update rates, for screens that support fixed update rates.
- [lastDisplayUpdateTimestamp](nsscreen/lastdisplayupdatetimestamp.md): The time of the last framebuffer update, expressed as the number of seconds since system startup.

### Receiving Screen-Related Notifications

- [NSScreenColorSpaceDidChangeNotification](nsscreen/colorspacedidchangenotification.md): Posted when the color space of the screen has changed.

### Getting touch capabilities

- [NSScreenTouchCapabilities](nsscreen/touchcapabilities-swift.struct.md)

### Synchronizing with the display’s refresh rate

- [displayLinkWithTarget:selector:](nsscreen/displaylink%28target_selector_%29.md): Returns a new display link whose callback will be invoked in-sync with the display the screen is on.

### Instance Properties

- [CGDirectDisplayID](nsscreen/cgdirectdisplayid-7uvhw.md): The CGDirectDisplayID for this screen. This will return kCGNullDirectDisplay if there isn’t one.
- [auxiliaryTopLeftArea](nsscreen/auxiliarytopleftarea-4ow3p.md)
- [auxiliaryTopRightArea](nsscreen/auxiliarytoprightarea-6gb2v.md)
- [touchCapabilities](nsscreen/touchcapabilities-swift.property.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)
