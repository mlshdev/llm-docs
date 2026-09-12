> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpsystembroadcastpickerview](https://developer.apple.com/documentation/replaykit/rpsystembroadcastpickerview)

# RPSystemBroadcastPickerView (Swift)

**Framework:** ReplayKit  
**Kind:** Class  
**Availability:** iOS 12.0+ (deprecated in 27.0) · iPadOS 12.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A view displaying a broadcast button that, when tapped, shows a broadcast picker.

> Use ScreenCaptureKit SCContentSharingPicker instead

## Declaration

```swift
class RPSystemBroadcastPickerView
```

<a id="overview"></a>

## Overview

Add this view to your view hierarchy to let users broadcast directly from your app. When a user taps the broadcast button, it displays a broadcast picker, allowing the user to select a broadcast provider.

> **Note**

>  Clicking the broadcast button has no effect in Mac apps built with Mac Catalyst.

You can limit the picker to a particular broadcast provider by setting [preferredExtension](rpsystembroadcastpickerview/preferredextension.md) to the bundle identifier of a broadcast extension. You can also show or hide the microphone button displayed in the picker by setting the [showsMicrophoneButton](rpsystembroadcastpickerview/showsmicrophonebutton.md) property. Set these properties before presenting [RPSystemBroadcastPickerView](rpsystembroadcastpickerview.md), as shown here:

```swift
class ViewController: UIViewController {

    @IBOutlet var containerView: UIView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
     
        let broadcastPicker = RPSystemBroadcastPickerView(frame: CGRect(x: 0, y: 0, width: 50, height: 50))
        broadcastPicker.preferredExtension = "com.your-app.broadcast.extension"

        containerView.addSubview(broadcastPicker)
    }
    
}

```

## Topics

### Configuring the Broadcast Picker

- [preferredExtension](rpsystembroadcastpickerview/preferredextension.md): Deprecated. A bundle identifier of a broadcast extension.
- [showsMicrophoneButton](rpsystembroadcastpickerview/showsmicrophonebutton.md): Deprecated. A Boolean value that indicates whether the microphone button is visible in the broadcast picker.

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

### Live Broadcast Implementation

- [RPBroadcastActivityViewController](rpbroadcastactivityviewcontroller.md): Deprecated. A view controller that displays a user interface where users choose a broadcast service.
- [RPBroadcastActivityController](rpbroadcastactivitycontroller.md): Deprecated. A controller object that presents the macOS broadcast picker.
- [RPBroadcastActivityControllerDelegate](rpbroadcastactivitycontrollerdelegate.md): Deprecated. A protocol that defines the methods to implement to respond to selection events from a broadcast activity controller.
- [RPBroadcastConfiguration](rpbroadcastconfiguration.md): Deprecated. An object used to configure the movie clips produced during a live broadcast.

# RPSystemBroadcastPickerView (Objective-C)

**Framework:** ReplayKit  
**Kind:** Class  
**Availability:** iOS 12.0+ (deprecated in 27.0) · iPadOS 12.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A view displaying a broadcast button that, when tapped, shows a broadcast picker.

> Use ScreenCaptureKit SCContentSharingPicker instead

## Declaration

```objectivec
@interface RPSystemBroadcastPickerView : UIView
```

<a id="overview"></a>

## Overview

Add this view to your view hierarchy to let users broadcast directly from your app. When a user taps the broadcast button, it displays a broadcast picker, allowing the user to select a broadcast provider.

> **Note**

>  Clicking the broadcast button has no effect in Mac apps built with Mac Catalyst.

You can limit the picker to a particular broadcast provider by setting [preferredExtension](rpsystembroadcastpickerview/preferredextension.md) to the bundle identifier of a broadcast extension. You can also show or hide the microphone button displayed in the picker by setting the [showsMicrophoneButton](rpsystembroadcastpickerview/showsmicrophonebutton.md) property. Set these properties before presenting [RPSystemBroadcastPickerView](rpsystembroadcastpickerview.md), as shown here:

```swift
class ViewController: UIViewController {

    @IBOutlet var containerView: UIView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
     
        let broadcastPicker = RPSystemBroadcastPickerView(frame: CGRect(x: 0, y: 0, width: 50, height: 50))
        broadcastPicker.preferredExtension = "com.your-app.broadcast.extension"

        containerView.addSubview(broadcastPicker)
    }
    
}

```

## Topics

### Configuring the Broadcast Picker

- [preferredExtension](rpsystembroadcastpickerview/preferredextension.md): Deprecated. A bundle identifier of a broadcast extension.
- [showsMicrophoneButton](rpsystembroadcastpickerview/showsmicrophonebutton.md): Deprecated. A Boolean value that indicates whether the microphone button is visible in the broadcast picker.

## Relationships

### Inherits From

- [UIView](../uikit/uiview.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)

## See Also

### Live Broadcast Implementation

- [RPBroadcastActivityViewController](rpbroadcastactivityviewcontroller.md): Deprecated. A view controller that displays a user interface where users choose a broadcast service.
- [RPBroadcastActivityController](rpbroadcastactivitycontroller.md): Deprecated. A controller object that presents the macOS broadcast picker.
- [RPBroadcastActivityControllerDelegate](rpbroadcastactivitycontrollerdelegate.md): Deprecated. A protocol that defines the methods to implement to respond to selection events from a broadcast activity controller.
- [RPBroadcastConfiguration](rpbroadcastconfiguration.md): Deprecated. An object used to configure the movie clips produced during a live broadcast.
