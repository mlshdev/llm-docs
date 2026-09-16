> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/environmentvalues/splitarrangementaxis

# splitArrangementAxis

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

The axis of the split for a view within a split arrangement view.

## Declaration

```swift
var splitArrangementAxis: Axis? { get set }
```

<a id="discussion"></a>

## Discussion

Use this value to read the axis that a split arrangement is using to place its views. Views can adapt their layout or appearance based on whether the split is horizontal or vertical. The value is `nil` when the view is not contained within a split arrangement view.

```swift
struct DetailsView: View {
    @Environment(\.splitArrangementAxis) var axis

    var body: some View {
        let layout: AnyLayout = axis == .horizontal
            ? AnyLayout(VStackLayout())
            : AnyLayout(HStackLayout())
        layout {
            Artwork()
            Metadata()
        }
    }
}
```

## See Also

### Arrangement views

- [overlayArrangementZIndex](overlayarrangementzindex.md): Beta. The z-index for a view within an overlay arrangement view.
