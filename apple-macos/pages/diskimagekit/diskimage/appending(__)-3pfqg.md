> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/diskimage/appending(_:)-3pfqg](https://developer.apple.com/documentation/diskimagekit/diskimage/appending(_:)-3pfqg)

# appending(\_:)

**Framework:** DiskImageKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Appends a new layer to this disk image, creating or extending a stack

## Declaration

```swift
consuming func appending(_ configuration: any DiskImage.CreationConfiguration & DiskImage.StackableLayer) throws -> any StackedImage
```

## Parameters

- `configuration`: The configuration to use to create the new layer.

<a id="return-value"></a>

## Return Value

A [StackedImage](../stackedimage.md) containing all layers.

<a id="discussion"></a>

## Discussion

> **Note**

> The framework allows only one cache layer per stacked disk image.

This method creates a stacked disk image by creating and appending a new layer to either a base image or an existing stacked image. When the image is already a stacked image, the framework adds the new layer on top of the existing stack.

> **Throws**

> [IncompatibleStackingError](../incompatiblestackingerror.md) if the appended layer isn’t compatible with the stack. [InvalidBlockCountError](../invalidblockcounterror.md) if the block count is zero or negative. `POSIXError` if the new layer cannot be created.
