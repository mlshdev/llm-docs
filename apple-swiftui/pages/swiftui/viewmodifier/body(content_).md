> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/viewmodifier/body(content:)

# body(content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Gets the current body of the caller.

## Declaration

```swift
@ContentBuilder @MainActor @preconcurrency func body(content: Self.Content) -> Self.Body
```

<a id="discussion"></a>

## Discussion

`content` is a proxy for the view that will have the modifier represented by `Self` applied to it.

## Default Implementations

### ViewModifier Implementations

- [body(content:)](body%28content_%29-70h6f.md): Conforms when `Body` is `Never`. Gets the current body of the caller.

## See Also

### Creating a view modifier

- [Body](body.md): The type of view representing the body.
- [ViewModifier.Content](content.md): The content view type passed to `body()`.
