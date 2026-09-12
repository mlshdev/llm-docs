> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uireferencelibraryviewcontroller](https://developer.apple.com/documentation/uikit/uireferencelibraryviewcontroller)

# UIReferenceLibraryViewController (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view controller that displays a standard interface for looking up the definition of a word or term.

## Declaration

```swift
@MainActor class UIReferenceLibraryViewController
```

<a id="overview"></a>

## Overview

A [UIReferenceLibraryViewController](uireferencelibraryviewcontroller.md) object should not be used to display wordlists, create a standalone dictionary app, or republish the content in any form.

You create and initialize a reference library view controller using the [init(term:)](uireferencelibraryviewcontroller/init%28term_%29.md) method. You pass the term to define as the parameter to this method and the definition is displayed. You can present this view controller modally or as part of another interface. On iPad, you can set the reference library view controller as the content view controller of a [UIPopoverController](uipopovercontroller.md) object. Optionally, use the [dictionaryHasDefinition(forTerm:)](uireferencelibraryviewcontroller/dictionaryhasdefinition%28forterm_%29.md) class method to check if a definition is available for a given term before creating an instance—for example, use this method if you want to change the user interface depending on whether a definition is available.

## Topics

### Creating a reference-library view controller

- [dictionaryHasDefinition(forTerm:)](uireferencelibraryviewcontroller/dictionaryhasdefinition%28forterm_%29.md): Returns whether a definition is available for the given term.
- [init(term:)](uireferencelibraryviewcontroller/init%28term_%29.md): Initializes a newly created reference-library view controller to display the definition of the given term.
- [init(coder:)](uireferencelibraryviewcontroller/init%28coder_%29.md): Creates a reference-library view controller from data in an unarchiver.

## Relationships

### Inherits From

- [UIViewController](uiviewcontroller.md)

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
- [UIActivityItemsConfigurationProviding](uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](uiappearancecontainer.md)
- [UIContentContainer](uicontentcontainer.md)
- [UIFocusEnvironment](uifocusenvironment.md)
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md)
- [UIStateRestoring](uistaterestoring.md)
- [UITraitChangeObservable](uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](uitraitenvironment.md)
- [UIUserActivityRestoring](uiuseractivityrestoring.md)

# UIReferenceLibraryViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view controller that displays a standard interface for looking up the definition of a word or term.

## Declaration

```objectivec
@interface UIReferenceLibraryViewController : UIViewController
```

<a id="overview"></a>

## Overview

A [UIReferenceLibraryViewController](uireferencelibraryviewcontroller.md) object should not be used to display wordlists, create a standalone dictionary app, or republish the content in any form.

You create and initialize a reference library view controller using the [initWithTerm:](uireferencelibraryviewcontroller/init%28term_%29.md) method. You pass the term to define as the parameter to this method and the definition is displayed. You can present this view controller modally or as part of another interface. On iPad, you can set the reference library view controller as the content view controller of a [UIPopoverController](uipopovercontroller.md) object. Optionally, use the [dictionaryHasDefinitionForTerm:](uireferencelibraryviewcontroller/dictionaryhasdefinition%28forterm_%29.md) class method to check if a definition is available for a given term before creating an instance—for example, use this method if you want to change the user interface depending on whether a definition is available.

## Topics

### Creating a reference-library view controller

- [dictionaryHasDefinitionForTerm:](uireferencelibraryviewcontroller/dictionaryhasdefinition%28forterm_%29.md): Returns whether a definition is available for the given term.
- [initWithTerm:](uireferencelibraryviewcontroller/init%28term_%29.md): Initializes a newly created reference-library view controller to display the definition of the given term.
- [initWithCoder:](uireferencelibraryviewcontroller/init%28coder_%29.md): Creates a reference-library view controller from data in an unarchiver.

## Relationships

### Inherits From

- [UIViewController](uiviewcontroller.md)
