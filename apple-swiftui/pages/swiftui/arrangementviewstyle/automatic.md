> Snapshot-pinned source payload for Apple SwiftUI snapshot-8247613c923d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/arrangementviewstyle/automatic

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ · macOS 27.1+ · tvOS 27.1+ · visionOS 27.1+ · watchOS 27.1+

The default arrangement view style.

## Declaration

```swift
@export(implementation) nonisolated static var automatic: AutomaticArrangementViewStyle { get }
```

<a id="discussion"></a>

## Discussion

Using this style, the arrangement view resolves to a [SplitArrangementViewStyle](../splitarrangementviewstyle.md).

## See Also

### Getting arrangement view styles

- [overlay](overlay.md): Conforms when `Self` is `OverlayArrangementViewStyle`. An arrangement view style that layers the primary view over the secondary view in z-order.
- [split](split.md): Conforms when `Self` is `SplitArrangementViewStyle`. An arrangement view style that places the primary and secondary views side by side along one or more axes.
