> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/buttonrole/close](https://developer.apple.com/documentation/swiftui/buttonrole/close)

# close

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A role that indicates a button that closes the current operation.

## Declaration

```swift
static let close: ButtonRole
```

<a id="discussion"></a>

## Discussion

Unlike a cancel operation, a close operation doesn’t lose progress for a user.

The following view would display a close button in the toolbar.

```swift
struct NewContactSheet: View {
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        NavigationStack {
            NewContactEditor()
                .toolbar {
                    Button(role: .close) {
                        dismiss()
                    }
                }
        }
    }
}
```
