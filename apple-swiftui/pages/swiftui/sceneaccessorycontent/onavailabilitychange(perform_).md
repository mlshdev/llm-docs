> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sceneaccessorycontent/onavailabilitychange(perform:)](https://developer.apple.com/documentation/swiftui/sceneaccessorycontent/onavailabilitychange(perform:))

# onAvailabilityChange(perform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Defines a callback for observing the availability of `self`.

## Declaration

```swift
nonisolated func onAvailabilityChange(perform action: @escaping (Bool) -> Void) -> some SceneAccessoryContent

```

<a id="discussion"></a>

## Discussion

When the availability of a scene accessory changes, the specified closure will be called.

For example, you can include additional controls based on the availability:

```swift
struct RootView: View {
    @State private var isEnabled = false
    @State private var isAvailable = false
    var document: PresentationDocument

    var body: some View {
        PresentationDocumentView(document: document)
            .toolbar {
                if isAvailable {
                    // Include a toolbar button to enable the
                    // scene accessory when a display is available.
                    SecondaryDisplayToggle(isEnabled: $isEnabled)
                }
            }
            .sceneAccessory {
                ExternalNonInteractiveAccessory(
                    isEnabled: $isEnabled
                ) {
                    PresentationPreview(document: document)
                }
                .onAvailabilityChange { newValue in
                    isAvailable = newValue
                }
            }
    }
}
```
