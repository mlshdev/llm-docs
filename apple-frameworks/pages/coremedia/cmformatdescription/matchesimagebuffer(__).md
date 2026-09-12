> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmformatdescription/matchesimagebuffer(_:)](https://developer.apple.com/documentation/coremedia/cmformatdescription/matchesimagebuffer(_:))

# matchesImageBuffer(\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether the format description matches an image buffer.

## Declaration

```swift
func matchesImageBuffer(_ imageBuffer: CVImageBuffer) -> Bool
```

## Parameters

- `imageBuffer`: The image buffer to validate against.

## See Also

### Working with Video Descriptions

- [cleanAperture(originIsAtTopLeft:)](cleanaperture%28originisattopleft_%29.md): Returns the clean aperture.
- [presentationDimensions(usePixelAspectRatio:useCleanAperture:)](presentationdimensions%28usepixelaspectratio_usecleanaperture_%29.md): Returns the dimensions to take the pixel aspect ratio or clean aperture into account.
