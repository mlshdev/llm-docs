> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/previewlayout(_:)](https://developer.apple.com/documentation/swiftui/view/previewlayout(_:))

# previewLayout(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Overrides the size of the container for the preview.

> Use [Preview(\_:traits:\_:body:)](../preview%28__traits___body_%29.md) with [sizeThatFitsLayout](https://developer.apple.com/documentation/developertoolssupport/previewtrait/sizethatfitslayout) or  [fixedLayout(width:height:)](https://developer.apple.com/documentation/developertoolssupport/previewtrait/fixedlayout%28width:height:%29) instead.

## Declaration

```swift
nonisolated func previewLayout(_ value: PreviewLayout) -> some View

```

## Parameters

- `value`: A layout to use for preview.

<a id="return-value"></a>

## Return Value

A preview that uses the given layout.

<a id="discussion"></a>

## Discussion

By default, previews use the `PreviewLayout/device` layout, which places the view inside a visual representation of the chosen device. You can instead tell a preview to use a different layout by choosing one of the `PreviewLayout` values, like `PreviewLayout/sizeThatFits`:

```swift
struct CircleImage_Previews: PreviewProvider {
    static var previews: some View {
        CircleImage()
            .previewLayout(.sizeThatFits)
    }
}
```

## See Also

### Customizing a preview

- [previewDevice(\_:)](previewdevice%28__%29.md): Deprecated. Overrides the device for a preview.
- [PreviewDevice](../previewdevice.md): Deprecated. A simulator device that runs a preview.
- [previewInterfaceOrientation(\_:)](previewinterfaceorientation%28__%29.md): Deprecated. Overrides the orientation of the preview.
- [InterfaceOrientation](../interfaceorientation.md): The orientation of the interface from the user’s perspective.
