> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/view/toolbarrole(_:)

# toolbarRole(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Configures the semantic role for the content populating the toolbar.

## Declaration

```swift
nonisolated func toolbarRole(_ role: ToolbarRole) -> some View

```

## Parameters

- `role`: The role of the toolbar.

<a id="discussion"></a>

## Discussion

Use this modifier to configure the semantic role for content populating your app’s toolbar. SwiftUI uses this role when rendering the content of your app’s toolbar.

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

## See Also

### Specifying the role of toolbar content

- [ToolbarRole](../toolbarrole.md): The purpose of content that populates the toolbar.
