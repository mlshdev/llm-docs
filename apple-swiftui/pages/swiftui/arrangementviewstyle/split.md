> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/arrangementviewstyle/split

# split

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

An arrangement view style that places the primary and secondary views side by side along one or more axes.

## Declaration

```swift
@export(implementation) nonisolated static var split: SplitArrangementViewStyle { get }
```

<a id="discussion"></a>

## Discussion

The split arrangement adapts its layout axis based on the available size and size class. Use this style for experiences that display two distinct pieces of content simultaneously, such as a music player alongside its lyrics or a calculator with a conversion panel.

Constrain which axes the split supports using [axes(\_:)](../splitarrangementviewstyle/axes%28__%29.md).

## See Also

### Getting arrangement view styles

- [automatic](automatic.md): Beta. Conforms when `Self` is `AutomaticArrangementViewStyle`. The default arrangement view style.
- [overlay](overlay.md): Beta. Conforms when `Self` is `OverlayArrangementViewStyle`. An arrangement view style that layers the primary view over the secondary view in z-order.
