> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/presentationcompactadaptation(horizontal:vertical:)](https://developer.apple.com/documentation/swiftui/view/presentationcompactadaptation(horizontal:vertical:))

# presentationCompactAdaptation(horizontal:vertical:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Specifies how to adapt a presentation to horizontally and vertically compact size classes.

## Declaration

```swift
nonisolated func presentationCompactAdaptation(horizontal horizontalAdaptation: PresentationAdaptation, vertical verticalAdaptation: PresentationAdaptation) -> some View

```

## Parameters

- `horizontalAdaptation`: The adaptation to use in a horizontally compact size class.
- `verticalAdaptation`: The adaptation to use in a vertically compact size class. In a size class that is both horizontally and vertically compact, SwiftUI uses the `verticalAdaptation` value.

<a id="discussion"></a>

## Discussion

Some presentations adapt their appearance depending on the context. For example, a popover presentation over a horizontally-compact view uses a sheet appearance by default. Use this modifier to indicate a custom adaptation preference.

```swift
struct ContentView: View {
    @State private var showInfo = false

    var body: some View {
        Button("View Info") {
            showInfo = true
        }
        .popover(isPresented: $showInfo) {
            InfoView()
                .presentationCompactAdaptation(
                    horizontal: .popover,
                    vertical: .sheet)
        }
    }
}
```

If you want to specify the same adaptation for both dimensions, use the [presentationCompactAdaptation(\_:)](presentationcompactadaptation%28__%29.md) method instead.

## See Also

### Adapting a presentation size

- [presentationCompactAdaptation(\_:)](presentationcompactadaptation%28__%29.md): Specifies how to adapt a presentation to compact size classes.
- [PresentationAdaptation](../presentationadaptation.md): Strategies for adapting a presentation to a different size class.
- [presentationSizing(\_:)](presentationsizing%28__%29.md): Sets the sizing of the containing presentation.
- [PresentationSizing](../presentationsizing.md): A type that defines the size of the presentation content and how the presentation size adjusts to its content’s size changing.
- [PresentationSizingRoot](../presentationsizingroot.md): A proxy to a view provided to the presentation with a defined presentation size.
- [PresentationSizingContext](../presentationsizingcontext.md): Contextual information about a presentation.
