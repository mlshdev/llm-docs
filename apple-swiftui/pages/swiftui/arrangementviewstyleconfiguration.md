> Snapshot-pinned source payload for Apple SwiftUI snapshot-8247613c923d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/arrangementviewstyleconfiguration

# ArrangementViewStyleConfiguration

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ · macOS 27.1+ · tvOS 27.1+ · visionOS 27.1+ · watchOS 27.1+

The properties of an arrangement view used to create its custom style.

## Declaration

```swift
struct ArrangementViewStyleConfiguration
```

## Topics

### Structures

- [ArrangementViewStyleConfiguration.Primary](arrangementviewstyleconfiguration/primary-swift.struct.md): A type-erased view of the primary content of an arrangement view.
- [ArrangementViewStyleConfiguration.Secondary](arrangementviewstyleconfiguration/secondary-swift.struct.md): A type-erased view of the secondary content of an arrangement view.

### Instance Properties

- [primary](arrangementviewstyleconfiguration/primary-swift.property.md): The primary view of the arrangement.
- [secondary](arrangementviewstyleconfiguration/secondary-swift.property.md): The secondary view of the arrangement.

## See Also

### Creating an arrangement view

- [init(primary:secondary:)](arrangementview/init%28primary_secondary_%29.md): Creates an arrangement view with a primary and secondary view.
- [init(\_:)](arrangementview/init%28__%29.md): Conforms when `Primary` is `ArrangementViewStyleConfiguration.Primary` and `Secondary` is `ArrangementViewStyleConfiguration.Secondary`. Creates an arrangement view from a style configuration.
