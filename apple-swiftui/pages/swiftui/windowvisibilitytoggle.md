> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowvisibilitytoggle](https://developer.apple.com/documentation/swiftui/windowvisibilitytoggle)

# WindowVisibilityToggle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 15.0+

A specialized button for toggling the visibility of a window.

## Declaration

```swift
nonisolated struct WindowVisibilityToggle<Label> where Label : View
```

<a id="overview"></a>

## Overview

This is most commonly used in the main menu, where it can toggle the visibility of `Window` and `UtilityWindow` windows. The default label uses the title of the window in the format of “Show ” and “Hide ” depending on the current visibility of the window.

A keyboard shortcut can be assigned to this button.

The below example demonstrates how a main menu can be constructed with visibility buttons, replacing the default commands added by `Window` and `Utility Window`:

```swift
 struct PhotoEditor: App {
     var body: some Scene {
         WindowGroup {
             PhotoEditor()
         }
         .commands {
            CommandGroup(before: .textFormatting) {
                Section {
                    WindowVisibilityToggle(windowID: "formatting")
                        .keyboardShortcut("t", modifiers: [.command, .shift])

                    // other custom/image formatting controls
                }
            }
            CommandGroup(before: .sidebar) {
                Section {
                    WindowVisibilityToggle(windowID: "photo-library")

                    // other controls for showing/hiding UI
                }
            }
         }

         UtilityWindow("Formatting Style", id: "formatting") {
             TextAndImageFormatForm()
         }
         .commandsRemoved()

         Window("Photo Library", id: "photo-library") {
             PhotoInfoViewer()
         }
         .commandsRemoved()
     }
 }
```

## Topics

### Creating a window visibility toggle

- [init(windowID:)](windowvisibilitytoggle/init%28windowid_%29.md): Create a window visibility toggle to alter the visibility of a specific window.

### Supporting types

- [DefaultWindowVisibilityToggleLabel](defaultwindowvisibilitytogglelabel.md): The default label of a window visibility toggle.

## Relationships

### Conforms To

- [View](view.md)

## See Also

### Configuring window visibility

- [defaultLaunchBehavior(\_:)](scene/defaultlaunchbehavior%28__%29.md): Sets the default launch behavior for this scene.
- [restorationBehavior(\_:)](scene/restorationbehavior%28__%29.md): Sets the restoration behavior for this scene.
- [SceneLaunchBehavior](scenelaunchbehavior.md): The launch behavior for a scene.
- [SceneRestorationBehavior](scenerestorationbehavior.md): The restoration behavior for a scene.
- [persistentSystemOverlays(\_:)](scene/persistentsystemoverlays%28__%29.md): Sets the preferred visibility of the non-transient system views overlaying the app.
- [windowToolbarFullScreenVisibility(\_:)](view/windowtoolbarfullscreenvisibility%28__%29.md): Configures the visibility of the window toolbar when the window enters full screen mode.
- [WindowToolbarFullScreenVisibility](windowtoolbarfullscreenvisibility.md): The visibility of the window toolbar with respect to full screen mode.
