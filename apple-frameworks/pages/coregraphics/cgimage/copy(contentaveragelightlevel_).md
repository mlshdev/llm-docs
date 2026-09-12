> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgimage/copy(contentaveragelightlevel:)](https://developer.apple.com/documentation/coregraphics/cgimage/copy(contentaveragelightlevel:))

# copy(contentAverageLightLevel:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
func copy(contentAverageLightLevel avll: Float) -> CGImage?
```

## See Also

### Adopting high dynamic range (HDR)

- [Enhancing high dynamic range image rendering](../adopting-advancements-in-hdr-image-rendering.md): Improve your app’s High Dynamic Range (HDR) image support with metadata.
- [contentHeadroom](contentheadroom.md)
- [calculatedContentHeadroom](calculatedcontentheadroom.md)
- [contentAverageLightLevel](contentaveragelightlevel.md)
- [calculatedContentAverageLightLevel](calculatedcontentaveragelightlevel.md)
- [copyWithCalculatedHDRStats()](copywithcalculatedhdrstats%28%29.md)

# CGImageCreateCopyWithContentAverageLightLevel (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
extern CGImageRefCGImageCreateCopyWithContentAverageLightLevel(CGImageRef image, float avll);
```

## See Also

### Adopting high dynamic range (HDR)

- [Enhancing high dynamic range image rendering](../adopting-advancements-in-hdr-image-rendering.md): Improve your app’s High Dynamic Range (HDR) image support with metadata.
- [CGImageGetContentHeadroom](contentheadroom.md)
- [CGImageCalculateContentHeadroom](calculatedcontentheadroom.md)
- [CGImageGetContentAverageLightLevel](contentaveragelightlevel.md)
- [CGImageCalculateContentAverageLightLevel](calculatedcontentaveragelightlevel.md)
- [CGImageCreateCopyWithCalculatedHDRStats](copywithcalculatedhdrstats%28%29.md)
