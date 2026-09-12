> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/popover(item:attachmentanchor:arrowedge:content:)](https://developer.apple.com/documentation/swiftui/view/popover(item:attachmentanchor:arrowedge:content:))

# popover(item:attachmentAnchor:arrowEdge:content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

Presents a popover using the given item as a data source for the popover’s content.

## Declaration

```swift
@export(implementation) nonisolated func popover<Item, Content>(item: Binding<Item?>, attachmentAnchor: PopoverAttachmentAnchor = .rect(.bounds), arrowEdge: Edge? = nil, @ContentBuilder content: @escaping (Item) -> Content) -> some View where Item : Identifiable, Content : View

```

## Parameters

- `item`: A binding to an optional source of truth for the popover. When `item` is non-`nil`, the system passes the contents to the modifier’s closure. You use this content to populate the fields of a popover that you create that the system displays to the user. If `item` changes, the system dismisses the currently presented popover and replaces it with a new popover using the same process.
- `attachmentAnchor`: The positioning anchor that defines the attachment point of the popover. The default is [bounds](../anchor/source/bounds.md).
- `arrowEdge`: The edge of the `attachmentAnchor` that defines the location of the popover’s arrow. The default is `nil`, which results in the system allowing any arrow edge.
- `content`: A closure returning the content of the popover.

<a id="discussion"></a>

## Discussion

Use this method when you need to present a popover with content from a custom data source. The example below uses data in the `PopoverModel` structure to populate the view in the `content` closure that the popover displays to the user:

```swift
struct PopoverExample: View {
    @State private var popover: PopoverModel?

    var body: some View {
        Button("Show Popover") {
            popover = PopoverModel(message: "Custom Message")
        }
        .popover(item: $popover, arrowEdge: .bottom) { detail in
            Text("\(detail.message)")
                .padding()
        }
    }
}

struct PopoverModel: Identifiable {
    var id: String { message }
    let message: String
}
```

![A screenshot showing a popover that says Custom Message hovering](https://developer.apple.com/images/com.apple.SwiftUI/View-popover-2@2x.png)

> **Important**

> Prior to iOS 18.1, the popover arrow edge was not respected. Apps that are re-compiled with the iOS 18.1 or later SDK or visionOS 2.1 or later SDK and run on iOS 18.1 or later or visionOS 2.1 or later have the arrow edge respected. On macOS, arrow edge has always been respected. Alternatively, to allow the system to choose the best orientation of the popover’s arrow, use the `View/popover(item:attachmentAnchor:content:)` variant.

<a id="Breakthrough-effect"></a>

### Breakthrough effect

In visionOS, most system presentations appear with a breakthrough effect by default. To change how the enclosing presentation breaks through content occluding it, use [presentationBreakthroughEffect(\_:)](presentationbreakthrougheffect%28__%29.md), like in the following example:

```swift
.popover(item: $popover) { detail in
    Text("\(detail.message)")
        .padding()
        .presentationBreakthroughEffect(.prominent)
}
```

## See Also

### Showing a sheet, cover, or popover

- [sheet(isPresented:onDismiss:content:)](sheet%28ispresented_ondismiss_content_%29.md): Presents a sheet when a binding to a Boolean value that you provide is true.
- [sheet(item:onDismiss:content:)](sheet%28item_ondismiss_content_%29.md): Presents a sheet using the given item as a data source for the sheet’s content.
- [fullScreenCover(isPresented:onDismiss:content:)](fullscreencover%28ispresented_ondismiss_content_%29.md): Presents a modal view that covers as much of the screen as possible when binding to a Boolean value you provide is true.
- [fullScreenCover(item:onDismiss:content:)](fullscreencover%28item_ondismiss_content_%29.md): Presents a modal view that covers as much of the screen as possible using the binding you provide as a data source for the sheet’s content.
- [popover(isPresented:attachmentAnchor:arrowEdge:content:)](popover%28ispresented_attachmentanchor_arrowedge_content_%29.md): Presents a popover when a given condition is true.
- [PopoverAttachmentAnchor](../popoverattachmentanchor.md): An attachment anchor for a popover.
