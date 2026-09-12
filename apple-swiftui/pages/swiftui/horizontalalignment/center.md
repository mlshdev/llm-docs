> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/horizontalalignment/center](https://developer.apple.com/documentation/swiftui/horizontalalignment/center)

# center

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A guide that marks the horizontal center of the view.

## Declaration

```swift
static let center: HorizontalAlignment
```

<a id="discussion"></a>

## Discussion

Use this guide to align the centers of views:

![A box that contains the word, Center. Vertical](https://developer.apple.com/images/com.apple.SwiftUI/HorizontalAlignment-center-1-iOS@2x.png)

The following code generates the image above using a [VStack](../vstack.md):

```swift
struct HorizontalAlignmentCenter: View {
    var body: some View {
        VStack(alignment: .center, spacing: 0) {
            Color.red.frame(width: 1)
            Text("Center").font(.title).border(.gray)
            Color.red.frame(width: 1)
        }
    }
}
```

## See Also

### Getting guides

- [leading](leading.md): A guide that marks the leading edge of the view.
- [trailing](trailing.md): A guide that marks the trailing edge of the view.
- [listRowSeparatorLeading](listrowseparatorleading.md): A guide marking the leading edge of a `List` row separator.
- [listRowSeparatorTrailing](listrowseparatortrailing.md): A guide marking the trailing edge of a `List` row separator.
