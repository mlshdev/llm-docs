> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/view/toolbartitledisplaymode(_:)

# toolbarTitleDisplayMode(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Configures the toolbar title display mode for this view.

## Declaration

```swift
nonisolated func toolbarTitleDisplayMode(_ mode: ToolbarTitleDisplayMode) -> some View

```

<a id="discussion"></a>

## Discussion

Use this modifier to override the default toolbar title display mode.

```swift
NavigationStack {
    ContentView()
        .toolbarTitleDisplayMode(.inlineLarge)
}
```

See [ToolbarTitleDisplayMode](../toolbartitledisplaymode.md) for more information on the different kinds of display modes. This modifier has no effect on macOS.

## See Also

### Configuring the toolbar title display mode

- [ToolbarTitleDisplayMode](../toolbartitledisplaymode.md): A type that defines the behavior of title of a toolbar.
