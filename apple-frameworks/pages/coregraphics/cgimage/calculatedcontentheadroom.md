> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgimage/calculatedcontentheadroom](https://developer.apple.com/documentation/coregraphics/cgimage/calculatedcontentheadroom)

# calculatedContentHeadroom (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
var calculatedContentHeadroom: Float { get }
```

## See Also

### Adopting high dynamic range (HDR)

- [Enhancing high dynamic range image rendering](../adopting-advancements-in-hdr-image-rendering.md): Improve your app’s High Dynamic Range (HDR) image support with metadata.
- [contentHeadroom](contentheadroom.md)
- [contentAverageLightLevel](contentaveragelightlevel.md)
- [calculatedContentAverageLightLevel](calculatedcontentaveragelightlevel.md)
- [copy(contentAverageLightLevel:)](copy%28contentaveragelightlevel_%29.md)
- [copyWithCalculatedHDRStats()](copywithcalculatedhdrstats%28%29.md)

# CGImageCalculateContentHeadroom (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
extern float CGImageCalculateContentHeadroom(CGImageRef image);
```

## See Also

### Adopting high dynamic range (HDR)

- [Enhancing high dynamic range image rendering](../adopting-advancements-in-hdr-image-rendering.md): Improve your app’s High Dynamic Range (HDR) image support with metadata.
- [CGImageGetContentHeadroom](contentheadroom.md)
- [CGImageGetContentAverageLightLevel](contentaveragelightlevel.md)
- [CGImageCalculateContentAverageLightLevel](calculatedcontentaveragelightlevel.md)
- [CGImageCreateCopyWithContentAverageLightLevel](copy%28contentaveragelightlevel_%29.md)
- [CGImageCreateCopyWithCalculatedHDRStats](copywithcalculatedhdrstats%28%29.md)
