> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/supportsimageplayground](https://developer.apple.com/documentation/swiftui/environmentvalues/supportsimageplayground)

# supportsImagePlayground

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.4+

A Boolean value that indicates whether image generation is available on the current device.

## Declaration

```swift
var supportsImagePlayground: Bool { get }
```

<a id="discussion"></a>

## Discussion

The value of this property is `true` when the current device supports image generation. A device might not support this feature if the device or system doesn’t meet the hardware requirements or the necessary environment (for example runs in a supported language) to generate the images.

Read this property from the environment to determine if your app can use the `imagePlaygroundSheet`.

```swift
struct ImageGenerationPresentingView: View {
    @Environment(\.supportsImagePlayground) private var supportsImagePlayground
    @State private var showsImagePlaygroundSheet = false

    var body: some View {
        Button("Open Generation Sheet") {
            showsImagePlaygroundSheet = true
        }
        .disabled(!supportsImagePlayground)
    }
}
```
