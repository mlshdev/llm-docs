> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/imagerotator/applied(to:eventhandler:)

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Rotates the image and then scales and crops the rotated image to fit the extent of the input image.

## Declaration

```swift
func applied(to image: CIImage, eventHandler: EventHandler? = nil) -> CIImage
```

## Parameters

- `image`: An image.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The rotated image.
