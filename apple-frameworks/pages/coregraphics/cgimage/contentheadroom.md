> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgimage/contentheadroom](https://developer.apple.com/documentation/coregraphics/cgimage/contentheadroom)

# contentHeadroom (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
var contentHeadroom: Float { get }
```

## See Also

### Adopting high dynamic range (HDR)

- [Enhancing high dynamic range image rendering](../adopting-advancements-in-hdr-image-rendering.md): Improve your app’s High Dynamic Range (HDR) image support with metadata.
- [calculatedContentHeadroom](calculatedcontentheadroom.md)
- [contentAverageLightLevel](contentaveragelightlevel.md)
- [calculatedContentAverageLightLevel](calculatedcontentaveragelightlevel.md)
- [copy(contentAverageLightLevel:)](copy%28contentaveragelightlevel_%29.md)
- [copyWithCalculatedHDRStats()](copywithcalculatedhdrstats%28%29.md)

# CGImageGetContentHeadroom (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
extern float CGImageGetContentHeadroom(CGImageRef image);
```

## See Also

### Adopting high dynamic range (HDR)

- [Enhancing high dynamic range image rendering](../adopting-advancements-in-hdr-image-rendering.md): Improve your app’s High Dynamic Range (HDR) image support with metadata.
- [CGImageCalculateContentHeadroom](calculatedcontentheadroom.md)
- [CGImageGetContentAverageLightLevel](contentaveragelightlevel.md)
- [CGImageCalculateContentAverageLightLevel](calculatedcontentaveragelightlevel.md)
- [CGImageCreateCopyWithContentAverageLightLevel](copy%28contentaveragelightlevel_%29.md)
- [CGImageCreateCopyWithCalculatedHDRStats](copywithcalculatedhdrstats%28%29.md)
