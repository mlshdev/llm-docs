> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionos/creating-a-new-swiftui-window-in-visionos](https://developer.apple.com/documentation/visionos/creating-a-new-swiftui-window-in-visionos)

# Creating SwiftUI windows in visionOS

**Kind:** Sample Code  
**Availability:** visionOS 2.0+ · Xcode 16.0+

Display and manage multiple SwiftUI windows in your visionOS app.

<a id="Overview"></a>

## Overview

This sample code project demonstrates how to open a new SwiftUI view and a separate window group to manage multiple windows, assigning a unique `id` to each newly created window. In the sample, the app displays a SwiftUI window with a [Button](https://developer.apple.com/documentation/swiftui/button) that a person can tap to open a new window view, as the following image illustrates:

![](https://developer.apple.com/images/com.apple.visionOS/sample-new-window-1-main-view.png)

<a id="Create-a-variable-to-track-window-IDs"></a>

### Create a variable to track window IDs

To manage multiple windows for an app, the app uses the [Identifiable](https://developer.apple.com/documentation/swift/identifiable) protocol to establish an ID value for each new window view.

```swift
import SwiftUI

struct NewWindowID: Identifiable {
    /// The unique identifier for the window.
    var id: Int
}

```

<a id="Add-a-button-for-creating-windows"></a>

### Add a button for creating windows

The `OpenNewWindow` view creates and displays a SwiftUI button. When a person taps the button, a new SwiftUI window appears.

```swift
import SwiftUI

struct OpenWindowView: View {
    /// The `id` value that the main view uses to identify the SwiftUI window.
    @State var nextWindowID = NewWindowID(id: 1)

    /// The environment value for getting an `OpenWindowAction` instance.
    @Environment(\.openWindow) private var openWindow

    var body: some View {
        // Create a button in the center of the window that
        // launches a new SwiftUI window.
        Button("Open a new window") {
            // Open a new window with the assigned ID.
            openWindow(value: nextWindowID.id)

            // Increment the `id` value of the `nextWindowID` by 1.
            nextWindowID.id += 1
        }
    }
}
```

The [openWindow](https://developer.apple.com/documentation/swiftui/environmentvalues/openwindow) instance property invokes a new window view in an app’s environment.

<a id="Create-a-view-for-the-new-window"></a>

### Create a view for the new window

The `NewWindow` view displays the window’s `id` value in a [Text](https://developer.apple.com/documentation/swiftui/text) instance.

```swift
import SwiftUI

struct NewWindow: View {
    /// Acts as the main identifier for the new view.
    let id: Int
    
    var body: some View {
        // Create a text view that displays
        // the window's `id` value.
        Text("New window number \(id)")
    }
}
```

<a id="Add-new-windows-to-a-window-group"></a>

### Add new windows to a window group

The `EntryPoint` provides a specific [WindowGroup](https://developer.apple.com/documentation/swiftui/windowgroup) to create a window view and add the new window to the app’s main view.

```swift
import SwiftUI

@main
struct EntryPoint: App {
    var body: some Scene {
        WindowGroup {
            MainView()
        }
        
        /// A `WindowGroup` for each newly created window in the app's main view.
        WindowGroup("New Window", for: NewWindowID.ID.self) { $id in
            NewWindow(id: id ?? 1)
        }
    }
}
```

<a id="See-Also"></a>

## See Also

<a id="Related-samples"></a>

#### Related samples

- [Creating 3D models as movable windows](creating-a-volumetric-window-in-visionos.md): Display 3D content with a volumetric window that people can move.
