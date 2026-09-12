> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/transaction/dismissbehavior](https://developer.apple.com/documentation/swiftui/transaction/dismissbehavior)

# dismissBehavior

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The behavior for how windows will dismiss programmatically when used in conjunction with [DismissWindowAction](../dismisswindowaction.md).

## Declaration

```swift
var dismissBehavior: DismissBehavior { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `.interactive`.

You can use this property to dismiss windows which may be showing a modal presentation by using the `.destructive` value:

```swift
struct DismissWindowButton: View {
    @Environment(\.dismissWindow) private var dismissWindow

    var body: some View {
        Button("Close Auxiliary Window") {
            withTransaction(\.dismissBehavior, .destructive) {
                dismissWindow(id: "auxiliary")
            }
        }
    }
}
```
