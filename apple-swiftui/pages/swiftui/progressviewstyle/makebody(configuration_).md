> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/progressviewstyle/makebody(configuration:)

# makeBody(configuration:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a view representing the body of a progress view.

## Declaration

```swift
@ContentBuilder @MainActor @preconcurrency func makeBody(configuration: Self.Configuration) -> Self.Body
```

## Parameters

- `configuration`: The properties of the progress view, such as its preferred progress type.

<a id="discussion"></a>

## Discussion

The view hierarchy calls this method for each progress view where this style is the current progress view style.

## See Also

### Creating custom progress view styles

- [ProgressViewStyle.Configuration](configuration.md): A type alias for the properties of a progress view instance.
- [Body](body.md): A view representing the body of a progress view.
