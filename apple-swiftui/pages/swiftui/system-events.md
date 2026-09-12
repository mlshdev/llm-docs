> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/system-events](https://developer.apple.com/documentation/swiftui/system-events)

# System events

**Framework:** SwiftUI  
**Kind:** API Collection

React to system events, like opening a URL.

<a id="Overview"></a>

## Overview

Specify view and scene modifiers to indicate how your app responds to certain system events. For example, you can use the [onOpenURL(perform:)](view/onopenurl%28perform_%29.md) view modifier to define an action to take when your app receives a universal link, or use the [backgroundTask(\_:action:)](scene/backgroundtask%28__action_%29.md) scene modifier to specify an asynchronous task to carry out in response to a background task event, like the completion of a background URL session.

![](https://developer.apple.com/images/com.apple.SwiftUI/system-events-hero@2x.png)

## Topics

### Sending and receiving user activities

- [Restoring your app’s state with SwiftUI](restoring-your-app-s-state-with-swiftui.md): Provide app continuity for users by preserving their current activities.
- [userActivity(\_:element:\_:)](view/useractivity%28__element___%29.md): Advertises a user activity type.
- [userActivity(\_:isActive:\_:)](view/useractivity%28__isactive___%29.md): Advertises a user activity type.
- [onContinueUserActivity(\_:perform:)](view/oncontinueuseractivity%28__perform_%29.md): Registers a handler to invoke in response to a user activity that your app receives.

### Sending and receiving URLs

- [openURL](environmentvalues/openurl.md): An action that opens a URL.
- [OpenURLAction](openurlaction.md): An action that opens a URL.
- [onOpenURL(perform:)](view/onopenurl%28perform_%29.md): Registers a handler to invoke in response to a URL that your app receives.

### Handling external events

- [handlesExternalEvents(matching:)](scene/handlesexternalevents%28matching_%29.md): Specifies the external events for which SwiftUI opens a new instance of the modified scene.
- [handlesExternalEvents(preferring:allowing:)](view/handlesexternalevents%28preferring_allowing_%29.md): Specifies the external events that the view’s scene handles if the scene is already open.

### Handling background tasks

- [backgroundTask(\_:action:)](scene/backgroundtask%28__action_%29.md): Runs the specified action when the system provides a background task.
- [BackgroundTask](backgroundtask.md): The kinds of background tasks that your app or extension can handle.
- [SnapshotData](snapshotdata.md): The associated data of a snapshot background task.
- [SnapshotResponse](snapshotresponse.md): Your application’s response to a snapshot background task.

### Importing and exporting transferable items

- [importableFromServices(for:action:)](view/importablefromservices%28for_action_%29.md): Enables importing items from services, such as Continuity Camera on macOS.
- [exportableToServices(\_:)](view/exportabletoservices%28__%29.md): Exports items for consumption by shortcuts, quick actions, and services.
- [exportableToServices(\_:onEdit:)](view/exportabletoservices%28__onedit_%29.md): Exports read-write items for consumption by shortcuts, quick actions, and services.

### Importing and exporting using item providers

- [importsItemProviders(\_:onImport:)](view/importsitemproviders%28__onimport_%29.md): Enables importing item providers from services, such as Continuity Camera on macOS.
- [exportsItemProviders(\_:onExport:)](view/exportsitemproviders%28__onexport_%29.md): Exports a read-only item provider for consumption by shortcuts, quick actions, and services.
- [exportsItemProviders(\_:onExport:onEdit:)](view/exportsitemproviders%28__onexport_onedit_%29.md): Exports a read-write item provider for consumption by shortcuts, quick actions, and services.

## See Also

### Event handling

- [Gestures](gestures.md): Define interactions from taps, clicks, and swipes to fine-grained gestures.
- [Input events](input-events.md): Respond to input from a hardware device, like a keyboard or a Touch Bar.
- [Clipboard](clipboard.md): Enable people to move or duplicate items by issuing Copy and Paste commands.
- [Drag and drop](drag-and-drop.md): Enable people to move or duplicate items by dragging them from one location to another.
- [Focus](focus.md): Identify and control which visible object responds to user interaction.
