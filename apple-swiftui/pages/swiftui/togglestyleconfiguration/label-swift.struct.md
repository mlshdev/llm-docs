> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/togglestyleconfiguration/label-swift.struct

# ToggleStyleConfiguration.Label

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type-erased label of a toggle.

## Declaration

```swift
@MainActor @preconcurrency struct Label
```

<a id="overview"></a>

## Overview

SwiftUI provides a value of this type — which is a [View](../view.md) type — as the [label](label-swift.property.md) to your custom toggle style implementation. Use the label to help define the appearance of the toggle.

## Relationships

### Conforms To

- [View](../view.md)

## See Also

### Getting the label view

- [label](label-swift.property.md): A view that describes the effect of switching the toggle between states.
