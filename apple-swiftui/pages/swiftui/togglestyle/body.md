> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/togglestyle/body

# Body

**Framework:** SwiftUI  
**Kind:** Associated Type  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A view that represents the appearance and interaction of a toggle.

## Declaration

```swift
associatedtype Body : View
```

<a id="discussion"></a>

## Discussion

SwiftUI infers this type automatically based on the [View](../view.md) instance that you return from your implementation of the [makeBody(configuration:)](makebody%28configuration_%29.md) method.

## See Also

### Creating custom toggle styles

- [makeBody(configuration:)](makebody%28configuration_%29.md): Creates a view that represents the body of a toggle.
- [ToggleStyleConfiguration](../togglestyleconfiguration.md): The properties of a toggle instance.
- [ToggleStyle.Configuration](configuration.md): The properties of a toggle instance.
