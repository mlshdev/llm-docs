> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/buttonrole/confirm

# confirm

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A role that indicates a button that confirms an operation.

## Declaration

```swift
static let confirm: ButtonRole
```

<a id="discussion"></a>

## Discussion

The following view would display a confirm button in the toolbar.

```swift
struct NewContactSheet: View {
    var body: some View {
        NavigationStack {
            NewContactEditor()
                .toolbar {
                    Button(role: .confirm) {
                        saveChanges()
                    }
                }
        }
    }
}
```
