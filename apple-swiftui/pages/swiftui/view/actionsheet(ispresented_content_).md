> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/actionsheet(ispresented:content:)](https://developer.apple.com/documentation/swiftui/view/actionsheet(ispresented:content:))

# actionSheet(isPresented:content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Presents an action sheet when a given condition is true.

> Use [confirmationDialog(\_:isPresented:titleVisibility:actions:message:)](https://developer.apple.com/documentation/swiftui/view/confirmationdialog%28_:ispresented:titlevisibility:actions:message:%29-2s7pz) instead.

## Declaration

```swift
nonisolated func actionSheet(isPresented: Binding<Bool>, content: () -> ActionSheet) -> some View

```

## Parameters

- `isPresented`: A binding to a Boolean value that determines whether to present the action sheet that you create in the modifier’s `content` closure. When the user presses or taps the sheet’s default action button the system sets this value to `false` dismissing the sheet.
- `content`: A closure returning the `ActionSheet` to present.

<a id="discussion"></a>

## Discussion

In the example below, a button conditionally presents an action sheet depending upon the value of a bound Boolean variable. When the Boolean value is set to `true`, the system displays an action sheet with both destructive and default actions:

```swift
struct ConfirmEraseItems: View {
    @State private var isShowingSheet = false
    var body: some View {
        Button("Show Action Sheet", action: {
            isShowingSheet = true
        })
        .actionSheet(isPresented: $isShowingSheet) {
            ActionSheet(
                title: Text("Permanently erase the items in the Trash?"),
                message: Text("You can't undo this action."),
                buttons:[
                    .destructive(Text("Empty Trash"),
                                 action: emptyTrashAction),
                    .cancel()
                ]
            )}
    }

    func emptyTrashAction() {
        // Handle empty trash action.
    }
}
```

![An action sheet with a title and message showing the use of default and destructive button types.](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-ActionSheetisPresentedContent@2x.png)

> **Note**

> In regular size classes in iOS, the system renders alert sheets as a popover that the user dismisses by tapping anywhere outside the popover, rather than displaying the default dismiss button.

## See Also

### View presentation modifiers

- [actionSheet(item:content:)](actionsheet%28item_content_%29.md): Deprecated. Presents an action sheet using the given item as a data source for the sheet’s content.
- [alert(isPresented:content:)](alert%28ispresented_content_%29.md): Deprecated. Presents an alert to the user.
- [alert(item:content:)](alert%28item_content_%29.md): Deprecated. Presents an alert to the user.
