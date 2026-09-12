> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcontentselectionviewcontroller](https://developer.apple.com/documentation/avkit/avcontentselectionviewcontroller)

# AVContentSelectionViewController

**Framework:** AVKit  
**Kind:** Class  
**Availability:** visionOS 2.0+

A view controller for providing additional UI to the multiview experience.

## Declaration

```swift
@MainActor @objc(AVContentSelectionViewController) @preconcurrency class AVContentSelectionViewController
```

<a id="overview"></a>

## Overview

Subclass or use view controller containment to add additional UI elements to the multiview experience.

## Topics

### Creating a view controller.

- [init(coder:)](avcontentselectionviewcontroller/init%28coder_%29.md): Creates a view controller with data in an unarchiver.
- [init(nibName:bundle:)](avcontentselectionviewcontroller/init%28nibname_bundle_%29.md): Creates a view controller with the nib file in the specified bundle.

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

### Providing additional UI

- [contentSelectionViewController](avmultiviewmanager/contentselectionviewcontroller.md): A view controller that presents a user interface to select additional video content to display.
