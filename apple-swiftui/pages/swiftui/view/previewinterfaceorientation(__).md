> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/previewinterfaceorientation(_:)](https://developer.apple.com/documentation/swiftui/view/previewinterfaceorientation(_:))

# previewInterfaceOrientation(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 27.0) · iPadOS 15.0+ (deprecated in 27.0) · Mac Catalyst 15.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · tvOS 15.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 8.0+ (deprecated in 27.0)

Overrides the orientation of the preview.

> Use [Preview(\_:traits:\_:body:)](../preview%28__traits___body_%29.md) with [landscapeLeft](https://developer.apple.com/documentation/developertoolssupport/previewtrait/landscapeleft) or other orientation traits instead.

## Declaration

```swift
nonisolated func previewInterfaceOrientation(_ value: InterfaceOrientation) -> some View

```

## Parameters

- `value`: An orientation to use for preview.

<a id="return-value"></a>

## Return Value

A preview that uses the given orientation.

<a id="discussion"></a>

## Discussion

By default, device previews appear right side up, using orientation [portrait](../interfaceorientation/portrait.md). You can change the orientation of a preview using one of the values in the [InterfaceOrientation](../interfaceorientation.md) structure:

```swift
struct CircleImage_Previews: PreviewProvider {
    static var previews: some View {
        CircleImage()
            .previewInterfaceOrientation(.landscapeRight)
    }
}
```

## See Also

### Customizing a preview

- [previewDevice(\_:)](previewdevice%28__%29.md): Deprecated. Overrides the device for a preview.
- [PreviewDevice](../previewdevice.md): Deprecated. A simulator device that runs a preview.
- [previewLayout(\_:)](previewlayout%28__%29.md): Deprecated. Overrides the size of the container for the preview.
- [InterfaceOrientation](../interfaceorientation.md): The orientation of the interface from the user’s perspective.
