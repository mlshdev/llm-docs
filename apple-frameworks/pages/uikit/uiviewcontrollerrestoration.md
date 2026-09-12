> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollerrestoration](https://developer.apple.com/documentation/uikit/uiviewcontrollerrestoration)

# UIViewControllerRestoration (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The methods that objects adopt so that they can act as a restoration class for view controllers during state restoration.

## Declaration

```swift
@MainActor protocol UIViewControllerRestoration
```

<a id="overview"></a>

## Overview

To use a class that adopts this protocol, you must assign that class to the [restorationClass](uiviewcontroller/restorationclass.md) property of one of your app’s view controllers. The method in this protocol should be used to create the view controller, if it doesn’t yet exist, or return an existing view controller object, if one does exist.

## Topics

### Creating the view controller

- [viewController(withRestorationIdentifierPath:coder:)](uiviewcontrollerrestoration/viewcontroller%28withrestorationidentifierpath_coder_%29.md): Requests the view controller that corresponds to the specified identifier information.

## See Also

### Interface restoration

- [Restoring your app’s state](restoring-your-app-s-state.md): Provide continuity for the user by preserving current activities.
- [Restoring your app’s state with SwiftUI](https://developer.apple.com/documentation/swiftui/restoring-your-app-s-state-with-swiftui): Provide app continuity for users by preserving their current activities.
- [Preserving your app’s UI across launches](preserving-your-app-s-ui-across-launches.md): Return your app to its previous state after the system terminates it.
- [UIObjectRestoration](uiobjectrestoration.md): The interface that restoration classes use to restore preserved objects.
- [UIStateRestoring](uistaterestoring.md): Methods for adding objects to your state restoration archives.

# UIViewControllerRestoration (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The methods that objects adopt so that they can act as a restoration class for view controllers during state restoration.

## Declaration

```objectivec
@protocol UIViewControllerRestoration
```

<a id="overview"></a>

## Overview

To use a class that adopts this protocol, you must assign that class to the [restorationClass](uiviewcontroller/restorationclass.md) property of one of your app’s view controllers. The method in this protocol should be used to create the view controller, if it doesn’t yet exist, or return an existing view controller object, if one does exist.

## Topics

### Creating the view controller

- [viewControllerWithRestorationIdentifierPath:coder:](uiviewcontrollerrestoration/viewcontroller%28withrestorationidentifierpath_coder_%29.md): Requests the view controller that corresponds to the specified identifier information.

## See Also

### Interface restoration

- [Restoring your app’s state](restoring-your-app-s-state.md): Provide continuity for the user by preserving current activities.
- [Restoring your app’s state with SwiftUI](https://developer.apple.com/documentation/swiftui/restoring-your-app-s-state-with-swiftui): Provide app continuity for users by preserving their current activities.
- [Preserving your app’s UI across launches](preserving-your-app-s-ui-across-launches.md): Return your app to its previous state after the system terminates it.
- [UIObjectRestoration](uiobjectrestoration.md): The interface that restoration classes use to restore preserved objects.
- [UIStateRestoring](uistaterestoring.md): Methods for adding objects to your state restoration archives.
