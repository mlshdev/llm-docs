> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/alert(ispresented:content:)](https://developer.apple.com/documentation/swiftui/view/alert(ispresented:content:))

# alert(isPresented:content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Presents an alert to the user.

> Use [alert(\_:isPresented:actions:message:)](https://developer.apple.com/documentation/swiftui/view/alert%28_:ispresented:actions:message:%29-6awwp) instead.

## Declaration

```swift
nonisolated func alert(isPresented: Binding<Bool>, content: () -> Alert) -> some View

```

## Parameters

- `isPresented`: A binding to a Boolean value that determines whether to present the alert that you create in the modifier’s `content` closure. When the user presses or taps OK the system sets `isPresented` to `false` which dismisses the alert.
- `content`: A closure returning the alert to present.

<a id="discussion"></a>

## Discussion

Use this method when you need to show an alert to the user. The example below displays an alert that is shown when the user toggles a Boolean value that controls the presentation of the alert:

```swift
struct OrderCompleteAlert: View {
    @State private var isPresented = false
    var body: some View {
        Button("Show Alert", action: {
            isPresented = true
        })
        .alert(isPresented: $isPresented) {
            Alert(title: Text("Order Complete"),
                  message: Text("Thank you for shopping with us."),
                  dismissButton: .default(Text("OK")))
        }
    }
}
```

![An alert whose title reads Order Complete, with the message, Thank you for shopping with us placed underneath. The alert also includes an OK button for dismissing the alert.](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-AlertIsPresentedContent@2x.png)

## See Also

### View presentation modifiers

- [actionSheet(isPresented:content:)](actionsheet%28ispresented_content_%29.md): Deprecated. Presents an action sheet when a given condition is true.
- [actionSheet(item:content:)](actionsheet%28item_content_%29.md): Deprecated. Presents an action sheet using the given item as a data source for the sheet’s content.
- [alert(item:content:)](alert%28item_content_%29.md): Deprecated. Presents an alert to the user.
