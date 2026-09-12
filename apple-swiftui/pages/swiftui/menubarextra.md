> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/menubarextra](https://developer.apple.com/documentation/swiftui/menubarextra)

# MenuBarExtra

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 13.0+

A scene that renders itself as a persistent control in the system menu bar.

## Declaration

```swift
nonisolated struct MenuBarExtra<Label, Content> where Label : View, Content : View
```

<a id="overview"></a>

## Overview

Use a `MenuBarExtra` when you want to provide access to commonly used functionality, even when your app is not active.

```swift
@main
struct AppWithMenuBarExtra: App {
    @AppStorage("showMenuBarExtra") private var showMenuBarExtra = true

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        MenuBarExtra(
            "App Menu Bar Extra", systemImage: "star",
            isInserted: $showMenuBarExtra)
        {
            StatusMenu()
        }
    }
}
```

Or alternatively, to create a utility app that only shows in the menu bar.

```swift
@main
struct UtilityApp: App {
    var body: some Scene {
        MenuBarExtra("Utility App", systemImage: "hammer") {
            AppMenu()
        }
    }
}
```

An app that only shows in the menu bar will be automatically terminated if the user removes the extra from the menu bar.

For apps that only show in the menu bar, a common behavior is for the app to not display its icon in either the Dock or the application switcher. To enable this behavior, set the [LSUIElement](https://developer.apple.com/documentation/bundleresources/information-property-list/lsuielement) flag in your app’s [Information Property List](https://developer.apple.com/documentation/bundleresources/information-property-list) file to `true`.

For more complex or data rich menu bar extras, you can use the [window](menubarextrastyle/window.md) style, which displays a popover-like window from the menu bar icon that contains standard controls. You define the layout and contents of those controls with the content that you provide:

```swift
MenuBarExtra("Utility App", systemImage: "hammer") {
    ScrollView {
        LazyVGrid(...)
    }
}
.menuBarExtraStyle(.window)
```

## Topics

### Creating a menu bar extra

- [init(\_:content:)](menubarextra/init%28__content_%29.md): Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates a menu bar extra with a localized resource for a localized string to use as the label. The extra defines the primary scene of an `App`.
- [init(content:label:)](menubarextra/init%28content_label_%29.md): Creates a menu bar extra that will be displayed in the system menu bar, and defines the primary scene of an `App`.
- [init(\_:isInserted:content:)](menubarextra/init%28__isinserted_content_%29.md): Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates a menu bar extra with a localized resource for a localized string to use as the label. The item will be displayed in the system menu bar when the specified binding is set to `true`. If the user removes the item from the menu bar, the binding will be set to `false`.
- [init(isInserted:content:label:)](menubarextra/init%28isinserted_content_label_%29.md): Creates a menu bar extra. The item will be displayed in the system menu bar when the specified binding is set to `true`. If the user removes the item from the menu bar, the binding will be set to `false`.

### Creating a menu bar extra with an image

- [init(\_:image:content:)](menubarextra/init%28__image_content_%29.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates a menu bar extra with an image to use as the items label. The provided title will be used by the accessibility system.
- [init(\_:image:isInserted:content:)](menubarextra/init%28__image_isinserted_content_%29.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates a menu bar extra with an image to use as the items label. The provided title will be used by the accessibility system.
- [init(\_:systemImage:content:)](menubarextra/init%28__systemimage_content_%29.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates a menu bar extra with a system image to use as the items label. The provided title will be used by the accessibility system.
- [init(\_:systemImage:isInserted:content:)](menubarextra/init%28__systemimage_isinserted_content_%29.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates a menu bar extra with a system image to use as the items label. The provided title will be used by the accessibility system.

## Relationships

### Conforms To

- [Scene](scene.md)

## See Also

### Creating a menu bar extra

- [menuBarExtraStyle(\_:)](scene/menubarextrastyle%28__%29.md): Sets the style for menu bar extra created by this scene.
- [MenuBarExtraStyle](menubarextrastyle.md): A specification for the appearance and behavior of a menu bar extra scene.
