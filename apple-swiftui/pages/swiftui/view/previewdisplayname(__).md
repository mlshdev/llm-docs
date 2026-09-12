> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/previewdisplayname(_:)](https://developer.apple.com/documentation/swiftui/view/previewdisplayname(_:))

# previewDisplayName(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Sets a user visible name to show in the canvas for a preview.

> Use [Preview(\_:body:)](../preview%28__body_%29.md) instead.

## Declaration

```swift
nonisolated func previewDisplayName(_ value: String?) -> some View

```

## Parameters

- `value`: A name for the preview.

<a id="return-value"></a>

## Return Value

A preview that uses the given name.

<a id="discussion"></a>

## Discussion

Apply this modifier to a view inside your [PreviewProvider](../previewprovider.md) implementation to associate a display name with that view’s preview:

```swift
struct CircleImage_Previews: PreviewProvider {
    static var previews: some View {
        CircleImage()
            .previewDisplayName("Circle")
    }
}
```

![A screenshot of the Xcode preview canvas cropped to just the top of a](https://developer.apple.com/images/com.apple.SwiftUI/View-previewDisplayName-1@2x.png)

Add a name when you have multiple previews together in the canvas that you need to tell apart. The default value is `nil`, in which case Xcode displays a default string.

## See Also

### Defining a preview

- [PreviewProvider](../previewprovider.md): Deprecated. A type that produces view previews in Xcode.
- [PreviewPlatform](../previewplatform.md): Deprecated. Platforms that can run the preview.
