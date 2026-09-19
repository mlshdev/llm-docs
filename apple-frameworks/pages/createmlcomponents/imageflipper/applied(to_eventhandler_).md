> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/imageflipper/applied(to:eventhandler:)

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Performs the image flipper operation on the input image.

## Declaration

```swift
func applied(to image: CIImage, eventHandler: EventHandler? = nil) -> CIImage
```

## Parameters

- `image`: An image.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The flipped image.
