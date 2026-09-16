> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/dropdelegate/validatedrop(info:)-1hqfh

# validateDrop(info:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate that a drop containing items conforming to one of the expected types entered a view that accepts drops.

## Declaration

```swift
@MainActor @preconcurrency func validateDrop(info: DropInfo) -> Bool
```

<a id="discussion"></a>

## Discussion

Specify the expected types when you apply the drop modifier to the view. The default implementation returns `true`.
