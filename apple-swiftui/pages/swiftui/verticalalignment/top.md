> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/verticalalignment/top](https://developer.apple.com/documentation/swiftui/verticalalignment/top)

# top

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A guide that marks the top edge of the view.

## Declaration

```swift
static let top: VerticalAlignment
```

## Mentioned In

- [Laying out a simple view](../laying-out-a-simple-view.md)

<a id="discussion"></a>

## Discussion

Use this guide to align the top edges of views:

![A box that contains the word, Top. A horizontal](https://developer.apple.com/images/com.apple.SwiftUI/VerticalAlignment-top-1-iOS@2x.png)

The following code generates the image above using an [HStack](../hstack.md):

```swift
struct VerticalAlignmentTop: View {
    var body: some View {
        HStack(alignment: .top, spacing: 0) {
            Color.red.frame(height: 1)
            Text("Top").font(.title).border(.gray)
            Color.red.frame(height: 1)
        }
    }
}
```

## See Also

### Getting guides

- [center](center.md): A guide that marks the vertical center of the view.
- [bottom](bottom.md): A guide that marks the bottom edge of the view.
- [firstTextBaseline](firsttextbaseline.md): A guide that marks the top-most text baseline in a view.
- [lastTextBaseline](lasttextbaseline.md): A guide that marks the bottom-most text baseline in a view.
