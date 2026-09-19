> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/imagereader/read(url:)

# read(url:)

**Framework:** Create ML Components  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Reads an image URL as a `CIImage`.

## Declaration

```swift
static func read(url: URL) throws -> CIImage
```

## Parameters

- `url`: A image URL.

<a id="return-value"></a>

## Return Value

An image.
