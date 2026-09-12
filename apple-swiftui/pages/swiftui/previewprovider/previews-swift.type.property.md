> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/previewprovider/previews-swift.type.property](https://developer.apple.com/documentation/swiftui/previewprovider/previews-swift.type.property)

# previews

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

A collection of views to preview.

## Declaration

```swift
@ContentBuilder @MainActor @preconcurrency static var previews: Self.Previews { get }
```

<a id="discussion"></a>

## Discussion

Implement a computed `previews` property to indicate the content to preview. Xcode generates a preview for each view that you list. You can apply [View](../view.md) modifiers to the views, like you do when creating a custom view. For a preview, you can also use various preview-specific modifiers that customize the preview. For example, you can choose a specific device for the preview by adding the [previewDevice(\_:)](../view/previewdevice%28__%29.md) modifier:

```swift
struct CircleImage_Previews: PreviewProvider {
    static var previews: some View {
        CircleImage()
            .previewDevice(PreviewDevice(rawValue: "iPad Pro (11-inch)"))
    }
}
```

For the full list of preview-specific modifiers, see [Previews in Xcode](../previews-in-xcode.md).

## See Also

### Creating a preview

- [Previews](previews-swift.associatedtype.md): Deprecated. The type to preview.
