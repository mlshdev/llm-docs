> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/horizontalalignment/leading](https://developer.apple.com/documentation/swiftui/horizontalalignment/leading)

# leading

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A guide that marks the leading edge of the view.

## Declaration

```swift
static let leading: HorizontalAlignment
```

## Mentioned In

- [Building layouts with stack views](../building-layouts-with-stack-views.md)

<a id="discussion"></a>

## Discussion

Use this guide to align the leading edges of views. For a device that uses a left-to-right language, the leading edge is on the left:

![A box that contains the word, Leading. Vertical](https://developer.apple.com/images/com.apple.SwiftUI/HorizontalAlignment-leading-1-iOS@2x.png)

The following code generates the image above using a [VStack](../vstack.md):

```swift
struct HorizontalAlignmentLeading: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            Color.red.frame(width: 1)
            Text("Leading").font(.title).border(.gray)
            Color.red.frame(width: 1)
        }
    }
}
```

## See Also

### Getting guides

- [center](center.md): A guide that marks the horizontal center of the view.
- [trailing](trailing.md): A guide that marks the trailing edge of the view.
- [listRowSeparatorLeading](listrowseparatorleading.md): A guide marking the leading edge of a `List` row separator.
- [listRowSeparatorTrailing](listrowseparatortrailing.md): A guide marking the trailing edge of a `List` row separator.
