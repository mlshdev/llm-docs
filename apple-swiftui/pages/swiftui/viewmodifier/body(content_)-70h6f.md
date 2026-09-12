> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/viewmodifier/body(content:)-70h6f](https://developer.apple.com/documentation/swiftui/viewmodifier/body(content:)-70h6f)

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
