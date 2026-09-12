> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgimage/calculatedcontentaveragelightlevel](https://developer.apple.com/documentation/coregraphics/cgimage/calculatedcontentaveragelightlevel)

# calculatedContentAverageLightLevel (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
var calculatedContentAverageLightLevel: Float { get }
```

## See Also

### Adopting high dynamic range (HDR)

- [Enhancing high dynamic range image rendering](../adopting-advancements-in-hdr-image-rendering.md): Improve your app’s High Dynamic Range (HDR) image support with metadata.
- [contentHeadroom](contentheadroom.md)
- [calculatedContentHeadroom](calculatedcontentheadroom.md)
- [contentAverageLightLevel](contentaveragelightlevel.md)
- [copy(contentAverageLightLevel:)](copy%28contentaveragelightlevel_%29.md)
- [copyWithCalculatedHDRStats()](copywithcalculatedhdrstats%28%29.md)

# CGImageCalculateContentAverageLightLevel (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
extern float CGImageCalculateContentAverageLightLevel(CGImageRef image);
```

## See Also

### Adopting high dynamic range (HDR)

- [Enhancing high dynamic range image rendering](../adopting-advancements-in-hdr-image-rendering.md): Improve your app’s High Dynamic Range (HDR) image support with metadata.
- [CGImageGetContentHeadroom](contentheadroom.md)
- [CGImageCalculateContentHeadroom](calculatedcontentheadroom.md)
- [CGImageGetContentAverageLightLevel](contentaveragelightlevel.md)
- [CGImageCreateCopyWithContentAverageLightLevel](copy%28contentaveragelightlevel_%29.md)
- [CGImageCreateCopyWithCalculatedHDRStats](copywithcalculatedhdrstats%28%29.md)
