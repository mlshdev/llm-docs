> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/imagefeatureprint/applied(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/imagefeatureprint/applied(to:eventhandler:))

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Extracts image features from an image.

## Declaration

```swift
func applied(to image: CIImage, eventHandler: EventHandler? = nil) async throws -> MLShapedArray<Float>
```

## Parameters

- `image`: An image.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

A shaped array containing the extracted features of the image.
