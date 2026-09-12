> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookupui/ilclassificationuiextensionviewcontroller](https://developer.apple.com/documentation/identitylookupui/ilclassificationuiextensionviewcontroller)

# ILClassificationUIExtensionViewController (Swift)

**Framework:** IdentityLookupUI  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The superclass for an Unwanted Communication Reporting extension’s principal view controller.

## Declaration

```swift
class ILClassificationUIExtensionViewController
```

<a id="overview"></a>

## Overview

Subclass this view controller to create a user interface that gathers additional information from the user about the reported communication.

## Topics

### Collecting Data from the User

- [prepare(for:)](ilclassificationuiextensionviewcontroller/prepare%28for_%29.md): Notifies the view controller just before the system presents it to the user.
- [classificationResponse(for:)](ilclassificationuiextensionviewcontroller/classificationresponse%28for_%29.md): Notifies the view controller when the user finishes entering data and presses the Done button.

### Managing the Request

- [extensionContext](ilclassificationuiextensionviewcontroller/extensioncontext.md): The context for the current request.
- [ILClassificationUIExtensionContext](ilclassificationuiextensioncontext.md): An object that manages the state of the current request.

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

# ILClassificationUIExtensionViewController (Objective-C)

**Framework:** IdentityLookupUI  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The superclass for an Unwanted Communication Reporting extension’s principal view controller.

## Declaration

```objectivec
@interface ILClassificationUIExtensionViewController : UIViewController
```

<a id="overview"></a>

## Overview

Subclass this view controller to create a user interface that gathers additional information from the user about the reported communication.

## Topics

### Collecting Data from the User

- [prepareForClassificationRequest:](ilclassificationuiextensionviewcontroller/prepare%28for_%29.md): Notifies the view controller just before the system presents it to the user.
- [classificationResponseForRequest:](ilclassificationuiextensionviewcontroller/classificationresponse%28for_%29.md): Notifies the view controller when the user finishes entering data and presses the Done button.

### Managing the Request

- [extensionContext](ilclassificationuiextensionviewcontroller/extensioncontext.md): The context for the current request.
- [ILClassificationUIExtensionContext](ilclassificationuiextensioncontext.md): An object that manages the state of the current request.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)
