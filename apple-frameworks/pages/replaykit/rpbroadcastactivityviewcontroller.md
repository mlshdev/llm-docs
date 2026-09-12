> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpbroadcastactivityviewcontroller](https://developer.apple.com/documentation/replaykit/rpbroadcastactivityviewcontroller)

# RPBroadcastActivityViewController (Swift)

**Framework:** ReplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A view controller that displays a user interface where users choose a broadcast service.

> No longer supported

## Declaration

```swift
class RPBroadcastActivityViewController
```

<a id="overview"></a>

## Overview

The view controller displays the broadcast services currently installed on the device. On iPad, you must present the broadcast activity view controller as a popover.

## Topics

### Presenting the Broadcast Activity UI

- [load(handler:)](rpbroadcastactivityviewcontroller/load%28handler_%29.md): Deprecated. Loads a broadcast activity view controller.
- [load(withPreferredExtension:handler:)](rpbroadcastactivityviewcontroller/load%28withpreferredextension_handler_%29.md): Deprecated. Loads a broadcast activity view controller with a preferred extension.

### Getting the Delegate

- [delegate](rpbroadcastactivityviewcontroller/delegate.md): Deprecated. The delegate for the broadcast activity view controller.
- [RPBroadcastActivityViewControllerDelegate](rpbroadcastactivityviewcontrollerdelegate.md): Deprecated. The protocol you implement to respond to changes to a broadcast activity user interface.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Live Broadcast Implementation

- [RPSystemBroadcastPickerView](rpsystembroadcastpickerview.md): Deprecated. A view displaying a broadcast button that, when tapped, shows a broadcast picker.
- [RPBroadcastActivityController](rpbroadcastactivitycontroller.md): Deprecated. A controller object that presents the macOS broadcast picker.
- [RPBroadcastActivityControllerDelegate](rpbroadcastactivitycontrollerdelegate.md): Deprecated. A protocol that defines the methods to implement to respond to selection events from a broadcast activity controller.
- [RPBroadcastConfiguration](rpbroadcastconfiguration.md): Deprecated. An object used to configure the movie clips produced during a live broadcast.

# RPBroadcastActivityViewController (Objective-C)

**Framework:** ReplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A view controller that displays a user interface where users choose a broadcast service.

> No longer supported

## Declaration

```objectivec
@interface RPBroadcastActivityViewController : UIViewController
```

<a id="overview"></a>

## Overview

The view controller displays the broadcast services currently installed on the device. On iPad, you must present the broadcast activity view controller as a popover.

## Topics

### Presenting the Broadcast Activity UI

- [loadBroadcastActivityViewControllerWithHandler:](rpbroadcastactivityviewcontroller/load%28handler_%29.md): Deprecated. Loads a broadcast activity view controller.
- [loadBroadcastActivityViewControllerWithPreferredExtension:handler:](rpbroadcastactivityviewcontroller/load%28withpreferredextension_handler_%29.md): Deprecated. Loads a broadcast activity view controller with a preferred extension.

### Getting the Delegate

- [delegate](rpbroadcastactivityviewcontroller/delegate.md): Deprecated. The delegate for the broadcast activity view controller.
- [RPBroadcastActivityViewControllerDelegate](rpbroadcastactivityviewcontrollerdelegate.md): Deprecated. The protocol you implement to respond to changes to a broadcast activity user interface.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

## See Also

### Live Broadcast Implementation

- [RPSystemBroadcastPickerView](rpsystembroadcastpickerview.md): Deprecated. A view displaying a broadcast button that, when tapped, shows a broadcast picker.
- [RPBroadcastActivityController](rpbroadcastactivitycontroller.md): Deprecated. A controller object that presents the macOS broadcast picker.
- [RPBroadcastActivityControllerDelegate](rpbroadcastactivitycontrollerdelegate.md): Deprecated. A protocol that defines the methods to implement to respond to selection events from a broadcast activity controller.
- [RPBroadcastConfiguration](rpbroadcastconfiguration.md): Deprecated. An object used to configure the movie clips produced during a live broadcast.
