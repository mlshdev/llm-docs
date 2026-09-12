> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/sheet(ispresented:ondismiss:content:)](https://developer.apple.com/documentation/swiftui/view/sheet(ispresented:ondismiss:content:))

# sheet(isPresented:onDismiss:content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Presents a sheet when a binding to a Boolean value that you provide is true.

## Declaration

```swift
nonisolated func sheet<Content>(isPresented: Binding<Bool>, onDismiss: (() -> Void)? = nil, @ContentBuilder content: @escaping () -> Content) -> some View where Content : View

```

## Parameters

- `isPresented`: A binding to a Boolean value that determines whether to present the sheet that you create in the modifier’s `content` closure.
- `onDismiss`: The closure to execute when dismissing the sheet.
- `content`: A closure that returns the content of the sheet.

<a id="discussion"></a>

## Discussion

Use this method when you want to present a modal view to the user when a Boolean value you provide is true. The example below displays a modal view of the mockup for a software license agreement when the user toggles the `isShowingSheet` variable by clicking or tapping on the “Show License Agreement” button:

```swift
struct ShowLicenseAgreement: View {
    @State private var isShowingSheet = false
    var body: some View {
        Button(action: {
            isShowingSheet.toggle()
        }) {
            Text("Show License Agreement")
        }
        .sheet(isPresented: $isShowingSheet,
               onDismiss: didDismiss) {
            VStack {
                Text("License Agreement")
                    .font(.title)
                    .padding(50)
                Text("""
                        Terms and conditions go here.
                    """)
                    .padding(50)
                Button("Dismiss",
                       action: { isShowingSheet.toggle() })
            }
        }
    }

    func didDismiss() {
        // Handle the dismissing action.
    }
}
```

![A screenshot of a full-screen modal sheet showing the mockup of a](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-SheetIsPresentingContent@2x.png)

In vertically compact environments, such as iPhone in landscape orientation, a sheet presentation automatically adapts to appear as a full-screen cover. Use the [presentationCompactAdaptation(\_:)](presentationcompactadaptation%28__%29.md) or [presentationCompactAdaptation(horizontal:vertical:)](presentationcompactadaptation%28horizontal_vertical_%29.md) modifier to override this behavior.

<a id="Breakthrough-effect"></a>

### Breakthrough effect

In visionOS, most system presentations appear with a breakthrough effect by default. To change how the enclosing presentation breaks through content occluding it, use [presentationBreakthroughEffect(\_:)](presentationbreakthrougheffect%28__%29.md), like in the following example:

```swift
.sheet(isPresented: $isShowingSheet,
       onDismiss: didDismiss) {
    VStack {
        Text("License Agreement")
            .font(.title)
            .padding(50)
        Text("""
                Terms and conditions go here.
            """)
            .padding(50)
        Button("Dismiss",
               action: { isShowingSheet.toggle() })
    }
    .presentationBreakthroughEffect(.prominent)
}
```

> **Note**

> Passing a `.none` value for a sheet has no effect.

## See Also

### Showing a sheet, cover, or popover

- [sheet(item:onDismiss:content:)](sheet%28item_ondismiss_content_%29.md): Presents a sheet using the given item as a data source for the sheet’s content.
- [fullScreenCover(isPresented:onDismiss:content:)](fullscreencover%28ispresented_ondismiss_content_%29.md): Presents a modal view that covers as much of the screen as possible when binding to a Boolean value you provide is true.
- [fullScreenCover(item:onDismiss:content:)](fullscreencover%28item_ondismiss_content_%29.md): Presents a modal view that covers as much of the screen as possible using the binding you provide as a data source for the sheet’s content.
- [popover(item:attachmentAnchor:arrowEdge:content:)](popover%28item_attachmentanchor_arrowedge_content_%29.md): Presents a popover using the given item as a data source for the popover’s content.
- [popover(isPresented:attachmentAnchor:arrowEdge:content:)](popover%28ispresented_attachmentanchor_arrowedge_content_%29.md): Presents a popover when a given condition is true.
- [PopoverAttachmentAnchor](../popoverattachmentanchor.md): An attachment anchor for a popover.
