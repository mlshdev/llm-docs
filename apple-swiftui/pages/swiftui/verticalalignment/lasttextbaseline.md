> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/verticalalignment/lasttextbaseline](https://developer.apple.com/documentation/swiftui/verticalalignment/lasttextbaseline)

# lastTextBaseline

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A guide that marks the bottom-most text baseline in a view.

## Declaration

```swift
static let lastTextBaseline: VerticalAlignment
```

<a id="discussion"></a>

## Discussion

Use this guide to align with the baseline of the bottom-most text in a view. The guide aligns with the bottom of a view that contains no text.

![A box that contains the text, Last Text Baseline.](https://developer.apple.com/images/com.apple.SwiftUI/VerticalAlignment-lastTextBaseline-1-iOS@2x.png)

The following code generates the image above using an [HStack](../hstack.md):

```swift
struct VerticalAlignmentLastTextBaseline: View {
    var body: some View {
        HStack(alignment: .lastTextBaseline, spacing: 0) {
            Color.red.frame(height: 1)
            Text("Last Text Baseline").font(.title).border(.gray)
            Color.red.frame(height: 1)
        }
    }
}
```

## See Also

### Getting guides

- [top](top.md): A guide that marks the top edge of the view.
- [center](center.md): A guide that marks the vertical center of the view.
- [bottom](bottom.md): A guide that marks the bottom edge of the view.
- [firstTextBaseline](firsttextbaseline.md): A guide that marks the top-most text baseline in a view.
