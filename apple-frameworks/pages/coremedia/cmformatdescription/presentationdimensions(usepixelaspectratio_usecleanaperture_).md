> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmformatdescription/presentationdimensions(usepixelaspectratio:usecleanaperture:)](https://developer.apple.com/documentation/coremedia/cmformatdescription/presentationdimensions(usepixelaspectratio:usecleanaperture:))

# presentationDimensions(usePixelAspectRatio:useCleanAperture:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the dimensions to take the pixel aspect ratio or clean aperture into account.

## Declaration

```swift
func presentationDimensions(usePixelAspectRatio: Bool = true, useCleanAperture: Bool = true) -> CGSize
```

## Parameters

- `usePixelAspectRatio`: If `true`, the function computes the dimensions maintaining the pixel aspect ratio.
- `useCleanAperture`: If `true`, the function computes the dimensions using the clean aperture.

## See Also

### Working with Video Descriptions

- [cleanAperture(originIsAtTopLeft:)](cleanaperture%28originisattopleft_%29.md): Returns the clean aperture.
- [matchesImageBuffer(\_:)](matchesimagebuffer%28__%29.md): Returns a Boolean value that indicates whether the format description matches an image buffer.
