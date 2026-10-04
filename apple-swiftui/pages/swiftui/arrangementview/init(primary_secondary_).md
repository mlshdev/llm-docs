> Snapshot-pinned source payload for Apple SwiftUI snapshot-8247613c923d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/arrangementview/init(primary:secondary:)

# init(primary:secondary:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ · macOS 27.1+ · tvOS 27.1+ · visionOS 27.1+ · watchOS 27.1+

Creates an arrangement view with a primary and secondary view.

## Declaration

```swift
nonisolated init(@ContentBuilder primary: () -> Primary, @ContentBuilder secondary: () -> Secondary)
```

## Parameters

- `primary`: The view to display as the primary content in the arrangement.
- `secondary`: The view to display as the secondary content in the arrangement.

## See Also

### Creating an arrangement view

- [init(\_:)](init%28__%29.md): Conforms when `Primary` is `ArrangementViewStyleConfiguration.Primary` and `Secondary` is `ArrangementViewStyleConfiguration.Secondary`. Creates an arrangement view from a style configuration.
- [ArrangementViewStyleConfiguration](../arrangementviewstyleconfiguration.md): The properties of an arrangement view used to create its custom style.
