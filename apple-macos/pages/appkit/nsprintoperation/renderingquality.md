> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation/renderingquality](https://developer.apple.com/documentation/appkit/nsprintoperation/renderingquality)

# NSPrintOperation.RenderingQuality (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

Constants that specify the print quality in use.

## Declaration

```swift
enum RenderingQuality
```

## Topics

### Constants

- [NSPrintOperation.RenderingQuality.best](renderingquality/best.md): Renders the printing at the best possible quality, regardless of speed.
- [NSPrintOperation.RenderingQuality.responsive](renderingquality/responsive.md): Sacrifices the least possible amount of rendering quality for speed to maintain a responsive user interface. This option should be used only after establishing that best quality rendering does indeed make the user interface unresponsive.

### Initializers

- [init(rawValue:)](renderingquality/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Printing Quality

- [preferredRenderingQuality](preferredrenderingquality.md): The printing quality.

# NSPrintRenderingQuality (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

Constants that specify the print quality in use.

## Declaration

```objectivec
enum NSPrintRenderingQuality : NSInteger;
```

## Topics

### Constants

- [NSPrintRenderingQualityBest](renderingquality/best.md): Renders the printing at the best possible quality, regardless of speed.
- [NSPrintRenderingQualityResponsive](renderingquality/responsive.md): Sacrifices the least possible amount of rendering quality for speed to maintain a responsive user interface. This option should be used only after establishing that best quality rendering does indeed make the user interface unresponsive.

## See Also

### Getting the Printing Quality

- [preferredRenderingQuality](preferredrenderingquality.md): The printing quality.
