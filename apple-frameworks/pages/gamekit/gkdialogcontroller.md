> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkdialogcontroller](https://developer.apple.com/documentation/gamekit/gkdialogcontroller)

# GKDialogController (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** macOS 10.8+

An object that provides the ability to present the dashboard in macOS games.

## Declaration

```swift
class GKDialogController
```

<a id="overview"></a>

## Overview

For macOS games, use a `GKDialogController` object to present the dashboard from which players can browse and manage their Game Center data.

Initialize a new [GKGameCenterViewController](gkgamecenterviewcontroller.md) object, as you would for an iOS game, specifying the state and setting its delegate. Then get the singleton dialog controller using the [shared()](gkdialogcontroller/shared%28%29.md) class method, or initialize a new `GKDialogController` object.

To present the dashboard, set the [parentWindow](gkdialogcontroller/parentwindow.md) property to the window that should display the dashboard and then call the [present(\_:)](gkdialogcontroller/present%28__%29.md) method, passing the `GKGameCenterViewController` object.

```swift
func presentAchievement() {
    let viewController = GKGameCenterViewController(achievementID: "101")
    viewController.gameCenterDelegate = self
    
    let dialogController = GKDialogController.shared()
    dialogController.parentWindow = NSApplication.shared.mainWindow
    dialogController.present(viewController)
}
```

When the player closes the dashboard, GameKit calls the [gameCenterViewControllerDidFinish(\_:)](gkgamecentercontrollerdelegate/gamecenterviewcontrollerdidfinish%28__%29.md) delegate method. Implement this method to dismiss the shared dialog controller using the [dismiss(\_:)](gkdialogcontroller/dismiss%28__%29.md) method.

```swift
func gameCenterViewControllerDidFinish(_ gameCenterViewController: GKGameCenterViewController) {
    // Dismiss the view controller.
    let dialogController = GKDialogController.shared()
    dialogController.dismiss(self)
}
```

## Topics

### Accessing the Shared Dialog Controller

- [shared()](gkdialogcontroller/shared%28%29.md): Retrieves the shared instance of the dialog controller.

### Setting the Presentation Window

- [parentWindow](gkdialogcontroller/parentwindow.md): The window that displays the dashboard.

### Presenting and Dismissing the Dialog

- [present(\_:)](gkdialogcontroller/present%28__%29.md): Presents the dashboard in the window.
- [dismiss(\_:)](gkdialogcontroller/dismiss%28__%29.md): Dismisses the dashboard.

## Relationships

### Inherits From

- [NSResponder](https://developer.apple.com/documentation/appkit/nsresponder)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Game Center interfaces

- [Adding an access point to your game](adding-an-access-point-to-your-game.md): Provide your users a convenient connection to the Game Center dashboard.
- [Displaying the Game Center dashboard](displaying-the-game-center-dashboard.md): Provide an interface for players to navigate to their Game Center data from your game.
- [GKAccessPoint](gkaccesspoint.md): An object that allows players to view and manage their Game Center information from within your game.
- [GKViewController](gkviewcontroller.md): The abstract base protocol adopted by GameKit view controller classes.

# GKDialogController (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** macOS 10.8+

An object that provides the ability to present the dashboard in macOS games.

## Declaration

```objectivec
@interface GKDialogController : NSResponder
```

<a id="overview"></a>

## Overview

For macOS games, use a `GKDialogController` object to present the dashboard from which players can browse and manage their Game Center data.

Initialize a new [GKGameCenterViewController](gkgamecenterviewcontroller.md) object, as you would for an iOS game, specifying the state and setting its delegate. Then get the singleton dialog controller using the [sharedDialogController](gkdialogcontroller/shared%28%29.md) class method, or initialize a new `GKDialogController` object.

To present the dashboard, set the [parentWindow](gkdialogcontroller/parentwindow.md) property to the window that should display the dashboard and then call the [presentViewController:](gkdialogcontroller/present%28__%29.md) method, passing the `GKGameCenterViewController` object.

```swift
func presentAchievement() {
    let viewController = GKGameCenterViewController(achievementID: "101")
    viewController.gameCenterDelegate = self
    
    let dialogController = GKDialogController.shared()
    dialogController.parentWindow = NSApplication.shared.mainWindow
    dialogController.present(viewController)
}
```

When the player closes the dashboard, GameKit calls the [gameCenterViewControllerDidFinish:](gkgamecentercontrollerdelegate/gamecenterviewcontrollerdidfinish%28__%29.md) delegate method. Implement this method to dismiss the shared dialog controller using the [dismiss:](gkdialogcontroller/dismiss%28__%29.md) method.

```swift
func gameCenterViewControllerDidFinish(_ gameCenterViewController: GKGameCenterViewController) {
    // Dismiss the view controller.
    let dialogController = GKDialogController.shared()
    dialogController.dismiss(self)
}
```

## Topics

### Accessing the Shared Dialog Controller

- [sharedDialogController](gkdialogcontroller/shared%28%29.md): Retrieves the shared instance of the dialog controller.

### Setting the Presentation Window

- [parentWindow](gkdialogcontroller/parentwindow.md): The window that displays the dashboard.

### Presenting and Dismissing the Dialog

- [presentViewController:](gkdialogcontroller/present%28__%29.md): Presents the dashboard in the window.
- [dismiss:](gkdialogcontroller/dismiss%28__%29.md): Dismisses the dashboard.

## Relationships

### Inherits From

- [NSResponder](https://developer.apple.com/documentation/appkit/nsresponder)

## See Also

### Game Center interfaces

- [Adding an access point to your game](adding-an-access-point-to-your-game.md): Provide your users a convenient connection to the Game Center dashboard.
- [Displaying the Game Center dashboard](displaying-the-game-center-dashboard.md): Provide an interface for players to navigate to their Game Center data from your game.
- [GKAccessPoint](gkaccesspoint.md): An object that allows players to view and manage their Game Center information from within your game.
- [GKViewController](gkviewcontroller.md): The abstract base protocol adopted by GameKit view controller classes.
