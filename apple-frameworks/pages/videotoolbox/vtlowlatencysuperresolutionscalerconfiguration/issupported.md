> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtlowlatencysuperresolutionscalerconfiguration/issupported](https://developer.apple.com/documentation/videotoolbox/vtlowlatencysuperresolutionscalerconfiguration/issupported)

# isSupported (Swift)

**Framework:** Video Toolbox  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Reports whether the system supports this processor on the current configuration.

## Declaration

```swift
class var isSupported: Bool { get }
```

## See Also

### Determining processor availability

- [supportedScaleFactors(frameWidth:frameHeight:)](supportedscalefactors%28framewidth_frameheight_%29.md)

# supported (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Reports whether the system supports this processor on the current configuration.

## Declaration

```objectivec
@property (class, nonatomic, readonly, getter=isSupported) BOOL supported;
```

## See Also

### Determining processor availability

- [maximumDimensions](maximumdimensions.md): Maximum dimensions for a source frame for the processor.
- [minimumDimensions](minimumdimensions.md): Minimum dimensions for a source frame for the processor.
