> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmformatdescription/cleanaperture(originisattopleft:)

# cleanAperture(originIsAtTopLeft:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the clean aperture.

## Declaration

```swift
func cleanAperture(originIsAtTopLeft: Bool) -> CGRect
```

## Parameters

- `originIsAtTopLeft`: If `true`, the origin begins at the top-left corner of the rectangle instead of the bottom-left.

## See Also

### Working with Video Descriptions

- [matchesImageBuffer(\_:)](matchesimagebuffer%28__%29.md): Returns a Boolean value that indicates whether the format description matches an image buffer.
- [presentationDimensions(usePixelAspectRatio:useCleanAperture:)](presentationdimensions%28usepixelaspectratio_usecleanaperture_%29.md): Returns the dimensions to take the pixel aspect ratio or clean aperture into account.
