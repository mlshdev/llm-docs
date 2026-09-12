> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/button/init(role:action:)](https://developer.apple.com/documentation/swiftui/button/init(role:action:))

# init(role:action:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a button that displays a default label.

## Declaration

```swift
@preconcurrency nonisolated init(role: ButtonRole, action: @escaping @MainActor () -> Void)
```

## Parameters

- `role`: A semantic role describing the button.
- `action`: The action to perform when the user triggers the button.

<a id="discussion"></a>

## Discussion

For example, the following view would display a button with a ‘x’ symbol in the toolbar.

```swift
struct NewContactSheet: View {
    var body: some View {
        NavigationStack {
            NewContactEditor()
                .toolbar {
                    Button(role: .cancel) {
                        dismissView()
                    }
                }
        }
    }
}
```
