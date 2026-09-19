> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/imagereader/applied(to:eventhandler:)

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Reads an image URL as a `CIImage`.

## Declaration

```swift
func applied(to url: URL, eventHandler: EventHandler? = nil) throws -> CIImage
```

## Parameters

- `url`: A image URL.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

An image.
