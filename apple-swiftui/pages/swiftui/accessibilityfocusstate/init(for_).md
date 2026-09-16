> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/accessibilityfocusstate/init(for:)

# init(for:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a new accessibility focus state for a Boolean value, using the accessibility technologies you specify.

## Declaration

```swift
init(for technologies: AccessibilityTechnologies) where Value == Bool
```

## Parameters

- `technologies`: One of the available [AccessibilityTechnologies](../accessibilitytechnologies.md).

## See Also

### Creating a focus state

- [init()](init%28%29.md): Creates a new accessibility focus state for a Boolean value.
