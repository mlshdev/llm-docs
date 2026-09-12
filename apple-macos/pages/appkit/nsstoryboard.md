> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstoryboard](https://developer.apple.com/documentation/appkit/nsstoryboard)

# NSStoryboard (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

An encapsulation of the design-time view controller and window controller graph represented in an Interface Builder storyboard resource file.

## Declaration

```swift
class NSStoryboard
```

<a id="overview"></a>

## Overview

You can use storyboard files to define the view and window controllers for all or part of an app’s user interface. Typically, AppKit creates these objects automatically in response to actions defined within a storyboard file itself, such as the clicking of a button or the choosing of a menu item. However, you can use a storyboard object to directly instantiate the initial view controller from a storyboard file or to instantiate other view or window controllers that you want to present programmatically. In the context of a storyboard file, each contained controller is called a *scene*.

A transition from one scene to another in a storyboard is called a *segue*. This same term, and the same Cocoa APIs, express a containment relationship between two scenes. In macOS, containment (rather than transition) is the more common notion for storyboards. For descriptions of the related APIs, refer to [NSStoryboardSegue](nsstoryboardsegue.md) and [NSSeguePerforming](nssegueperforming.md).

## Topics

### Creating a Storyboard Object

- [init(name:bundle:)](nsstoryboard/init%28name_bundle_%29.md): Creates a storyboard based on the named storyboard file in the specified bundle.
- [main](nsstoryboard/main.md): The app’s main storyboard.
- [NSStoryboard.Name](nsstoryboard/name.md): The name of the storyboard file.

### Loading the Initial View Controller

- [instantiateInitialController()](nsstoryboard/instantiateinitialcontroller%28%29.md): Creates the initial view controller or window controller from a storyboard.
- [instantiateInitialController(creator:)](nsstoryboard/instantiateinitialcontroller%28creator_%29-pi04.md): Creates the initial view controller from the storyboard and initializes it using your custom code.
- [instantiateInitialController(creator:)](nsstoryboard/instantiateinitialcontroller%28creator_%29-529r1.md): Creates the initial window controller from the storyboard and initializes it using your custom code.

### Instantiating Storyboard Controllers

- [instantiateController(withIdentifier:)](nsstoryboard/instantiatecontroller%28withidentifier_%29.md): Instantiates a specified view controller or window controller from a storyboard.
- [instantiateController(identifier:creator:)](nsstoryboard/instantiatecontroller%28identifier_creator_%29-7ddcf.md): Creates the specified view controller from the storyboard and initializes it using your custom initialization code.
- [instantiateController(identifier:creator:)](nsstoryboard/instantiatecontroller%28identifier_creator_%29-50rw3.md): Creates the specified window controller from the storyboard and initializes it using your custom initialization code.
- [NSStoryboard.SceneIdentifier](nsstoryboard/sceneidentifier.md): A string that uniquely identifies a view controller or window controller in your storyboard file.

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

## See Also

### Storyboard

- [NSStoryboardSegue](nsstoryboardsegue.md): A transition or containment relationship between two scenes in a storyboard.
- [NSSeguePerforming](nssegueperforming.md): A set of methods that support the mediation of a custom segue.

# NSStoryboard (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

An encapsulation of the design-time view controller and window controller graph represented in an Interface Builder storyboard resource file.

## Declaration

```objectivec
@interface NSStoryboard : NSObject
```

<a id="overview"></a>

## Overview

You can use storyboard files to define the view and window controllers for all or part of an app’s user interface. Typically, AppKit creates these objects automatically in response to actions defined within a storyboard file itself, such as the clicking of a button or the choosing of a menu item. However, you can use a storyboard object to directly instantiate the initial view controller from a storyboard file or to instantiate other view or window controllers that you want to present programmatically. In the context of a storyboard file, each contained controller is called a *scene*.

A transition from one scene to another in a storyboard is called a *segue*. This same term, and the same Cocoa APIs, express a containment relationship between two scenes. In macOS, containment (rather than transition) is the more common notion for storyboards. For descriptions of the related APIs, refer to [NSStoryboardSegue](nsstoryboardsegue.md) and [NSSeguePerforming](nssegueperforming.md).

## Topics

### Creating a Storyboard Object

- [storyboardWithName:bundle:](nsstoryboard/init%28name_bundle_%29.md): Creates a storyboard based on the named storyboard file in the specified bundle.
- [mainStoryboard](nsstoryboard/main.md): The app’s main storyboard.
- [NSStoryboardName](nsstoryboard/name.md): The name of the storyboard file.

### Loading the Initial View Controller

- [instantiateInitialController](nsstoryboard/instantiateinitialcontroller%28%29.md): Creates the initial view controller or window controller from a storyboard.

### Instantiating Storyboard Controllers

- [instantiateControllerWithIdentifier:](nsstoryboard/instantiatecontroller%28withidentifier_%29.md): Instantiates a specified view controller or window controller from a storyboard.
- [NSStoryboardControllerCreator](nsstoryboardcontrollercreator.md): A block that you use to handle the custom creation of controller objects from your storyboard file.
- [NSStoryboardSceneIdentifier](nsstoryboard/sceneidentifier.md): A string that uniquely identifies a view controller or window controller in your storyboard file.

### Instance Methods

- [instantiateControllerWithIdentifier:creator:](nsstoryboard/instantiatecontrollerwithidentifier_creator_.md)
- [instantiateInitialControllerWithCreator:](nsstoryboard/instantiateinitialcontrollerwithcreator_.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Storyboard

- [NSStoryboardSegue](nsstoryboardsegue.md): A transition or containment relationship between two scenes in a storyboard.
- [NSSeguePerforming](nssegueperforming.md): A set of methods that support the mediation of a custom segue.
