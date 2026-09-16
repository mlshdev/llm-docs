> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/toolbartitledisplaymode

# ToolbarTitleDisplayMode

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type that defines the behavior of title of a toolbar.

## Declaration

```swift
struct ToolbarTitleDisplayMode
```

<a id="overview"></a>

## Overview

Use the [toolbarTitleDisplayMode(\_:)](view/toolbartitledisplaymode%28__%29.md) modifier to configure the title display behavior of your toolbar:

```swift
NavigationStack {
    ContentView()
        .toolbarTitleDisplayMode(.inlineLarge)
}
```

## Topics

### Getting display modes

- [automatic](toolbartitledisplaymode/automatic.md): The automatic mode.
- [inline](toolbartitledisplaymode/inline.md): The inline mode.
- [inlineLarge](toolbartitledisplaymode/inlinelarge.md): The inline large mode.
- [large](toolbartitledisplaymode/large.md): The large mode.

## See Also

### Configuring the toolbar title display mode

- [toolbarTitleDisplayMode(\_:)](view/toolbartitledisplaymode%28__%29.md): Configures the toolbar title display mode for this view.
