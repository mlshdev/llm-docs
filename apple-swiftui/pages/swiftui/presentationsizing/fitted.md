> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/presentationsizing/fitted](https://developer.apple.com/documentation/swiftui/presentationsizing/fitted)

# fitted

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The presentation sizing is dictated by the ideal size of the content

## Declaration

```swift
static var fitted: FittedPresentationSizing { get }
```

<a id="discussion"></a>

## Discussion

On macOS, presentations with `.fitted` sizing are user-resizable by default. Because of this, is best practice to define a presentation frame with any of the `frame` modifiers, either specifying a fixed frame or minimum/maximum bounds. If you specify a [fixedSize()](../view/fixedsize%28%29.md) or a frame with fixed dimensions on the content, the sheet will not be user resizable.

```swift
@State private var present = true

ContentView().sheet(isPresented: $present) {
  ScrollView {
    LazyVGrid(columns: columns) {
      ForEach(0x1f600...0x1f679, id: \.self) { value in
        Text(String(format: "%x", value))
        Text(emoji(value))
          .font(.largeTitle)
        }
      }
  }
  .presentationSizing(.fitted)
  .frame(
    minWidth: 200, idealWidth: 300, maxWidth: 500,
    minHeight: 100, maxHeight: 600)
}
```

To create a view that fits the view’s size in either the horizontal or vertical dimensions, see [fitted(horizontal:vertical:)](fitted%28horizontal_vertical_%29.md).

## See Also

### Getting built-in presentation size

- [automatic](automatic.md): Conforms when `Self` is `AutomaticPresentationSizing`. The default presentation sizing, appropriate for the platform.
- [form](form.md): Conforms when `Self` is `FormPresentationSizing`. The size is appropriate for forms and slightly less wide than`.page`
- [page](page.md): Conforms when `Self` is `PagePresentationSizing`. The size is roughly the size of a page of paper, appropriate for informational or compositional content.
