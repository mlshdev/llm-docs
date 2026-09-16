> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/buttontogglestyle/init()

# init()

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a button toggle style.

## Declaration

```swift
nonisolated init()
```

<a id="discussion"></a>

## Discussion

Don’t call this initializer directly. Instead, use the [button](../togglestyle/button.md) static variable to create this style:

```swift
Toggle(isOn: $isFlagged) {
    Label("Flag", systemImage: "flag.fill")
}
.toggleStyle(.button)
```
