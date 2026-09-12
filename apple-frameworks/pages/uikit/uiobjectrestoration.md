> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiobjectrestoration](https://developer.apple.com/documentation/uikit/uiobjectrestoration)

# UIObjectRestoration (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The interface that restoration classes use to restore preserved objects.

## Declaration

```swift
@MainActor protocol UIObjectRestoration
```

<a id="overview"></a>

## Overview

A restorable object must set its [objectRestorationClass](uistaterestoring/objectrestorationclass.md) property to the class that adopts this protocol. The method in this protocol should be used to return the object if it already exists or create it if needed.

## Topics

### Creating the restorable object

- [object(withRestorationIdentifierPath:coder:)](uiobjectrestoration/object%28withrestorationidentifierpath_coder_%29.md): Requests the object that corresponds to the specified identifier information.

## See Also

### Interface restoration

- [Restoring your app’s state](restoring-your-app-s-state.md): Provide continuity for the user by preserving current activities.
- [Restoring your app’s state with SwiftUI](https://developer.apple.com/documentation/swiftui/restoring-your-app-s-state-with-swiftui): Provide app continuity for users by preserving their current activities.
- [Preserving your app’s UI across launches](preserving-your-app-s-ui-across-launches.md): Return your app to its previous state after the system terminates it.
- [UIViewControllerRestoration](uiviewcontrollerrestoration.md): The methods that objects adopt so that they can act as a restoration class for view controllers during state restoration.
- [UIStateRestoring](uistaterestoring.md): Methods for adding objects to your state restoration archives.

# UIObjectRestoration (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The interface that restoration classes use to restore preserved objects.

## Declaration

```objectivec
@protocol UIObjectRestoration
```

<a id="overview"></a>

## Overview

A restorable object must set its [objectRestorationClass](uistaterestoring/objectrestorationclass.md) property to the class that adopts this protocol. The method in this protocol should be used to return the object if it already exists or create it if needed.

## Topics

### Creating the restorable object

- [objectWithRestorationIdentifierPath:coder:](uiobjectrestoration/object%28withrestorationidentifierpath_coder_%29.md): Requests the object that corresponds to the specified identifier information.

## See Also

### Interface restoration

- [Restoring your app’s state](restoring-your-app-s-state.md): Provide continuity for the user by preserving current activities.
- [Restoring your app’s state with SwiftUI](https://developer.apple.com/documentation/swiftui/restoring-your-app-s-state-with-swiftui): Provide app continuity for users by preserving their current activities.
- [Preserving your app’s UI across launches](preserving-your-app-s-ui-across-launches.md): Return your app to its previous state after the system terminates it.
- [UIViewControllerRestoration](uiviewcontrollerrestoration.md): The methods that objects adopt so that they can act as a restoration class for view controllers during state restoration.
- [UIStateRestoring](uistaterestoring.md): Methods for adding objects to your state restoration archives.
