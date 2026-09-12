> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen](https://developer.apple.com/documentation/uikit/uiscreen)

# UIScreen (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS

An object that defines the properties associated with a hardware-based display.

## Declaration

```swift
@MainActor class UIScreen
```

## Mentioned In

- [Presenting content on a connected display](presenting-content-on-a-connected-display.md)
- [Building a desktop-class iPad app](building-a-desktop-class-ipad-app.md)

<a id="overview"></a>

## Overview

A [UIScreen](uiscreen.md) object provides information about the screens attached to an iOS, iPadOS, or tvOS device. A screen object for an iOS or iPadOS device has information about the integrated display or an attached display. A screen object for a tvOS device represents the television connected to the device. In a compatible iPad or iPhone app running in visionOS, don’t rely on screen-related properties to configure your app.

You don’t create any of these screen objects directly. Instead, fetch the screen object for one of your app’s windows from the [UIWindowScene](uiwindowscene.md) object that manages the window.

Avoid using screen objects to make decisions about your app’s interface. Use a screen object only as needed to retrieve screen-related information, such as the screen’s bounds rectangle, brightness, and overscan settings. Apps that rely on the screen dimensions can use the object in the [fixedCoordinateSpace](uiscreen/fixedcoordinatespace.md) property as a fixed point of reference for any calculations they must make.

## Topics

### Getting the coordinate space

- [coordinateSpace](uiscreen/coordinatespace.md): The current coordinate space of the screen.
- [fixedCoordinateSpace](uiscreen/fixedcoordinatespace.md): The fixed coordinate space of the screen.

### Getting the size and scale

- [bounds](uiscreen/bounds.md): The bounding rectangle of the screen, measured in points.
- [nativeBounds](uiscreen/nativebounds.md): The bounding rectangle of the physical screen, measured in pixels.
- [nativeScale](uiscreen/nativescale.md): The native scale factor for the physical screen.
- [scale](uiscreen/scale.md): The natural scale factor associated with the screen.

### Managing brightness

- [brightness](uiscreen/brightness.md): The brightness level of the screen.
- [wantsSoftwareDimming](uiscreen/wantssoftwaredimming.md): A Boolean value that indicates whether the screen may be dimmed lower than the hardware is normally capable of by emulating it in software.

### Managing screen modes

- [currentMode](uiscreen/currentmode.md): The current screen mode associated with the screen.
- [preferredMode](uiscreen/preferredmode.md): The preferred display mode for the screen.
- [availableModes](uiscreen/availablemodes.md): The display modes that can be associated with the screen.

### Managing overscan compensation

- [overscanCompensationInsets](uiscreen/overscancompensationinsets.md): The edge inset values needed to avoid clipping the rectangle.
- [overscanCompensation](uiscreen/overscancompensation-swift.property.md): For an external screen, this property sets the desired technique to compensate for overscan.
- [UIScreen.OverscanCompensation](uiscreen/overscancompensation-swift.enum.md): Describes different techniques for compensating for pixel loss at the edge of the screen.

### Getting the calibrated latency

- [calibratedLatency](uiscreen/calibratedlatency.md): The user-calibrated latency for the current screen.

### Getting the reference display mode status

- [referenceDisplayModeStatus](uiscreen/referencedisplaymodestatus-swift.property.md): The status of the screen’s reference display mode.
- [UIScreen.ReferenceDisplayModeStatus](uiscreen/referencedisplaymodestatus-swift.enum.md): Describes a screen’s reference display mode status.
- [currentEDRHeadroom](uiscreen/currentedrheadroom.md): The screen’s current headroom when displaying extended dynamic range content.
- [potentialEDRHeadroom](uiscreen/potentialedrheadroom.md): The screen’s maximum headroom when displaying extended dynamic range content.

### Getting a display link

- [displayLink(withTarget:selector:)](uiscreen/displaylink%28withtarget_selector_%29.md): Deprecated. Returns a display link object for the current screen.
- [maximumFramesPerSecond](uiscreen/maximumframespersecond.md): The maximum number of frames per second a screen can render.

### Capturing a snapshot

- [snapshotView(afterScreenUpdates:)](uiscreen/snapshotview%28afterscreenupdates_%29.md): Returns a snapshot view based on the current screen contents.

### Detecting screen capture

- [isCaptured](uiscreen/iscaptured.md): Deprecated. A Boolean value that indicates whether the system is actively cloning the screen to another destination.
- [mirrored](uiscreen/mirrored.md): The screen an external display mirrors from.

### Notifications

- [brightnessDidChangeNotification](uiscreen/brightnessdidchangenotification.md): A notification that posts when a screen’s brightness changes.
- [modeDidChangeNotification](uiscreen/modedidchangenotification.md): A notification that posts when a screen’s mode changes.
- [capturedDidChangeNotification](uiscreen/captureddidchangenotification.md): A notification that posts when the capture status of a screen changes.
- [referenceDisplayModeStatusDidChangeNotification](uiscreen/referencedisplaymodestatusdidchangenotification.md): A notification that posts when there’s a change to a screen’s reference display mode status.

### Deprecated

- [Deprecated symbols](uiscreen-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Structures

- [UIScreen.BrightnessDidChangeMessage](uiscreen/brightnessdidchangemessage.md)
- [UIScreen.CapturedDidChangeMessage](uiscreen/captureddidchangemessage.md)
- [UIScreen.ModeDidChangeMessage](uiscreen/modedidchangemessage.md)
- [UIScreen.ReferenceDisplayModeStatusDidChangeMessage](uiscreen/referencedisplaymodestatusdidchangemessage.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UITraitEnvironment](uitraitenvironment.md)

## See Also

### Screens

- [Presenting content on a connected display](presenting-content-on-a-connected-display.md): Fill connected displays with additional content from your app.
- [UIScreenMode](uiscreenmode.md): A possible set of attributes that can apply to a screen object.

# UIScreen (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS

An object that defines the properties associated with a hardware-based display.

## Declaration

```objectivec
@interface UIScreen : NSObject
```

## Mentioned In

- [Presenting content on a connected display](presenting-content-on-a-connected-display.md)
- [Building a desktop-class iPad app](building-a-desktop-class-ipad-app.md)

<a id="overview"></a>

## Overview

A [UIScreen](uiscreen.md) object provides information about the screens attached to an iOS, iPadOS, or tvOS device. A screen object for an iOS or iPadOS device has information about the integrated display or an attached display. A screen object for a tvOS device represents the television connected to the device. In a compatible iPad or iPhone app running in visionOS, don’t rely on screen-related properties to configure your app.

You don’t create any of these screen objects directly. Instead, fetch the screen object for one of your app’s windows from the [UIWindowScene](uiwindowscene.md) object that manages the window.

Avoid using screen objects to make decisions about your app’s interface. Use a screen object only as needed to retrieve screen-related information, such as the screen’s bounds rectangle, brightness, and overscan settings. Apps that rely on the screen dimensions can use the object in the [fixedCoordinateSpace](uiscreen/fixedcoordinatespace.md) property as a fixed point of reference for any calculations they must make.

## Topics

### Getting the coordinate space

- [coordinateSpace](uiscreen/coordinatespace.md): The current coordinate space of the screen.
- [fixedCoordinateSpace](uiscreen/fixedcoordinatespace.md): The fixed coordinate space of the screen.

### Getting the size and scale

- [bounds](uiscreen/bounds.md): The bounding rectangle of the screen, measured in points.
- [nativeBounds](uiscreen/nativebounds.md): The bounding rectangle of the physical screen, measured in pixels.
- [nativeScale](uiscreen/nativescale.md): The native scale factor for the physical screen.
- [scale](uiscreen/scale.md): The natural scale factor associated with the screen.

### Managing brightness

- [brightness](uiscreen/brightness.md): The brightness level of the screen.
- [wantsSoftwareDimming](uiscreen/wantssoftwaredimming.md): A Boolean value that indicates whether the screen may be dimmed lower than the hardware is normally capable of by emulating it in software.

### Managing screen modes

- [currentMode](uiscreen/currentmode.md): The current screen mode associated with the screen.
- [preferredMode](uiscreen/preferredmode.md): The preferred display mode for the screen.
- [availableModes](uiscreen/availablemodes.md): The display modes that can be associated with the screen.

### Managing overscan compensation

- [overscanCompensationInsets](uiscreen/overscancompensationinsets.md): The edge inset values needed to avoid clipping the rectangle.
- [overscanCompensation](uiscreen/overscancompensation-swift.property.md): For an external screen, this property sets the desired technique to compensate for overscan.
- [UIScreenOverscanCompensation](uiscreen/overscancompensation-swift.enum.md): Describes different techniques for compensating for pixel loss at the edge of the screen.

### Getting the calibrated latency

- [calibratedLatency](uiscreen/calibratedlatency.md): The user-calibrated latency for the current screen.

### Getting the reference display mode status

- [referenceDisplayModeStatus](uiscreen/referencedisplaymodestatus-swift.property.md): The status of the screen’s reference display mode.
- [UIScreenReferenceDisplayModeStatus](uiscreen/referencedisplaymodestatus-swift.enum.md): Describes a screen’s reference display mode status.
- [currentEDRHeadroom](uiscreen/currentedrheadroom.md): The screen’s current headroom when displaying extended dynamic range content.
- [potentialEDRHeadroom](uiscreen/potentialedrheadroom.md): The screen’s maximum headroom when displaying extended dynamic range content.

### Getting a display link

- [displayLinkWithTarget:selector:](uiscreen/displaylink%28withtarget_selector_%29.md): Deprecated. Returns a display link object for the current screen.
- [maximumFramesPerSecond](uiscreen/maximumframespersecond.md): The maximum number of frames per second a screen can render.

### Capturing a snapshot

- [snapshotViewAfterScreenUpdates:](uiscreen/snapshotview%28afterscreenupdates_%29.md): Returns a snapshot view based on the current screen contents.

### Detecting screen capture

- [captured](uiscreen/iscaptured.md): Deprecated. A Boolean value that indicates whether the system is actively cloning the screen to another destination.
- [mirroredScreen](uiscreen/mirrored.md): The screen an external display mirrors from.

### Notifications

- [UIScreenBrightnessDidChangeNotification](uiscreen/brightnessdidchangenotification.md): A notification that posts when a screen’s brightness changes.
- [UIScreenModeDidChangeNotification](uiscreen/modedidchangenotification.md): A notification that posts when a screen’s mode changes.
- [UIScreenCapturedDidChangeNotification](uiscreen/captureddidchangenotification.md): A notification that posts when the capture status of a screen changes.
- [UIScreenReferenceDisplayModeStatusDidChangeNotification](uiscreen/referencedisplaymodestatusdidchangenotification.md): A notification that posts when there’s a change to a screen’s reference display mode status.

### Deprecated

- [Deprecated symbols](uiscreen-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UITraitEnvironment](uitraitenvironment.md)

## See Also

### Screens

- [Presenting content on a connected display](presenting-content-on-a-connected-display.md): Fill connected displays with additional content from your app.
- [UIScreenMode](uiscreenmode.md): A possible set of attributes that can apply to a screen object.
