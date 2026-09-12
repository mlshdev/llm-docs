> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/previewable()](https://developer.apple.com/documentation/swiftui/previewable())

# Previewable()

**Framework:** SwiftUI  
**Kind:** Macro  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Tag allowing a dynamic property to appear inline in a preview.

## Declaration

```swift
@attached(peer) macro Previewable()
```

<a id="overview"></a>

## Overview

Tagging a variable declaration at root scope in your `#Preview` body with ‘@Previewable’ allows you to use dynamic properties inline in previews. The `#Preview` macro will generate an embedded SwiftUI view; tagged declarations become properties on the view, and all remaining statements form the view’s body.

```swift
#Preview("toggle") {
    @Previewable @State var toggled = true
    return Toggle("Loud Noises", isOn: $toggled)
}
```

It is an error to use `@Previewable` outside of a `#Preview` body closure.

## See Also

### Customizing a preview

- [PreviewModifier](previewmodifier.md): A type that defines an environment in which previews can appear.
- [PreviewModifierContent](previewmodifiercontent.md): The type-erased content of a preview.
