> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/viewmodifier/body(content:)-70h6f

# body(content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Gets the current body of the caller.

## Declaration

```swift
@MainActor @preconcurrency func body(content: Self.Content) -> Self.Body
```

<a id="discussion"></a>

## Discussion

`content` is a proxy for the view that will have the modifier represented by `Self` applied to it.
