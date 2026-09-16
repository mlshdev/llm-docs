> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/gaugestyle/makebody(configuration:)

# makeBody(configuration:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a view representing the body of a gauge.

## Declaration

```swift
@ContentBuilder @MainActor @preconcurrency func makeBody(configuration: Self.Configuration) -> Self.Body
```

## Parameters

- `configuration`: The properties to apply to the gauge instance.

<a id="discussion"></a>

## Discussion

The system calls this modifier on each instance of gauge within a view hierarchy where this style is the current gauge style.

## See Also

### Creating custom gauge styles

- [GaugeStyle.Configuration](configuration.md): The properties of a gauge instance.
- [Body](body.md): A view representing the body of a gauge.
