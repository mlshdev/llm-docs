> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiupdatelink](https://developer.apple.com/documentation/uikit/uiupdatelink)

# UIUpdateLink (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

An object you use to observe, participate in, and affect the UI update process.

## Declaration

```swift
@MainActor class UIUpdateLink
```

<a id="overview"></a>

## Overview

With a *UI update link*, you can follow the progress of each UI update and express preferences about how those updates happen. Use a UI update link when you need precise and predictable control over the UI update process.

There are multiple use cases for [UIUpdateLink](uiupdatelink.md), including:

- To monitor when UI updates occur and synchronize your drawing code with each update, similar to how you might use [CADisplayLink](../quartzcore/cadisplaylink.md).
- To influence how UI updates occur by expressing preferences to the system, such as requesting continuous UI updates, immediate rendering of frames, and more.
- To specify precisely at which point in the UI update process to perform certain actions.
- To implement support for low-latency input, such as a custom low-latency drawing implementation for a pencil-drawing app.

To create a UI update link, you associate it with a window or a view. The UI update link activates automatically when you add the view to a visible window, and deactivates when you remove the view from it. If the view moves from one display to another, [UIUpdateLink](uiupdatelink.md) adjusts to the timing of the new display automatically.

```swift
// Monitor UI updates for a specific view.
let updateLink = UIUpdateLink(view: view)
updateLink.isEnabled = true

// Influence the UI update process by requesting continuous UI updates.
updateLink.requiresContinuousUpdates = true

// Specify one or more actions to perform for each UI update.
// Add an action to the `.beforeCADisplayLinkDispatch` phase, by default.
updateLink.addAction() { link, info in 
    // Code that runs each UI update, after processing input events, 
    // but before `CADisplayLink` callbacks.
    self.view.center.y = sin(info.modelTime) * 100 + self.view.bounds.midY
}

// Add an action to a specific UI update phase that you choose.
updateLink.addAction(to: .afterUpdateScheduled) { link, info in 
    // Code that runs each UI update, after the system schedules the update, 
    // but before processing input events.
    // ...
}
```

> **Important**

>  Only use [UIUpdateLink](uiupdatelink.md) from the main thread.

## Topics

### Creating a UI update link

- [init(view:)](uiupdatelink/init%28view_%29.md): Creates a UI update link for the specified view.
- [init(view:actionHandler:)](uiupdatelink/init%28view_actionhandler_%29.md): Creates a UI update link for the specified view using the specified action handler.
- [init(view:actionTarget:selector:)](uiupdatelink/init%28view_actiontarget_selector_%29.md): Creates a UI update link for the specified view using the specified target and action.
- [init(windowScene:)](uiupdatelink/init%28windowscene_%29.md): Creates a UI update link for the specified window.
- [init(windowScene:actionHandler:)](uiupdatelink/init%28windowscene_actionhandler_%29.md): Creates a UI update link for the specified window using the specified action handler.
- [init(windowScene:actionTarget:selector:)](uiupdatelink/init%28windowscene_actiontarget_selector_%29.md): Creates a UI update link for the specified window using the specified target and action.

### Participating in UI updates

- [isEnabled](uiupdatelink/isenabled.md): A Boolean value that determines whether the UI update link is monitoring UI updates.

### Configuring preferences

- [requiresContinuousUpdates](uiupdatelink/requirescontinuousupdates.md): A Boolean value that determines whether the UI update link needs continuous UI updates.
- [wantsLowLatencyEventDispatch](uiupdatelink/wantslowlatencyeventdispatch.md): A Boolean value that determines whether the UI update link requests dispatch of low-latency eligible events.
- [wantsImmediatePresentation](uiupdatelink/wantsimmediatepresentation.md): A Boolean value that determines whether the UI update link requests immediate frame presentation.
- [preferredFrameRateRange](uiupdatelink/preferredframeraterange.md): The range of frame rates the UI update link prefers.

### Getting the current UI update information

- [currentUpdateInfo()](uiupdatelink/currentupdateinfo%28%29.md): Returns an object that describes the current UI update state.
- [UIUpdateInfo](uiupdateinfo.md): An object that contains detailed information about the current UI update state.

### Adding actions

- [addAction(handler:)](uiupdatelink/addaction%28handler_%29.md): Adds an action with the specified handler to the UI update link.
- [addAction(to:handler:)](uiupdatelink/addaction%28to_handler_%29.md): Adds an action with the specified handler to the UI update link for a particular UI update phase.
- [addAction(target:selector:)](uiupdatelink/addaction%28target_selector_%29.md): Adds an action with the specified target and selector to the UI update link.
- [addAction(to:target:selector:)](uiupdatelink/addaction%28to_target_selector_%29.md): Adds an action with the specified target and selector to the UI update link for a particular UI update phase.
- [UIUpdateActionPhase](uiupdateactionphase.md): An object that defines specific phases of the UI update process.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### UI updates

- [UIUpdateInfo](uiupdateinfo.md): An object that contains detailed information about the current UI update state.
- [UIUpdateActionPhase](uiupdateactionphase.md): An object that defines specific phases of the UI update process.

# UIUpdateLink (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · tvOS 18.0+ · visionOS 2.0+

An object you use to observe, participate in, and affect the UI update process.

## Declaration

```objectivec
@interface UIUpdateLink : NSObject
```

<a id="overview"></a>

## Overview

With a *UI update link*, you can follow the progress of each UI update and express preferences about how those updates happen. Use a UI update link when you need precise and predictable control over the UI update process.

There are multiple use cases for [UIUpdateLink](uiupdatelink.md), including:

- To monitor when UI updates occur and synchronize your drawing code with each update, similar to how you might use [CADisplayLink](../quartzcore/cadisplaylink.md).
- To influence how UI updates occur by expressing preferences to the system, such as requesting continuous UI updates, immediate rendering of frames, and more.
- To specify precisely at which point in the UI update process to perform certain actions.
- To implement support for low-latency input, such as a custom low-latency drawing implementation for a pencil-drawing app.

To create a UI update link, you associate it with a window or a view. The UI update link activates automatically when you add the view to a visible window, and deactivates when you remove the view from it. If the view moves from one display to another, [UIUpdateLink](uiupdatelink.md) adjusts to the timing of the new display automatically.

```swift
// Monitor UI updates for a specific view.
let updateLink = UIUpdateLink(view: view)
updateLink.isEnabled = true

// Influence the UI update process by requesting continuous UI updates.
updateLink.requiresContinuousUpdates = true

// Specify one or more actions to perform for each UI update.
// Add an action to the `.beforeCADisplayLinkDispatch` phase, by default.
updateLink.addAction() { link, info in 
    // Code that runs each UI update, after processing input events, 
    // but before `CADisplayLink` callbacks.
    self.view.center.y = sin(info.modelTime) * 100 + self.view.bounds.midY
}

// Add an action to a specific UI update phase that you choose.
updateLink.addAction(to: .afterUpdateScheduled) { link, info in 
    // Code that runs each UI update, after the system schedules the update, 
    // but before processing input events.
    // ...
}
```

> **Important**

>  Only use [UIUpdateLink](uiupdatelink.md) from the main thread.

## Topics

### Creating a UI update link

- [updateLinkForView:](uiupdatelink/init%28view_%29.md): Creates a UI update link for the specified view.
- [updateLinkForView:actionHandler:](uiupdatelink/init%28view_actionhandler_%29.md): Creates a UI update link for the specified view using the specified action handler.
- [updateLinkForView:actionTarget:selector:](uiupdatelink/init%28view_actiontarget_selector_%29.md): Creates a UI update link for the specified view using the specified target and action.
- [updateLinkForWindowScene:](uiupdatelink/init%28windowscene_%29.md): Creates a UI update link for the specified window.
- [updateLinkForWindowScene:actionHandler:](uiupdatelink/init%28windowscene_actionhandler_%29.md): Creates a UI update link for the specified window using the specified action handler.
- [updateLinkForWindowScene:actionTarget:selector:](uiupdatelink/init%28windowscene_actiontarget_selector_%29.md): Creates a UI update link for the specified window using the specified target and action.

### Participating in UI updates

- [enabled](uiupdatelink/isenabled.md): A Boolean value that determines whether the UI update link is monitoring UI updates.

### Configuring preferences

- [requiresContinuousUpdates](uiupdatelink/requirescontinuousupdates.md): A Boolean value that determines whether the UI update link needs continuous UI updates.
- [wantsLowLatencyEventDispatch](uiupdatelink/wantslowlatencyeventdispatch.md): A Boolean value that determines whether the UI update link requests dispatch of low-latency eligible events.
- [wantsImmediatePresentation](uiupdatelink/wantsimmediatepresentation.md): A Boolean value that determines whether the UI update link requests immediate frame presentation.
- [preferredFrameRateRange](uiupdatelink/preferredframeraterange.md): The range of frame rates the UI update link prefers.

### Getting the current UI update information

- [currentUpdateInfo](uiupdatelink/currentupdateinfo%28%29.md): Returns an object that describes the current UI update state.
- [UIUpdateInfo](uiupdateinfo.md): An object that contains detailed information about the current UI update state.

### Adding actions

- [addActionWithHandler:](uiupdatelink/addaction%28handler_%29.md): Adds an action with the specified handler to the UI update link.
- [addActionToPhase:handler:](uiupdatelink/addaction%28to_handler_%29.md): Adds an action with the specified handler to the UI update link for a particular UI update phase.
- [addActionWithTarget:selector:](uiupdatelink/addaction%28target_selector_%29.md): Adds an action with the specified target and selector to the UI update link.
- [addActionToPhase:target:selector:](uiupdatelink/addaction%28to_target_selector_%29.md): Adds an action with the specified target and selector to the UI update link for a particular UI update phase.
- [UIUpdateActionPhase](uiupdateactionphase.md): An object that defines specific phases of the UI update process.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### UI updates

- [UIUpdateInfo](uiupdateinfo.md): An object that contains detailed information about the current UI update state.
- [UIUpdateActionPhase](uiupdateactionphase.md): An object that defines specific phases of the UI update process.
