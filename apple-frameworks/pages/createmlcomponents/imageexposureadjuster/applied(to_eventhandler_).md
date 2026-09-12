> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/imageexposureadjuster/applied(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/imageexposureadjuster/applied(to:eventhandler:))

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Adjusts the exposure of the input image.

## Declaration

```swift
func applied(to image: CIImage, eventHandler: EventHandler? = nil) -> CIImage
```

## Parameters

- `image`: An image.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

An image with adjusted exposure.
