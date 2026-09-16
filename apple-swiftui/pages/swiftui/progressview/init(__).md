> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/progressview/init(_:)

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a progress view for showing indeterminate progress that generates its label from a localized string resource.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource) where Label == Text
```

## Parameters

- `titleResource`: Text resource for the progress view’s localized title that describes the task in progress.

<a id="discussion"></a>

## Discussion

This initializer creates a [Text](../text.md) view on your behalf. See [Text](../text.md) for more information about localizing strings. To initialize a indeterminate progress view with a string variable, use the corresponding initializer that takes a `StringProtocol` instance.
