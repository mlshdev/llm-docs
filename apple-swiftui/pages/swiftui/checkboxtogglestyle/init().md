> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/checkboxtogglestyle/init()

# init()

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates a checkbox toggle style.

## Declaration

```swift
nonisolated init()
```

<a id="discussion"></a>

## Discussion

Don’t call this initializer directly. Instead, use the [checkbox](../togglestyle/checkbox.md) static variable to create this style:

```swift
Toggle("Close windows when quitting an app", isOn: $doesClose)
    .toggleStyle(.checkbox)
```
