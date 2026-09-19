> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/randomimagecropper/applied(to:generator:eventhandler:)

# applied(to:generator:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Randomly crops an image at a random location of a given size.

## Declaration

```swift
func applied(to image: CIImage, generator: inout some RandomNumberGenerator, eventHandler: EventHandler? = nil) async throws -> CIImage
```

## Parameters

- `image`: The input image.
- `generator`: A random number generator.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The cropped image.
