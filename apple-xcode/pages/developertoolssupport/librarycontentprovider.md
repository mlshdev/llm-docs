> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/librarycontentprovider](https://developer.apple.com/documentation/developertoolssupport/librarycontentprovider)

# LibraryContentProvider

**Framework:** DeveloperToolsSupport  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A source of Xcode library and code completion content.

## Declaration

```swift
protocol LibraryContentProvider
```

<a id="overview"></a>

## Overview

Xcode discovers implementations of the `LibraryContentProvider` protocol in your project or workspace and examines their contents for items that it can add to the Xcode library. Add views by implementing the content provider’s computed [views](librarycontentprovider/views.md) property, and returning an array of [LibraryItem](libraryitem.md) instances initialized with the views you want to publish:

```swift
struct LibraryViewContent: LibraryContentProvider {
    var views: [LibraryItem] {
        LibraryItem(MyView())
    }
}
```

Add view modifiers by implementing the [modifiers(base:)](librarycontentprovider/modifiers%28base_%29.md) method and similarly returning an array of library items initialized with the modifiers you want to publish. For view modifiers, you also specify the type to which the modifiers apply:

```swift
struct LibraryModifierContent: LibraryContentProvider {
    func modifiers(base: MyView) -> [LibraryItem] {
        LibraryItem(base.myModifier(value: MyValue()))
    }
}
```

For modifiers that you define in an extension to [View](https://developer.apple.com/documentation/swiftui/view), you can provide any view conformer as the `base`. For modifiers that you define on a particular view type, provide that type as the `base`.

## Topics

### Adding Views

- [views](librarycontentprovider/views.md): The SwiftUI views that you want to add to the Xcode library.

### Adding Modifiers

- [modifiers(base:)](librarycontentprovider/modifiers%28base_%29.md): Indicates a collection of SwiftUI view modifiers to add to the Xcode library.
- [ModifierBase](librarycontentprovider/modifierbase.md): A type to use as a base for modifier completions.

### Building Arrays

- [LibraryContentBuilder](librarycontentbuilder.md): A function builder for generating arrays of library items without requiring full array literal syntax.

## See Also

### Library customization

- [LibraryItem](libraryitem.md): A single item to add to the Xcode library.
