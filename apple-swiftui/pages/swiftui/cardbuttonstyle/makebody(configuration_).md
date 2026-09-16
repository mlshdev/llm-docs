> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/cardbuttonstyle/makebody(configuration:)

# makeBody(configuration:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** tvOS 14.0+

Creates a view that represents the body of a button.

## Declaration

```swift
nonisolated func makeBody(configuration: CardButtonStyle.Configuration) -> some View

```

## Parameters

- `configuration`: The properties of the button.

<a id="discussion"></a>

## Discussion

The system calls this method for each [Button](../button.md) instance in a view hierarchy in which [CardButtonStyle](../cardbuttonstyle.md) is the current button style.
