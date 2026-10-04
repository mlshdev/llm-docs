> Snapshot-pinned source payload for Apple SwiftUI snapshot-8247613c923d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/environmentvalues/overlayarrangementzindex

# overlayArrangementZIndex

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ · macOS 27.1+ · tvOS 27.1+ · visionOS 27.1+ · watchOS 27.1+

The z-index for a view within an overlay arrangement view.

## Declaration

```swift
var overlayArrangementZIndex: Int { get set }
```

<a id="discussion"></a>

## Discussion

Use this value to read the z-ordering of a view when it is placed in an overlay arrangement. Views with a higher z-index are rendered on top of views with a lower z-index.

```swift
struct PlayerView: View {
    @Environment(\.overlayArrangementZIndex) var zIndex

    var body: some View {
        VideoPlayerControls()
            .opacity(zIndex == 0 ? 1.0 : 0.5)
    }
}
```

## See Also

### Arrangement views

- [splitArrangementAxis](splitarrangementaxis.md): The axis of the split for a view within a split arrangement view.
