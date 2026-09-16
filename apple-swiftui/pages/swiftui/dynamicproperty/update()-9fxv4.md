> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/dynamicproperty/update()-9fxv4

# update()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Updates the underlying value of the stored value.

## Declaration

```swift
mutating func update()
```

<a id="discussion"></a>

## Discussion

SwiftUI calls this function before rendering a view’s [body](../view/body-8kl5o.md) to ensure the view has the most recent value.
