> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/previewtrait](https://developer.apple.com/documentation/developertoolssupport/previewtrait)

# PreviewTrait

**Framework:** DeveloperToolsSupport  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Customizations that you can apply to a preview.

## Declaration

```swift
@MainActor struct PreviewTrait<T>
```

## Topics

### Getting a layout

- [defaultLayout](previewtrait/defaultlayout.md): Conforms when `T` is `Preview.ViewTraits`. Center the preview in a container the size of the device on which the preview is running.
- [fixedLayout(width:height:)](previewtrait/fixedlayout%28width_height_%29.md): Conforms when `T` is `Preview.ViewTraits`. Center the preview in a fixed size container with the given dimensions.
- [fixedLayout(width:height:depth:)](previewtrait/fixedlayout%28width_height_depth_%29.md): Conforms when `T` is `Preview.ViewTraits`. Centers the preview in a fixed-size, 3D container.
- [sizeThatFitsLayout](previewtrait/sizethatfitslayout.md): Conforms when `T` is `Preview.ViewTraits`. Fit the container to the size of the preview when offered the size of the device that the preview is running on.

### Getting an orientation

- [portrait](previewtrait/portrait.md): Conforms when `T` is `Preview.ViewTraits`. The device is in portrait mode, with the top of the device on top.
- [portraitUpsideDown](previewtrait/portraitupsidedown.md): Conforms when `T` is `Preview.ViewTraits`. The device is in portrait mode, but is upside down.
- [landscapeLeft](previewtrait/landscapeleft.md): Conforms when `T` is `Preview.ViewTraits`. The device is in landscape mode, with the top of the device on the left.
- [landscapeRight](previewtrait/landscaperight.md): Conforms when `T` is `Preview.ViewTraits`. The device is in landscape mode, with the top of the device on the right.

### Initializers

- [init(\_:)](previewtrait/init%28__%29.md): Convenience to compose multiple traits into a single trait.

### Type Properties

- [assistiveAccess](previewtrait/assistiveaccess.md): Conforms when `T` is `Preview.ViewTraits`. Apply the visual style used in Assistive Access on iOS and iPadOS. On other platforms, this is a no-op.

### Type Methods

- [modifier(\_:)](previewtrait/modifier%28__%29.md): Conforms when `T` is `Preview.ViewTraits`. Attach a `PreviewModifier` to the preview.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Preview definition

- [Preview](preview.md): A base type that preview macros use to create previews.
- [PreviewLayout](previewlayout.md): A size constraint for a preview.
- [PreviewRegistry](previewregistry.md): A protocol that the system uses to locate previews at runtime.
