> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/previewdevice(_:)](https://developer.apple.com/documentation/swiftui/view/previewdevice(_:))

# previewDevice(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Overrides the device for a preview.

> Use the device picker in the Xcode preview canvas instead.

## Declaration

```swift
nonisolated func previewDevice(_ value: PreviewDevice?) -> some View

```

## Parameters

- `value`: A device to use for preview, or `nil` to let Xcode automatically choose a device based on the run destination.

<a id="return-value"></a>

## Return Value

A preview that uses the given device.

<a id="discussion"></a>

## Discussion

By default, Xcode automatically chooses a preview device based on your currently selected run destination. If you want to choose a device that doesn’t change based on Xcode settings, provide a [PreviewDevice](../previewdevice.md) instance that you initialize with the name or model of a specific device:

```swift
struct CircleImage_Previews: PreviewProvider {
    static var previews: some View {
        CircleImage()
            .previewDevice(PreviewDevice(rawValue: "iPad Pro (11-inch)"))
    }
}
```

You can get a list of supported preview device names, like “iPhone 11”, “iPad Pro (11-inch)”, and “Apple Watch Series 5 - 44mm”, by using the `xcrun` command in the Terminal app:

```swift
% xcrun simctl list devicetypes
```

Additionally, you can use the following values for macOS platform development:

- “Mac”
- “Mac Catalyst”

## See Also

### Customizing a preview

- [PreviewDevice](../previewdevice.md): Deprecated. A simulator device that runs a preview.
- [previewLayout(\_:)](previewlayout%28__%29.md): Deprecated. Overrides the size of the container for the preview.
- [previewInterfaceOrientation(\_:)](previewinterfaceorientation%28__%29.md): Deprecated. Overrides the orientation of the preview.
- [InterfaceOrientation](../interfaceorientation.md): The orientation of the interface from the user’s perspective.
