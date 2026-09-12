> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbarrole](https://developer.apple.com/documentation/swiftui/toolbarrole)

# ToolbarRole

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The purpose of content that populates the toolbar.

## Declaration

```swift
struct ToolbarRole
```

<a id="overview"></a>

## Overview

A toolbar role provides a description of the purpose of content that populates the toolbar. The purpose of the content influences how a toolbar renders its content. For example, a [browser](toolbarrole/browser.md) will automatically leading align the title of a toolbar in iPadOS.

Provide this type to the [toolbarRole(\_:)](view/toolbarrole%28__%29.md) modifier:

```swift
ContentView()
    .navigationTitle("Browser")
    .toolbarRole(.browser)
    .toolbar {
        ToolbarItem(placement: .primaryAction) {
            AddButton()
        }
     }
```

## Topics

### Behavior-specific roles

- [browser](toolbarrole/browser.md): The browser role.
- [editor](toolbarrole/editor.md): The editor role.
- [navigationStack](toolbarrole/navigationstack.md): The navigationStack role.

### Automatic roles

- [automatic](toolbarrole/automatic.md): The automatic role.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying the role of toolbar content

- [toolbarRole(\_:)](view/toolbarrole%28__%29.md): Configures the semantic role for the content populating the toolbar.
