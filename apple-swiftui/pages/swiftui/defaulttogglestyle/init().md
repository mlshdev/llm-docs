> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/defaulttogglestyle/init()

# init()

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a default toggle style.

## Declaration

```swift
nonisolated init()
```

<a id="discussion"></a>

## Discussion

Don’t call this initializer directly. Instead, use the [automatic](../togglestyle/automatic.md) static variable to create this style:

```swift
Toggle("Enhance Sound", isOn: $isEnhanced)
    .toggleStyle(.automatic)
```
