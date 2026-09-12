> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/imageblur/applied(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/imageblur/applied(to:eventhandler:))

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Blurs an image using a disc-shaped convolution kernel.

## Declaration

```swift
func applied(to image: CIImage, eventHandler: EventHandler? = nil) -> CIImage
```

## Parameters

- `image`: An image.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The blurry image.
