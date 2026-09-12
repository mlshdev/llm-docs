> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiokit/auviewcontroller](https://developer.apple.com/documentation/coreaudiokit/auviewcontroller)

# AUViewController (Swift)

**Framework:** CoreAudioKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The base class to extend when creating a custom user interface for an audio unit.

## Declaration

```swift
class AUViewController
```

<a id="overview"></a>

## Overview

This class doesn’t add any new methods or properties to its superclass, but it does conform to the [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md) protocol.

A host app can access the view controller by calling the [requestViewController(completionHandler:)](../audiotoolbox/auaudiounit/requestviewcontroller%28completionhandler_%29.md) method on the corresponding [AUAudioUnit](../audiotoolbox/auaudiounit.md) object.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

If an audio unit provides a custom view controller, the UI Audio Unit extension must implement a subclass of `AUViewController` and implement the [AUAudioUnitFactory](../audiotoolbox/auaudiounitfactory.md) protocol inside the subclass.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSEditor](https://developer.apple.com/documentation/appkit/nseditor)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSeguePerforming](https://developer.apple.com/documentation/appkit/nssegueperforming)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
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

### Audio Units

- [AUAudioUnitViewConfiguration](auaudiounitviewconfiguration.md): A configuration object that describes how to present the audio unit’s user interface.
- [AUGenericView](augenericview.md): A view that provides a generic user interface for a Cocoa audio unit.
- [AUPannerView](aupannerview.md): A view that provides a specialized user interface for a Cocoa-based panner audio unit.
- [AUCustomViewPersistentData](aucustomviewpersistentdata.md): A protocol that defines the methods an Audio Unit host calls to manage view data.

# AUViewController (Objective-C)

**Framework:** CoreAudioKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The base class to extend when creating a custom user interface for an audio unit.

## Declaration

```objectivec
@interface AUViewController : UIViewController
```

```objectivec
@interface AUViewController : NSViewController
```

<a id="overview"></a>

## Overview

This class doesn’t add any new methods or properties to its superclass, but it does conform to the [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md) protocol.

A host app can access the view controller by calling the [requestViewControllerWithCompletionHandler:](../audiotoolbox/auaudiounit/requestviewcontroller%28completionhandler_%29.md) method on the corresponding [AUAudioUnit](../audiotoolbox/auaudiounit.md) object.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

If an audio unit provides a custom view controller, the UI Audio Unit extension must implement a subclass of `AUViewController` and implement the [AUAudioUnitFactory](../audiotoolbox/auaudiounitfactory.md) protocol inside the subclass.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)

## See Also

### Audio Units

- [AUViewControllerBase](auviewcontrollerbase.md): A type definition that indicates the the platform’s Audio Unit view controller base class.
- [AUAudioUnitViewConfiguration](auaudiounitviewconfiguration.md): A configuration object that describes how to present the audio unit’s user interface.
- [AUGenericView](augenericview.md): A view that provides a generic user interface for a Cocoa audio unit.
- [AUPannerView](aupannerview.md): A view that provides a specialized user interface for a Cocoa-based panner audio unit.
- [AUCustomViewPersistentData](aucustomviewpersistentdata.md): A protocol that defines the methods an Audio Unit host calls to manage view data.
