> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/togglestyle/configuration

# ToggleStyle.Configuration

**Framework:** SwiftUI  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The properties of a toggle instance.

## Declaration

```swift
typealias Configuration = ToggleStyleConfiguration
```

<a id="discussion"></a>

## Discussion

You receive a `configuration` parameter of this type — which is an alias for the [ToggleStyleConfiguration](../togglestyleconfiguration.md) type — when you implement the required [makeBody(configuration:)](makebody%28configuration_%29.md) method in a custom toggle style implementation.

## See Also

### Creating custom toggle styles

- [makeBody(configuration:)](makebody%28configuration_%29.md): Creates a view that represents the body of a toggle.
- [ToggleStyleConfiguration](../togglestyleconfiguration.md): The properties of a toggle instance.
- [Body](body.md): A view that represents the appearance and interaction of a toggle.
